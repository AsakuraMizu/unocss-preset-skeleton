import type { StaticShortcutMap } from '@unocss/core';
import { wrapVariants } from '../utils';

const button_shared = [
  'btn-base',
  /* Core */
  'text-center',
  'whitespace-nowrap',
  /* Flex Columns */
  'inline-flex',
  'justify-center',
  'items-center',
  'space-x-2',
  /* States */
  'hover:brightness-115',
  /* Transitions */
  'transition-all',
];

export const shortcuts: StaticShortcutMap = {
  /* === Button === */
  /* Standard button/anchor tag elements. */
  btn: [
    ...button_shared,
    'rounded-token',
    'active:scale-95',
    'active:brightness-90',
    'disabled:btn-disabled',
  ],
  'btn-disabled': '!opacity-50 !cursor-not-allowed active:scale-100 hover:brightness-100',

  /* Button: Sizes */
  /* Note: Default values are built into `.btn` */
  'btn-sm': 'text-sm px-3 py-1.5',
  /* NOTE: this is required for responsible styling, ex: */
  /* <button class="btn btn-sm lg:btn-base">Test</button> */
  'btn-base': 'text-base px-5 py-9px',
  'btn-md': 'btn-base',
  'btn-lg': 'text-lg px-7 py-3',
  'btn-xl': 'text-xl px-9 py-4',

  /* === Icon Button === */
  /* A circular button meant for housing icons. */
  'btn-icon': [
    ...button_shared,
    'btn-icon-base',
    /* Padding */
    'p-0',
    /* Size */
    'aspect-square',
    /* Rounded */
    'rounded-full',
    /* Active */
    'active:scale-95',
    'active:brightness-90',
    'disabled:btn-disabled',
  ],

  /* Icon Button: Size */
  'btn-icon-sm': 'text-sm w-33px',
  'btn-icon-base': 'text-base w-43px',
  'btn-icon-md': 'btn-icon-base',
  'btn-icon-lg': 'text-lg w-53px',
  'btn-icon-xl': 'text-xl w-63px',

  /* === Button Groups === */
  'btn-group': [
    'inline-flex',
    'flex-row',
    'space-x-0',
    'overflow-hidden',
    'rounded-token',
    /* Safari: hover overflow fix for border radius */
    'isolate',
    /* Button / Anchors */
    ...wrapVariants(
      [...button_shared, 'hover:bg-surface-50/3', 'active:bg-surface-900/3'],
      ['all-[button]', 'all-[a]'],
    ),
    /* Reset Anchor Styles */
    '!all-[a]:no-underline',
    '!all-[a]:text-inherit',
    /* Set Neutral Divider */
    'sibling:children:border-t-0',
    'sibling:children:border-l',
    'sibling:children:border-surface-500/20',
  ],
  'btn-group-vertical': [
    'btn-group',
    'flex-col',
    'space-y-0',
    'rounded-container-token',
    /* Set Neutral Divider */
    'sibling:children:border-t',
    'sibling:children:border-l-0',
    'sibling:children:border-surface-500/20',
  ],
};
