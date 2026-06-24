import sharp from 'sharp';
import { resolve } from 'path';

const INPUT  = process.argv[2];
const OUTPUT = resolve(process.cwd(), 'public/og/devscriptstax-1200x630.png');

if (!INPUT) {
  console.error('Usage: node resize-og.mjs <path-to-screenshot>');
  process.exit(1);
}

await sharp(INPUT)
  .resize(1200, 630, {
    fit: 'cover',
    position: 'centre',
  })
  .png({ compressionLevel: 9 })
  .toFile(OUTPUT);

console.log(`✅ Saved to ${OUTPUT}`);