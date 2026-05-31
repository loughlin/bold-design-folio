# James Loughlin — Portfolio

Personal portfolio of James Loughlin, Portfolio Design Lead at Kessel Run (USAF):
human-centered design, design systems, and building design culture in defense technology.

Live at [jamesloughlin.design](https://jamesloughlin.design).

## Tech stack

- Vite
- React + TypeScript
- Tailwind CSS
- shadcn/ui
- Supabase (rate-limited password gate for protected case studies)

## Local development

Requires Node.js and npm.

```sh
npm install
npm run dev
```

The app runs at http://localhost:8080.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Environment

Copy the Supabase values into a `.env` file (see `src/integrations/supabase/client.ts`):

```sh
VITE_SUPABASE_URL=...
VITE_SUPABASE_PUBLISHABLE_KEY=...
VITE_SUPABASE_PROJECT_ID=...
```
