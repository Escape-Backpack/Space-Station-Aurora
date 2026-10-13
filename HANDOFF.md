# Handoff

## 2026-10-07: MAPLE transparent PNG and SVG (Codex)
- **Request:** Keep approved MAPLE organization logo, remove exterior background and provide SVG. Original artwork retained.
- **Delivered:** `Images/MAPLE_Logo_Transparent_v2.png`, `MAPLE_Logo.svg`, and `MAPLE_Logo_Vector_Preview.png` in both Aurora source trees; working assets/builder/prompt under sibling Aurora `assets/maple/`. AS-008 records approval, methods and limitations.
- **Method:** Built-in ImageGen transparent cutout for PNG; original traced to vector paths with outlined lettering and 32 simplified colour layers for SVG. No raster embedded in SVG. Fine texture/gradients differ; AI cutout is not a pixel-identical mask.
- **Checks:** PNG/SVG rendering visually inspected, wording checked, transparent corners and near-opaque interiors checked; matching copies verified; 64 records valid. No physical print, commit, push or publication.
- **Next:** Use SVG for scaling and PNG for textured artwork; review the next visual item.

## 2026-10-07: icon 01 selected; other reviewed icons deleted (Codex)
- **Decision:** User selected 01 and explicitly requested deletion of the other reviewed icons. Canonical master is `Space-Station-Aurora/source/Brand/icon.svg`, with matching PNG; AS-005 records it.
- **Changes:** Deleted 42 reviewed alternative icon/reference raster and SVG files plus 3 obsolete review artifacts; exact list in `assets/icon-review/delete-list.json`. Replaced two outdated website icon assets, updated both guide/build sources and brand generator to the retained master, changed the comparison page/image to show only 01, rebuilt the active record viewer. Retained medallion manufacturing inputs/print packages; no publication, commit or push.
- **Checks:** All 5 active PNG copies hash-match original 01; master SVG unchanged; all deletion targets absent; shared banner generator renders pixel-identically. Guide icon paths and review HTTP links pass; browser result visually checked. 63 records validate. Embedded Office/PDF artwork and live deployments were not updated.
- **Next:** Use icon 01 for future Aurora materials; audit embedded document artwork when those documents are next revised.

## 2026-10-07: Aurora icon comparison ready (Codex)
- **Status:** Designer reaffirmed banner style and requested review. Prepared `Space-Station-Aurora/assets/icon-review/review.html`, comparison PNG, hash inventory, text usage findings and reproducible presentation builder. AS-005 links the review. Choices remain pending; no artwork changed, no archive, commit, push or publication.
- **Findings:** 01/04/12 are current-design exports; 03 is original reference. Two website asset copies still hash-match the old station silhouette; main website index pages show the illustrated cover. See AS-005 and review sheet for exact paths.
- **Checks:** Comparison image visually inspected; browser loads all 37 images with no horizontal overflow; selector updates summary, persists across reload and is reset to Pending after QA. Initial JavaScript newline issue fixed and interaction rechecked. Embedded Office/PDF artwork and deployed pages not audited.
- **Next:** Designer reviews numbered icons and confirms Keep / Archive / Revise; then synchronize the approved asset uses.

## 2026-10-05: documentation closeout (Codex)
- **Status:** Requested document synchronization completed; chat ready to archive. Legacy source/Project Management/Aurora_Visual_Guide.html now has a Patch & medallion section with current AS-005/006/007 files, public-branding decision, superseded v1 and print limitations. Sidebar uses current icon; print view includes the new section. Active design state remains in records/.
- **Checks:** Document links and active records checked; root index and both Aurora guide sections reviewed over local HTTP; all 29 new section links/images return 200; images load, identity appears in print content, and no browser console warnings/errors. Earlier digital geometry checks still apply; no physical print or actual printer-profile slice.
- **Next:** Print the thin back trial with the intended printer/material and inspect S/B/K, then test the full medallion. No commit, push or publication.


## 2026-10-05: correct patch and revised medallion v2 (Codex)
- **Requested:** Designer rejected the station-symbol medallion front, supplied the correct maple-leaf/orbit patch, and explicitly requested public branding use too.
- **Records:** New AS-005 (selected public/in-world patch), AS-006 (v2 model) and AS-007 (preview). AS-002/003/004 are superseded; PP-023 and PP-022 point to current assets.
- **Files:** v2 STL/trial/ZIP and sources under assets/medallion; outlined patch SVG/PNG and unchanged reference under assets/patch; source/Brand public icon/banner and source/Images in-world entry points updated. Original EscapeBackpack copies and shared brand/aurora generator/master synchronized; earlier station assets and v1 models retained.
- **Checks:** Both v2 STLs pass closure, winding, connectivity, non-degenerate facets and volume; back SVG byte-identical to the approved Space back. Medallion, patch and public exports screen-reviewed. ZIP integrity and record validation pass. No printer-profile slicing or physical print.
- **Next:** Test thin back trial, then the full print with front lettering/orbit. Local branding only; no commit, push or publication.


## 2026-10-05: themed medallion built (Codex)
- **Worked on:** PP-023, AS-003 and AS-004, after the designer requested medallions for Aurora, Hockey and Canada and selected the proposed motifs.
- **Selected:** station hub, modules and solar arrays, navy/yellow, with the improved shared back. The physical prop is not marked built/tested; final release/container remain unassigned.
- **Created:** Full one-piece STL, matching 1.2 mm back trial, exact SVG profiles/PNG preview, reports, self-contained sources, README and ZIP under `assets/medallion/`.
- **Method:** Vector CAD adapted from the existing identity SVG; no ImageGen used.
- **Checks:** Both meshes pass closure, winding, one-solid connectivity, non-degenerate facets and volume checks; preview screen-reviewed; shared back SVG matches Space exactly; ZIP integrity and record validation pass. No printer-profile slice or physical test.
- **Next step:** Print the full-size thin back trial using the actual printer/material and inspect S/B/K, then test the full two-colour medallion.


Update at the end of every session. Newest entry on top. Refer to records by ID.

## 2026-09-30: Moved Aurora into this repo and made the design records
- **Worked on:** copied the old `EscapeBackpack/Space Station Aurora/` folder to `source/` (skipped `tmp/`, `output/`, `.codex-staff-guide-20260903/` and `*.dxf~`; the old repo keeps them and the full history). Turned the Adventure Bible and the Completion Proposal (Option B, Sep 8) into records: PR-001..007, ST-001..008, PZ-001..009, PP-001..022, Q-001..009, AS-001..002.
- **Decided:** PR-001, PR-002, PR-004, PR-005, ST-001, Q-006. Everything else is `candidate`: the proposal is not accepted canon (Q-009).
- **New open questions:** Q-001..Q-009.
- **Next step:** review Q-009 with the tracker's Decision Log, then Q-002 (where HAROLD lives). Hints are not published (`publish_hints: no`).
