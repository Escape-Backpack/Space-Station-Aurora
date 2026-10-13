# Aurora medallion — revised v2
[STL](STL/Aurora_Medallion_OnePiece_v2.stl) ·
[Print package](Aurora_Medallion_Print_Files_v2.zip) ·
[Preview](Aurora_Medallion_v2_Preview.png).
Replaces the station-symbol front with the designer's correct STATION / AURORA maple-leaf-and-orbit patch. Ink outlines are traced from the supplied JPEG; the outer rim is exact circular CAD. This is a manufacturing adaptation, with small navy gaps widened slightly. The supplied artwork remains unchanged beside the model.
Earlier v1 files remain available. Revision requested 2026-10-05.
No AI image generation was used.

50 mm diameter; 3.8 mm body + 0.6 mm relief = 4.4 mm total.
The approved engraved back remains identical to Space/Norse/Hiking:
4.6 mm Arial Bold main capitals, 4.0 mm Arial Regular brand capitals,
0.4 mm engraving, at least 0.831 mm between adjacent brand letters.
Print **back DOWN / front UP**, millimetres at 100%.
Use 0.20 mm layers INCLUDING the first; assumed 0.4 mm nozzle / Prusa MK3S+,
with the actual printer/material profile. Supports and raft OFF.
Optional navy-to-yellow swap before layer 20 / Z = 4.00 mm; body ends 3.80 mm.
STL contains geometry only, no G-code or embedded colours.

Print the included 50 mm × 1.2 mm back trial first to check S/B/K.
Full model and trial pass closed-edge, winding, one-solid connectivity,
non-degenerate facet and volume checks. Previews are screen-reviewed.
**No actual printer-profile slice or physical print has been performed.**

Rebuild from the project root: `python source/build_medallion_v2.py`.
Sources and geometry/mesh reports are included in the ZIP.
Requires numpy, Pillow, OpenCV, matplotlib, Shapely 2.1+, fontTools and Windows Arial fonts.
