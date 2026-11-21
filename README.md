# Deniz Arhın · Portfolio

Personal portfolio of Deniz Arhın, game developer. Live at **https://denizarhin.github.io** (Turkish) and **https://denizarhin.github.io/en/** (English).

Built with [Astro](https://astro.build), deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Run locally

Requires Node 22.12 or newer (`.node-version` pins 24).

```sh
npm install
npm run dev      # http://localhost:4321
```

```sh
npm run build    # static site in dist/
npm run preview  # serve the built site
```

## Edit content

- Text, name and contact links (TR + EN): `src/data/site.ts`
- Games, screenshots and per-game colours: `src/data/games.ts`, images in `src/assets/games/<slug>/`
- Page layout and styles: `src/components/Home.astro`, `src/styles/global.css`
- Design rules: `DESIGN.md`; product notes: `PRODUCT.md`

## Restore point

The git tag `ilk-hal` marks the approved design before later additions. To go back to it, restore the tree from that tag in a new commit.
