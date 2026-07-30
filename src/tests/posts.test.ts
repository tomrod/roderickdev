import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const POSTS_DIR = join(import.meta.dirname, '../content/posts');

function parseFrontmatter(content: string): Record<string, string> {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  return Object.fromEntries(
    match[1]
      .split('\n')
      .filter(line => line.includes(':'))
      .map(line => {
        const idx = line.indexOf(':');
        return [line.slice(0, idx).trim(), line.slice(idx + 1).trim().replace(/^["']|["']$/g, '')];
      })
  );
}

const postFiles = readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));

describe('post frontmatter', () => {
  it('finds at least one post', () => {
    expect(postFiles.length).toBeGreaterThan(0);
  });

  for (const file of postFiles) {
    const content = readFileSync(join(POSTS_DIR, file), 'utf-8');
    const fm = parseFrontmatter(content);

    it(`${file}: has a title`, () => {
      expect(fm.title, `${file} is missing a title`).toBeTruthy();
    });

    it(`${file}: has a valid date`, () => {
      const d = new Date(fm.date);
      expect(isNaN(d.getTime()), `${file} has an invalid date: "${fm.date}"`).toBe(false);
    });

    it(`${file}: filename date matches frontmatter date`, () => {
      const fileDate = file.slice(0, 10); // YYYY-MM-DD prefix
      const fmDate = fm.date?.slice(0, 10);
      expect(fmDate, `${file} filename/frontmatter date mismatch`).toBe(fileDate);
    });
  }
});
