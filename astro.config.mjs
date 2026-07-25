import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';

export default defineConfig({
  site: 'https://www.roderick.dev',
  output: 'static',
  build: {
    assets: 'assets',
  },
  markdown: {
    remarkPlugins: [remarkGfm],
  },
});