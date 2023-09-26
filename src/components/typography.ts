import type { StaticShortcutMap } from '@unocss/core';

const ins_del_shared = [
  'block',
  'relative',
  'p-0.5',
  'pl-5',
  'decoration-none',
  'before:absolute',
  'before:left-1',
  'before:font-mono',
  'font-mono',
];

export const shortcuts: StaticShortcutMap = {
  /* === Headings === */
  h1: 'font-heading text-3xl md:text-5xl',
  h2: 'font-heading text-2xl md:text-4xl',
  h3: 'font-heading text-xl md:text-2xl',
  h4: 'font-heading text-lg md:text-xl',
  h5: 'font-heading text-base md:text-lg',
  h6: 'font-heading text-sm md:text-base',

  /* === Elements === */
  /* p { ... } */
  anchor: 'text-primary-700 dark:text-primary-500 hover:brightness-110 underline',
  blockquote: 'text-token text-base italic border-l-8 border-l-secondary-500 px-4 pl-4',
  /* Keyboard */
  kbd: [
    'font-sans',
    'font-bold',
    'text-sm',
    'bg-surface-300-600-token',
    'px-1.5',
    'py-3px',
    'rounded',
    'ring-1',
    'ring-surface-900',
    'ring-inset',
    'border-b-2',
    'border-surface-900',
  ],
  /* Timestamps */
  time: 'text-sm text-surface-500-400-token',

  /* === Preformatted / Code === */
  /* For use outside of Skeleton's CodeBlock component */
  pre: 'font-mono text-base bg-neutral-900/90 text-white p-4 whitespace-pre-wrap overflow-x-auto rounded-container',
  code: [
    'font-mono',
    'text-xs',
    'text-primary-700',
    'dark:text-primary-400',
    'whitespace-nowrap',
    'bg-primary-500/30',
    'dark:bg-primary-500/20',
    'py-0.5',
    'px-1',
    'rounded',
  ],

  /* === Insertions / Deletions  ==== */
  /* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins */
  /* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del */
  ins: [...ins_del_shared, 'before:content-["+"]', 'bg-success-500', 'text-on-success'],
  del: [...ins_del_shared, 'before:content-["-"]', 'bg-error-500', 'text-on-error'],
};
