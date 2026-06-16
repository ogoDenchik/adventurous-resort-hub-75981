
# About Our Lessons — New Section

A new editorial section for the Cyprus (home) page, placed **between `LearningJourney` (Beginner Flow) and the YouTube Shorts video**. Same luxury editorial language as the rest of the site: Cormorant Garamond headings in ALL CAPS, Jost body, no rounded cards, numbered items, animated reveals.

## Structure

**Section label:** `04 — ABOUT OUR LESSONS` (section-number style)
**Heading:** `LESSONS BUILT AROUND YOU, NOT THE CLOCK`
**Lead paragraph:** Short editorial intro that sets the tone — personal, methodical, progression-driven.

### Block 1 — Sessions, not hours (hero stat row)
Large editorial number `1.5h` with label "ONE ACTIVE SESSION".
Short copy: *"We don't sell hours. We sell sessions — ~1.5h of pure 1-on-1 active training on the water with your coach. No waiting, no sharing, no wasted wind."*

### Block 2 — What's included (3 icon items in a clean row, no cards)
- **FULL DUOTONE KIT** — Kites, boards, harness, safety gear. Bring yourself.
- **BB TALKIN' RADIO** — Real-time voice from your coach. On the beach or out on the water — guidance, corrections, questions answered the moment they happen.
- **1-ON-1 FORMAT** — Always personal. Never a group.

### Block 3 — The Denis Evdorenko Method (featured highlight)
Two-column editorial layout with a vertical accent line.
- Left: small label `THE METHOD`, big heading `THE DENIS EVDORENKO METHOD`
- Right: 2 short paragraphs explaining it's his personal methodology built on top of proven fundamentals + his own refinements that accelerate progression and keep you safe. Same exercises every school teaches (kite piloting, swings on land, body drag, water start, positioning) — but every step has its own nuances and details that make the difference between "took a course" and "actually rides".

### Block 4 — Progression roadmap (numbered list, editorial)
Numbered `01 → 06`, each one line with title + one-line description:
- `01 — KITE PILOTING` Foundation. Reading wind, controlling the kite.
- `02 — LAND DRILLS` Swings sitting and standing. Building muscle memory.
- `03 — WATER SWINGS & BODY DRAG` Moving with the kite in the water.
- `04 — POSITIONING & WATER STARTS` Standing up. Riding your first meters.
- `05 — INDEPENDENT RIDING` Upwind, transitions, control in any condition.
- `06 — ADVANCED & TRICKS` Backrolls, frontrolls, rotations, kiteloops, heeloops, downloops.

Closing line under the list: *"Becoming independent isn't the finish line. It's where the fun starts."*

### CTA
Single editorial link/button: `BOOK A SESSION →` → opens WhatsApp with pre-filled message *"Hey OGO Academy, I'd like to book a kitesurfing session in Cyprus!"*

## Technical

- New file: `src/components/cyprus/CyprusAboutLessons.tsx`
- i18n keys added to `src/i18n/translations.ts` under `cyprus.lessons.*` for EN, RU, GR
- Mount in `src/pages/Cyprus.tsx` between `<LearningJourney />` and the YouTube Shorts `<section>`
- Use existing animation primitives: `RevealOnScroll`, `AnimatedLine`, `StaggeredList`, `section-number`, `heading-display`, `section-divider`, `label-caps`
- Icons (lucide-react): `Clock3`, `Radio`, `Package`, `User`, `Compass` — thin stroke (`strokeWidth={1.5}`), no filled backgrounds
- No rounded cards — flat editorial blocks separated by hairline dividers, matching `WhyImDifferent` and `WhyMyMethodWorks` patterns
- Mobile: stacks vertically, numbers stay prominent

## Awaiting approval

I'll wait for your approval before implementing. Reply with any changes (copy tweaks, reordering, more/fewer blocks) or ✅ to build it as described.
