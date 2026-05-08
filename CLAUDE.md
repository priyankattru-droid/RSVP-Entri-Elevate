# Entri Elevate — Waitlist Prototype

## Current status
- Course listing screen is running (`pnpm run dev` → localhost:5173)
- Component: `src/imports/AllContentToolTipToStartWhichVideoToWatch/AllContentToolTipToStartWhichVideoToWatch.tsx`
- Visual fixes needed before building new screens:
  1. Course title — needs `font-bold text-[18px]`
  2. Live class card illustration — grey hourglass placeholder, needs correct asset from `public/`
  3. "Live Class • 10 PM • 30 Apr" — wrapping to two lines, needs `whitespace-nowrap`
  4. Tooltip positioning needs refinement
  5. UPCOMING tag on live class card — fixed with inline styles
- Next after fixes: Waitlist bottom sheet (see RSVP-DESIGN.md §6)
- Screens left to build:
  1. Waitlist bottom sheet — 4 states: just joined, started lessons, all lessons completed, class imminent
  2. Leave waitlist snackbar with undo (no confirmation dialog)
  3. Waitlist onboarding story (3 slides explaining what waitlist is)

## What this is
Interactive prototype for Entri Elevate, an edtech skilling experiment targeting Tier 2/3 learners in India. This prototype covers the RSVP waitlist flow for demand-driven live classes and the credit score dashboard.

## Stack
- Vite + React + TypeScript
- Tailwind CSS
- Deployed on Vercel
- Initial code exported from Figma Make, then refined

## Design system: EntriVerse Beta
- **Font:** Inter throughout
- **Entri Blue:** #0061b5 (primary actions, links)
- **Entri Green:** #00805c (inline CTAs in content list)
- **Primary text:** #212121
- **Subtext:** #616161
- **Surface:** #f6f6f6
- **Borders:** #f0f0f0
- **Corner radii:** 8px default, 16px for cards
- **Spacing tokens:** xs, sm, md, lg, xl, 2xl, 3xl
- **Tonal pill buttons:** #e6f3ff background, #0061b5 text
- **Figma design system file:** KjZWlCkNvEKuOnfPMXxqS9
- **Figma screens file:** lFODogr9vbXrXE3uNTrCk0

## Key files
- `RSVP-DESIGN.md` — full spec for the RSVP waitlist flows (LCT/LCI model, all states, user flows, screen structure, confirmed decisions). **Read this before building any RSVP-related feature.**

## Project structure
- `src/app/App.tsx` — main app component
- `src/imports/` — individual UI components exported from Figma Make
- `src/styles/` — theme, global, Tailwind, and font CSS files
- `public/` — static assets (images copied from Figma Make exports)

## Dev notes
- Use inline styles when Tailwind JIT doesn't pick up dynamic classes
- `pnpm run dev` to start dev server
- AppStatusBar imports from `../AppStatusBar-1/AppStatusBar-1-13247`
- Chips imports from `../Chips/Chips`
- `declarations.d.ts` in `src/` for PNG type declarations
- Assets in `public/` folder referenced as `/filename.png`
- Bottom sheet: 85% height, sticky "leave waitlist" footer, rest scrolls
- Leave waitlist uses snackbar with undo (no confirmation dialog)
- Recording shown to all users regardless of days to class

## Design conventions
- Mobile-first: 390px base width (Android/iOS webview)
- All content unlocked from Day 1 — no content gates, no locked weeks
- Bottom sheet is the interaction surface for all live class actions (no separate screens)
- Course Home is the single screen; everything overlays it
- Snackbars for action confirmations (join, leave, rejoin waitlist)
- Tooltip for first-time user education (shown once, dismissible)

## RSVP flow rules
- Single RSVP, no reconfirmation — user joins waitlist once, gets reminded
- Waitlist opens only when an LCI (Live Class Instance) is mapped to an LCT (Live Class Template)
- After live session ends, LCI reverts to LCT state ("waitlist not open")
- Canonical recording is always accessible, regardless of waitlist state
- After joining waitlist, CTA changes to show remaining prerequisite count
- Reminders at T-24h, T-1h, and T-15min

## Credit system rules
- AC (Applied Competency) = 60%, LC (Learning Credit) = 20%, DC (Discipline Credit) = 10%, CC (Contribution Credit) = 10%
- Milestones at 50 (profile goes live) and 75 (course complete)
- Archetype is decided upstream by academic team, not user-selected

## Inline CTA states (displayed in Entri Green #00805c)
- Upcoming live class (LCI scheduled) → "Join waitlist"
- LCT only / waitlist not open / seats full → "View recorded session"
- Joined waitlist, prerequisites remaining → "View 3 more lessons"
- Joined waitlist, prerequisites complete → "View recorded session"

## Assets
- Images are in `public/` as static files, referenced with `/filename.png`
- Do NOT use Figma MCP asset URLs — they expire in 7 days
- When adding new assets from Figma, download and place in `public/`

## Deployment
- Vercel, connected via GitHub
- No build commands needed beyond Vite defaults
- Push to main branch triggers auto-deploy
