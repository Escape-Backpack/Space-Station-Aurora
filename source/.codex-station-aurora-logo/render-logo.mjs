import sharp from "sharp";
import { fileURLToPath } from "node:url";
// Icon 01 is the approved SVG; older logo variants were deleted.
const input = fileURLToPath(new URL("../Brand/icon.svg", import.meta.url));
const output = fileURLToPath(new URL("../Brand/icon.png", import.meta.url));
await sharp(input).png().resize(512, 512).toFile(output);
