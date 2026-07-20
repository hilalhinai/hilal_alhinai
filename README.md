# Hilal — Personal Brand Website

Production-ready personal brand and app portfolio site for **Hilal**, an independent AI app
developer. Built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion and Lucide.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run typecheck
```

Deploy to Vercel: push to a Git repo, import the project, accept the defaults. No environment
variables are required to run the site as-is.

---

## Project structure

```
content/posts/          Blog posts as .mdx files (this is your CMS)
public/                 Static assets — app icons, screenshots, favicons, og.png
src/
  app/                  Routes (App Router)
    page.tsx            Home
    about/              About
    apps/               Apps index + [slug] dynamic app pages
    blog/               Blog index + [slug] post pages
    now/                Now page
    contact/            Contact
    privacy/ terms/     Legal pages
    sitemap.ts          Auto-generated sitemap
    robots.ts           robots.txt
    opengraph-image.tsx Default social card, rendered at build time
  components/
    layout/             Navbar, Footer, theme, cookie consent, page transitions
    ui/                 Design-system primitives (Button, Card, Section, Reveal…)
    home/               Home-page sections
    apps/               App card, screenshots, device mockup, store badges, FAQ
    blog/               Post card, search + category explorer
    seo/                JSON-LD structured data
  lib/
    site.ts             Brand, nav, social + footer config  ← edit this first
    apps.ts             App catalogue                        ← add apps here
    posts.ts            Blog loader (server-only)
    blog-config.ts      Blog types/categories (client-safe)
    now.ts              /now page content
    utils.ts            cn(), formatDate(), readingTime()
```

---

## The three files you'll edit most

### 1. `src/lib/site.ts`
Brand name, tagline, production URL, SEO keywords, navigation, social links, footer columns.
**Set `url` to your real domain before deploying** — canonical URLs, Open Graph tags and the
sitemap all derive from it.

### 2. `src/lib/apps.ts`
The app catalogue. Adding an object to the `apps` array automatically creates:

- a card on `/apps` and (if `featured: true`) on the home page
- a full page at `/apps/<slug>` with hero, benefits, screenshots, features, FAQ and legal links
- a sitemap entry and `SoftwareApplication` + `FAQPage` structured data

This is how the site scales to 20+ apps without new code. `platforms` already supports
`ios | android | macos | web`, and `links` accepts App Store, Play Store, Mac App Store, website
and support URLs.

### 3. `content/posts/*.mdx`
Add a file, add a post. Frontmatter:

```yaml
---
title: "Post title"
description: "One-sentence summary used for cards and SEO."
date: "2026-07-19"
category: "building-in-public"   # see src/lib/blog-config.ts
tags: ["indie", "product"]
featured: true
draft: false                      # drafts appear in dev only
---
```

Search and category filtering on `/blog` work client-side with no extra setup.

---

## Design system

Colours are CSS custom properties in `src/app/globals.css` and exposed to Tailwind as semantic
names (`bg-background`, `text-muted`, `border-border`, `text-accent`). Change a value once and both
themes follow.

| Token        | Light     | Dark      |
| ------------ | --------- | --------- |
| `background` | `#FFFFFF` | `#0A0A0A` |
| `foreground` | `#111111` | `#F5F5F5` |
| `muted`      | `#666666` | `#969696` |
| `card`       | `#F8F8F8` | `#161616` |
| `border`     | `#EAEAEA` | `#262626` |
| `accent`     | `#2563EB` | `#6091FF` |

Dark mode is class-based, set before first paint by an inline script in `layout.tsx` (no flash),
and remembered in `localStorage`.

---

## Assets to add

Drop these into `public/` — the site works without them, but they finish the polish:

- `favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`
- `og.png` (1200×630) — optional; a card is generated automatically by `opengraph-image.tsx`
- `apps/<slug>/screen-1.png` … — real screenshots. Until they exist, styled device frames render
  in their place (`src/components/apps/PhoneMockup.tsx`).

---

## Wiring up the placeholders

Three things are intentionally stubbed so you can plug in your own providers:

| What         | Where                                     | To do                                              |
| ------------ | ----------------------------------------- | -------------------------------------------------- |
| Contact form | `src/components/contact/ContactForm.tsx`  | Currently opens a `mailto:`; swap for an API route |
| Analytics    | `src/components/layout/CookieConsent.tsx` | Initialise your script only after consent          |

---

## Newsletter (beehiiv)

The signup form posts to `/api/subscribe`, a server route that forwards to
beehiiv with your API key attached. The key never reaches the browser.

Set two environment variables — see `.env.example`:

```
BEEHIIV_API_KEY=...
BEEHIIV_PUBLICATION_ID=pub_...
```

Locally, put them in `.env.local` (gitignored). In production, add them under
**Vercel → Project → Settings → Environment Variables**, then redeploy —
environment variables are read at build and runtime, so an existing deployment
won't pick them up on its own.

If the variables are missing the form fails gracefully with "Newsletter is not
configured yet" rather than crashing.

---

## SEO and accessibility

Included: per-page metadata and canonical URLs, Open Graph and Twitter cards, JSON-LD for Person,
WebSite, SoftwareApplication, BlogPosting, FAQPage and BreadcrumbList, a generated sitemap and
robots.txt, and a web manifest.

Accessibility: skip-to-content link, visible focus rings, labelled form fields and icon buttons,
semantic landmarks, and full `prefers-reduced-motion` support — every animation disables itself for
users who ask for that.

---

## Notes

- The legal pages are readable templates, not legal advice. Have them reviewed before launch.
- `src/lib/posts.ts` is marked `server-only`; import blog types from `blog-config.ts` in client
  components.
