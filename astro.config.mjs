import { defineConfig, passthroughImageService } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://rij-vrij.nl',
  output: 'server',
  adapter: cloudflare(),
  image: { service: passthroughImageService() },
  build: {
    inlineStylesheets: 'always',
  },
});