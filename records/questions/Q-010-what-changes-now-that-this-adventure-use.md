---
id: Q-010
title: What changes now that this adventure uses envelopes instead of locks?
type: question
# open | answered | parked
status: open
# Records this question is about, e.g. [PZ-003]
about: [PZ-001, PZ-002, PZ-003, PZ-005, PZ-007, PZ-008, PZ-009, PP-006, PP-013, PP-016, PP-018]
# Leave empty while open
answer:
# Any related record IDs, e.g. [PZ-002, Q-004]
links: []
# Set to an ID when this record is replaced. It then moves to the Parked tab.
superseded_by:
tags: []
---

On 2026-10-12 the designer moved every adventure from locks in a backpack to marked envelopes in a board-game box, with one lookup cipher per adventure. The migration only moved fields: found_in became envelope (same values), and lock/container values went into each record's "Lock-version notes" section. These points still describe the lock version and need a decision:

- **Answers that can't become an envelope code** (4-5 characters the cipher can encode):
  - PZ-001 ORBIT and PZ-008 C742 use letters; the shapes cipher has digits only.
  - PZ-002 L12 is 3 characters.
  - PZ-003, PZ-005, PZ-007 and PZ-009 hold full written solutions (switch settings, payment references), not codes.
  - PZ-004 2912 and PZ-006 8536 already fit.
- **Containers**: props were packed in the Outer START sleeve, Main backpack, Utility pouch U, Pouch E, Console drawer B and the Service panel interior (now in each prop's Lock-version notes). Which become envelopes, and what replaces the backpack itself?
- **Built devices**: PP-016 (Arduino console box) and PP-018 (core service panel) are physical containers. Do they still fit in a board-game box?
- **Cipher**: backpack.json uses the kit's plain `shapes` preset (digits 0-9) and 2 decoy envelopes as a placeholder. Not chosen by the designer. Each adventure should get its own look (Space uses planets).
