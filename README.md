# unocss-preset-template

UnoCSS preset quickstart template.

## Features

- 🔥 Description of the preset

## Usage

```shell
pnpm i -D unocss-preset-foo unocss
```

```ts
// unocss.config.ts
import { defineConfig } from 'unocss';
import presetFoo from 'unocss-preset-foo';

export default defineConfig({
  presets: [
    // ...
    presetFoo(),
  ],
});
```
