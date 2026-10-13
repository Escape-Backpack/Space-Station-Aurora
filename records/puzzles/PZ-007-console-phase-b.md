---
id: PZ-007
title: Console Phase B
type: puzzle
status: candidate
beat: ST-006
props: [PP-016, PP-017]
needs: [PZ-006]
mechanic: logic
difficulty: 2
answer: SW1 OFF, SW2 ON, 20/80/40, 8536#
hint_title: The console, second stage
publish_hints: no
test_status: untested
test_method:
links: [Q-003]
superseded_by:
tags: []
---

## How it works
HAROLD's procedure: transfer to the main bus, reverse both switches from AUXILIARY START, set every dial to 100 minus its Phase A value, enter the evacuation route code followed by #. Firmware must require Phase A already complete, and the procedure appears only after the navigation gate.

## Player obtains
Drawer B opens: a short hex tool and an inert bridge cartridge, with a tag "Open CORE SERVICE panel with this tool. Install the bridge on matching contacts X2-X3, arrow toward RESTORE. Lift its verification flap after fitting and report the acknowledgement."

## Solution
SW1 OFF, SW2 ON, dials 20, 80, 40, keypad 8536#.

## Hints
1. Use the original Phase A values.
2. Subtract each from 100 and reverse both switches.
3. OFF/ON, 20/80/40, then 8536#.

Source: `source/Project Management/Aurora_Completion_Proposal.md` (a proposal, not accepted canon).
