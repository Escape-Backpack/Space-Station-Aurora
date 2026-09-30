import sharp from "sharp";

const input = "C:/EscapeBackpack/EscapeBackpack/Space Station Aurora/Images/Logos/StationAurora_Logo_v7.svg";
const output = "C:/EscapeBackpack/EscapeBackpack/Space Station Aurora/Images/Logos/StationAurora_Logo_v7_2048.png";
await sharp(input, { density: 384 }).png().resize(2048, 2048).toFile(output);
console.log(output);
