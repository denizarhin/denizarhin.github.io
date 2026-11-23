// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// Primary address: GitHub Pages from the denizarhin organization (the owner's
// personal account stays d3xsz). *.pages.dev is blocked by some Turkish ISPs
// (checked 2026-11-21), so Cloudflare Pages is not used as the address.
export default defineConfig({
  site: 'https://denizarhin.github.io',
  devToolbar: { enabled: false },

  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
    routing: { prefixDefaultLocale: false },
  },

  integrations: [react()],
});