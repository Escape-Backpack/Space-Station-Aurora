---
id: AS-006
title: Aurora medallion printable model v2
type: asset
status: built
kind: print
for: PP-023
tool: Python vector CAD and reference tracing
file: assets/medallion/STL/Aurora_Medallion_OnePiece_v2.stl
links: [AS-005]
superseded_by:
tags: []
---
## Revision
Requested 2026-10-05. Replaces the station-symbol front with the designer-supplied STATION / AURORA maple-leaf-and-orbit patch. Lettering and orbit are traced from the supplied reference; the outside rim is rebuilt as exact circular geometry.
Supersedes AS-003; v1 files are retained. This is a built digital asset,
not a confirmed physical print. No ImageGen was used.

The approved shared back is unchanged and byte-identical to the Space back SVG.
50 mm diameter, 3.8 mm body + 0.6 mm relief = 4.4 mm; 0.4 mm back engraving.
Main words: 4.6 mm Arial Bold capitals; brand: 4.0 mm Arial Regular capitals.
Minimum adjacent brand-letter gap: 0.831 mm.

## Files
- Print ZIP: `assets/medallion/Aurora_Medallion_Print_Files_v2.zip`.
- Thin back trial: `assets/medallion/STL/Aurora_Back_Lettering_Test_1.2mm_v2.stl`.
- Print notes: `assets/medallion/README_v2.md`.
- Exact front/back SVG profiles and JSON geometry/mesh reports are in the same directory.
- Rebuild: `python source/build_medallion_v2.py`.
- Front source: `source/revised_medallion_fronts_v2.py`.
- Unchanged supplied reference: `assets/medallion/sources/Aurora_Patch_Reference_v2.jpg`.

## Validation
Full STL and thin trial pass closed-edge, winding, one-solid connectivity,
non-degenerate facets and volume checks. Polygon and mesh volumes agree.
Preview visually reviewed; ZIP integrity checked. No actual printer-profile
slice or physical printing was done. Print the thin trial first to inspect
S/B/K, back DOWN, using the actual printer/filament and full scale.
