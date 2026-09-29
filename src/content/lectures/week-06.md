---
title: "Wallet: proving something is yours"
description:
  Week 6. What counts as proof of ownership, why knowledge-based
  questions fail, and the claim protocol the Office drafts this week.
week: 6
date: 2027-03-30
teachers:
  - perpetua-hale
object: Wallet
stage: Proving
explorable: claim-desk
related:
  - sessions/06-wallet
---

A wallet, unlike a suitcase, is designed to prove things: it usually holds
a card with a name on it, sometimes a photo. That makes it the easiest
object in the course to identify and, this week's lecture argues, one of
the hardest to safely hand back. Last week's shelving assumed a claimant
would eventually show up; this week's question is what happens when they
do: how do you prove something is yours?

## A name inside the wallet is not proof it is yours

Anyone holding the wallet can read the name inside it. Reciting that name
back to the Office proves you can read, not that you own the wallet. A
claim protocol that accepts "the name inside matches what you told me" is
accepting the same information the object itself already leaked to
whoever is holding it — finder or thief alike.

## Why the obvious follow-up questions fail

The obvious fix is to ask something only the real owner would know: a
recent transaction, a card's last four digits. Bonneau, Bursztein, Caron,
Jackson and Nappa studied exactly this style of knowledge-based question
in the context of online account recovery and found it fails in both
directions at once — genuine owners forget their own answers often enough
to be locked out, while an attacker with a little background information
on the target answers correctly more often than chance allows. A claim
protocol built on "prove you know something private" inherits the same
failure: it is not obvious in advance which owners it will wrongly turn
away, and which impostors it will wrongly let through.

The claim is an interview, not a lookup, and every question the Office
adds to make it harder to fool has a cost paid by a real owner who
happens to have a bad memory that day.

## Reading

Bonneau, Bursztein, Caron, Jackson & Nappa (2015), "Secrets, Lies, and
Account Recovery", WWW '15. Read it for the evidence that "ask them
something only they'd know" fails on both sides more often than it looks.

## What the Office gains

A claim protocol: the fixed set of questions and evidence the Office will
accept as proof, and the rule for what happens when a claimant fails one.
This week's counter exercise runs six claimants against whatever protocol
the class sets, before it becomes the Office's own.
