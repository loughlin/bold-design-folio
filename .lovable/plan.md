## What I found

The codebase has a recurring encoding issue: UTF-8 characters were saved as if they were Latin-1, leaving mojibake sequences like `â€"`, `â€¢`, `â€º`, and broken emoji like `ðŸ› ` in the rendered UI. None of these display correctly in the browser — they appear as garbled glyphs. No copy needs to be rewritten; only the broken characters need to be restored to what they were meant to be.

## Findings and replacements

### En dashes (`â€"` → `–`)

These appear inside date ranges. They render as three random Latin characters on the page.

- `src/pages/KesselRunCaseStudy.tsx:104` — `timeline="2021 â€" Present"` → `"2021 – Present"`
- `src/pages/WarfighterResearchCaseStudy.tsx:129` — `timeline="2021 â€" 2024"` → `"2021 – 2024"`
- `src/pages/DesignSystemCaseStudy.tsx:105` — `timeline="2019 â€" 2023"` → `"2019 – 2023"`
- `src/pages/OperationalDashboardCaseStudy.tsx:89` (Overview) — `timeline="2019 â€" 2021"` → `"2019 – 2021"`
- `src/pages/OperationalDashboardCaseStudy.tsx:69` (hero eyebrow) — `UX Manager & Product Designer · 2019 â€" 2021` → `… 2019 – 2021`
- `src/pages/MissionReportingCaseStudy.tsx:71` — `UX Manager + Product Designer · 2018 â€" 2023` → `… 2018 – 2023`
- `src/pages/MissionReportingCaseStudy.tsx:100` — `timeline="2018 â€" 2023"` → `"2018 – 2023"`
- `src/components/SystemOverviewMockup.tsx:175` — caption `Kessel Run, 2019â€"2021.` → `2019–2021.`
- `src/components/DataSourceMockup.tsx:150` — caption `Kessel Run, 2019â€"2021.` → `2019–2021.`
- `src/components/MetricsViewMockup.tsx:185` — caption `Kessel Run, 2019â€"2021.` → `2019–2021.`
- `src/components/DashboardOutcomesChart.tsx:67` — `Kessel Run 2019â€"2021.` → `2019–2021.`
- `src/components/PortfolioEfficiencyChart.tsx:115` — `Kessel Run product teams, 2019â€"2023.` → `2019–2023.`
- `src/components/ResearchOutcomesChart.tsx:49` — `… lifecycle, 2021â€"2024.` → `2021–2024.`
- `src/components/ResearchOutcomesChart.tsx:111` — `Kessel Run 2021â€"2024.` → `2021–2024.`

### Bullet characters (`â€¢` → `•`)

Renders as a stray Latin garble where a bullet was intended.

- `src/pages/MissionReportingCaseStudy.tsx:162, 166, 170` — three `<span>â€¢</span>` decorative bullets → `•`
- `src/pages/MissionReportingCaseStudy.tsx:241, 242, 243` — list items `â€¢ Full map integration`, `â€¢ Visual interface for data`, `â€¢ Complete automation` → bullet `•`
- `src/pages/MissionReportingCaseStudy.tsx:249, 250, 251` — `â€¢ Modern UI without map`, `â€¢ Reduced data entry`, `â€¢ Automated calculations` → bullet `•`
- `src/components/CaseStudyLayout.tsx:195` — `<span>â€¢</span>` → `•`

### Right-pointing chevrons (`â€º` → `›`)

Used as breadcrumb separators inside the mockup graphics.

- `src/components/DataSourceMockup.tsx:48` — `â€º` → `›`
- `src/components/MetricsViewMockup.tsx:63, 65` — two `â€º` → `›`

### Broken emoji on Artifact cards

These `ArtifactCard` icons currently render as gibberish (e.g. `ðŸ› ` instead of `🛠`). Replacements restore the original emoji:

- `src/pages/KesselRunCaseStudy.tsx:125` `icon="ðŸ› "` → `"🛠"` (Tools)
- `src/pages/KesselRunCaseStudy.tsx:130` `icon="ðŸ‘¥"` → `"👥"` (Team)
- `src/pages/KesselRunCaseStudy.tsx:376` `icon="ðŸ"‹"` → `"📋"` (Outputs/Methods)
- `src/pages/WarfighterResearchCaseStudy.tsx:144` `icon="ðŸ"¬"` → `"🔬"` (Methods)
- `src/pages/WarfighterResearchCaseStudy.tsx:145` `icon="ðŸ"Š"` → `"📊"` (Outputs)
- `src/pages/DesignSystemCaseStudy.tsx:120` `icon="ðŸ› "` → `"🛠"` (Tools)
- `src/pages/DesignSystemCaseStudy.tsx:121` `icon="ðŸ'¡"` → `"💡"` (Skills)
- `src/pages/DesignSystemCaseStudy.tsx:167` `icon="ðŸš€"` → `"🚀"` (Developer Velocity)
- `src/pages/OperationalDashboardCaseStudy.tsx:104` `icon="ðŸ"¬"` → `"🔬"` (Methods)
- `src/pages/OperationalDashboardCaseStudy.tsx:105` `icon="ðŸ› "` → `"🛠"` (Tools)
- `src/pages/MissionReportingCaseStudy.tsx:110` `icon="ðŸ"¬"` → `"🔬"` (Methods)
- `src/pages/MissionReportingCaseStudy.tsx:111` `icon="ðŸ"¦"` → `"📦"` (Deliverables)

Alternative: if you'd rather drop the emoji entirely for a cleaner editorial look, I can set `icon=""` (or remove the prop) on every ArtifactCard instead of restoring them. Let me know which you prefer.

### Graphics text review (mockups)

I checked each mockup graphic (`SystemOverviewMockup`, `DataSourceMockup`, `MetricsViewMockup`, `DashboardMockup`, `AdoptionImpactTable`, the four charts). Apart from the chevron/dash characters listed above, all chart labels, axis titles, legends, table headers, and dummy data labels are clean, English, and make sense in context. No additional copy changes needed there.

## Out of scope (will not touch)

- Actual wording, sentences, headings, captions — left exactly as written.
- Valid punctuation already in the source: middle dots (`·`), em dashes (`—`), real `–` en dashes, and curly quotes are kept.
- No structural, layout, styling, or component changes.

## Technical notes

- 27 files of source edits across 5 case study pages and 8 components.
- All replacements are pure text substitutions; no logic, props API, or markup changes.
- After saving, the dev preview should auto-reload and the garbled glyphs will be gone.
