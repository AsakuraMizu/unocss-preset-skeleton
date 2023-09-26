export function combineVariant(cls: string, variant: string): string {
  const arr = cls.split(':');
  const base = arr.pop()!;
  arr.push(variant, base);
  return arr.join(':');
}

export function wrapVariant(clss: string[], variant: string): string[] {
  return clss.map((cls) => combineVariant(cls, variant));
}

export function wrapVariants(clss: string[], variants: string[]): string[] {
  return variants.flatMap((variant) => wrapVariant(clss, variant));
}
