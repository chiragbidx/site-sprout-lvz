# Changelog
<!--
  Purpose:
  - Track project change history over time.
  - Record date, summary, and key files touched for each change set.
  - Keep entries append-only (do not delete past entries).
-->

## 2026-03-22
- Rebranded core UI to "ClientFlow" for homepage, navbar, dashboard, and everywhere brand is visible.
- Rewrote homepage content (content/home.ts) for CRM messaging, value, features, testimonials, FAQ.
- Updated navbar: "ClientFlow" name, CRM-themed routes, CTA labels, and brand icon.
- Sidebar nav updated to show: Dashboard, Contacts, Deals, Overview (+ Team/Settings), all "ClientFlow" branded.
- Created minimal dashboard routes for Contacts, Add Contact, Deals, Create Deal, Overview, all with CRM language, empty states, and CTA flows.
- Updated authentication UI for sign in/up, forgot password, etc., to use "ClientFlow" headlines, actions, and help text.
- All empty states reflect "no contacts", "no deals", and clear suggested next steps.
- Footer, contact form, legal/copyright, links all refactored to reference ClientFlow.
- Owner/contact info set to Chirag Dodiya (chirag@bidx.ai), per project instructions.
- Files modified: content/home.ts, components/layout/navbar.tsx, components/dashboard/sidebar-nav.tsx, all new and updated dashboard routes, authentication UIs.

## 2026-03-19
- Hardened `scripts/dev-supervisor.js` for Railway/container runtime:
  - `GIT_BOOTSTRAP` now defaults to `true` when `REPO_URL` is provided (can be disabled via `GIT_BOOTSTRAP=false`).
  - `GIT_POLL` default is `true` (can be disabled via `GIT_POLL=false`).
  - Removed destructive runtime git cleanup behavior (`git clean -fd`).
  - Added `pnpm exec next` fallback when `.bin/next` is not found.
  - Added explanatory inline comments for future maintainers/agents.
- Updated Next config to set explicit Turbopack root to project root (`turbopack.root`).
- Updated Docker app image install step to force clean dependency install:
  - `RUN rm -rf node_modules && pnpm install --prefer-offline --no-frozen-lockfile`
- Updated README supervisor/runtime notes to match current defaults and env-file behavior.