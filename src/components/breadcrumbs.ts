import type { StaticShortcutMap } from '@unocss/core';

export const shortcuts: StaticShortcutMap = {
  breadcrumb: [
    'breadcrumb-nonresponsive',
    /* === Auto-Responsive === */
    'all-[li]:hidden',
    'md:all-[li]:block',
    'all-[li:nth-last-child(3)]:block',
    'all-[li:nth-last-child(2)]:block',
    'all-[li:nth-last-child(1)]:block',
  ],
  'breadcrumb-nonresponsive': 'flex items-center space-x-4 w-full hide-scrollbar overflow-x-auto',
  crumb: 'flex justify-center items-center space-x-2',
  'crumb-seperator': 'flex text-surface-700-200-token opacity-50',
};
