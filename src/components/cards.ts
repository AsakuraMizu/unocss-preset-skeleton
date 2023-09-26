import type { StaticShortcutMap } from '@unocss/core';

export const shortcuts: StaticShortcutMap = {
  card: [
    /* background */
    'bg-surface-100-800-token',
    /* Ring */
    'ring-outline-token',
    /* Theme: Rounded */
    'rounded-container-token',

    '[a&]:transition-all',
    'hover:[a&]:brightness-105',
  ],

  /* === Regions === */
  'card-header': 'p-4 pb-0',
  'card-footer': 'p-4 pt-0',

  /* === States === */
  'card-hover': 'transition-all hover:scale-101 hover:shadow-xl',
};
