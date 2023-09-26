import type { DynamicShortcut, StaticShortcut } from '@unocss/core';

const borders: (StaticShortcut | DynamicShortcut)[] = [
  // Border Width - ex: .border-token
  ['border-token', 'border-base'],
  // Color Pairings
  // Example: .border-primary-50-900-token | .border-primary-900-50-token
  [
    /^border-(.+)-(\d+)-(\d+)-token$/,
    ([, color, light, dark]) => `border-${color}-${light} dark:border-${color}-${dark}`,
  ],
];

export default borders;
