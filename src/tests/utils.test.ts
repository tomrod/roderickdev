import { describe, it, expect } from 'vitest';
import { readTime, formatDate, slugFromId } from '../lib/utils';

describe('readTime', () => {
  it('returns 1 for very short content', () => {
    expect(readTime('hello world')).toBe(1);
  });

  it('returns 1 minimum even for empty string', () => {
    expect(readTime('')).toBe(1);
  });

  it('calculates correctly at 220 words (boundary)', () => {
    const body = Array(220).fill('word').join(' ');
    expect(readTime(body)).toBe(1);
  });

  it('rounds up past the midpoint', () => {
    const body = Array(330).fill('word').join(' '); // 330/220 = 1.5 → rounds to 2
    expect(readTime(body)).toBe(2);
  });

  it('scales linearly for longer posts', () => {
    const body = Array(1100).fill('word').join(' '); // 1100/220 = 5
    expect(readTime(body)).toBe(5);
  });
});

describe('formatDate', () => {
  it('formats a date as YYYY-MM-DD', () => {
    expect(formatDate(new Date('2026-03-05T00:00:00Z'))).toBe('2026-03-05');
  });

  it('zero-pads month and day', () => {
    expect(formatDate(new Date('2020-09-04T00:00:00Z'))).toBe('2020-09-04');
  });

  it('handles year boundaries correctly', () => {
    expect(formatDate(new Date('2025-01-01T00:00:00Z'))).toBe('2025-01-01');
  });
});

describe('slugFromId', () => {
  it('strips .md extension', () => {
    expect(slugFromId('2026-03-05-ai-is-a-tool.md')).toBe('2026-03-05-ai-is-a-tool');
  });

  it('leaves strings without .md unchanged', () => {
    expect(slugFromId('some-slug')).toBe('some-slug');
  });

  it('only strips a trailing .md, not mid-string', () => {
    expect(slugFromId('file.md.backup')).toBe('file.md.backup');
  });

  it('handles nested path ids', () => {
    expect(slugFromId('subdir/post.md')).toBe('subdir/post');
  });
});
