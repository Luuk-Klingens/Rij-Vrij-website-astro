import { defineConfig, passthroughImageService } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://Rij-Vrij.com',
  output: 'server',
  adapter: cloudflare(),
  image: { service: passthroughImageService() },
  build: {
    inlineStylesheets: 'always',
  },
});