import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();

const defaultDir = 'src/assets/photos';
const targetDir = process.argv[2] ?? defaultDir;
const quality = Number(process.env.QUALITY ?? 80);

const exts = new Set(['.jpg', '.jpeg', '.png']);

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

function fmt(bytes) {
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  return `${(kb / 1024).toFixed(2)} MB`;
}

async function main() {
  const absDir = path.isAbsolute(targetDir) ? targetDir : path.join(ROOT, targetDir);
  const stats = { files: 0, optimized: 0, before: 0, after: 0 };

  for await (const file of walk(absDir)) {
    const ext = path.extname(file).toLowerCase();
    if (!exts.has(ext)) continue;

    stats.files += 1;
    const before = (await fs.stat(file)).size;

    const img = sharp(file, { failOn: 'none' });

    let out;
    if (ext === '.png') {
      // lossless-ish PNG optimization
      out = await img.png({ compressionLevel: 9, adaptiveFiltering: true }).toBuffer();
    } else {
      // JPEG optimization (quality)
      out = await img.jpeg({ quality, mozjpeg: true }).toBuffer();
    }

    const after = out.byteLength;

    stats.before += before;
    stats.after += after;

    // Only overwrite if it got smaller
    if (after < before) {
      await fs.writeFile(file, out);
      stats.optimized += 1;
      // eslint-disable-next-line no-console
      console.log(`✓ ${path.relative(ROOT, file)}  ${fmt(before)} -> ${fmt(after)}`);
    } else {
      // eslint-disable-next-line no-console
      console.log(`· ${path.relative(ROOT, file)}  ${fmt(before)} (no change)`);
    }
  }

  // eslint-disable-next-line no-console
  console.log(`\nDone. Files: ${stats.files}, optimized: ${stats.optimized}`);
  // eslint-disable-next-line no-console
  console.log(`Total: ${fmt(stats.before)} -> ${fmt(stats.after)} (quality=${quality})`);
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exitCode = 1;
});
