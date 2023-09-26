import type { Rule, StaticShortcutMap } from '@unocss/core';
import { wrapVariant, wrapVariants } from '../utils';

export const rules: Rule[] = [
  ['__webkit-appearance-none', { '-webkit-appearance': 'none' }, { internal: true }],
];

const input_shared = [
  'w-full',
  'transition',
  'duration-200',
  /* Background */
  'bg-surface-200-700-token',
  'focus:brightness-105',
  'hover:brightness-105',
  /* Ring */
  '!ring-0',
  /* Border */
  'border-token',
  'border-surface-400-500-token',
  'focus-within:border-primary-500',
];

/* === States === */
const input_disabled = [
  'disabled:!opacity-50',
  'disabled:!cursor-not-allowed',
  'hover:disabled:!brightness-100',
];
const input_readonly = [
  'read-only:!border-0',
  'read-only:!cursor-not-allowed',
  'hover:read-only:!brightness-100',
];

/* Checkbox & Radio */
const checkbox_shared = [
  'w-5',
  'h-5',
  '!ring-0',
  'rounded',
  'cursor-pointer',
  /* Background */
  'bg-surface-200-700-token',
  'focus:brightness-105',
  'hover:brightness-105',
  /* Border */
  'border-token',
  'border-surface-400-500-token',
  'focus:border-primary-500',
];

const checkbox_checked_shared = [
  'bg-primary-500',
  'hover:bg-primary-500',
  'focus:bg-primary-500',
  'focus:ring-0',
];

export const shortcuts: StaticShortcutMap = {
  /* === Text Labeling === */
  legend: 'font-heading-token text-xl md:text-2xl',
  label: ['space-y-1'],

  /* === Core Styles === */

  /* Base Inputs */
  input: [
    ...input_shared,
    ...input_disabled,
    ...input_readonly,
    'rounded-token',
    /* === Specialized === */
    /* File Inputs */
    '[&[type="file"]]:p-1',
    /* Color Picker */
    /* https://stackoverflow.com/questions/11167281/webkit-css-to-control-the-box-around-the-color-in-an-inputtype-color */
    ...wrapVariant(
      [
        'border-none',
        'w-10',
        'h-10',
        'overflow-hidden',
        'rounded-token',
        'cursor-pointer',
        /* WebKit Only */
        '__webkit-appearance-none',
        '[&::-webkit-color-swatch-wrapper]:p-0',
        '[&::-webkit-color-swatch]:border-none',
        'hover:[&::-webkit-color-swatch]:brightness-110',
        '[&::-moz-color-swatch]:border-none',
      ],
      '[&[type="color"]]',
    ),
  ],

  /* Container Inputs */
  textarea: [...input_shared, ...input_disabled, ...input_readonly, 'rounded-container-token'],
  /* Select (size/multiple) */
  select: [
    ...input_shared,
    ...input_disabled,
    ...input_readonly,
    'rounded-container-token',
    'p-2',
    'pr-8',
    'space-y-1',

    '[&[size]]:bg-none',

    ...wrapVariant(
      [
        'space-y-1',
        'font-bold',
        ...wrapVariant(['ml-0', 'pl-0', 'first-of-type:mt-3', 'last:!mb-3'], 'all-[option]'),
      ],
      'all-[optgroup]',
    ),
    ...wrapVariant(
      [
        'bg-surface-200-700-token',
        'px-4',
        'py-2',
        'rounded-token',
        'cursor-pointer',
        'checked:bg-red',
        'checked:bg-gradient-to-t',
        'checked:from-primary-500',
        'checked:to-primary-500',
        'checked:text-on-primary-token',
      ],
      'all-[option]',
    ),
  ],
  /* Checkbox & Radio */
  checkbox: [
    ...checkbox_shared,
    ...wrapVariants(checkbox_checked_shared, ['checked', 'indeterminate']),
  ],
  radio: [...checkbox_shared, ...wrapVariant(checkbox_checked_shared, 'checked'), 'rounded-token'],

  /* === Input Groups === */
  'input-group': [
    ...input_shared,
    'rounded-token',
    ...wrapVariants(input_disabled, ['all-[input]', 'all-[textarea]', 'all-[select]']),
    'grid',
    'overflow-hidden',
    ...wrapVariants(['border-0', '!ring-0', 'bg-transparent'], ['all-[input]', 'all-[select]']),
    'all-[option]:all-[select]:bg-surface-200-700-token',
    ...wrapVariants(
      ['px-4', 'flex', 'justify-between', 'items-center'],
      ['all-[div]', 'all-[a]', 'all-[button]'],
    ),
  ],
  'input-group-divider': [
    ...wrapVariants(
      [
        'border-l',
        'border-surface-400-500-token',
        'focus:border-surface-400-500-token',
        /* Disable Ring */
        '!ring-0',
        /* Prevent buttons from being squished */
        '!min-w-fit',
      ],
      ['all-[input]', 'all-[select]', 'all-[div]', 'all-[a]'],
    ),
    'first:all:!border-l-0',
  ],
  'input-group-shim': 'bg-surface-400/10 text-surface-600-300-token',

  /* === Variants === */
  /* success */
  'input-success':
    '!bg-success-200 !border-success-500 !text-success-700 placeholder:text-success-700',
  /* warning */
  'input-warning':
    '!bg-warning-200 !border-warning-500 !text-warning-700 placeholder:text-warning-700',
  /* error */
  'input-error': '!bg-error-200 !border-error-500 !text-error-700 placeholder:text-error-700',
  /* Material */
  'variant-form-material': [
    /* Border Radius */
    '!rounded-tl',
    '!rounded-tr',
    '!rounded-bl-none',
    '!rounded-br-none',
    /* Background */
    'bg-surface-500/10',
    'dark:bg-surface-500/20',
    /* Border */
    'border-0',
    'border-b-2',
    /* Blur / high CPU usage on some browsers, see https://github.com/skeletonlabs/skeleton/issues/1805 */
    /* 'backdrop-blur', */
    '[&[type="file"]]:!py-1.5',
  ],
};
