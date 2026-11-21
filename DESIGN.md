---
name: d3xs
description: A game developer's portfolio in graphite dark UI, lit by the games' own screenshots and colours.
colors:
  accent-strong: "#2a6cf0"
  accent-strong-hover: "#3b7bf7"
  accent: "#5b95ff"
  accent-hover: "#7aa9ff"
  accent-ink: "#ffffff"
  bg: "#0f1115"
  surface: "#161920"
  surface-hover: "#191c24"
  surface-2: "#1d2129"
  surface-3: "#252a34"
  filmstrip: "#12151b"
  border: "#272c36"
  border-strong: "#363c48"
  border-hover: "#444b59"
  text: "#e8eaee"
  text-2: "#a4aab6"
  text-3: "#7d8493"
  hue-son-hasat: "#b69cff"
  hue-eggous: "#7ed957"
  hue-polar-clash: "#3fd8f0"
  hue-takipci-avi: "#ff5fa2"
  hue-shadebound: "#ff7a59"
  hue-aeternus-depth: "#3ccf9a"
typography:
  display:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(3.25rem, 7vw, 6rem)"
    fontWeight: 750
    lineHeight: 0.92
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)"
    fontWeight: 750
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  headline-featured:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.75rem, 2.6vw, 2.25rem)"
    fontWeight: 750
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.125rem, 1.45vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  fact-value:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 550
    lineHeight: 1.6
  label:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 550
    lineHeight: 1.2
  label-caps:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "0.08em"
  caption:
    fontFamily: "Geist, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  frame: "6px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  pill: "999px"
spacing:
  xs: "6px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  card-gap: "20px"
  xl: "24px"
  gutter: "clamp(16px, 3vw, 40px)"
  section: "clamp(72px, 9vw, 120px)"
components:
  button-primary:
    backgroundColor: "{colors.accent-strong}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "10px 22px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.accent-strong-hover}"
  button-secondary:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    height: "40px"
  button-secondary-hover:
    backgroundColor: "{colors.surface-3}"
  button-ghost:
    textColor: "{colors.text-2}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    height: "40px"
  button-ghost-hover:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.text}"
  tag:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.text-2}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "3px 10px"
  badge:
    backgroundColor: "{colors.surface-3}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "2px 8px"
  card-featured:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
  filmstrip:
    backgroundColor: "{colors.filmstrip}"
    padding: "10px 16px"
  filmstrip-frame:
    rounded: "{rounded.frame}"
  card-game:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
  card-game-body:
    padding: "20px 22px 22px"
  card-contact:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "16px 18px"
    height: "64px"
  card-contact-hover:
    backgroundColor: "{colors.surface-hover}"
  lang-switch:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "3px"
  lang-switch-segment:
    textColor: "{colors.text-3}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "5px 10px"
  lang-switch-segment-current:
    backgroundColor: "{colors.surface-3}"
    textColor: "{colors.text}"
  nav-link:
    textColor: "{colors.text-2}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "8px 14px"
  nav-link-hover:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.text}"
---

# Design System: d3xs

## Overview

**Creative North Star: "The Lit Developer Page"**

A dark developer page at ArtStation and Steam polish that four languages light up together. The first is a cinematic backdrop: the hero sits on the featured game's own screenshot, blurred into a glow. The second is per-game colour: each game carries one hue sampled from its screenshots. The third is big image-led game cards. The fourth is editorial typography: a large, tightly tracked name, ruled section heads and a colophon of facts. Under all of it the canon holds: a graphite ground, stepped surfaces, hairlines, one blue for actions and a single typeface.

The work supplies the colour. The UI owns only blue, and blue is reserved for action, links and focus. Every other hue on screen comes from a game, either its screenshots or the colour sampled from them. That colour stays on the game's own card: its border, top rule, tags, active filmstrip frame and colophon labels.

Motion is slow where it carries the work and quick where it answers a pointer. The backdrop crossfades over 1200ms and the featured shot over 700ms, every 5s. Card galleries step every 1.1s while hovered. State changes take 150 to 250ms, and cards lift 3px. Reduced motion removes all of it.

**Key Characteristics:**
- The hero is lit by the featured game's current screenshot, blurred and washed toward the ground.
- One hue per game, mixed into its own card's border, rule, tags and labels; never into an action.
- One blue: filled for the primary action, lighter for links, handle and focus.
- Big 16:9 image-led game cards in a 2-then-3 grid, whose galleries cycle on hover.
- Editorial type: an oversized, tightly tracked name, section heads under full-width hairlines, a ruled colophon of facts.
- Geist variable throughout; 6 / 8 / 12 / 16px radii; soft two-layer shadows on cards only.

## Colors

A cool graphite scale and one blue for the interface; colour beyond that belongs to the games.

### Primary
- **Signal Blue** (`accent-strong`): the fill for the one primary action in each context (the featured "Oyna / Play" button, the skip link). It always carries white text (`accent-ink`), and hover steps to `accent-strong-hover`.
- **Link Blue** (`accent`): the text-weight accent: the @handle under the name, focus rings, the contact-card arrow on hover, and the filmstrip outline when there is no game hue. Text selection uses it at 35% (`rgb(91 149 255 / 0.35)`).

### Tertiary: game hues
One colour per game, sampled from its screenshots and set on the card as `--hue`: Son Hasat (`hue-son-hasat`, lilac), Eggous (`hue-eggous`, leaf green), Polar Clash (`hue-polar-clash`, ice cyan), Takipçi Avı (`hue-takipci-avi`, hot pink), SHADEBOUND (`hue-shadebound`, ember orange), Aeternus Depth (`hue-aeternus-depth`, sea green). They are always mixed with the neutrals via `color-mix(in oklab, …)`, at these strengths:
- **Card border at rest:** 18% hue into `border`. The featured card uses 28%.
- **Card border on hover or focus:** 55%, plus a 1px outer ring at 25% hue.
- **Card body top rule:** 2px of pure hue.
- **Tags:** text at 55% hue into `text`, fill at 10% into `surface-2`, border at 26% into `border`.
- **Colophon labels:** 70% hue into `text-2`.
- **Filmstrip active frame:** a 2px inset outline in pure hue.
- **Card title on hover:** pure hue.

### Neutral
- **Graphite Ground** (`bg`): the page background, the hero's bottom fade, and `theme-color`.
- **Graphite Surface** (`surface`): every card at rest, and the language-switch track. The featured card uses it at 92% opacity over the backdrop.
- **Hover Surface** (`surface-hover`): the hovered contact card.
- **Raised Surface** (`surface-2`): secondary buttons, the tag base, and nav-link hover.
- **Top Surface** (`surface-3`): secondary-button hover, the current language segment, and the neutral status badge.
- **Filmstrip** (`filmstrip`): the strip under the featured stage, a step darker than the card.
- **Hairline** (`border`), **Strong Hairline** (`border-strong`), **Hover Hairline** (`border-hover`). Strong Hairline also rules every section head.
- **Primary Text** (`text`), **Secondary Text** (`text-2`), **Tertiary Text** (`text-3`, used for hints, muted notes, details and the footer).

### Named Rules
**The One Blue Rule.** Blue is the only hue the interface owns, and it marks action, links and focus. A game hue never fills or tints a button, the "Oyna / Play" CTA above all.

**The Own Colour Rule.** A game's hue appears only on that game's own surface (card border, top rule, tags, filmstrip frame, colophon labels, title hover), always mixed toward the neutrals except for the 2px rule, the frame outline and the title hover. A hue never leaks onto shared chrome or another game.

**The Neutral Status Rule.** Status badges ("Geliştirmede / In development") are neutral (`text` on `surface-3` with `border-strong`). No green or other signal colour competes with the game hues.

## Typography

**Display Font:** Geist variable (self-hosted; the latin and latin-ext subsets together cover all Turkish letters), with system-ui, -apple-system, Segoe UI, sans-serif as fallbacks
**Body Font:** Geist (the same family)

**Character:** One neutral grotesk used editorially. Heavy weights (750) with steep negative tracking at the top, intermediate weights (550, 650) for UI, and one small uppercase tracked label for facts. Hierarchy comes from size, weight and rules, never from a second family.

### Hierarchy
- **Display** (`display`): the name "Deniz" in the hero, once per page. The handle under it is 1 to 1.1875rem, weight 500, tracking 0, in Link Blue.
- **Headline** (`headline`): section heads (Oyunlar / Games, İletişim / Contact), each with a body-text intro line.
- **Featured headline** (`headline-featured`): the featured game title, sharing its row with the actions.
- **Title** (`title`): game card titles in plain `text` color, turning to the game hue on hover.
- **Lead** (`lead`): the tagline, max 32ch (42ch when stacked).
- **Body** (`body`): the about copy at 46ch; the featured pitch at 1.0625rem, 64ch.
- **Body small** (`body-sm`): card pitches, nav links and contact labels.
- **Fact value** (`fact-value`): colophon values.
- **Label** (`label`): buttons. The primary button bumps to 1rem.
- **Label caps** (`label-caps`): colophon terms only, uppercase, tinted by the game hue.
- **Caption** (`caption`): tags, the language switch (600 weight, +0.02em), contact details. Badges and the gallery count use 0.75rem at 600.

### Named Rules
**The Tight Display Rule.** Tracking tightens as size grows: -0.045em on the display name, -0.035em on section heads, -0.03em on the featured title, -0.02em on card titles, and 0 at body size. Display and headlines set solid (0.92 to 1.05 line height).

**The Ruled Head Rule.** Every section head sits under a full-width Strong Hairline, with 20px above the heading. A rule plus size marks a section; no label sits above the heading.

**The Colophon Rule.** Uppercase tracked type is used only for the terms of a fact list (`dt`), each followed directly by its value. It is never used as a heading prefix or decoration.

## Layout

Content is capped at 1440px and centred, with a fluid gutter (`spacing.gutter`). Sections end with `spacing.section` of padding.

- **Header:** sticky, with a three-column grid (brand at the start, nav in the centre, language switch at the end) and a hairline bottom border. At ≤860px it becomes two columns and the nav moves to its own row.
- **Hero:** a full-width band that clips its backdrop. Inside it, the intro grid sets the identity column (`minmax(300px, 0.8fr)`) against the featured card (`1.5fr`). The identity and about blocks centre vertically against the card. At ≤1099px it stacks: identity, then the featured card, then the about block.
- **Game grid:** six columns with 20px gaps. The first two cards span 3 columns, and the rest span 2, giving a 2-then-3 rhythm. At ≤860px it is a single column.
- **Card body:** grid rows `auto auto 1fr auto` (title, tags, pitch, actions), so actions share a baseline across a row of cards.
- **Colophon:** four ruled columns, 2×2 at ≤860px.
- **Contact:** an auto-fit grid of `minmax(220px, 1fr)` with 12px gaps.
- **Rhythm:** steps of 6 / 8 / 10 / 12px inside components; 16 / 20 / 24 / 28px between blocks.

## Elevation & Depth

Depth comes in three layers. Light comes from the work: the blurred screenshot behind the hero. Structure comes from tone: stepped surfaces and hairlines. Lift comes from soft two-layer shadows, on cards only.

### Shadow Vocabulary
- **Card rest** (`box-shadow: 0 1px 2px rgb(0 0 0 / 0.3), 0 8px 24px -12px rgb(0 0 0 / 0.5)`): the featured card.
- **Card lift** (`box-shadow: 0 2px 4px rgb(0 0 0 / 0.3), 0 16px 32px -12px rgb(0 0 0 / 0.6)`): game cards on hover or focus-within, with a 1px hue ring at 25%, a 3px rise and the 55% hue border.

### Cinematic Backdrop
- **Image:** the hero's backdrop is the featured game's current screenshot, a 480px-wide image covering a box that overflows the hero by 80px.
- **Filter:** `blur(56px) saturate(1.4) brightness(1.15)`.
- **Timing:** it crossfades over 1200ms on the ease-out curve, in step with the carousel.
- **Desktop wash:** three layers over the image. A local radial darkening behind the text column (`rgb(15 17 21 / 0.55)` at 18% 52%), a horizontal darkening from 0.6 to 0 by 55%, and a bottom fade into `bg` from 55%.
- **Wash at ≤1099px:** a vertical wash from 0.5 to 0.45 at 45%, then into `bg`.

### Named Rules
**The Cards-Only Shadow Rule.** Shadows belong to cards. Buttons, tags, header and text never cast one.

**The Light From The Work Rule.** Ambient colour comes only from the screenshots themselves, blurred. There are no invented gradients, glows or decorative light sources.

## Shapes

Radius scales with the container:
- **6px** (`rounded.frame`): filmstrip frames.
- **8px** (`rounded.sm`): buttons, nav links and language segments.
- **12px** (`rounded.md`): contact cards and the language-switch track.
- **16px** (`rounded.lg`): the featured card and the game cards.
- **Pills** (`rounded.pill`): tags, badges, the pause control and the gallery count.

Borders are 1px. The two exceptions are the 2px hue rule on card bodies and the dashed border on an empty contact slot. Screenshots are always 16:9, shown at native fidelity on a true-black backing.

Icons are authored 24px line glyphs with a single 1.75 stroke and round caps and joins (play, pause, code, gamepad, mail, linkedin, arrow, images). They inherit `currentColor` and render at 14 to 20px. Play is the only filled glyph.

## Components

### Buttons
Buttons are restrained and solid: flat fills, hairline borders, and a 1px press-down on `:active`.
- **Primary:** Signal Blue with white text, 44px tall, 10px 22px, 1rem. Use one per context.
- **Secondary:** Raised Surface with a Strong Hairline border, stepping to Top Surface and the Hover Hairline on hover.
- **Ghost:** transparent with a Hairline border and secondary text. It is the "Kaynak / Source" link on cards.
- **Focus:** the global 2px Link Blue outline at a 3px offset.

### Tags and Badges
- **Tags:** pills tinted by the game hue (see Colors), in caption type, 3px 10px. Without a hue they fall back to the neutral tag.
- **Badge:** a neutral pill, for "in development" only.

### Muted Notes
An absent link is never hidden. Its slot shows "Kaynak kapalı / Source closed" in tertiary text with a code icon, on cards and in the featured card at every width. At ≤560px it centres under the download hint.

### Featured Card (signature)
- **Card:** Graphite Surface at 92% over the backdrop, a 28% hue border, a 16px radius, the card-rest shadow, clipped to the radius.
- **Stage:** a 16:9 stage that crossfades five shots every 5s (700ms, ease-out), opening on the Son Hasat main menu.
- **Pause control:** a 32px round button in the stage's top-right corner, on a dark translucent disc.
- **Filmstrip:** five 16:9 thumbnail buttons on the filmstrip band, 8px gaps, with a bottom hairline. Frames sit at 55% opacity, 85% on hover, and 100% when current, with a 2px inset outline in the game hue.
- **Rotation:** pauses on hover, on focus inside the card, while the tab is hidden, and on the user's pause. Under reduced motion it starts paused.
- **Body, title row:** the featured headline, sharing a row (space-between, wrapping) with the blue Oyna, the download hint and the closed-source note.
- **Body, colophon:** four facts (Genre, Players, View, Engine) between top and bottom hairlines, with hairline dividers between columns.
- **Body, pitch:** the pitch closes the body.

### Game Card
- **Card:** Graphite Surface with an 18% hue border and a 16px radius, clipped.
- **Media:** a 16:9 image at the top, stacked over the card's extra screenshots. On hover or focus the frames step every 1.1s with a 450ms crossfade, only to frames that have loaded. They return to the cover on leave, and do not cycle under reduced motion.
- **Gallery count:** a dark pill (an "images" icon plus n/total in tabular numerals) at the media's bottom-right. It shows only on hover or focus and is hidden on `hover: none` devices.
- **Body:** 2px hue top rule; rows for title (and badge), tags, pitch and actions; 20px 22px 22px padding (18px at ≤560px).
- **Actions:** a secondary Play button and a ghost Source link, or the muted note.
- **Hover / focus:** the card-lift shadow plus a hue ring, a 55% hue border and a 3px rise. The title turns to the game hue.

### Contact Card
Graphite Surface, Hairline border, 12px radius, 64px minimum height. A secondary-text icon, a label over a truncating detail line (the full detail is in the title tooltip), and a trailing arrow that turns Link Blue and nudges 2px up-right on hover, over Hover Surface. An unset contact renders as a dashed tertiary card reading "Eklenecek / Coming soon".

### Navigation
- **Section nav:** body-small links in secondary text with an 8px radius. Hover lifts them to primary text on Raised Surface.
- **Language switch:** a segmented control. The track is Graphite Surface with a 12px radius and a 3px inset. Segments are 8px, in tertiary text; the current segment is Top Surface in primary text.

## Do's and Don'ts

### Do:
- **Do** keep one filled Signal Blue button per context, and use Link Blue for links, the handle and focus.
- **Do** give each game one hue sampled from its screenshots, and apply it only through `--hue` on that game's own card, at the documented mix strengths.
- **Do** light the hero only with the featured game's current screenshot, blurred, under the documented wash.
- **Do** lead game cards with a 16:9 screenshot, and keep the 2-then-3 grid with actions aligned on a shared baseline.
- **Do** set section heads under a full-width Strong Hairline, and present facts as a ruled colophon.
- **Do** show absent links as muted tertiary text ("Kaynak kapalı"), at every width.
- **Do** pause any auto-advancing media on hover, focus, a hidden tab and the user's request, and start it paused (or never cycle it) under reduced motion.
- **Do** draw new icons as 24px line glyphs with a 1.75 stroke and round caps and joins.

### Don't:
- **Don't** put a game hue on a button, the CTA, the header or another game's card.
- **Don't** use a signal colour (green, red) for status; badges stay neutral.
- **Don't** use uppercase tracked labels as heading prefixes; uppercase is for colophon terms only.
- **Don't** introduce a second typeface, or invented gradients and glows not taken from the screenshots.
- **Don't** hide a missing link anywhere, so cards never lose their shape.
- **Don't** put shadows on buttons, tags or text.
- **Don't** filter, tint or stylize the screenshots themselves; only the backdrop copy is blurred.
