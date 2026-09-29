---
title: "Suitcase: keeping ten thousand things findable"
description:
  Week 5, with guest lecturer Winsome Adebayo. Mishandled baggage, tracing
  at airline scale, and why storage is a retrieval problem.
week: 5
date: 2027-03-23
teachers:
  - winsome-adebayo
object: Suitcase
stage: Storing
related:
  - sessions/05-suitcase
---

A suitcase is the first object this course has handled that does not fit
in a drawer behind the counter. Every earlier week assumed a shelf big
enough for whatever arrived; this week's question is what happens when
that assumption breaks: what does it take to keep ten thousand things
findable?

## An airline loses bags at a different scale entirely

Airlines mishandle a small fraction of a percent of the bags they carry,
and at airline volumes that fraction is still tens of thousands of bags a
day, worldwide. A ground handler tracing a mishandled bag is not looking
for one suitcase; they are running a search against a system holding
every other mishandled bag from every other flight that day, using
whatever the bag's tag and the passenger's report have in common.
WorldTracer, the industry system built for exactly this, exists because no
counter clerk could hold that many open cases in their head at once.

## Storing is a retrieval problem

The naive fix for "we have too many things" is more shelving. It does not
work: a suitcase stored perfectly and never findable again is
indistinguishable, to its owner, from a suitcase that was thrown away.
Unclaimed Baggage in Scottsboro, Alabama, exists downstream of exactly this
failure — bags that storage systems worldwide gave up on finding an owner
for, sold on once retrieval was no longer worth attempting. The problem the
Office is solving this week is not where to put the class's deposits; it
is how fast any one of them can be pulled back out again.

## Reading

SITA's annual Baggage IT Insights report, and the WorldTracer system it
reports on. Read either for a sense of the volume a real tracing system
has to operate at, next to the shelf the class is about to build.

## What the Office gains

Shelving for the class's deposits, and a retrieval-time test: how long it
takes to pull a named ledger number back off the shelf.
