import 'uno.css';
import '@unocss/reset/tailwind-compat.css';
import './app.css';
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app')!,
});

export default app;
