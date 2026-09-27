# Project Recovery Notes

## Startup Identity
- Startup name: CleanStack OS
- Project folder: /Users/joshuadavis/startups/cleanstack-os
- Domain:
- One-line description: A premium workstation-health system that helps developers, creators, AI builders, founders, and teams identify, archive, and clean unneeded local files safely.
- Category: workstation health, disk cleanup, developer tools, creator tools, local compute optimization
- Stage: mvp

## Product Vision
- Target user: Developers, founders, AI builders, creators, studios, and technical teams with overloaded local machines.
- Core problem: Modern machines get clogged with caches, generated artifacts, dependencies, datasets, and inactive project folders while users do not know what is safe to delete.
- Core solution: Workflow-aware cleanup intelligence that classifies clutter risk and recommends delete, archive, compress, move, or protect actions.
- Differentiation: CleanStack OS prioritizes safe archive-first decisions and workflow context instead of blind generic cleaning.
- MVP goal: Ship a production-ready premium site and app-shell demo that clearly explains the product and captures waitlist/demo demand.
- Long-term vision: Extend into a lightweight SwiftUI macOS menu bar utility with scheduled scans, safe quick clean, and evolving workflow packs.

## Website/App Structure
- Main routes: /, /product, /features, /use-cases, /integrations, /pricing, /analytics, /docs, /about, /faq, /waitlist, /request-demo, /launch, /changelog, /sign-in, /privacy, /terms, /app, /app/command-center, /app/command-palette, /app/scan, /app/archive, /app/reports, /app/notifications, /app/settings, /app/team, /app/machines/builder-laptop, /app/projects/local-model-lab, /admin/leads, /admin/leads/[id], /admin/summary, /api/waitlist, /api/admin/export-leads
- Key components: app shell header/sidebar/search, responsive mobile nav, shared glass/system card components via global styles.
- Data/content files: data/waitlist.json, public/graphics/*.svg, route-level product copy in app pages.
- API routes: /api/waitlist and /api/admin/export-leads are active and used by waitlist/admin flows.
- Auth/database needs: No auth required for MVP. Local JSON waitlist storage in use. Supabase helper exists but not required.

## Design Direction
- Visual style: Cold premium precision software UI with obsidian/graphite base and ice-blue + subtle mint accents.
- Tone: Systems-first, calm, technical, trustworthy, non-generic.
- Layout principles: Strong spacing, responsive sections, reusable shells, low-clutter visual hierarchy.
- Brand notes: Position as workstation-health infrastructure; avoid generic SaaS and avoid Noaerth-style drift.

## What Was Preserved
- Useful pages: Full public route set, app preview shell routes, admin lead routes, API routes.
- Useful components: mobile-nav, app-shell-header, app-sidebar, app-search.
- Useful copy: Workflow-aware cleanup, archive-first recommendations, safe system decisions, Dev/Studio/AI packs.
- Useful assets: Existing graphics set including hero-workstation, cleanup-intelligence, archive-intelligence, ai-storage-ops, product-system-map, pricing-stack, dashboard-orbit.
- Useful technical decisions: pnpm lockfile flow, local waitlist JSON store, CSV lead export endpoint, Next app-router structure.

## What Was Fixed
- Build issues: Replaced broken homepage iframe with native product homepage and removed duplicate Next config files causing invalid config warnings.
- TypeScript issues: Build-time type checks pass in Next build.
- Dependency issues: pnpm install validated and lockfile retained.
- Routing issues: Verified required routes and API endpoints are present and reachable.
- Design/content issues: Removed external Noaerth embed drift and restored CleanStack OS premium messaging on home page.

## What Was Removed
- Generated artifacts: Cleaned in final cleanup step (node_modules, .next, tsbuild cache, logs, .DS_Store where present).
- Duplicate files: next.config.js and next.config.mjs removed to keep single config source.
- Broken code: Homepage iframe shell pointing to external domain removed.
- Unused dependencies: None removed in this cycle.
- Large files: No source assets >25MB retained; only generated binary in node_modules was large and later removed via cleanup.

## Current Build Status
- pnpm install: pass
- pnpm lint: pass
- pnpm typecheck: skipped (script does not exist in package.json)
- pnpm build: pass
- Vercel readiness: ready for manual deploy

## Manual Deploy Command

cd /Users/joshuadavis/startups/cleanstack-os
pnpm install
pnpm build
vercel --prod

## Return-Later Commands

cd /Users/joshuadavis/startups/cleanstack-os
pnpm install
pnpm build

## Next Best Tasks
1. Add richer cleanup candidate preview interactions in app demo routes.
2. Add onboarding/protect-list route and connect from app settings.
3. Improve metadata/structured SEO across high-intent public pages.
4. Add lead segmentation filters by role/intent/source in admin inbox.
5. Tighten launch copy alignment with macOS menu bar utility roadmap.

## Autobuilder Guardrails
- Do not: claim automated destructive cleanup is already live in web app; run npm; auto deploy; auto push; remove core routes/assets.
- Preserve: product truth, route coverage, waitlist/admin APIs, graphics identity, pnpm lock and config.
- Improve next: app demo realism, SEO, admin intelligence, onboarding clarity, launch readiness docs.
- Avoid drift toward: Noaerth visuals, generic SaaS templates, unrelated startup messaging, risky fake AI claims.
