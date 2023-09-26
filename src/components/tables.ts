import type { StaticShortcutMap } from '@unocss/core';

export const shortcuts: StaticShortcutMap = {
  'table-container': 'overflow-x-auto w-full rounded-container-token',
  table: [
    'w-full',
    'overflow-hidden',
    'table-auto',
    /* background */
    'bg-surface-100-800-token',
    /* Theme: Rounded */
    'rounded-container',

    /* === Table Head === */
    'all-[thead]:bg-surface-200-700-token',
    'all-[thead]:border-b',
    'all-[thead]:border-surface-500/20',
    'all-[tr]:all-[thead]:capitalize',
    'all-[tr]:all-[thead]:text-left',
    'all-[th]:all-[thead]:font-bold',
    'all-[th]:all-[thead]:p-4',

    /* === Table Body === */
    'all-[tr]:all-[tbody]:border-b',
    'all-[tr]:all-[tbody]:border-surface-500/20',
    'all-[tr]:all-[tbody]:even:bg-surface-500/5',
    /* NOTE: removed following to allow wrapping */
    'all-[td]:all-[tbody]:text-sm',
    'all-[td]:all-[tbody]:px-3',
    'all-[td]:all-[tbody]:py-4',
    'all-[td]:all-[tbody]:align-top',
    'all-[td]:all-[tbody]:whitespace-nowrap',
    'lg:all-[td]:all-[tbody]:whitespace-normal',

    /* === Table Foot === */
    'all-[tfoot]:bg-surface-100-800-token',
    'all-[tr]:all-[tfoot]:capitalize',
    'all-[tr]:all-[tfoot]:text-left',
    'all-[th]:all-[tfoot]:p-4',
    'all-[td]:all-[tfoot]:p-4',
  ],
  'table-compact': '!all-[td]:all-[tbody]:py-3',
  'table-comfortable': '!all-[td]:all-[tbody]:py-5',

  /* === Hover Styles ==== */
  'table-hover': [
    'hover:all-[tr]:all-[tbody]:bg-surface-500/20',
    'hover:even:all-[tr]:all-[tbody]:bg-surface-500/20',
  ],
  'table-interactive': [
    'hover:all-[tr]:all-[tbody]:bg-primary-hover-token',
    'hover:even:all-[tr]:all-[tbody]:bg-primary-hover-token',
    'cursor-pointer',
  ],

  /* === Sort Styles ==== */
  'table-sort-asc': 'after:opacity-50 !after:content-["↑"]',
  'table-sort-dsc': 'after:opacity-50 !after:content-["↓"]',

  /* === Rows Specific === */
  'table-row-checked': '!bg-secondary-500/20',

  /* === Cells Specific === */
  /* Source: https://stackoverflow.com/questions/11267154/fit-cell-width-to-content */
  'table-cell-fit': 'w-1% whitespace-nowrap',
};
