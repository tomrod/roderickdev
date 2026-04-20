import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.roderick.dev',
  output: 'static',
  build: {
    assets: 'assets',
  },
});
