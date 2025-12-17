# LOXX-VOX — Project Summary

This repository contains the React + Vite frontend (in `client/`) and supporting artifacts. During cleanup I archived legacy static HTML snapshots and preserved original copies in `backups/original_html/`.

**Status**
- Dev server: Vite dev server runs from `client/` (use `pnpm dev` or `npm run dev` if configured).
- Legacy static snapshots were moved to `legacy_html/*.md` and original copies saved to `backups/original_html/`.
- `tailwind.config.ts` and `vite.config.ts` are present and configured to target the `client/` folder.

**How to run (local dev)**
1. Install dependencies:
```bash
pnpm install
```
2. Start dev server:
```bash
pnpm dev
```
Open http://localhost:5173/ in the container/browser.

**What changed in this cleanup**
- Moved older `.html` snapshots into `legacy_html/` (archived as Markdown).  
- Created `backups/original_html/` with the original `.html` files.  
- Added `client/` skeleton (pages, `components/ui`, `lib/utils`, `global.css`) and an SPA entrypoint at `client/App.tsx` when missing.  
- Restored/kept `tailwind.config.ts` and `vite.config.ts`.

**Files to review before committing further**
- `package.json` was simplified to get the dev loop working; review and re-add any missing dependencies you expect.

**Features present in the most recent system**
- Pages:
   - `client/pages/Index.tsx` (Home)
   - `client/pages/Creator.tsx` (Ebook creator)
   - `client/pages/Projects.tsx` (Projects dashboard)
   - `client/pages/Planner.tsx` (Content planner)
   - `client/pages/Ebook.tsx` (Ebook reader placeholder)
   - `client/pages/NotFound.tsx`
- UI components (under `client/components/ui/`): Button, Card, Input, Textarea (basic primitives used by pages).
- Utilities: `client/lib/utils.ts` (`cn()` helper for classNames + tailwind-merge).
- Styling: `client/global.css` (Tailwind + custom tokens) and `tailwind.config.ts` configured for `client/` content.
- Tooling: `vite.config.ts` (alias `@` → `client`), Vite + SWC React plugin configured.
- Dev workflow: `pnpm install` and `pnpm dev` successfully used during cleanup.
- Legacy management: archived legacy HTML into `legacy_html/*.md` and saved original files to `backups/original_html/`.

If you want, I can:
- Revert any of the archival deletions (restore original `.html` into repo root).
- Restore a full original `package.json` if you have a copy of the previous dependency list.

---

If this matches what you expect, I can finalize by pushing any additional changes or opening a PR with the cleanup details.