// @ts-check
import { defineConfig } from 'astro/config';

// Primary address: GitHub Pages. A Cloudflare Pages copy also builds at
// denizarhin.pages.dev, but *.pages.dev is blocked by some Turkish ISPs (checked
// 2026-11-21), so it must not be the canonical address. Switch `site` to a custom
// domain (e.g. denizarhin.dev) once one is connected.
export default defineConfig({
  site: 'https://d3xsz.github.io',
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
