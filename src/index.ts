import { type Preset, definePreset } from 'unocss';

export interface FooOptions {}

export default function presetFoo(_options: FooOptions = {}): Preset {
  return definePreset({
    name: 'unocss-preset-starter',
    rules: [['custom-rule', { color: 'red' }]],
    // Customize your preset here
  });
}
