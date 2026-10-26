# Design

> Auto-generated and maintained by frontend-god-mode.
> Source of truth for typography, color, motion, layout, and component tokens.
> Read this BEFORE touching the UI in any subsequent session.

## Aesthetic direction

Corporate installer site for Sysnet in Riyadh. Navy and cool paper, photo-led, numbered scopes. Color and lettering follow the measured gmeksa.com sample (navy #0E2843, weight 500, normal tracking, 5px uppercase buttons) without copying that site’s copy or claims.

## Dials

- DESIGN_VARIANCE: 7 / 10
- MOTION_INTENSITY: 6 / 10
- VISUAL_DENSITY: 5 / 10

## Type stack

- Display: Outfit, weight 500, letter-spacing normal
- Body: Outfit, weight 400
- Arabic body and navigation: IBM Plex Sans Arabic, weights 400–600
- Arabic headings: Noto Naskh Arabic, weight 600, looser line height
- Mono: IBM Plex Mono (indexes and partner names only)
- The navbar language control is a flag menu: the United Kingdom flag for English, the Saudi flag for Arabic. Arabic sets `dir="rtl"` and drops uppercase on buttons. Phone numbers and email stay left-to-right.
- Buttons: uppercase, weight 500, 5px radius, navy fill on paper, paper fill on navy
- Section headings stand alone. No small uppercase line above a heading.
- Loaded via: `next/font/google`

Banned in this project: Inter, Roboto, Arial, system-ui. Outfit is the geometric cut closest to the reference site’s Rig Sans.

## Color tokens

```css
:root {
  --navy: #0b3c5d;
  --navy-deep: #07283d;
  --ice: #ebf5fb;
  --paper: #f4f8fb;
  --ink: #12293a;
  --muted: #3d5668;
  --line: #d3e2ec;
  --orange: #ff5722;       /* large marks only */
  --orange-deep: #c2410c;  /* highlight tiles and small accent text; white label passes AA */
  --orange-soft: #ffd7cc;
  --card: #f7fbfd;
  --danger: #8e2f2f; /* form errors only */
}
```

Page, ice bands, and navy photo sections use this earlier palette. Highlighted tiles (the active sector, the featured service card) are `--orange-deep`. Quote buttons stay navy.

## Shadows

```css
--shadow-lift: 0 28px 60px -32px rgb(14 40 67 / 0.4);
```

Tinted toward navy. No pure-black drops.

## Motion

- Library: Framer Motion. GSAP is not used. Document scroll stays native. The embedded preview reports reduced motion; motion still runs there. A real reduced-motion setting skips entrances and the hero autoplay.
- Hero: a full-bleed carousel. Photographs are cameras, conduit, patch leads, and the door station. The panel slides; the `01 / 05` counter stays. Previous and next are chevrons inside one frosted pill. On a phone the hero is shorter than the viewport, the body clamps to four lines, and the buttons span the column.
- Sections: when they enter, the heading slides in from the inline start and the lines under it rise. Card groups stagger up. Photographs fade and settle from a slight scale. One shot each, ease-out expo, transform and opacity only.
- Page template: short slide between routes, no opacity hide
- Services rail: opens with a short upward slide and fade (transform and opacity). The line itself moves by native horizontal scroll, smooth only when motion is allowed.
- CSS hover easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- `prefers-reduced-motion` skips GSAP, and content stays visible because nothing is hidden in CSS
- Banned: bounce, elastic, width/height animation, scroll listeners, continuous transforms on full-bleed photos

## Layout

- Container: `max-w-[1400px] mx-auto px-4 md:px-10`
- Reading width: `max-w-[65ch]`
- Hero: full-viewport-width photograph, `min-h-[calc(100dvh-4rem)]`. Copy is inset in the 1400px column and aligned to the start. Controls sit on the bottom edge.
- Services: one highlighted card plus a divide list, not three identical cards
- Projects: horizontal snap rail
- Sectors and job steps: numbered strips
- Mobile: single column, `px-4`, sticky header with a menu

## Component inventory

- SiteHeader (text links, one navy quote button, a flag language menu, Services opens a horizontal rail of the eleven lines), SiteFooter, Hero, Landing, CaseRail, Stats, QuoteForm, PageHero
- Lucide icons, stroke 1.5
- No shadcn

## Project-specific bans

- No invented ministry licences or named client logos
- Project copy is labeled as typical Riyadh scopes
- No emojis
- No `h-screen` (hero uses `min-h-[calc(100dvh-4rem)]`)

## Brand voice

- Tone: direct, technical, local to Riyadh
- Banned: elevate, seamless, unleash, next-gen, game-changing
- Buttons: "Explore services", "Request a survey", "Call the desk"

## Accessibility floor

- WCAG AA contrast on body and button labels
- Focus-visible rings
- Form fields have visible labels
- 44px targets on header, buttons, and FAQ summaries
- Skip link to `#content`

## Last updated

2026-10-15 — Sysnet landing: royal blue, orange actions, Plus Jakarta Sans, GSAP, photo-led home plus services, projects, and contact.
2026-10-15 — Navbar and footer use the supplied Sysnet mark (`logo-pic.jpeg`) and SYSNET TECHNOLOGY wordmark (`logo.jpeg`). White canvas removed so the lockup sits on the light bar and the navy footer.
2026-10-15 — Removed the small uppercase kickers above section headings. Headings carry the section on their own.
2026-10-16 — Home scroll is tied to the scrollbar: sections rise as they enter, photographs drift, and the page eases behind the wheel.
2026-10-24 — Navy #0E2843, Outfit at weight 500, 5px uppercase buttons. ScrollSmoother removed. Service photos remapped to the trade they show.
2026-10-24 — Section backgrounds returned to the earlier royal blue, ice, and orange highlight tiles.
2026-10-25 — Arabic version from the navbar. IBM Plex Sans Arabic for text, Noto Naskh Arabic for headings, right-to-left layout.
2026-10-25 — Services navbar control opens a paper horizontal rail with 5px arrow buttons. gmeksa.com uses a short vertical dropdown; the rail keeps that navy restraint without copying the stack.
2026-10-25 — Language control is a flag menu. Entrances start before first paint so they are visible in the preview.
2026-10-25 — Hero carousel of four company scopes. Scroll entrances moved from GSAP to Framer Motion.
2026-10-26 — Hero is a full-bleed carousel: skyline, then the four scopes. The panel slides; the counter and arrows stay.
2026-10-26 — Hero arrows are a frosted chevron pill. Slide photos are cameras, conduit, and patch leads. Phone hero is a shorter stack with full-width buttons.
