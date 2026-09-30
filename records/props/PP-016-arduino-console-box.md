---
id: PP-016
title: Arduino console box
type: prop
status: candidate
form: physical
source: make
found_in: start
container: Main backpack
links: [PZ-003, PZ-007, Q-003]
superseded_by:
tags: []
---

Two-stage console: SW1 AUXILIARY, SW2 MAIN BUS, dials RESERVE, STANDBY, COOLING, keypad, and drawers A and B. Drawer A holds the P806 card; drawer B holds the tool and bridge cartridge. Firmware requires Phase A before Phase B and leaves drawers released until reset. See the proposal's section 6 and shopping list.

## Starting state
Switches and dials at zero, both drawers closed.

## Reset
Return switches and dials to zero, reload drawer contents, reset firmware.

## Replacement
Spare Arduino and potentiometers.
