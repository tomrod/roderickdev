import { describe, it, expect } from 'vitest';

function linearize(c: number): number {
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function luminance(r: number, g: number, b: number): number {
  return 0.2126 * linearize(r / 255) + 0.7152 * linearize(g / 255) + 0.0722 * linearize(b / 255);
}

function contrast(l1: number, l2: number): number {
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

function hex(h: string): [number, number, number] {
  const n = parseInt(h.replace('#', ''), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function oklch(L: number, C: number, H: number): [number, number, number] {
  const h = (H * Math.PI) / 180;
  const a = C * Math.cos(h), b = C * Math.sin(h);
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.2914855480 * b;
  const lc = l_ ** 3, mc = m_ ** 3, sc = s_ ** 3;
  const r  =  4.0767416621 * lc - 3.3077115913 * mc + 0.2309699292 * sc;
  const g  = -1.2684380046 * lc + 2.6097574011 * mc - 0.3413193965 * sc;
  const bv = -0.0041960863 * lc - 0.7034186147 * mc + 1.7076147010 * sc;
  const toSRGB = (c: number) =>
    c <= 0 ? 0 : c >= 1 ? 255 : Math.round((c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055) * 255);
  return [toSRGB(r), toSRGB(g), toSRGB(bv)];
}

function ratio(fg: [number, number, number], bg: [number, number, number]): number {
  return contrast(luminance(...fg), luminance(...bg));
}

const AA_NORMAL = 4.5;

// CSS custom property values from global.css
const light = {
  bg:     hex('#f5f3ef'),
  subtle: hex('#eceae4'),
  text:   hex('#1c1b18'),
  muted:  hex('#6b6860'),
  accent: oklch(0.48, 0.12, 242),
};

const dark = {
  bg:     oklch(0.16, 0.02, 228),
  text:   hex('#e6e2da'),
  muted:  hex('#8a8680'),
  accent: oklch(0.67, 0.12, 18),
};

describe('WCAG AA contrast (4.5:1) — light mode', () => {
  it('--text on --bg', () => {
    expect(ratio(light.text, light.bg)).toBeGreaterThanOrEqual(AA_NORMAL);
  });

  it('--muted on --bg', () => {
    expect(ratio(light.muted, light.bg)).toBeGreaterThanOrEqual(AA_NORMAL);
  });

  it('--muted on --bg-subtle (tightest pair)', () => {
    expect(ratio(light.muted, light.subtle)).toBeGreaterThanOrEqual(AA_NORMAL);
  });

  it('--accent on --bg', () => {
    expect(ratio(light.accent, light.bg)).toBeGreaterThanOrEqual(AA_NORMAL);
  });
});

describe('WCAG AA contrast (4.5:1) — dark mode', () => {
  it('--text on --bg', () => {
    expect(ratio(dark.text, dark.bg)).toBeGreaterThanOrEqual(AA_NORMAL);
  });

  it('--muted on --bg', () => {
    expect(ratio(dark.muted, dark.bg)).toBeGreaterThanOrEqual(AA_NORMAL);
  });

  it('--accent on --bg', () => {
    expect(ratio(dark.accent, dark.bg)).toBeGreaterThanOrEqual(AA_NORMAL);
  });
});
