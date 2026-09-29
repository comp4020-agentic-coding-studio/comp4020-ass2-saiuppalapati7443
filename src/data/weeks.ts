// The single source of truth for SLOP2618's twelve-week structure.
//
// The table in CLAUDE.md mirrors this file for a human reading the harness;
// if the two ever disagree, this file wins. The syllabus is a list of
// objects: each week follows one object through one stage of the
// lost-property pipeline, in pipeline order, from the hand that dropped it to
// the auction that ends it. The same week adds one piece to the Office (see
// CLAUDE.md), and the office permanently gains an artifact that stays
// visible on the site as evidence the semester happened.
export interface CourseWeek {
  /** Teaching week number, 1-12. */
  week: number;
  /** The lost object this week's shift is built around. */
  object: string;
  /** The pipeline stage this week works through. */
  stage: string;
  /** The driving question the week's interaction answers by doing, not reading. */
  question: string;
  /** The permanent piece the Office (and the site) gains this week. */
  officeGains: string;
  /** Collection key under src/content/lectures. */
  lectureSlug: string;
  /** Collection key under src/content/sessions (the weekly counter shift). */
  shiftSlug: string;
}

export const weeks: CourseWeek[] = [
  {
    week: 1,
    object: "Umbrella",
    stage: "Losing",
    question: "Where, exactly, do things leave us?",
    officeGains: "Deposits: every student hands in one object",
    lectureSlug: "week-01",
    shiftSlug: "01-umbrella",
  },
  {
    week: 2,
    object: "Single glove",
    stage: "Handing in",
    question: "Why does a stranger bother?",
    officeGains: "A hand-in point and its rules",
    lectureSlug: "week-02",
    shiftSlug: "02-single-glove",
  },
  {
    week: 3,
    object: "Keys",
    stage: "Describing",
    question: "Can you write an object down so a stranger knows it?",
    officeGains: "The intake form",
    lectureSlug: "week-03",
    shiftSlug: "03-keys",
  },
  {
    week: 4,
    object: "Phone",
    stage: "Locating",
    question: "What happens when the object knows where it is?",
    officeGains: "A tracking policy",
    lectureSlug: "week-04",
    shiftSlug: "04-phone",
  },
  {
    week: 5,
    object: "Suitcase",
    stage: "Storing",
    question: "What does it take to keep ten thousand things findable?",
    officeGains: "Shelving and a retrieval-time test",
    lectureSlug: "week-05",
    shiftSlug: "05-suitcase",
  },
  {
    week: 6,
    object: "Wallet",
    stage: "Proving",
    question: "How do you prove something is yours?",
    officeGains: "The claim protocol",
    lectureSlug: "week-06",
    shiftSlug: "06-wallet",
  },
  {
    week: 7,
    object: "Teddy bear",
    stage: "Valuing",
    question: "Who decides what is worth keeping?",
    officeGains: "Triage rules",
    lectureSlug: "week-07",
    shiftSlug: "07-teddy-bear",
  },
  {
    week: 8,
    object: "Wedding ring",
    stage: "Entitlement",
    question: "Who owns a thing whose owner cannot be found?",
    officeGains: "The Office's terms and conditions",
    lectureSlug: "week-08",
    shiftSlug: "08-wedding-ring",
  },
  {
    week: 9,
    object: "Dentures",
    stage: "Unclaimed",
    question: "Why do people not come back for their things?",
    officeGains: "An audit of what nobody has claimed",
    lectureSlug: "week-09",
    shiftSlug: "09-dentures",
  },
  {
    week: 10,
    object: "Bicycle",
    stage: "Disposal",
    question: "When does lost become gone?",
    officeGains: "A disposal policy",
    lectureSlug: "week-10",
    shiftSlug: "10-bicycle",
  },
  {
    week: 11,
    object: "Dog",
    stage: "Reuniting",
    question: "What if the lost thing is looking for you too?",
    officeGains: "Matching with another tutorial's Office",
    lectureSlug: "week-11",
    shiftSlug: "11-dog",
  },
  {
    week: 12,
    object: "The box",
    stage: "The system",
    question: "Would your Office give you your own thing back?",
    officeGains: "Reclaim Day",
    lectureSlug: "week-12",
    shiftSlug: "12-the-box",
  },
];
