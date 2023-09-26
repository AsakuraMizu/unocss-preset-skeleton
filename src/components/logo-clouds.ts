import type { StaticShortcutMap } from '@unocss/core';

export const shortcuts: StaticShortcutMap = {
  'logo-cloud': ['grid', 'overflow-hidden', /* Theme: Rounded */ 'rounded-container'],
  /* === Logo Item (Child) === */
  'logo-item': [
    'flex-auto',
    'text-center',
    'space-x-4',
    'shadow',
    /* Center Contents */
    'flex',
    'justify-center',
    'items-center',
    'space-x-4',
    /* Background */
    'bg-surface-100-800-token',
    /* Text */
    'text-base',
    'font-bold',
    'text-black',
    'dark:text-white',
    /* Padding */
    'py-4',
    'md:py-8',
    /* === States === */
    'hover:[a&]:brightness-110',
  ],
};
