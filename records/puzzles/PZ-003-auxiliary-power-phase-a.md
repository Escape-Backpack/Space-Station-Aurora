---
id: PZ-003
title: Auxiliary power, Phase A
type: puzzle
status: candidate
beat: ST-003
props: [PP-012, PP-016]
needs: [PZ-001]
mechanic: logic
difficulty: 2
lock:
answer: SW1 ON, SW2 OFF, 80/20/60
hint_title: The console
publish_hints: no
test_status: untested
test_method:
links: [Q-003]
superseded_by:
tags: []
---

## How it works
The Arduino console box has SW1 AUXILIARY, SW2 MAIN BUS and dials RESERVE, STANDBY, COOLING (0-100, ticks every 20). The Phase A card says: enable AUXILIARY, isolate MAIN BUS, RESERVE = what remains from 100 after science takes 20, STANDBY = one fifth of full scale, COOLING = three loops at 20 each. Press # to test.

## Player obtains
Drawer A opens and shows "Auxiliary bus stable. Report P806 to HAROLD."

## Solution
SW1 ON, SW2 OFF, dials 80, 20, 60.

## Hints
1. Solve each dial independently.
2. Use 100-20, 100/5, and 3x20.
3. ON/OFF, 80/20/60, then #.

## Notes
Green success stays until a facilitator reset (avoid the draft's four-second re-lock). Wrong settings give amber feedback without erasing progress. Use linear potentiometers. Preserves the existing 80/20/60 configuration from `Support_Excel.xlsx`.

Source: `source/Project Management/Aurora_Completion_Proposal.md` (a proposal, not accepted canon).
