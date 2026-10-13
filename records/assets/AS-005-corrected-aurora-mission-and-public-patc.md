---
id: AS-005
title: Corrected Aurora mission and public patch
type: asset
status: built
kind: image
for: PP-022
tool: Approved outlined SVG; CairoSVG exports
file: source/Brand/icon.png
links: [PR-005]
superseded_by:
tags: []
---
## Selected identity — icon 01
On 2026-10-07 the designer selected icon 01 from the comparison and explicitly requested deletion of the other reviewed icons. This is the navy/white STATION / AURORA maple-leaf-and-orbit design shown in the approved banner. It is the sole public and in-world icon.

- Master: `source/Brand/icon.svg`; PNG export: `source/Brand/icon.png`.
- Banner: `source/Brand/banner.svg` and `banner.png`.
- Shared branding and original project copies are synchronized with icon 01.
- Both identified website icon assets now contain icon 01; no publication performed.
- Re-export: `python source/build_aurora_patch_v2.py` (historical filename; now exports icon 01 only).

## Cleanup
Other reviewed standalone raster/SVG icon variants were deleted, including numbered logos v2–v7, prior station icons, alternative patch exports and redundant reference-image copies in the image/patch folders. The [review result](../../assets/icon-review/review.html) now displays only the chosen icon; the deletion manifest records exact paths. Medallion CAD inputs and existing print packages remain manufacturing dependencies, not alternative identity choices.

## Validation scope
File hashes verify all current PNG copies equal the selected icon. Guide/build references use the retained master. This cleanup does not revise embedded artwork in existing Office/PDF documents or publish the websites.
