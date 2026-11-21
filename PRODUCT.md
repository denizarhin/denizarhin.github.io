# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Astro (static output). Chosen because the site is content-led (a set of game project pages plus an about section), Astro content collections let each game live as its own Markdown/MDX entry with typed frontmatter, its built-in i18n routing covers the required Turkish + English versions without a client-side framework, and it ships near-zero JavaScript by default so screenshot-heavy pages stay fast.

Deploy: delegated: GitHub Pages via GitHub Actions. The owner's games are already on GitHub, so hosting the site there keeps everything in one place, costs nothing, and supports a custom domain later.

## Users

Mixed, deliberately broad audience. The owner wants the site to work for anyone who lands on it: game studios and recruiters evaluating them, potential collaborators or clients, and players curious about the games. No single audience is prioritized; every visitor's job is the same at its core: see what games this person has made, understand who they are, and get to the playable build or source.

## Product Purpose

A personal portfolio for an independent game developer (Unity). It presents the games they have developed and an about section introducing them. Success: a visitor quickly understands what the owner builds, can browse each project, and can follow through to play it on itch.io or view its source on GitHub.

## Positioning

The site's claim is the work itself: real, playable games with public builds and source. It should let the games speak first rather than rely on self-description.

## Operating Context

- Games are built in Unity.
- Games are published on itch.io (playable builds) and on GitHub (source/repos). Each project page should link out to whichever of these exist for that game.
- Visitors arrive from links (CV, social profiles, itch.io, GitHub) on both desktop and mobile.

## Capabilities and Constraints

- Sections: projects (one entry per game, each with its own page) and an about section ("hakkımda"). Further sections are not yet decided.
- Bilingual: Turkish and English, with a language switch. Content must exist in both languages; neither is a machine-translated afterthought.
- Static site; no backend.
- Open decisions: the owner's display name/handle and contact channels; which specific games are featured and in what order; whether a CV/résumé download is included; custom domain.

## Brand Commitments

None established yet. No name, logo, or personal identity assets have been provided.

## Evidence on Hand

- Screenshots of the games: the owner has them (not yet added to the project).
- Not available: gameplay videos, GIFs, trailers, logo, profile photo. Do not fabricate these; use clearly marked placeholders until real assets arrive.
- No testimonials, press, awards, download counts, or employer/client names have been provided. Do not invent any.

## Product Principles

1. The games lead. Every page should get a visitor to a game's screenshots and its itch.io/GitHub links with minimal friction.
2. One site for every visitor. Avoid tailoring tone to a single audience (recruiter-speak or player hype); state plainly what each game is and what the owner did.
3. Both languages are first-class. Structure and content are authored for Turkish and English equally.
4. Only real proof. Claims, numbers, and assets on the site must be ones the owner has actually supplied.
5. Easy to extend. Adding a new game should mean adding one content entry and its screenshots, not editing layout code.
