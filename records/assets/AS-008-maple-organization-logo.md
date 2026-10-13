---
id: AS-008
title: MAPLE organization logo
type: asset
# idea | candidate | decided | built | parked
status: built
# image | audio | text | print
kind: image
# The prop this asset is for (one ID)
for:
# Generator or tool used
tool: Built-in ImageGen background edit; deterministic SVG contour tracing
# Path from the project folder once made, e.g. assets/star-chart.png
file: source/Images/MAPLE_Logo_Transparent_v2.png
# Any related record IDs, e.g. [PZ-002, Q-004]
links: []
# Set to an ID when this record is replaced. It then moves to the Parked tab.
superseded_by:
tags: []
---

## Selected artwork
On 2026-10-07 the designer approved the supplied MAPLE organization logo and requested background removal plus an SVG version. The cream badge interior is retained; only the exterior background is transparent. This organization logo is distinct from the Aurora station icon (AS-005).

## Files
- Original retained: `source/Images/MAPLE_Logo.png`.
- Transparent PNG: `source/Images/MAPLE_Logo_Transparent_v2.png`.
- Real vector SVG: `source/Images/MAPLE_Logo.svg`.
- SVG raster preview: `source/Images/MAPLE_Logo_Vector_Preview.png`.
- Matching deliverables also saved in the original project's `Images/` folder.
- Builder and working masters: `assets/maple/`; exact ImageGen prompt: `assets/maple/imagegen-prompt.txt`.

## Method and checks
The PNG was edited with the built-in image tool and visually checked against the approved artwork; it is an AI-assisted cutout, not a pixel-identical mask. The SVG was traced directly from the original, with 32 colour layers, smoothed contours and a badge-outline clip. It contains actual vector paths, including the lettering, with no embedded raster and no font dependency. Fine texture and colour gradients are simplified; PNG and SVG are not pixel-identical. Both retain the full wording, rocket, maple leaf and cream badge interior.

RGBA transparency and near-opaque PNG and opaque SVG badge interiors verified, source-folder copies match, SVG rendered and visually inspected. Original artwork and the pre-existing small transparent PNG are preserved. No physical print test or publication performed.
