import type { StaticShortcut, DynamicShortcut } from '@unocss/core';
import { colorNamesCoreRe, colorNamesRe, colorNamesStateRe } from '../theme';

export const shortcuts: (StaticShortcut | DynamicShortcut)[] = [
  /* Outline -- supports ringed and host variants */
  [
    new RegExp(`^variant-outline-${colorNamesRe}$`),
    ([, color]) => ['ring-1', `ring-${color}-500`, `dark:ring-${color}-500`, 'ring-inset'],
  ],
  ['variant-outline', 'variant-outline-surface'],

  /* ------------------------ */

  /* === Filled === */
  [
    new RegExp(`^variant-filled-${colorNamesRe}$`),
    ([, color]) => [
      `bg-${color}-${color === 'surface' ? '400' : '500'}-500-token`,
      `text-on-${color}`,
      `dark:text-on-${color}`,
    ],
  ],
  ['variant-filled', ['bg-surface-900-50-token', 'text-surface-50-900-token']],

  /* === Ringed === */
  [
    new RegExp(`^variant-ringed-${colorNamesRe}$`),
    ([, color]) => ['bg-transparent', 'dark:bg-transparent', `variant-outline-${color}`],
  ],
  ['variant-ringed', 'variant-outline'],

  /* === Ghost === */
  [
    new RegExp(`^variant-ghost-${colorNamesRe}$`),
    ([, color]) => [`bg-${color}-500/20`, `dark:bg-${color}-500/20`, `variant-outline-${color}`],
  ],
  ['variant-ghost', 'variant-ghost-surface'],

  /* === Soft === */
  [
    new RegExp(`^variant-soft-${colorNamesRe}$`),
    ([, color]) => [
      `bg-${color}-400/20`,
      `dark:bg-${color}-500/20`,
      `text-${color}-700-200-token`,
      '!ring-0',
    ],
  ],
  ['variant-soft', 'variant-soft-surface'],

  /* === Glass === */
  [
    new RegExp(`^variant-glass-${colorNamesRe}$`),
    ([, color]) => [`bg-${color}-500/20`, `dark:bg-${color}-500/20`, 'backdrop-blur-lg'],
  ],
  ['variant-glass', ['bg-surface-50/30', 'dark:bg-surface-900/30', 'backdrop-blur-lg']],

  /* === Gradients === */
  /* Core Trio */
  [
    new RegExp(`^variant-gradient-${colorNamesCoreRe}-${colorNamesCoreRe}`),
    ([, color1, color2]) => [`from-${color1}-500`, `to-${color2}-500`, `text-on-${color1}`],
  ],
  [
    new RegExp(`^variant-gradient-${colorNamesStateRe}-${colorNamesStateRe}`),
    ([, color1, color2]) => [
      `from-${color1}-500`,
      `to-${color2}-500`,
      `text-on-${
        (color1 === 'warning' && color2 === 'error') || (color1 === 'error' && color2 === 'warning')
          ? 'secondary'
          : color1
      }`,
    ],
  ],
];
