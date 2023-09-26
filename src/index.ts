import { definePreset, type Preflight } from '@unocss/core';
import type { Options } from './types';
import theme from './theme';
import tokens from './tokens';
import * as components from './components';
import { themes, themeToCss } from './themes';
import baseCSS from './styles/generated/base';

export const presetSkeleton = definePreset((options: Options = {}) => {
  const preflights: Preflight[] = [];

  if (options.base ?? true) {
    preflights.push({
      layer: 'base',
      getCSS() {
        return baseCSS;
      },
    });
  }

  let themesCSS = '';
  options.themes?.custom?.forEach((theme) => {
    themesCSS += themeToCss(theme, true);
  });
  options.themes?.preset?.forEach((config) => {
    if (typeof config === 'string') config = { name: config, enhancements: false };
    themesCSS += themeToCss(themes[config.name], config.enhancements);
  });
  if (themesCSS) {
    preflights.push({
      layer: 'themes',
      getCSS() {
        return themesCSS;
      },
    });
  }

  return {
    name: 'unocss-preset-skeleton',
    prefix: options.prefix,
    theme,
    rules: [...components.rules],
    shortcuts: [...tokens, ...components.shortcuts],
    preflights,
  };
});

export default presetSkeleton;

export { getThemeProperties } from './themes';
export type * from './types';
