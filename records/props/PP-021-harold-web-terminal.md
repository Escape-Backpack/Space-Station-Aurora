---
id: PP-021
title: HAROLD web terminal
type: prop
status: candidate
form: digital
source: make
# Where the player finds it: start (loose in the box) or the puzzle whose answer opens its envelope, e.g. PZ-004
envelope: start
links: [Q-002, Q-008]
superseded_by:
tags: []
---

Deterministic character interface (no live chatbot): objective at the top, station map, five system statuses (communications, navigation, life support, power, core AI), Inspect documents, Enter result and Hint. Must track individual completed states, enforce prerequisites, ignore repeated codes and support the final report. The current `source/Website_Harold.html` only implements ORBIT.

## Player sees
A navy and orange terminal with the five system statuses.

## Starting state
No progress.

## Reset
Clear saved progress.

## Replacement
None needed.

## Lock-version notes
Values from the lock-based version, kept when the adventure moved to envelopes:
- container: Shared device
