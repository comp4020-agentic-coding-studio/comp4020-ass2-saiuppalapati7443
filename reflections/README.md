# Reflections

One short markdown file per crit, named for the crit it answers --- so the
number in the filename is the number in your repo's name: `crit-1.md` in
`comp4020-crit1-<you>`, `crit-2.md` in `comp4020-crit2-<you>`, and so on. The
final-project repo carries one per crit: `crit-8.md`, `crit-9.md` and
`crit-10.md`.

Assignment repos carry none. An assignment's written account is `PROCESS.md`,
and the retro crit that follows presents from it.

Each answers the two standing prompts:

1. What was the breakthrough that moved the work forward?

The breakthrough was a failure. In my first prompt I asked Claude Code to build the course's weekly data before my harness was in the repo, and within one prompt it had invented a complete, plausible, different curriculum and written it into CLAUDE.md as if it were decided. Every check passed. That was the moment I understood what the harness is for: the build can check that a page compiles, but it cannot check that the page belongs to the course. Once the real CLAUDE.md held the one idea, the twelve-week table and the sources, the agent's output stopped drifting, and when I later told it something that wasn't true about the files, it checked and refused to guess.


2. What did this work change about who I want to be as a software developer?

I want to be the developer who writes down the decisions before asking anyone, human or agent, to build on them. I used to treat passing checks as proof the work was right. Now I think of checks as a record of what I decided must stay true, and I know some of the most important things, like whether a page reads well or fits a phone, still need me to look. Directing an agent made me more responsible for judgement, not less.

150--300 words is plenty. `pnpm check:evidence` checks the name, because the
cutoff sweep reads that exact file --- anything else reads as no reflection at
all. These stay in the repo; they're not part of the deployed site.
