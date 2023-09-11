import { defineConfig } from 'unocss';
import extractorSvelte from '@unocss/extractor-svelte';
import presetFoo from '../src';

export default defineConfig({
  extractors: [extractorSvelte],
  presets: [presetFoo()],
});
