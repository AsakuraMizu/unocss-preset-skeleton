import { defineConfig } from 'vite';
import unocss from 'unocss/vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [unocss(), svelte()],
});
