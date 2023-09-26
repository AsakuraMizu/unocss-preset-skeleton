import type { StaticShortcutMap } from '@unocss/core';
import { wrapVariant, wrapVariants } from '../utils';

const list_shared = [
  /* List Style */
  'list-none',
  /* Spacing */
  'space-y-1',
];

const list_option = [
  'flex',
  'items-center',
  'space-x-4',
  'whitespace-nowrap',
  /* Padding */
  'px-4',
  'py-2',
  /* Hover */
  'bg-primary-hover-token',
  /* Focus */
  'focus:variant-soft-primary',
  'outline-none',
  /* Cursor */
  'cursor-pointer',
  /* Theme: Rounded */
  'rounded-token',
];

export const shortcuts: StaticShortcutMap = {
  /* === Lists (Parents) === */
  list: [
    ...list_shared,
    ...wrapVariant(
      [
        'flex',
        'items-center',
        'space-x-4',
        /* Padding */
        'p-2',
        /* Theme: Rounded */
        'rounded-token',
        /* Wrapping */
        'whitespace-normal',
        'break-words',
      ],
      'all-[li]',
    ),
  ],
  'list-dl': [
    ...list_shared,
    ...wrapVariant(
      [
        'flex',
        'items-center',
        'space-x-4',
        'whitespace-nowrap',
        /* Padding */
        'p-2',
        /* Theme: Rounded */
        'rounded-token',
      ],
      'all-[div]',
    ),
  ],
  'list-nav': [
    ...wrapVariant(list_shared, 'all-[ul]'),
    ...wrapVariants(list_option, ['all-[a]', 'all-[button]']),
  ],
  'list-option': list_option,
};
