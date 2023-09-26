import { toEscapedSelector, type Rule } from '@unocss/core';

export const rules: Rule[] = [
  [
    /^codeblock$/,
    (_match, { rawSelector }) => {
      const selector = toEscapedSelector(rawSelector);
      return `
${selector} pre {
  counter-reset: line;
}
${selector} code.lineNumbers > span.line {
  counter-increment: line;
}
${selector} code.lineNumbers > span.line::before {
  content: counter(line) "";
  opacity: 0.5;
}
      `;
    },
  ],
];
