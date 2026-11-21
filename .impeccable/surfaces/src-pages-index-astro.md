---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/en/index.astro"]
---

# Home page

Mode: Experience. Mixed audience (studios, collaborators, players). Job: in seconds, know who Deniz (d3xs) is, see the best game, and reach it on itch.io. Sequence (owner-confirmed, kept from v1): header nav, intro (name, handle, tagline, about, profile links), featured game card (Son Hasat), other five games as list rows, contact cards. Bilingual TR (/) and EN (/en/). Windows-only games: primary action is the itch.io page. Only Polar Clash has public source; closed source shows as muted text. Code-led (no image generation).

Replacement world: the owner left the pixel-arcade world ("bi tık daha ciddi") but asked to keep the layout. Safer re-roll; the owner took the standing exit (category standard), with ArtStation profile pages and Steam developer pages named as the craft bar.

Evolution (owner, 2026-11-21): keep the layout, develop the design; owner picked all four proposed design languages to combine: cinematic backdrop, per-game colour, big game cards, editorial typography. Owner also set the Son Hasat main-menu shot as the first image (overriding the earlier review note) and removed the duplicate shot.

Anti-goals (owner's words): template look, heavy/slow, unserious, too corporate.

## Direction contract

THESIS: The category standard for a game developer portfolio, executed at full craft: the work leads in a large screenshot card, everything else is calm, legible dark UI at ArtStation/Steam-developer-page polish. It keeps the owner-approved layout (intro left, featured card right, list rows, contact cards).

OWN-WORLD: Graphite dark ground (#0f1115) with stepped surfaces and hairline borders; one blue for the action (filled buttons #2a6cf0 with white text, links #5b95ff); each game carries its own colour sampled from its screenshots (Son Hasat #b69cff, Eggous #7ed957, Polar Clash #3fd8f0, Takipçi Avı #ff5fa2, SHADEBOUND #ff7a59, Aeternus Depth #3ccf9a) on card edges, top rules, tag pills, filmstrip outline and fact labels, never on the CTA; the hero sits on a cinematic backdrop: the featured game's current screenshot, heavily blurred and darkened, crossfading with the carousel; Geist with editorial weight (display up to 6rem, -0.045em), sections opened by a full-width hairline over a large heading, the featured game's facts set as a ruled colophon (label over value); 8/12/16px radii; soft shadows on cards only.

STORY: Visitor learns Deniz makes multiplayer and atmospheric games in Unity, believes it from the real screenshots, and clicks through to play on itch.io, read source on GitHub, or make contact by email/LinkedIn.

FIRST VIEWPORT: Sticky header (Deniz + d3xs left, nav centre, TR/EN segmented switch right). Hero on the blurred Son Hasat backdrop. Left column, centred against the card: "Deniz" at display size, @d3xs in accent, tagline, about, itch.io/GitHub buttons. Right, dominant: featured card tinted by Son Hasat's colour: crossfading screenshots opening on the main menu (pause top-right), Steam-style five-thumb filmstrip, title row with the blue Oyna button + download hint + closed-source note beside it, a four-column ruled colophon (Tür / Oyuncu / Bakış / Motor), pitch below. Below the hero: "Diğer oyunlar" as large image cards in a 2-then-3 rhythm, each cycling its own screenshots on hover.

FORM: canon (standing exit, safer re-roll round 1), craft bar ArtStation profile + Steam developer page, seed:330440b498b0004f

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
