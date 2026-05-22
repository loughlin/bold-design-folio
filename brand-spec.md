# Brand Spec — James Loughlin Portfolio v2
> Synthesized from: dianab.space, morganhoosedesign.com, chrisfig.co
> Direction: Warm minimal editorial

## Color tokens (OKLch)

| Token      | Value                    | Role                              |
|------------|--------------------------|-----------------------------------|
| `--bg`     | `oklch(98.5% 0.006 75)`  | Near-cream, barely warm           |
| `--surface`| `oklch(100% 0.003 75)`   | Cards, modals                     |
| `--fg`     | `oklch(14% 0.018 60)`    | Warm dark ink — headlines         |
| `--muted`  | `oklch(46% 0.012 60)`    | Secondary text, metadata          |
| `--border` | `oklch(91% 0.008 70)`    | Hairline separators               |
| `--accent` | `oklch(44% 0.022 240)`   | Deep slate — CTAs, links, 1 hero element |

## Typography
- **Display + body:** Inter (already loaded)
- **Mono:** Geist Mono (already loaded)
- Headline scale: clamp up from current 3xl/4xl/5xl → lead with 4xl/5xl/6xl
- No gradient text — ink color only on headlines

## Layout posture
- Border radius: 12–16px on cards (down from 24px — removes the bubbly Shadcn default)
- Cards: outcome metric prominently displayed (top or bottom, always visible)
- Case study cards: year + role as metadata, outcome as the third line
- Skills section: editorial 2-col list, not 6 identical hover cards
- One accent element per screen, used twice max

## Anti-slop audit
- ❌ Removed: gradient text on headlines
- ❌ Removed: 24px border-radius on all cards (→ 14px)
- ❌ Removed: 6 identical pill cards in skills section
- ✅ Added: outcome metrics on every case study card
- ✅ Added: warm neutral palette vs pure #fafafa
