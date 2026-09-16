---
title: "The Quiet Power of Small Improvements"
description: "Why the smallest, most boring changes on the production floor outperform the big-bang projects almost every time."
date: 2026-06-14
tags:
  - manufacturing
  - continuous improvement
---

<!--
  PLACEHOLDER ARTICLE
  ────────────────────────────────────────────────
  This text is a realistic example so the site has something
  to show. Replace the body with your own writing, then delete
  this comment. Keep the frontmatter above (title, description,
  date, tags) — the site uses it to build the listing pages.
-->

Every plant I have worked in has had a version of this plan: a large project,
a cross-functional team, six months of work, and one dramatic launch. A few of
them work. Most of them quietly die in week eight.

Meanwhile, the people who actually understand the process — the operators and
technicians who touch it every shift — are making a hundred small changes a
year. A fixture moved two centimeters. A check added to the first-piece
inspection. A sequence reordered so the walk is shorter. None of them is
news. Together, they are the difference between a process that holds and a
process that drifts.

## The 1% rule

If a process improves by one percent a month, it is roughly 12% better after
a year — without a single heroic effort. That number is unimpressive in a
board deck and extraordinary over a decade. Continuous improvement is not a
set of tools. It is a compounding discipline, and it has no visible launch
date, which is exactly why it works.

The trick is to keep each change small enough to be tested quickly. A change
you can make in a shift and reverse in an afternoon invites experimentation.
A change that needs a committee and a quarter of downtime invites excuses.

## Measure before you change

Every improvement that stuck in my experience followed the same loop:

1. **Measure.** You cannot improve what you will not look at. One number,
   tracked the same way every day, beats a dozen numbers tracked loosely.
2. **Hypothesize.** State the cause in one sentence. If you cannot, you do
   not have a fix yet — you have a theory.
3. **Change one thing.** One variable, one shift. The moment you change
   three things at once, you no longer know which one worked.
4. **Verify.** Wait long enough to be sure, then either keep it or revert it.
   Reverting is not failure; it is data.

## A small example

Overall Equipment Effectiveness is the number I come back to most. It is the
product of three honest questions — is the machine available, running at rate,
and producing good parts?

```python
def oee(availability: float, performance: float, quality: float) -> float:
    """Overall Equipment Effectiveness, as a percentage."""
    return round(100 * availability * performance * quality, 1)

# A line at 85% availability, 92% performance, 97% quality:
print(oee(0.85, 0.92, 0.97))  # → 75.4
```

That one number, checked daily on a whiteboard, told me more about the line in
a month than any audit did. The improvements that followed were never
dramatic. They were simply never stopped.

If you take one thing away: the floor is full of one-percent improvements
nobody has written down. Writing them down is the job.
