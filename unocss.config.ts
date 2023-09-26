import { defineConfig, presetUno } from 'unocss';
import presetSkeleton from './src';

export default defineConfig({
  presets: [presetUno(), presetSkeleton()],
});
