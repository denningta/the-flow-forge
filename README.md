# The Flow Forge

Marketing site for The Flow Forge — digital integration of disparate systems to
streamline information and product flow for small aerospace and industrial
manufacturers.

Next.js 16 (App Router) + Tailwind v4 + shadcn/ui (Base UI flavor), in a
turborepo monorepo with npm workspaces.

```
apps/web        the site
packages/ui     shared components + the single global stylesheet
```

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run lint
npm run format
npm run build
```

`npm run format` only globs `**/*.{ts,tsx}`. Format the stylesheet explicitly:

```bash
npx prettier --write packages/ui/src/styles/globals.css
```

## Before launch

Two placeholders live in `apps/web/lib/site.ts` and must be replaced:

- `schedulingUrl` — the real Calendly/Cal.com booking link. Every CTA routes
  through `components/site/cta-button.tsx`, so this is a one-line change.
- `url` — the real domain. Feeds `metadataBase`, the sitemap, robots.txt, and
  the JSON-LD.

The case study in `lib/content.ts` is fabricated and is labelled "Illustrative
example" on the page. Replace it with a verified engagement or leave the label.

## Editing copy

All page copy lives in `apps/web/lib/content.ts`. Sections under
`apps/web/components/sections/` are presentational and read from it.

## Theming

One stylesheet: `packages/ui/src/styles/globals.css`. Dark gray + forge amber,
defined as oklch CSS variables in `:root` (light) and `.dark` (dark, the
default).

Two amber tokens, deliberately:

- `--primary` — the **fill** amber. Buttons, rules, icon chips, large display
  accents.
- `--brand-ink` — the **text-safe** amber (bronze in light, gold in dark). Use
  this for any amber text.

Never use `text-primary` for body-size text: fill-amber on a light background
is about 2:1 and fails WCAG AA. For the same reason, don't use
`<Button variant="link">` on this site.

## Adding components

```bash
npx shadcn@latest add <component> -c apps/web
```

UI primitives land in `packages/ui/src/components/`. This project uses the
**Base UI** flavor of shadcn/ui, not Radix — composition is `render={<X />}`
rather than `asChild`, a `Button` rendered as an `<a>` also needs
`nativeButton={false}`, and `Accordion` takes no `type` prop with an array
`defaultValue`. See `.agents/skills/shadcn/rules/base-vs-radix.md`.

```tsx
import { Button } from "@workspace/ui/components/button"
```
