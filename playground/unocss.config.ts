import { defineConfig, presetUno, transformerDirectives } from 'unocss';
import extractorSvelte from '@unocss/extractor-svelte';
import presetSkeleton from '../src';

export default defineConfig({
  content: {
    filesystem: ['./node_modules/@skeletonlabs/skeleton/dist/**/*.{html,js,svelte,ts}'],
  },
  extractors: [extractorSvelte()],
  transformers: [transformerDirectives()],
  presets: [
    presetUno(),
    presetSkeleton({
      themes: {
        preset: [
          { name: 'skeleton', enhancements: true },
          { name: 'wintry', enhancements: true },
        ],
      },
    }),
  ],
});
