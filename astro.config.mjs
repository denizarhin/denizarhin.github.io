// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages: set `site` (and `base` if deployed to a project page,
// e.g. https://d3xsz.github.io/portfolio → base: '/portfolio').
export default defineConfig({
  site: 'https://d3xsz.github.io',
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
