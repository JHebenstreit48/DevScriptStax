import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const INPUT  = process.argv[2];
const OUTPUT = resolve(__dirname, '../public/og/devscriptstax-1200x630.png');

if (!INPUT) {
  console.error('Usage: node scripts/resize-og.mjs <path-to-screenshot>');
  process.exit(1);
}

await sharp(INPUT)
  .resize(1200, 630, {
    fit: 'cover',       // scale-to-fill + centre crop, no letterboxing
    position: 'centre',
  })
  .png({ compressionLevel: 9 })
  .toFile(OUTPUT);

console.log(`✅ Saved to ${OUTPUT}`);