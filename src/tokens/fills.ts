import type { DynamicShortcut, StaticShortcut } from '@unocss/core';

const fills: (StaticShortcut | DynamicShortcut)[] = [
  ['fill-base-token', 'fill-theme-base'],
  ['fill-dark-token', 'fill-theme-dark'],
  // Fill Token - ex: .fill-token
  ['fill-token', 'fill-base-token dark:fill-dark-token'],
  // On-X Fill Colors
  // Example: .fill-on-primary-token
  [/^fill-on-(.+)-token$/, ([, color]) => `fill-on-${color}`],
];

export default fills;
