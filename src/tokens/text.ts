import type { DynamicShortcut, StaticShortcut } from '@unocss/core';

const text: (StaticShortcut | DynamicShortcut)[] = [
  // Font Family
  ['font-heading-token', 'font-heading'],
  ['font-token', 'font-base'],

  // Default Text Colors
  ['text-base-token', 'text-theme-base'],
  ['text-dark-token', 'text-theme-dark'],

  // Light/Dark Text Color  - ex: .text-token
  ['text-token', 'text-base-token dark:text-dark-token'],

  // On-X Text Colors
  // Example: .text-on-primary-token
  [/^text-on-(.+)-token$/, ([, color]) => `text-on-${color}`],

  // Color Pairings
  // Example: .text-primary-50-900-token | .text-primary-900-50-token
  [
    /^text-(.+)-(\d+)-(\d+)-token$/,
    ([, color, light, dark]) => `text-${color}-${light} dark:text-${color}-${dark}`,
  ],
];

export default text;
