import { type StaticShortcutMap } from '@unocss/core';

export const shortcuts: StaticShortcutMap = {
  /* === Hide Scrollbars === */
  'hide-scrollbar': [
    { '-ms-overflow-style': 'none' /* IE/Edge */, 'scroll-width': 'none' /* Firefox */ },
    '[&::-webkit-scrollbar]:hidden',
  ],
};
