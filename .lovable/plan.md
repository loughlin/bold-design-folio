

# Copy Audit and Rewrite Plan

## Goal
Shift the portfolio voice from "corporate UX manager" to "confident design leader who solves real problems." Kill jargon, favor active voice, focus on outcomes, and add a brief AI interest mention to the About section. Stats remain unchanged.

---

## Scope: 9 files across Home, About, and all 5 Case Studies

### 1. Hero (`src/components/Hero.tsx`)
- Rewrite the headline to be punchier and less generic. Replace "enjoys approaching design problems with human-centered solutions" with something more direct and specific to James's identity (e.g., framing around making complex software simple, or designing for people under pressure).
- Keep the "UX Design Leader" label as-is.

### 2. About Section (`src/components/AboutSection.tsx`)
- Rewrite the headline ("Hi, I'm James...") to feel more conversational and less like a mission statement.
- Rewrite the four bio paragraphs to:
  - Open with a conversational hook about the career arc (designer to manager).
  - Replace "instilling design principles" and "design culture" language with plainer descriptions of what James actually does day-to-day.
  - Add a brief mention of AI interest (one sentence woven naturally into the existing flow, per user preference).
  - Keep the personal paragraph (soccer, kids, gym) but tighten it.
  - Cut the closing "I stay hungry to learn..." line or fold it into the AI mention for a stronger close.

### 3. Skills Data (`src/data/skills.ts`)
- Rewrite the 6 skill descriptions to be more direct and outcome-focused. Replace phrases like "Building scalable design systems and operational frameworks for consistency and efficiency" with plainer language about what the skill actually enables.

### 4. Experience Data (`src/data/experiences.ts`)
- Rewrite all 4 descriptions in active voice. The Kessel Run manager entry is particularly dense with jargon ("facilitating cross-functional collaboration," "championing design thinking and advocating psychological safety"). Simplify to focus on what James did and what happened as a result.

### 5. Project Cards (`src/data/projects.ts`)
- Light pass on the 5 project descriptions. Replace any remaining stiff phrases with punchier summaries. Most are already decent; tighten where possible.

### 6. Kessel Run Case Study (`src/pages/KesselRunCaseStudy.tsx`)
- Already the strongest. Light tone pass:
  - Tighten a few longer sentences in the Overview and Opportunity sections.
  - Check for any remaining passive voice.
  - No structural or content changes.

### 7. Design System Case Study (`src/pages/DesignSystemCaseStudy.tsx`)
- Moderate pass. The Overview and Process sections read well but some areas lean formal:
  - Simplify "Synthesizing research into clear problem definitions and actionable requirements" type descriptions.
  - Tighten the challenge descriptions.
  - No structural changes.

### 8. Mission Reporting Case Study (`src/pages/MissionReportingCaseStudy.tsx`)
- **Heaviest rewrite.** The Overview, Background, Problem, and Exploratory Research sections are noticeably more passive and resume-like than the other case studies:
  - "I was responsible for the design process, from research to solution generation and evaluation" -> active, outcome-focused rewrite.
  - "We determined that we could automate multiple data fields by importing from sources" -> cleaner, more conversational.
  - "As a team we began designing and testing potential concepts" -> tighter.
  - Rewrite the Prototype Testing section to match the voice of the other case studies.
  - Keep all structural elements, images, captions, and metrics unchanged.

### 9. Warfighter Research Case Study (`src/pages/WarfighterResearchCaseStudy.tsx`)
- Light-to-moderate pass. Already reads well but has some long, dense sentences:
  - Break up multi-clause sentences in the methodology and process sections.
  - Simplify descriptors in the heuristics data.

### 10. Operational Dashboard Case Study (`src/pages/OperationalDashboardCaseStudy.tsx`)
- Light pass. Already conversational. Check for any remaining passive constructions and tighten.

---

## What will NOT change
- Images, captions, and alt text
- Stats, metrics, and numerical data (including "8+ Years Experience")
- Layout, structure, component hierarchy, and styling
- Links, buttons, navigation behavior
- Footer content

## Technical Details
- Edits are text-only across 9 files (3 data files, 1 component, 5 page components)
- No new dependencies, no structural changes
- All edits will use `code--line_replace` to surgically update copy strings

