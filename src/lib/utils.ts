export function readTime(body: string): number {
  const wordCount = body.split(/\s+/).length;
  return Math.max(1, Math.round(wordCount / 220));
}

export function formatDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export function slugFromId(id: string): string {
  return id.replace(/\.md$/, '');
}
