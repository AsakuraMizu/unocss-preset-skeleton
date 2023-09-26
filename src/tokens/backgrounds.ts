import type { DynamicShortcut } from '@unocss/core';

const backgrounds: DynamicShortcut[] = [
  // Backdrops
  // Example: .bg-primary-backdrop-token
  [/^bg-(.+)-backdrop-token$/, ([, color]) => `bg-${color}-400 dark:bg-${color}-900 bg-op-70`],

  // Hover
  // Example: .bg-primary-hover-token
  [/^bg-(.+)-hover-token$/, ([, color]) => `hover:bg-${color}-500 hover:bg-op-10`],

  // Active
  // Example: .bg-primary-active-token
  [/^bg-(.+)-active-token$/, ([, color]) => `!bg-${color}-500 text-on-${color} fill-on-${color}`],

  // Color Pairings
  // Example: .bg-primary-50-900-token | .bg-primary-900-50-token
  [
    /^bg-(.+)-(\d+)-(\d+)-token$/,
    ([, color, light, dark]) => `bg-${color}-${light} dark:bg-${color}-${dark}`,
  ],
];

export default backgrounds;
