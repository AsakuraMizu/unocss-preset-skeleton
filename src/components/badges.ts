import type { StaticShortcutMap } from '@unocss/core';

export const shortcuts: StaticShortcutMap = {
  badge: [
    /* Core */
    'inline-flex',
    'justify-center',
    'items-center',
    'space-x-2',
    'whitespace-nowrap',
    /* Text */
    'font-semibold',
    'text-xs',
    /* Padding */
    'px-2',
    'py-1',
    /* Theme: Rounded */
    'rounded-token',
  ],
  'badge-icon': [
    /* Core */
    'w-5',
    'h-5',
    'flex',
    'justify-center',
    'items-center',
    'rounded-full',
    /* Text */
    'font-semibold',
    'text-xs',
    /* Shadow */
    'shadow',
  ],

  /* === Variants === */
  /* Glass */
  'badge-glass': [
    'bg-surface-500/20',
    'dark:bg-surface-500/20',
    'backdrop-blur-lg',
    'ring-1',
    'ring-neutral-900/5',
    'dark:ring-neutral-50/5',
    'ring-inset',
  ],
};
