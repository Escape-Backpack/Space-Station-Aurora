# Aurora station medallion — one-piece v1

[One-piece STL](STL/Aurora_Medallion_OnePiece_v1.stl) ·
[Complete package](Aurora_Medallion_Print_Files_v1.zip) ·
[Preview](Aurora_Medallion_v1_Preview.png).

Selected motif, 2026-10-05: station hub, modules and solar arrays.
The existing SVG identity at `source/Brand/icon.svg` informed the front; a copy is preserved
as `sources/Identity_Reference.svg`. Small details are adapted to manufacturing
geometry, so this is not a pixel-identical logo extrusion.
Navy body with yellow front relief. No text or digits on the front.
No AI image generation was used; geometry and previews come from the saved Python sources.

## Dimensions and back
- 50 mm diameter; 3.8 mm body + 0.6 mm relief = 4.4 mm total.
- Shared back matches the approved Space layout exactly: ADVENTURE / COMPLETE
  in 4.6 mm Arial Bold capitals, ESCAPE BACKPACK in 4.0 mm Arial Regular capitals.
- Engraving: 0.4 mm deep. Minimum adjacent brand-letter gap: 0.831 mm.
  Minimum text-to-border gap: 1.321 mm.
- A matching 50 mm × 1.2 mm thin back trial is included.

## Print
Import millimetres, at 100%. **Engraved back DOWN, themed front UP.**
One connected solid, no assembly. Stock 0.4 mm nozzle / Prusa i3 MK3S+ is the
shared-kit assumption; use the actual printer and filament profile.
Use 0.20 mm layers including the first layer; supports and raft OFF.
For navy/yellow, add a manual colour change before layer 20 / Z = 4.00 mm;
body ends at Z = 3.80 mm. No pause is needed for a single colour.
The STL has geometry only, with no G-code or embedded colour assignments.

Print [the thin back trial](STL/Aurora_Back_Lettering_Test_1.2mm_v1.stl) first,
back DOWN, to inspect S/B/K. Larger lettering does not establish a successful
physical print; check first-layer spread and the shallow engraving bridges in
the slicer. Also review fine front details and tapering tips.

## Validation and sources
Full model and trial pass closed-edge, consistent-winding, one-solid connectivity,
non-degenerate-facet and positive-volume checks. Mesh volume agrees with analytic
polygon layers. Exact profile preview reviewed on screen.
**No printer-profile slice or physical print has been performed.**

Rebuild from this project root: `python source/build_medallion_v1.py`.
The package includes the self-contained builder, front geometry and shared CAD module.
Requires numpy, Pillow, OpenCV, matplotlib, Shapely 2.1+ and Windows Arial fonts.
`Front_Relief_v1.svg` and `Back_Engraving_v1.svg` are 50 mm profiles;
`geometry_report_v1.json`, `mesh_check_v1.json` and
`lettering_test_mesh_check_v1.json` record the digital checks.
