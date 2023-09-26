import postcss from 'postcss';
import postcssImport from 'postcss-import';
import postcssCascadeLayers from '@csstools/postcss-cascade-layers';
import unocss from '@unocss/postcss';
import cssnano from 'cssnano';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile, writeFile } from 'node:fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = join(__dirname, 'base/index.css');
const raw = await readFile(path, { encoding: 'utf8' });

const { css } = await postcss([
  postcssImport(),
  postcssCascadeLayers(),
  unocss(),
  cssnano(),
]).process(raw, {
  from: path,
});
await writeFile(join(__dirname, 'generated', 'base.ts'), `export default ${JSON.stringify(css)};`);
