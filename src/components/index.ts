import type { Rule, StaticShortcut, StaticShortcutMap, DynamicShortcut } from '@unocss/core';
import * as alerts from './alerts';
import * as badges from './badges';
import * as breadcrumbs from './breadcrumbs';
import * as buttons from './buttons';
import * as cards from './cards';
import * as chips from './chips';
import * as codeblocks from './codeblocks';
import * as dividers from './dividers';
import * as forms from './forms';
import * as lists from './lists';
import * as logoClouds from './logo-clouds';
import * as modals from './modals';
import * as placeholders from './placeholders';
import * as popups from './popups';
import * as scrollbars from './scrollbars';
import * as typography from './typography';
import * as variants from './variants';

export const rules: Rule[] = [...codeblocks.rules, ...forms.rules];

export const shortcuts: (StaticShortcutMap | StaticShortcut | DynamicShortcut)[] = [
  alerts.shortcuts,
  badges.shortcuts,
  breadcrumbs.shortcuts,
  buttons.shortcuts,
  cards.shortcuts,
  chips.shortcuts,
  dividers.shortcuts,
  forms.shortcuts,
  lists.shortcuts,
  logoClouds.shortcuts,
  modals.shortcuts,
  placeholders.shortcuts,
  popups.shortcuts,
  scrollbars.shortcuts,
  typography.shortcuts,
  ...variants.shortcuts,
];
