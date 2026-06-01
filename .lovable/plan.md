## Problem

Several files contain UTF-8 mojibake — characters that were double-encoded at some point and now render as garbled symbols like `âœ—`, `â†’`, `â±ï¸`. They appear in copy on every case study and in shared components.

## Mapping to apply

| Broken | Intended | Meaning |
|---|---|---|
| `âœ—` | `✗` | cross / "before" bullet |
| `âœ“` | `✓` | check / "after" bullet |
| `â†’` | `→` | right arrow (transitions, breadcrumbs) |
| `â†“` | `↓` | down arrow (metric decreased) |
| `â†‘` | `↑` | up arrow (metric increased) |
| `âˆ’` | `−` | minus sign (e.g. "−20% / −35%") |
| `â±ï¸` | `⏱️` | stopwatch icon (Task Completion metric) |
| `âš ï¸` | `⚠️` | warning icon (User Error Rate metric) |

Each replacement is a like-for-like glyph swap — no copy rewriting, since the surrounding text already makes sense once the intended character is restored.

## Files to update

- `src/pages/KesselRunCaseStudy.tsx` — ✗/✓ before/after bullets, → in "6 → 2 weeks" tag and transition row
- `src/pages/DesignSystemCaseStudy.tsx` — ⏱️ and ⚠️ metric icons, ✗/✓ bullets, → in tags and transition row
- `src/pages/WarfighterResearchCaseStudy.tsx` — ✗/✓ bullets, → in transition row
- `src/pages/MissionReportingCaseStudy.tsx` — → in transition row
- `src/pages/OperationalDashboardCaseStudy.tsx` — → in IA takeaway ("System Overview → Data Source → Metrics")
- `src/components/CaseStudyLayout.tsx` — → in shared transition row
- `src/components/AdoptionImpactTable.tsx` — ↓, ↑, − badges
- `src/components/DashboardMockup.tsx` — ↓ in latency delta, → in breadcrumb
- `src/components/PortfolioEfficiencyChart.tsx` — →, ↓ in labels

## Verification

After edits, re-run a ripgrep for the mojibake sequences across `src/`, `public/`, and `index.html` to confirm zero matches remain, then spot-check the affected case-study routes in the preview.