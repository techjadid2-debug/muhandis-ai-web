import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const imageRoot = path.join(root, 'public/images');
const manifest = JSON.parse(await fs.readFile(path.join(imageRoot, 'generation-manifest.json'), 'utf8'));
const assets = [...manifest.assets, {
  name: 'brand/logo-mark', width: 512, height: 512, transparent: true,
  alt: 'Muhandis AI: pastel rangli fon ustidagi oq elektron zanjir belgisi.',
}];
const missing = [];
for (const a of assets) {
  const target = path.resolve(imageRoot, `${a.name}.png`);
  try { await fs.access(target); } catch { missing.push(a.name); continue; }
  const meta = await sharp(target).metadata();
  if (meta.width !== a.width || meta.height !== a.height) {
    // Resize only: preserve the generated composition and original alpha.
    const pipeline = sharp(target).resize(a.width, a.height, {
      fit: a.transparent ? 'contain' : 'cover',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    });
    const buffer = await pipeline.png().toBuffer();
    await fs.writeFile(target, buffer);
  }
  execFileSync('cwebp', ['-quiet', '-q', '85', target, '-o', target.replace(/\.png$/, '.webp')]);
  const info = await sharp(target).metadata();
  if (info.width !== a.width || info.height !== a.height) throw new Error(`Wrong size: ${a.name}`);
  if (a.transparent) {
    if (!info.hasAlpha) throw new Error(`Missing alpha: ${a.name}`);
    const { channels } = await sharp(target).stats();
    if (channels[3].min === 255) throw new Error(`Fully opaque: ${a.name}`);
  }
}
for (const name of ['zilola', 'rayxona', 'durdona']) {
  const source = path.join(imageRoot, 'team', `${name}-a.png`);
  try { await fs.access(source); } catch { continue; }
  for (const ext of ['png', 'webp']) await fs.copyFile(source.replace(/\.png$/, `.${ext}`), path.join(imageRoot, 'team', `${name}.${ext}`));
  const a = assets.find(a => a.name === `team/${name}-a`);
  assets.push({ ...a, name: `team/${name}`, alt: a.alt.replace('hijobsiz ', '') });
}
await fs.writeFile(path.join(imageRoot, 'ALT.md'), '# Rasmlarning o‘zbekcha alt matnlari\n\n' + assets.map(a => `\`public/${path.relative(path.join(root, 'public'), path.resolve(imageRoot, a.name + '.png'))}\` — ${a.alt}`).join('\n') + '\n');
const inventory = [];
for (const a of assets) {
  for (const ext of ['png', 'webp']) {
    const target = path.resolve(imageRoot, `${a.name}.${ext}`);
    try {
      const meta = await sharp(target).metadata();
      const stat = await fs.stat(target);
      inventory.push(`| public/${path.relative(path.join(root, 'public'), target)} | ${meta.width}×${meta.height} | ${meta.hasAlpha ? 'ha' : 'yo‘q'} | ${stat.size} |`);
    } catch { /* Missing files reported below. */ }
  }
}
await fs.writeFile(path.join(imageRoot, 'INVENTORY.md'), '# Rasm fayllari\n\n| Fayl | O‘lcham | Alpha | Bayt |\n|---|---|---|---|\n' + inventory.join('\n') + '\n');
console.log(JSON.stringify({ expected: assets.length, inventory: inventory.length, missing }, null, 2));
if (missing.length) process.exitCode = 1;
