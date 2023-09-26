import { createGenerator } from 'unocss';
import { expect, test } from 'vitest';
import { presetSkeleton } from '../src';

test('presetStarter', async () => {
  const uno = createGenerator({
    presets: [presetSkeleton()],
  });
  const presets = uno.config.presets;
  expect(presets).toHaveLength(1);
});
