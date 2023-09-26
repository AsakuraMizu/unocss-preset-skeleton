export const colorNamesCore = ['primary', 'secondary', 'tertiary'];
export const colorNamesCoreRe = `(${colorNamesCore.join('|')})`;
export const colorNamesState = ['success', 'warning', 'error'];
export const colorNamesStateRe = `(${colorNamesState.join('|')})`;
export const colorNames = [...colorNamesCore, ...colorNamesState, 'surface'];
export const colorNamesRe = `(${colorNames.join('|')})`;

export const colorShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export const colors = Object.fromEntries(
  colorNames.map((name) => [
    name,
    Object.fromEntries(
      colorShades.map((shade) => [shade, `rgba(var(--color-${name}-${shade}), %alpha)`]),
    ),
  ]),
);

colors.on = {};
colorNames.forEach((color) => {
  colors[color].DEFAULT ||= colors[color][400] as string;
  colorShades.forEach((shade) => {
    const short = +shade / 100;
    if (short === Math.round(short)) colors[color][short] = colors[color][shade];
  });
  colors.on[color] = `rgb(var(--on-${color}))`;
});

colors.theme = {
  base: 'rgba(var(--theme-font-color-base), %alpha)',
  dark: 'rgba(var(--theme-font-color-dark), %alpha)',
};

const theme: object = {
  colors,
  fontFamily: {
    base: 'var(--theme-font-family-base)',
    heading: 'var(--theme-font-family-heading)',
  },
  borderRadius: {
    base: 'var(--theme-rounded-base)',
    container: 'var(--theme-rounded-container)',
  },
  lineWidth: {
    base: 'var(--theme-border-base)',
  },
};

export default theme;
