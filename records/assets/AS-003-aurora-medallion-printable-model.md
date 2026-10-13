---
id: AS-003
title: Aurora medallion printable model
type: asset
status: built
kind: print
for: PP-023
tool: Python vector CAD (Shapely, matplotlib, numpy)
file: assets/medallion/STL/Aurora_Medallion_OnePiece_v1.stl
links: [AS-002]
superseded_by: AS-006
tags: []
---
## Printable model
Built on 2026-10-05 following the designer's motif selection in PP-023.
This is a built digital asset, not a confirmed physical print.
The existing identity SVG informed a manufacturing adaptation, with widened
details and a matching navy/yellow relief. Its unchanged reference is preserved
at `assets/medallion/sources/Identity_Reference.svg`.
No AI raster generation was used.

50 mm diameter; 3.8 mm body + 0.6 mm raised relief = 4.4 mm.
Back engraving: 0.4 mm. ADVENTURE / COMPLETE use 4.6 mm Arial Bold capitals;
ESCAPE BACKPACK uses 4.0 mm Arial Regular capitals. Minimum adjacent brand-letter
gap: 0.831 mm; minimum text-to-border gap: 1.321 mm.
The back SVG is byte-identical to the approved Space back.

## Files and rebuilding
- Package: `assets/medallion/Aurora_Medallion_Print_Files_v1.zip`.
- Back trial: `assets/medallion/STL/Aurora_Back_Lettering_Test_1.2mm_v1.stl`.
- Print instructions: `assets/medallion/README_v1.md`.
- Profiles: `assets/medallion/Front_Relief_v1.svg` and `Back_Engraving_v1.svg`.
- Builder: `python source/build_medallion_v1.py` from this project root.
- Saved front source: `source/themed_medallion_fronts_v1.py`.
- Shared geometry snapshot: `assets/medallion/medallion_cad.py`.

## Validation evidence
Full STL and thin trial pass closed-edge, consistent-winding, one-solid
connectivity, non-degenerate-facet and positive-volume checks. Exported volume
agrees with the analytic polygon layers. The exact profile preview is reviewed
on screen; geometry and mesh reports are saved in the model directory.
The package includes sources and passes ZIP integrity checks.

No actual printer-profile slice or physical print has been performed. Use the
full-size thin back trial first to inspect S/B/K. Print back DOWN / front UP,
0.20 mm layers including the first, with the actual printer and material profile.
The shared-kit assumption is a Prusa i3 MK3S+ with a 0.4 mm nozzle. Optional
navy-to-yellow swap: before layer 20 / Z = 4.00 mm. Larger lettering is not
recorded as a proven fix for the earlier unconfirmed printing issue.
