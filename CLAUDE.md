# CLAUDE.md — SLOP2618 Lost Property

This is the harness for building the SLOP2618 course site. Read it before
writing any page. The platform (Slop identity, the four collections, the build,
the API) is fixed and documented in `README.md`; do not restate or change it.
Everything below is a decision about the *course*, and each rule exists because
a page written without it would drift away from the others.

## The one idea

**Things are not lost. They are unrecorded.** Whether a lost thing comes home is
a property of the system that catches it — who hands it in, how it is written
down, where it is kept, how an owner proves it is theirs, and what happens when
nobody comes — not of how careful its owner was.

Every page argues some part of that sentence. If a paragraph could sit on a
generic "design thinking" or "information systems" course page unchanged, cut it.

## The spine: twelve objects, one pipeline

The syllabus is a list of objects. Each week follows one object through one
stage of the lost-property pipeline, in pipeline order, so the semester follows
a lost thing from the hand that dropped it to the auction that ends it. The same
week also adds one piece to **the Office** (see below).

This table mirrors `src/data/weeks.ts`. If the two disagree, the data file
wins. A lecture, counter shift or assessment that disagrees with it is wrong.

| Wk | Object       | Pipeline stage | The week's question                                     | What the Office gains                       |
| -- | ------------ | -------------- | ------------------------------------------------------- | ------------------------------------------- |
| 1  | Umbrella     | Losing         | Where, exactly, do things leave us?                     | Deposits: every student hands in one object |
| 2  | Single glove | Handing in     | Why does a stranger bother?                              | A hand-in point and its rules               |
| 3  | Keys         | Describing     | Can you write an object down so a stranger knows it?    | The intake form                             |
| 4  | Phone        | Locating       | What happens when the object knows where it is?         | A tracking policy                           |
| 5  | Suitcase     | Storing        | What does it take to keep ten thousand things findable? | Shelving and a retrieval-time test          |
| 6  | Wallet       | Proving        | How do you prove something is yours?                    | The claim protocol                          |
| 7  | Teddy bear   | Valuing        | Who decides what is worth keeping?                      | Triage rules                                |
| 8  | Wedding ring | Entitlement    | Who owns a thing whose owner cannot be found?           | The Office's terms and conditions           |
| 9  | Dentures     | Unclaimed      | Why do people not come back for their things?           | An audit of what nobody has claimed         |
| 10 | Bicycle      | Disposal       | When does lost become gone?                             | A disposal policy                           |
| 11 | Dog          | Reuniting      | What if the lost thing is looking for you too?          | Matching with another tutorial's Office     |
| 12 | The box      | The system     | Would your Office give you your own thing back?         | Reclaim Day                                 |

Rules that follow from the table:

- Every lecture's frontmatter carries `object:` and `stage:` exactly as in the
  table, and its page opens by naming the object and the week's question and
  saying in one sentence how the week moves on from the one before.
- Every counter shift does something to the Office that the previous shift did
  not. No two shifts run the same exercise. If a draft shift could be swapped
  with another week's, rewrite it.
- The object is the way into the topic, not decoration. The umbrella week is
  about transitions and attention; the umbrella is the evidence.
- Week 12 must be answerable only by someone who did weeks 1–11. Later weeks
  may refer back to earlier objects by name ("the keys problem from week 3");
  earlier weeks never assume later ones.

## The Office

The running device of the course. In week 1 each student deposits one ordinary
object with the class Office. Over the semester the class builds the Office's
hand-in point, intake form, tracking policy, shelving, claim protocol, triage
rules, terms, audit, disposal policy and cross-office matching. On Reclaim Day
(week 12) each student must get their own object back *through the Office's own
procedure* — no rummaging. The class's return rate is reported, not graded.

Deposit rules, stated identically wherever they appear (home page, week 1,
policies): the object must be ordinary, replaceable, worth under $20, and not
ID, keys that open anything, medication, money or anything you would need before
week 12. Never contradict these on any page.

## Voice

Written as a lost property clerk with a doctorate would talk: plain, exact,
dry, fond of objects, never cute. Short declaratives. Concrete nouns. The
humour comes from taking small things completely seriously, not from jokes.

- Second person for instructions ("Bring the object in a paper bag").
- Name specific things: "a navy umbrella with a broken rib," not "an item".
- Banned (a spec test enforces this): "delve", "journey", "unpack",
  "in today's world", "tapestry", "navigate the complexities",
  "it's important to note", "key takeaways", "deep dive", "landscape",
  "leverage", "robust", "seamless", "game-changer", "unlock".
- No three-adjective runs, no rhetorical-question openers, no closing
  paragraph that restates the page.
- Bullets for things a student will tick off (what to bring, what to submit).
  Prose for everything that argues.

## Facts and sources

The course cites real things only. Do not invent studies, statistics, cases,
laws or people outside the SlopU cast.

Vetted sources (use these; add others only if the human confirms they exist):

- Radvansky, Krawietz & Tamplin (2011), "Walking through doorways causes
  forgetting", *Quarterly Journal of Experimental Psychology* — week 1
- Cohn, Maréchal, Tannenbaum & Zünd (2019), "Civic honesty around the globe",
  *Science* — week 2 (the lost-wallet field experiment)
- Bowker & Star (1999), *Sorting Things Out: Classification and Its
  Consequences*, MIT Press — week 3
- The Apple/Google industry specification on detecting unwanted location
  trackers (IETF draft, 2023–24) — week 4
- SITA's annual Baggage IT Insights report; WorldTracer; Unclaimed Baggage in
  Scottsboro, Alabama — week 5
- Bonneau et al. (2015), "Secrets, Lies, and Account Recovery", WWW '15 — week 6
- Winnicott (1953), "Transitional Objects and Transitional Phenomena";
  Kopytoff (1986), "The cultural biography of things", in Appadurai (ed.),
  *The Social Life of Things* — week 7
- *Armory v Delamirie* (1722); *Bridges v Hawkesworth* (1851); *Hannah v Peel*
  [1945]; *Parker v British Airways Board* [1982] — week 8
- Lord, Wittum, Ferketich, Funk & Rajala-Schultz (2007), "Search and
  identification methods that owners use to find a lost dog", *JAVMA* — week 11
- Meadows (2008), *Thinking in Systems* — week 12

No numbers without a source. Where a figure would help but none is vetted, make
it the students' job to find or measure it ("count the umbrellas at the
library desk"). Jurisdiction-specific law (retention periods, auction rules):
tell students to look up their own, never state one as fact.

## Structure and dates

- Semester 1 2027: teaching weeks 1–6 from 22 Feb, break 5–16 Apr, weeks 7–12
  from 19 Apr. Lectures on Tuesdays, counter shifts on Thursdays.
- Dates live in frontmatter only; never type a date into body text that the
  frontmatter already holds.
- Times carry an explicit offset: `+11:00` before 4 April 2027, `+10:00` after.
- Teaching sessions are called **counter shifts** (`sessionLabels` in
  `src/site-config.ts`). The collection key stays `sessions`.
- Assessment weights sum to exactly 100. Never restate a weight or due date in
  body text; the pages render them from frontmatter.
- Link each lecture to its counter shift with `related:`; link each assessment
  to the weeks that prepare it.

## Design and interaction

Reference: Brown University's *Seeing Theory* — its principle (every section
has something you do, and the doing is the lesson), not its look. Our visual
language is a lost property office: luggage tags, claim tickets, a ledger,
shelves, inside the Slop brand tokens.

- Every interactive element teaches its week's question; if it doesn't, it
  doesn't ship.
- Content first: every page is fully readable with JavaScript off; interaction
  is progressive enhancement.
- Keyboard operable, visible focus, proper ARIA; the build runs axe and must
  stay clean.
- Respect `prefers-reduced-motion`.
- No new npm dependencies and no external scripts or CDNs; plain Astro
  components with small `<script>` blocks.
- Must work at a 390px phone width and at desktop width.
- One shared visual vocabulary (tag, ticket, ledger row, shelf); shared styles
  live in `src/styles/office.css`, using the brand CSS variables. It is
  imported by `src/layouts/PageLayout.astro` for Markdown pages, and directly
  by any `.astro` page that renders through the theme's `ContentLayout`
  (`index`, `lectures/[slug]`, `sessions/[slug]`), since those do not pass
  through `PageLayout`.

## Platform hygiene

- Internal links in `.astro` files go through `withBase`; in Markdown they are
  ordinary root links. Never hand-write `href="/..."` in `.astro`.
- Remove a `STARTER_CONTENT` marker only when its fragment has actually been
  replaced.
- Run `pnpm check` before proposing any commit. A red check is not a commit.
- Decks: one idea per slide, and check them in the browser at desktop and phone
  width — the build does not check that slides fit.

## Before accepting a page

Read it against this checklist; reject and redraft if any answer is no.

1. Does it name its object, stage and question, matching the table?
2. Does it move the Office on, and say how?
3. Could it only have been written for this course?
4. Is every fact from the vetted list or given to students to find?
5. Would a clerk say it out loud without wincing?
