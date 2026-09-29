import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { weeks } from "../src/data/weeks";

interface ApiNode {
  id: string;
  type: string;
  related?: string[];
  meta?: Record<string, unknown>;
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

const nodesOfType = (type: string) => api.nodes.filter((node) => node.type === type);

const readDistHtml = (path: string): string =>
  readFileSync(resolve("dist", path.replace(/^\/+/, ""), "index.html"), "utf8");

const normalizeText = (html: string): string =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const dayOfWeek = (dateOnly: string): number => new Date(`${dateOnly}T00:00:00Z`).getUTCDay();
const dateOnly = (value: unknown): string => String(value).slice(0, 10);

const BANNED_WORDS = [
  "delve",
  "journey",
  "unpack",
  "in today's world",
  "tapestry",
  "navigate the complexities",
  "it's important to note",
  "key takeaways",
  "deep dive",
  "landscape",
  "leverage",
  "robust",
  "seamless",
  "game-changer",
  "unlock",
];

const NEVER_WORDS = ["violin", "love letters", "escheat"];

const DEPOSIT_SENTENCE =
  "Bring one object that is ordinary and replaceable, worth under $20, and not ID, not keys that open anything, not medication, not money, and not anything you will need before week 12.";

describe("course promises", () => {
  it("has exactly one lecture and one counter shift for each of weeks 1-12", () => {
    const lectures = nodesOfType("lectures");
    const sessions = nodesOfType("sessions");
    for (const week of weeks) {
      const lecturesForWeek = lectures.filter((node) => node.meta?.week === week.week);
      const sessionsForWeek = sessions.filter((node) => node.meta?.week === week.week);
      expect(lecturesForWeek, `week ${week.week} should have exactly one lecture`).toHaveLength(1);
      expect(sessionsForWeek, `week ${week.week} should have exactly one counter shift`).toHaveLength(
        1,
      );
    }
  });

  it("teaches lectures on Tuesdays and counter shifts on Thursdays, with nothing dated across the break", () => {
    const dated = [...nodesOfType("lectures"), ...nodesOfType("sessions")];
    for (const node of dated) {
      const date = dateOnly(node.meta?.date);
      const expectedDay = node.type === "lectures" ? 2 : 4;
      expect(dayOfWeek(date), `${node.id} (${date}) is not on the right day`).toBe(expectedDay);
      expect(
        date >= "2027-04-05" && date <= "2027-04-16",
        `${node.id} (${date}) falls inside the mid-semester break`,
      ).toBe(false);
    }
  });

  it("matches each lecture's object and stage to weeks.ts, and relates it to its own counter shift", () => {
    for (const week of weeks) {
      const lecture = nodesOfType("lectures").find((node) => node.meta?.week === week.week);
      expect(lecture, `no lecture found for week ${week.week}`).toBeDefined();
      expect(lecture?.meta?.object).toBe(week.object);
      expect(lecture?.meta?.stage).toBe(week.stage);
      expect(lecture?.related ?? []).toContain(`sessions/${week.shiftSlug}`);
    }
  });

  it("sums assessment weights to exactly 100", () => {
    const assessments = nodesOfType("assessments");
    const total = assessments.reduce((sum, node) => sum + Number(node.meta?.weight ?? 0), 0);
    expect(total).toBe(100);
  });

  it("states the deposit rules identically on the home page, week 1 and policies", () => {
    const home = normalizeText(readDistHtml("/"));
    const week1 = normalizeText(readDistHtml("/lectures/week-01/"));
    const policies = normalizeText(readDistHtml("/policies/"));
    expect(home, "home page is missing the deposit sentence").toContain(DEPOSIT_SENTENCE);
    expect(week1, "week 1 lecture is missing the deposit sentence").toContain(DEPOSIT_SENTENCE);
    expect(policies, "policies page is missing the deposit sentence").toContain(DEPOSIT_SENTENCE);
  });

  it("never uses a banned word from CLAUDE.md's voice section", () => {
    const pages = [
      "/",
      "/lectures/",
      "/sessions/",
      "/assessments/",
      "/people/",
      "/policies/",
      ...weeks.map((week) => `/lectures/${week.lectureSlug}/`),
      ...weeks.map((week) => `/sessions/${week.shiftSlug}/`),
    ];
    for (const path of pages) {
      const text = normalizeText(readDistHtml(path)).toLowerCase();
      for (const word of BANNED_WORDS) {
        expect(text, `${path} uses the banned word "${word}"`).not.toContain(word.toLowerCase());
      }
    }
  });

  it("has at least one lecture with slides, and the deck page it points to exists", () => {
    const withSlides = nodesOfType("lectures").filter((node) => typeof node.meta?.slides === "string");
    expect(withSlides.length).toBeGreaterThan(0);
    for (const lecture of withSlides) {
      const slidesPath = lecture.meta?.slides as string;
      expect(() => readDistHtml(slidesPath)).not.toThrow();
    }
  });

  it("never mentions the words this course specifically has no business using", () => {
    const pages = [
      "/",
      "/lectures/",
      "/sessions/",
      "/assessments/",
      "/people/",
      "/policies/",
      ...weeks.map((week) => `/lectures/${week.lectureSlug}/`),
      ...weeks.map((week) => `/sessions/${week.shiftSlug}/`),
    ];
    for (const path of pages) {
      const text = normalizeText(readDistHtml(path)).toLowerCase();
      for (const word of NEVER_WORDS) {
        expect(text, `${path} mentions "${word}"`).not.toContain(word.toLowerCase());
      }
    }
  });
});
