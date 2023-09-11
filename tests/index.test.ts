import { createGenerator } from 'unocss';
import { expect, test } from 'vitest';
import { presetFoo } from '../src';

test('presetStarter', async () => {
  const uno = createGenerator({
    presets: [presetFoo()],
  });
  const presets = uno.config.presets;
  expect(presets).toHaveLength(1);
});
