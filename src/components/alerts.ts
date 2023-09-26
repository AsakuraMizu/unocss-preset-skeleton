import type { StaticShortcutMap } from '@unocss/core';

export const shortcuts: StaticShortcutMap = {
  alert: [
    'flex',
    'flex-col',
    'items-start',
    'lg:items-center',
    'lg:flex-row',
    'p-4',
    'space-y-4',
    'lg:space-y-0',
    'lg:space-x-4',
    /* Text */
    'text-surface-900-50-token',
    /* Rounded */
    'rounded-container-token',
  ],
  'alert-message': 'flex-auto space-y-2',
  'alert-actions': 'flex items-center space-x-2',
};
