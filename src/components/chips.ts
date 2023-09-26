import type { StaticShortcutMap } from '@unocss/core';

export const shortcuts: StaticShortcutMap = {
  chip: [
    'px-3',
    'py-1.5',
    'whitespace-nowrap',
    'cursor-pointer',
    /* Text */
    'text-xs',
    'text-center',
    /* Rounded */
    'rounded',
    /* Flex Columns */
    'inline-flex',
    'justify-center',
    'items-center',
    'space-x-2',
    /* States */
    'hover:brightness-115',
    /* Transitions */
    'transition-all',

    'disabled:chip-disabled',
  ],
  'chip-disabled': '!opacity-50 !cursor-not-allowed active:scale-100',
};
