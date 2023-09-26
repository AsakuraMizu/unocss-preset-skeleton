# unocss-preset-skeleton

**_Experimental_**

Port of [Skeleton](https://www.skeleton.dev/) for UnoCSS.

## Usage

_I'll publish this package on npm later but not now so please install from github or try [playground](playground)_

```shell
pnpm add -D unocss-preset-skeleton unocss @skeletonlabs/skeleton
pnpm add @unocss/reset
```

```ts
// unocss.config.ts
import { defineConfig, presetUno } from 'unocss';
import presetSkeleton from 'unocss-preset-skeleton';
import extractorSvelte from '@unocss/extractor-svelte';

export default defineConfig({
  content: {
    filesystem: ['./node_modules/@skeletonlabs/skeleton/dist/**/*.{html,js,svelte,ts}'],
  },
  extractors: [extractorSvelte()],
  presets: [
    presetUno(), // Uno preset is required
    presetSkeleton({
      themes: {
        preset: [
          { name: 'skeleton', enhancements: true },
          { name: 'wintry', enhancements: true },
          // ...
        ],
      },
    }),
  ],
});
```

```html
<!-- +layout.svelte -->
<script>
  import 'uno.css';
  import '@unocss/reset/tailwind-compat.css';
</script>
```

Or if you don't use SvelteKit:

```ts
// main.ts
import 'uno.css';
import '@unocss/reset/tailwind-compat.css';
```

**Note:** Fonts are not managed. You should use [Web Fonts preset](`https://unocss.dev/presets/web-fonts`) or [Fontsource](https://fontsource.org/docs/) or download font file in skeleton repo and load manually. These fonts include:

- Abril Fatface used by vintage theme
- Playfair Display used by seafoam theme
- Quicksand used by gold-nouveau and modern theme
- Space Grotesk used by rocket theme

## Difference with `@skeletonlabs/tw-plugin`

It's a superset of `@skeletonlabs/tw-plugin`.

- Dynamic token: for example `bg-primary-200-300-token` is also allowed.
- Fluent use of theme vars: all theme css variables are interpreted and added to UnoCSS, for example class `font-base` is `.font-base { font-family: var(--theme-font-family-base) }`. Refer to [theme.ts](src/theme.ts). `.font-base { font-family: var(--theme-font-family-base) }`.  
  (So I discourage the use of most design tokens with this preset because their functionality can be achieved by UnoCSS "natively". You can refer to [border-radius.ts](src/tokens/border-radius.ts) or [text.ts](src/tokens/text.ts) and see that these tokens are just aliases for compatibility!)
- Some internal styles like `button-base-styles` are not included because differences in implementation. Anyway no one should use them.
- Base styles only includes direct transpilation of [core.css](src/styles/base/core.css) [elements.css](src/styles/base/elements.css) [forms.css](src/styles/base/forms.css) without design tokens and components. I don't know why their tailwind plugin ships these classes in base styles.
