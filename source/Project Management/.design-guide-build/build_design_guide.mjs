import fs from "node:fs/promises";
import path from "node:path";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const ROOT = "C:/EscapeBackpack/EscapeBackpack/Space Station Aurora";
const IMG = path.join(ROOT, "Images");
const TMP = path.join(ROOT, "Project Management", ".design-guide-build");
const OUT_DIR = path.join(ROOT, "Project Management", "Design System");
const OUT = path.join(OUT_DIR, "Aurora_Visual_Design_Guide.pptx");
const PREVIEW = path.join(TMP, "final-preview");

const W = 1280;
const H = 720;
const NAVY = "#16253C";
const ORANGE = "#A84420";
const WHITE = "#FFFFFF";
const INK = "#202A3A";
const PALE_BLUE = "#D8E5F2";
const PALE_ORANGE = "#F1DDD4";
const LIGHT = "#F3F5F7";
const MID = "#8B98A8";
const DISPLAY = "Orbitron ExtraBold";
const SYSTEM = "Orbitron";
const BODY = "Aptos";
const MONO = "Aptos Mono";

await fs.mkdir(OUT_DIR, { recursive: true });
await fs.mkdir(PREVIEW, { recursive: true });

const deck = Presentation.create({ slideSize: { width: W, height: H } });

function rect(slide, name, x, y, w, h, fill, line = "none", radius = null) {
  return slide.shapes.add({
    geometry: radius ? "roundRect" : "rect",
    name,
    position: { left: x, top: y, width: w, height: h },
    fill,
    line: { style: "solid", fill: line, width: line === "none" ? 0 : 1 },
    ...(radius ? { borderRadius: radius } : {}),
  });
}

function text(slide, name, value, x, y, w, h, opts = {}) {
  const box = slide.shapes.add({
    geometry: "textbox",
    name,
    position: { left: x, top: y, width: w, height: h },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  box.text = value;
  box.text.style = {
    fontFamily: opts.fontFamily || BODY,
    fontSize: opts.fontSize || 20,
    color: opts.color || INK,
    bold: opts.bold || false,
    italic: opts.italic || false,
    alignment: opts.alignment || "left",
  };
  return box;
}

async function image(slide, name, filename, x, y, w, h, fit = "contain", geometry = "rect") {
  const full = path.join(IMG, filename);
  const bytes = await fs.readFile(full);
  const ext = path.extname(filename).toLowerCase();
  const contentType = ext === ".jpg" || ext === ".jpeg" ? "image/jpeg" : "image/png";
  return slide.images.add({
    name,
    blob: bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength),
    contentType,
    alt: `${filename} from the Space Station Aurora project assets`,
    fit,
    geometry,
    position: { left: x, top: y, width: w, height: h },
  });
}

function contentSlide(section, titleValue, number) {
  const slide = deck.slides.add();
  slide.background.fill = WHITE;
  rect(slide, "top-rail", 0, 0, W, 14, ORANGE);
  text(slide, "section", section.toUpperCase(), 64, 34, 420, 24, { fontFamily: SYSTEM, fontSize: 13, bold: true, color: ORANGE });
  text(slide, "title", titleValue, 64, 64, 1140, 62, { fontFamily: DISPLAY, fontSize: 35, bold: true, color: NAVY });
  rect(slide, "footer-line", 64, 678, 1152, 2, PALE_BLUE);
  text(slide, "footer", "SPACE STATION AURORA  |  WORKING VISUAL SYSTEM", 64, 688, 900, 18, { fontFamily: SYSTEM, fontSize: 10, color: MID });
  text(slide, "page", String(number).padStart(2, "0"), 1130, 686, 86, 18, { fontFamily: MONO, fontSize: 11, color: ORANGE, alignment: "right" });
  return slide;
}

function label(slide, value, x, y, w, color = ORANGE) {
  return text(slide, `label-${value}-${x}-${y}`, value.toUpperCase(), x, y, w, 24, { fontFamily: SYSTEM, fontSize: 13, bold: true, color });
}

function bullet(slide, value, x, y, w, h = 44, color = INK, size = 18) {
  text(slide, `bullet-${x}-${y}`, `• ${value}`, x, y, w, h, { fontFamily: BODY, fontSize: size, color });
}

// 1 — Cover
{
  const s = deck.slides.add();
  s.background.fill = NAVY;
  await image(s, "hero", "Banner_Space_Station_Aurora.png", 560, 0, 720, 720, "cover");
  rect(s, "cover-panel", 0, 0, 660, 720, NAVY);
  rect(s, "cover-accent", 64, 72, 124, 8, ORANGE);
  text(s, "eyebrow", "PROJECT CONTROL DOCUMENT", 64, 104, 480, 30, { fontFamily: SYSTEM, fontSize: 15, bold: true, color: ORANGE });
  text(s, "cover-title", "AURORA\nVISUAL DESIGN\nGUIDE", 64, 156, 540, 218, { fontFamily: DISPLAY, fontSize: 52, bold: true, color: WHITE });
  text(s, "cover-subtitle", "A working system for documents, props, screens and promotional assets", 68, 405, 470, 90, { fontFamily: BODY, fontSize: 23, color: PALE_BLUE });
  text(s, "cover-status", "WORKING STANDARD  •  2026", 68, 626, 430, 26, { fontFamily: MONO, fontSize: 13, color: WHITE });
}

// 2 — Identity principles
{
  const s = contentSlide("Foundation", "The identity balances authority and danger", 2);
  await image(s, "station-patch", "StationAuroraPatch.png", 72, 164, 270, 270, "contain");
  label(s, "Core impression", 72, 464, 260);
  text(s, "core-impression", "Canadian institutional\nretro-futurism under pressure", 72, 494, 360, 78, { fontFamily: DISPLAY, fontSize: 23, bold: true, color: NAVY });
  const rules = [
    ["CREDIBLE", "Official enough to feel issued by a real station or agency."],
    ["TACTILE", "Props should look handled, printed, scanned, stamped or repaired."],
    ["URGENT", "Orange signals action, danger and anomalies—never decoration alone."],
  ];
  rules.forEach((r, i) => {
    const y = 168 + i * 146;
    rect(s, `principle-${i}`, 470, y, 700, 112, i === 1 ? LIGHT : PALE_BLUE, "none", "rounded-xl");
    text(s, `principle-head-${i}`, r[0], 500, y + 20, 190, 30, { fontFamily: SYSTEM, fontSize: 20, bold: true, color: i === 2 ? ORANGE : NAVY });
    text(s, `principle-body-${i}`, r[1], 700, y + 18, 430, 60, { fontFamily: BODY, fontSize: 18, color: INK });
  });
}

// 3 — Brand architecture
{
  const s = contentSlide("Foundation", "A clear hierarchy keeps the fictional world readable", 3);
  const cols = [82, 378, 674, 970];
  const items = [
    ["Station Aurora", "PRIMARY MARK", "StationAuroraPatch.png", "Adventure title, crew assets, station documents"],
    ["MAPLE", "PARENT AGENCY", "MAPLE_Logo_TRansparent.png", "Official briefings, IDs and mission-control material"],
    ["H.A.R.O.L.D.", "SYSTEM MARK", "HAROLD.png", "Terminal, diagnostics and automated instructions"],
    ["In-world entities", "EVIDENCE MARKS", "EVIL.png", "Bank, betting, retail and antagonist documents"],
  ];
  for (let i = 0; i < items.length; i += 1) {
    const [name, role, file, use] = items[i];
    rect(s, `arch-bg-${i}`, cols[i], 160, 226, 408, i === 3 ? PALE_ORANGE : LIGHT, "none", "rounded-xl");
    await image(s, `arch-logo-${i}`, file, cols[i] + 36, 188, 154, 154, "contain");
    text(s, `arch-role-${i}`, role, cols[i] + 18, 360, 190, 24, { fontFamily: SYSTEM, fontSize: 11, bold: true, color: ORANGE, alignment: "center" });
    text(s, `arch-name-${i}`, name, cols[i] + 18, 392, 190, 54, { fontFamily: DISPLAY, fontSize: 19, bold: true, color: NAVY, alignment: "center" });
    text(s, `arch-use-${i}`, use, cols[i] + 22, 466, 182, 78, { fontFamily: BODY, fontSize: 16, color: INK, alignment: "center" });
  }
  text(s, "hierarchy-note", "Rule: only Station Aurora and MAPLE should behave like master brands. Other marks are story evidence.", 96, 604, 1088, 32, { fontFamily: BODY, fontSize: 18, bold: true, color: NAVY, alignment: "center" });
}

// 4 — Palette
{
  const s = contentSlide("Foundation", "Two colours carry the core identity", 4);
  rect(s, "navy-swatch", 72, 158, 510, 300, NAVY, "none", "rounded-xl");
  text(s, "navy-name", "AURORA NAVY", 104, 196, 420, 40, { fontFamily: SYSTEM, fontSize: 22, bold: true, color: WHITE });
  text(s, "navy-hex", "#16253C", 104, 338, 420, 70, { fontFamily: MONO, fontSize: 42, bold: true, color: WHITE });
  text(s, "navy-use", "Authority • structure • night systems", 104, 408, 420, 30, { fontFamily: BODY, fontSize: 17, color: PALE_BLUE });
  rect(s, "orange-swatch", 614, 158, 510, 300, ORANGE, "none", "rounded-xl");
  text(s, "orange-name", "EMERGENCY ORANGE", 646, 196, 420, 40, { fontFamily: SYSTEM, fontSize: 22, bold: true, color: WHITE });
  text(s, "orange-hex", "#A84420", 646, 338, 420, 70, { fontFamily: MONO, fontSize: 42, bold: true, color: WHITE });
  text(s, "orange-use", "Action • warning • evidence anomaly", 646, 408, 420, 30, { fontFamily: BODY, fontSize: 17, color: PALE_ORANGE });
  label(s, "Recommended supporting neutrals", 72, 500, 460);
  const neutrals = [[WHITE, "WHITE"], [LIGHT, "COOL PAPER"], [PALE_BLUE, "DATA BLUE"], [PALE_ORANGE, "ALERT TINT"], [INK, "INK"]];
  neutrals.forEach((n, i) => {
    const x = 72 + i * 211;
    rect(s, `neutral-${i}`, x, 536, 184, 52, n[0], i === 0 ? MID : "none", "rounded-xl");
    text(s, `neutral-name-${i}`, n[1], x, 600, 184, 20, { fontFamily: MONO, fontSize: 11, color: INK, alignment: "center" });
  });
}

// 5 — Typography
{
  const s = contentSlide("Foundation", "Typography separates station voice from evidence", 5);
  const samples = [
    ["DISPLAY", "ORBITRON EXTRABOLD", DISPLAY, "Station titles, key labels and dramatic system states"],
    ["SYSTEM", "ORBITRON", SYSTEM, "Navigation, short instructions, codes and crew-card labels"],
    ["OPERATIONAL", "Aptos", BODY, "Briefings, records and longer reading"],
    ["DATA", "Aptos Mono 2912 / ORBIT", MONO, "Receipts, timestamps, keypad inputs and diagnostics"],
  ];
  samples.forEach((v, i) => {
    const y = 154 + i * 116;
    label(s, v[0], 72, y, 150);
    text(s, `type-sample-${i}`, v[1], 236, y - 4, 490, 42, { fontFamily: v[2], fontSize: i === 0 ? 27 : 24, bold: i === 0, color: NAVY });
    text(s, `type-use-${i}`, v[3], 754, y - 2, 410, 54, { fontFamily: BODY, fontSize: 17, color: INK });
    rect(s, `type-rule-${i}`, 72, y + 65, 1092, 2, PALE_BLUE);
  });
  rect(s, "type-reserved", 72, 620, 1092, 42, PALE_ORANGE, "none", "rounded-xl");
  text(s, "type-reserved-copy", "RESERVED: Dreaming Outloud Pro for rare handwriting. Choose one E.V.I.L. typeface before final production.", 90, 630, 1056, 22, { fontFamily: BODY, fontSize: 16, bold: true, color: ORANGE, alignment: "center" });
}

// 6 — Logo usage
{
  const s = contentSlide("Marks", "Station Aurora owns the page", 6);
  rect(s, "logo-field", 72, 158, 494, 420, NAVY, "none", "rounded-xl");
  await image(s, "logo-primary", "StationAuroraPatch.png", 168, 206, 300, 300, "contain");
  text(s, "logo-caption", "PRIMARY PROJECT MARK", 142, 526, 354, 28, { fontFamily: SYSTEM, fontSize: 13, bold: true, color: WHITE, alignment: "center" });
  label(s, "Use", 622, 168, 130);
  bullet(s, "One clear primary mark per asset", 622, 204, 520);
  bullet(s, "Keep generous open space around the patch", 622, 254, 520);
  bullet(s, "Use MAPLE as issuer or parent agency", 622, 304, 520);
  label(s, "Avoid", 622, 390, 130);
  bullet(s, "Treating H.A.R.O.L.D. or E.V.I.L. as co-equal brands", 622, 426, 520);
  bullet(s, "Placing the patch on busy imagery without contrast", 622, 482, 520);
  bullet(s, "Enlarging the current 102 px patch for large-format print", 622, 538, 520);
  text(s, "logo-gap", "Production gap: create a vector or high-resolution master of the Station Aurora patch.", 72, 610, 1092, 36, { fontFamily: BODY, fontSize: 18, bold: true, color: ORANGE, alignment: "center" });
}

// 7 — Illustration
{
  const s = contentSlide("Imagery", "Illustration should feel retro-futurist, not generic sci-fi", 7);
  await image(s, "world-hero", "Banner_Space_Station_Aurora.png", 64, 150, 718, 470, "cover");
  rect(s, "world-side", 812, 150, 390, 470, NAVY, "none", "rounded-xl");
  label(s, "Keep", 844, 184, 130, ORANGE);
  bullet(s, "Navy machinery with warm orange failure points", 844, 222, 324, 60, WHITE, 18);
  bullet(s, "Visible wear, paper texture and practical equipment", 844, 294, 324, 60, WHITE, 18);
  bullet(s, "Canadian cues used as world-building, not decoration", 844, 366, 324, 60, WHITE, 18);
  label(s, "Avoid", 844, 464, 130, ORANGE);
  bullet(s, "Neon cyberpunk palettes", 844, 500, 324, 44, WHITE, 18);
  bullet(s, "Photoreal and cartoon styles mixed in one asset", 844, 550, 324, 52, WHITE, 18);
}

// 8 — Icons
{
  const s = contentSlide("Imagery", "Icons behave like station instrumentation", 8);
  await image(s, "blueprint", "BluePrint_Example.png", 72, 164, 560, 392, "cover");
  await image(s, "harold-icon", "HAROLD.png", 742, 172, 190, 190, "contain");
  label(s, "Rules", 686, 386, 150);
  bullet(s, "Use a single navy icon family for modules and controls", 686, 424, 470);
  bullet(s, "Keep icons flat, legible and printable in one colour", 686, 478, 470);
  bullet(s, "Reserve orange for the active fault or required action", 686, 532, 470);
  text(s, "icon-note", "H.A.R.O.L.D. is a character mark; module icons should remain simpler than the mascot.", 72, 594, 1090, 42, { fontFamily: BODY, fontSize: 18, bold: true, color: NAVY, alignment: "center" });
}

// 9 — Props
{
  const s = contentSlide("Applications", "Props should look issued, handled and believable", 9);
  const assets = [
    ["FishAndNuts.jpg", "RETAIL", "Thermal-paper tone, mono data, imperfect alignment"],
    ["Betting_Logos.jpg", "BETTING", "Distinct identities; restrained document layouts"],
    ["Bank_Logo.png", "BANK", "Conservative typography and official spacing"],
    ["EVIL.png", "CORPORATE", "Cold, controlled and intentionally separate from Aurora"],
  ];
  for (let i = 0; i < assets.length; i += 1) {
    const x = 72 + i * 284;
    rect(s, `prop-frame-${i}`, x, 160, 250, 362, i === 3 ? PALE_ORANGE : LIGHT, "none", "rounded-xl");
    await image(s, `prop-img-${i}`, assets[i][0], x + 24, 184, 202, 176, "contain");
    label(s, assets[i][1], x + 22, 382, 206);
    text(s, `prop-rule-${i}`, assets[i][2], x + 22, 420, 206, 80, { fontFamily: BODY, fontSize: 16, color: INK, alignment: "center" });
  }
  text(s, "prop-principle", "Believability comes from hierarchy, spacing, dates, signatures and material—not from adding more decoration.", 88, 574, 1054, 50, { fontFamily: BODY, fontSize: 20, bold: true, color: NAVY, alignment: "center" });
}

// 10 — Crew
{
  const s = contentSlide("Applications", "Crew cards need one visual generation", 10);
  const people = [["Captain.png", "HELENA"], ["Biologist.png", "SARAH"], ["Engineer_New.png", "ALISTAIR — CURRENT"], ["Engineer_OG.png", "ALISTAIR — LEGACY"]];
  for (let i = 0; i < people.length; i += 1) {
    const x = 72 + i * 284;
    rect(s, `crew-bg-${i}`, x, 156, 250, 354, NAVY, "none", "rounded-xl");
    await image(s, `crew-img-${i}`, people[i][0], x + 18, 174, 214, 214, "cover");
    text(s, `crew-name-${i}`, people[i][1], x + 16, 414, 218, 48, { fontFamily: SYSTEM, fontSize: 15, bold: true, color: i === 3 ? PALE_ORANGE : WHITE, alignment: "center" });
    text(s, `crew-state-${i}`, i === 3 ? "ARCHIVE" : "USE", x + 16, 470, 218, 22, { fontFamily: MONO, fontSize: 12, bold: true, color: ORANGE, alignment: "center" });
  }
  label(s, "Standardize", 72, 546, 180);
  text(s, "crew-rule", "Use one illustration style, one crop ratio, one data order and one date format across the active crew set.", 250, 542, 900, 56, { fontFamily: BODY, fontSize: 20, color: INK });
}

// 11 — Digital
{
  const s = contentSlide("Applications", "Digital screens should feel like the same station", 11);
  rect(s, "terminal", 72, 154, 760, 454, NAVY, "none", "rounded-xl");
  rect(s, "terminal-bar", 72, 154, 760, 58, ORANGE, "none", "rounded-xl");
  text(s, "terminal-title", "H.A.R.O.L.D.  //  COMMUNICATIONS", 100, 172, 690, 24, { fontFamily: SYSTEM, fontSize: 17, bold: true, color: WHITE });
  text(s, "terminal-copy", "> SYSTEM DAMAGE DETECTED\n> AWAITING RECOVERY CODE\n\nINPUT: ORBIT\n\nCOMMUNICATIONS RESTORED\nNEXT MODULE AVAILABLE", 112, 248, 650, 290, { fontFamily: MONO, fontSize: 23, color: WHITE });
  await image(s, "terminal-harold", "HAROLD.png", 900, 158, 232, 232, "contain");
  label(s, "Interface rules", 888, 422, 230);
  bullet(s, "Navy field, white data, orange active state", 872, 458, 330, 50, INK, 17);
  bullet(s, "Short lines and visible system feedback", 872, 510, 330, 50, INK, 17);
  bullet(s, "Never advance twice for a repeated code", 872, 562, 330, 50, INK, 17);
}

// 12 — Portfolio imagery
{
  const s = contentSlide("Portfolio", "The strongest imagery already shares one world", 12);
  await image(s, "portfolio-environment", "Banner_Space_Station_Aurora.png", 72, 156, 534, 438, "cover");
  await image(s, "portfolio-blueprint", "BluePrint_Example.png", 630, 156, 270, 208, "cover");
  await image(s, "portfolio-captain", "Captain.png", 924, 156, 270, 208, "cover");
  await image(s, "portfolio-biologist", "Biologist.png", 630, 386, 270, 208, "cover");
  await image(s, "portfolio-engineer", "Engineer_New.png", 924, 386, 270, 208, "cover");
  text(s, "portfolio-caption", "Environment • technical diagram • crew illustration", 72, 612, 1122, 30, { fontFamily: SYSTEM, fontSize: 15, bold: true, color: NAVY, alignment: "center" });
}

// 13 — Portfolio marks
{
  const s = contentSlide("Portfolio", "The mark library supports both authority and misdirection", 13);
  const marks = [
    ["StationAuroraPatch.png", "AURORA"], ["MAPLE_Logo_TRansparent.png", "MAPLE"], ["HAROLD.png", "H.A.R.O.L.D."],
    ["EVIL.png", "E.V.I.L."], ["Bank_Logo.png", "B.A.D."], ["Bank_Logo2.png", "B.A.D. ALT"],
    ["FishAndNuts.jpg", "FISH & NUTS"], ["Betting_Logos.jpg", "BETTING"],
  ];
  for (let i = 0; i < marks.length; i += 1) {
    const col = i % 4;
    const row = Math.floor(i / 4);
    const x = 72 + col * 284;
    const y = 158 + row * 218;
    rect(s, `mark-bg-${i}`, x, y, 250, 182, i < 3 ? LIGHT : PALE_ORANGE, "none", "rounded-xl");
    await image(s, `mark-${i}`, marks[i][0], x + 35, y + 14, 180, 120, "contain");
    text(s, `mark-name-${i}`, marks[i][1], x + 18, y + 144, 214, 22, { fontFamily: SYSTEM, fontSize: 12, bold: true, color: NAVY, alignment: "center" });
  }
  text(s, "marks-note", "Keep alternates only when they serve a defined clue or production need; otherwise archive them.", 72, 620, 1092, 28, { fontFamily: BODY, fontSize: 18, bold: true, color: ORANGE, alignment: "center" });
}

// 14 — Design debt
{
  const s = contentSlide("Governance", "The remaining design debt is specific and manageable", 14);
  const debt = [
    ["P0", "Station patch master", "Current file is 102 × 102 px", "Create vector/high-resolution master"],
    ["P0", "Crew illustration style", "Current and legacy Alistair styles conflict", "Choose active style; archive the other"],
    ["P1", "E.V.I.L. typography", "Times New Roman and DownCity both appear", "Select one corporate treatment"],
    ["P1", "Document templates", "Props share ideas but not fixed layouts", "Create briefing, evidence and memo masters"],
    ["P1", "Digital UI states", "Only part of H.A.R.O.L.D. is implemented", "Define five module states and feedback"],
  ];
  label(s, "Priority", 72, 152, 108);
  label(s, "Decision", 188, 152, 260);
  label(s, "Current issue", 468, 152, 300);
  label(s, "Resolution", 790, 152, 370);
  debt.forEach((d, i) => {
    const y = 190 + i * 84;
    rect(s, `debt-row-${i}`, 72, y, 1092, 68, i % 2 === 0 ? LIGHT : PALE_BLUE, "none", "rounded-xl");
    text(s, `debt-p-${i}`, d[0], 88, y + 19, 76, 26, { fontFamily: MONO, fontSize: 16, bold: true, color: d[0] === "P0" ? ORANGE : NAVY });
    text(s, `debt-d-${i}`, d[1], 188, y + 14, 252, 40, { fontFamily: BODY, fontSize: 17, bold: true, color: NAVY });
    text(s, `debt-i-${i}`, d[2], 468, y + 12, 290, 46, { fontFamily: BODY, fontSize: 16, color: INK });
    text(s, `debt-r-${i}`, d[3], 790, y + 12, 346, 46, { fontFamily: BODY, fontSize: 16, color: INK });
  });
}

// 15 — Checklist
{
  const s = contentSlide("Governance", "Use this checklist before releasing any asset", 15);
  await image(s, "check-patch", "StationAuroraPatch.png", 82, 176, 270, 270, "contain");
  text(s, "check-callout", "If an asset cannot pass every check, label it WORKING—not final.", 72, 486, 340, 90, { fontFamily: DISPLAY, fontSize: 22, bold: true, color: NAVY, alignment: "center" });
  const checks = [
    "One clear issuer and one clear purpose",
    "Navy and orange used with defined roles",
    "Typography matches the content type",
    "Images belong to the same visual generation",
    "Dates, names, acronyms and codes match canon",
    "Print size, contrast and crop have been tested",
    "Source file, export and archive version are named",
  ];
  checks.forEach((c, i) => {
    const y = 156 + i * 66;
    rect(s, `check-box-${i}`, 468, y, 34, 34, WHITE, ORANGE, "rounded-xl");
    text(s, `check-text-${i}`, c, 524, y - 2, 620, 40, { fontFamily: BODY, fontSize: 20, color: INK });
  });
  rect(s, "next-action", 468, 622, 676, 40, PALE_ORANGE, "none", "rounded-xl");
  text(s, "next-action-copy", "NEXT: resolve the P0 decisions, then create reusable prop templates.", 486, 631, 640, 22, { fontFamily: BODY, fontSize: 16, bold: true, color: ORANGE, alignment: "center" });
}

for (let i = 0; i < deck.slides.items.length; i += 1) {
  const slide = deck.slides.items[i];
  const stem = `slide-${String(i + 1).padStart(2, "0")}`;
  const png = await deck.export({ slide, format: "png", scale: 1 });
  await fs.writeFile(path.join(PREVIEW, `${stem}.png`), new Uint8Array(await png.arrayBuffer()));
  const layout = await slide.export({ format: "layout" });
  await fs.writeFile(path.join(PREVIEW, `${stem}.layout.json`), await layout.text());
}

const montage = await deck.export({ format: "webp", montage: true, scale: 1 });
await fs.writeFile(path.join(PREVIEW, "montage.webp"), new Uint8Array(await montage.arrayBuffer()));

const inspect = await deck.inspect({ kind: "slide,textbox,shape,image", maxChars: 24000 });
await fs.writeFile(path.join(TMP, "final-inspect.ndjson"), inspect.ndjson);

const pptx = await PresentationFile.exportPptx(deck);
await pptx.save(OUT);
console.log(OUT);
