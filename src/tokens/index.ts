import type { DynamicShortcut, StaticShortcut, StaticShortcutMap } from '@unocss/core';
import backgrounds from './backgrounds';
import borderRadius from './border-radius';
import borders from './borders';
import fills from './fills';
import rings from './rings';
import text from './text';

const tokens: (StaticShortcut | DynamicShortcut | StaticShortcutMap)[] = [
  ...backgrounds,
  borderRadius,
  ...borders,
  ...fills,
  ...rings,
  ...text,
];

export default tokens;
