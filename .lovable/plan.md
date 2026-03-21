
## Index Page Redesign — Editorial / Luxury Style

This is a full visual redesign of the homepage inspired by the "INVISIBLE" editorial aesthetic. No functionality, routing, forms, or data changes. Only visual styling.

### What changes

**Typography system (new fonts)**
- Add `Cormorant Garamond` (serif, display headings) + `Jost` (thin sans, body) via Google Fonts
- New CSS utilities: `.heading-display`, `.label-caps`, `.section-number`, `.section-divider`
- Body font switches to Jost 300 weight with wide letter spacing

**Button style**
- `.btn-primary` becomes outline (transparent bg, green border) with liquid fill hover animation
- New `.btn-primary-white` variant for hero (white border, white text, fills white on hover)

**Animation system**
- New hook `src/hooks/use-invisible-animation.tsx` with `RevealOnScroll`, `AnimatedLine`, `StaggeredList` components
- CSS keyframes: `invisibleFadeUp`, `clipReveal`, `lineGrow`
- Replaces `animate-slide-up` with scroll-triggered entrance animations

### Files to edit

1. **`src/index.css`** — add fonts import, CSS variables, utility classes, new button styles, animation keyframes

2. **`src/components/Hero.tsx`** — new JSX: serif headline with `<em>` italic, eyebrow label, thin divider line, scroll indicator becomes a vertical line, staggered entrance animations per element

3. **`src/components/coach/CoachStatsTrustBar.tsx`** — remove icons and rounded backgrounds; numbers use `.heading-display` serif font, labels use `.label-caps`; horizontal dividers between items

4. **`src/components/coach/MeetYourCoachIntro.tsx`** — remove card/border-l-4 quote box; portrait loses `rounded-2xl`; quote becomes centered italic serif text; section gets `//01` number; `RevealOnScroll` + `AnimatedLine` wrapping

5. **`src/components/coach/WhyImDifferent.tsx`** — remove emoji icons and rounded circles; items become numbered list (`01`, `02`…) with `//02` section header; `StaggeredList` + `hover:pl-2` micro-interaction

6. **`src/pages/Index.tsx`** — replace testimonials section: card grid becomes a flat numbered list with horizontal dividers; `StaggeredList` for entrance; remove `Star` component

7. **`src/components/TrainingPrograms.tsx`** — remove card grid with `rounded-3xl`; becomes editorial list layout with program number, title, price, features (dashes instead of checkmarks); `StaggeredList` + `AnimatedLine`

8. **`src/components/TrustIndicators.tsx`** — same treatment as CoachStatsTrustBar: remove icons, serif numbers, caps labels, border dividers

9. **`src/components/coach/WhyMyMethodWorks.tsx`** — add `//05` section number and `AnimatedLine`; heading uses `.heading-display`

10. **`src/components/Navbar.tsx`** — nav links get `.label-caps` styling; Book Now button uses `btn-primary` outline style

11. **`src/hooks/use-invisible-animation.tsx`** — create new file with `RevealOnScroll`, `AnimatedLine`, `StaggeredList`

### Visual result
- Light background kept throughout
- Serif display headings (Cormorant Garamond) mixed with thin sans-serif (Jost) body text
- No emoji in UI, no `rounded-3xl` cards, no filled green buttons
- Sections numbered `//01` through `//05`
- Slow, elegant scroll reveal animations on all sections
- Hero: full-screen with staggered text entrance (eyebrow → headline → divider → subheading → CTA)
