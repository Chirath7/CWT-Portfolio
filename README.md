# Creative Web Technology — Portfolio Site

A Next.js 14 (App Router) + Tailwind CSS portfolio site showcasing six real data-engineering
and analytics engagements: Allianz, Sri Lanka Customs (CDNS + DAT), Dilmah, Amana Bank, and a
Customer Data Platform build.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this folder to a GitHub repo (or drag-and-drop the folder into vercel.com/new).
2. Import the repo at https://vercel.com/new — Vercel auto-detects Next.js, no config needed.
3. Click Deploy.

## Editing project content

All case-study copy lives in `data/projects.ts` — edit that file to add, remove, or update
projects. Each project automatically gets a card on the homepage grid and its own page at
`/projects/[slug]`.

## Structure

- `app/page.tsx` — homepage (hero, trust bar, value props, project grid, stats, approach, capabilities, CTA)
- `app/projects/[slug]/page.tsx` — case study detail template
- `app/contact/page.tsx` — contact page
- `components/` — all homepage sections
- `data/projects.ts` — all project content (single source of truth)
