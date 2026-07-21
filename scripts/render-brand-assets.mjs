import sharp from "sharp";
import path from "node:path";

const root = process.cwd();
const jobs = [
  ["aplicanza-logo.svg", "aplicanza-logo.png", 1560, 352],
  ["aplicanza-logo-descriptor.svg", "aplicanza-logo-descriptor.png", 1560, 480],
  ["aplicanza-mark.svg", "aplicanza-mark.png", 640, 640],
];

for (const [source, destination, width, height] of jobs) {
  await sharp(path.join(root, "public", "brand", source))
    .resize(width, height, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(path.join(root, "entregables", "manual-marca-assets", destination));
}
