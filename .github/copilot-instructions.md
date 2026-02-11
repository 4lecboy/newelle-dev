# Repository guidance for AI coding agents — Newelle (newelle-dev)

## Quick summary ✅

- Next.js (App Router) TypeScript portfolio using Tailwind CSS, Framer Motion and Lucide icons.
- Client-heavy UI: many components are client components (see `app/page.tsx` which uses `"use client"`).
- No CI/workflows or existing `.github/*` agent rules detected — create changes as self-contained PRs.

---

## Big picture (what matters) 🔎

- Entry points: `app/layout.tsx` (fonts, global wrappers) and `app/page.tsx` (composes sections).
- UI is section-driven: `HeroSection`, `AboutSection`, `ProjectsSection`, `ShopifySection`, `ContactSection`.
- Styling: Tailwind utility classes + a small theme (design tokens like `bg-background`, `panel-border`, `text-primary`).
- Animations & visibility: heavy use of `framer-motion` + `useInView` patterns for staggered reveals.
- Shopify content is presented as _code snippets/examples_ in `components/ShopifySection.tsx` (Liquid samples) — there is no live Shopify API integration in this repo.

---

## Concrete developer workflows & commands (run locally) ⚙️

- Start dev server: `npm run dev` → http://localhost:3000
- Build for prod: `npm run build` then `npm start`
- Lint: `npm run lint` (ESLint)
- No test runner or CI config present in repository (additions must include instructions if you add them).

---

## Project-specific conventions (use these exactly) 🔧

- App Router + client components: add `"use client"` at top of any component that uses state, effects, browser APIs, or framer-motion (see `app/page.tsx`, `components/Navigation.tsx`).
- Class composition: use the `cn(...)` helper from `lib/utils.ts` (it wraps `clsx` + `tailwind-merge`).
- Breakpoint logic: mobile detection centralised in `hooks/use-mobile.tsx` (MOBILE_BREAKPOINT = 768). Prefer it for mobile-only behavior.
- Accessibility pattern: navigation uses `<button>` for in-page scrolling and provides `aria-label` for toggles — follow this for interactive elements.
- Images: components use plain `<img src=...>` (not Next `Image`) — be conservative when optimizing (external URLs used in examples).
- External links: always include `target="_blank" rel="noopener noreferrer"` (see `ProjectCard.tsx`).

---

## Data shapes & examples (copy-paste friendly) 🧩

- Project object (used by `ProjectsSection.tsx` / `ProjectCard.tsx`):

```ts
{
  title: string,
  description: string,
  techStack: string[],
  imageUrl: string,
  liveUrl?: string,
  githubUrl?: string
}
```

- Shopify project sample (used in `ShopifySection.tsx`) contains `codeSnippet` (Liquid string) — treat as display-only example.

---

## Where to make common edits (fast wins) ✨

- Change hero text / typing sample: `components/HeroSection.tsx`.
- Add / update projects: `components/ProjectsSection.tsx` (update the `projects` array) + optional images in `public/` or external URLs.
- Add nav item: update `navLinks` array in `components/Navigation.tsx` and add the target section `id` in the page.
- Modify theme tokens or colors: update Tailwind config (repo expects `tailwind.config.*` — add if missing) and `app/globals.css`.

---

## Integration points & external deps to watch 🧭

- Key libraries: `next`, `react`, `tailwindcss@4`, `framer-motion`, `lucide-react`, `clsx` + `tailwind-merge`.
- Shopify: only example Liquid snippets in the UI — do not assume runtime Shopify SDKs or API keys exist.
- Fonts: injected via `next/font/google` in `app/layout.tsx` (font variables are applied to `body`).

---

## Debugging tips & tests to run manually 🐞

- Layout/scroll issues: reproduce with mobile breakpoint in DevTools (768px cutoff matches `use-mobile` hook).
- Animations not triggering: check `useInView` margin and `viewport` options in components (common cause of missing reveals).
- Broken external images: verify `imageUrl` strings in `ProjectsSection.tsx` / `ShopifySection.tsx`.
- Linting: run `npm run lint` — fix by following existing ESLint + Next.js rules.

> Important: there are no unit/integration tests or CI workflows in the repo — include clear manual QA steps in PRs.

---

## Safe-edit checklist for automated agents ✅

1. Follow the App Router rule: if you add state/effects, mark the file `"use client"`.
2. Use `cn(...)` from `lib/utils.ts` for conditional class names.
3. Preserve accessibility patterns (buttons for JS navigation, `aria-label`s, `rel` on external links).
4. Update README.md for any user-visible change (projects, contact info, deployment notes).
5. Add a small CHANGELOG entry in the PR description and include manual QA steps.

---

## Example agent prompts (use these) 💡

- "Add a new project card following the existing `ProjectCard` pattern — include `title`, `techStack`, `imageUrl`, `liveUrl`, and add the item to `ProjectsSection.tsx`. Ensure aria and `rel` attributes match existing cards."
- "Refactor a component to use `cn()` for class composition and add a unit test scaffold (note: repo has no test runner — include setup instructions in PR)."

---

If any area here is unclear or you'd like more examples (PR template, CI config, or automated tests), tell me which section to expand and I will update this file. ✅
