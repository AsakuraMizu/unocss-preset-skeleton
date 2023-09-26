import type { StaticShortcut, DynamicShortcut } from '@unocss/core';

const rings: (StaticShortcut | DynamicShortcut)[] = [
  ['ring-token', 'ring-2 ring-offset-base'],
  // Ring Outline (for cards)
  // Example: .ring-outline-token
  ['ring-outline-token', 'ring-1 ring-inset ring-neutral-900/5 dark:ring-neutral-50/5'],
  // Color Pairings
  // Example: .ring-primary-50-900-token | .ring-primary-900-50-token
  [
    /^ring-(.+)-(\d+)-(\d+)-token$/,
    ([, color, light, dark]) => `ring-${color}-${light} dark:ring-${color}-${dark}`,
  ],
];

export default rings;
