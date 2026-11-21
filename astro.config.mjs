// @ts-check
import { defineConfig } from 'astro/config';

// Primary address: Cloudflare Pages (denizarhin.pages.dev). The GitHub Pages copy at
// d3xsz.github.io points search engines here through the canonical link in Base.astro.
export default defineConfig({
  site: 'https://denizarhin.pages.dev',
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
