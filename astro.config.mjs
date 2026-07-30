import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.roderick.dev',
  output: 'static',

  build: {
    assets: 'assets',
  },

  integrations: [sitemap()],
});