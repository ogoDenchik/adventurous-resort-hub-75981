import React from 'react';
import GuideLayout from '@/components/GuideLayout';

const Page: React.FC = () => (
  <GuideLayout
    title="Egypt Kite Safari Guide — Spots, Season, What to Expect"
    description="A complete guide to an Egypt kite safari: best spots in the Red Sea, season, what is included on board, who it suits, and how to book."
    path="/guides/egypt-kite-safari-guide"
    heroImage="/lovable-uploads/kitesafari-hero-desktop-v2.jpg"
    heroAlt="Egypt kite safari yacht in the Red Sea"
    eyebrow="Egypt · Guide"
    h1="Egypt kite safari — the complete guide"
    intro="An Egypt kite safari is the most efficient way to ride the best flat-water spots in the Red Sea without dealing with land transfers, crowded beaches or limited daily sessions. Here is what a week on board actually looks like, who it suits, and how to choose dates."
    sections={[
      {
        heading: 'Where the safari goes',
        body: (
          <>
            <p>The boat sails out of Hurghada and moves daily between protected reefs, lagoons and islands of the central Red Sea. Spots like Gubal, Shaab Mahmoud and the Tawila area are unreachable by car — you can only kite there from a yacht.</p>
            <p>Each spot offers something different: butter-flat lagoons for freestyle and beginners, deep blue water for downwinders, and reef-fringed bays for jumping with no chop.</p>
          </>
        ),
      },
      {
        heading: 'Season and wind',
        body: (
          <>
            <p>The Red Sea kite season runs from <strong>March through November</strong>. Wind blows from the north at 15–25 knots most days, with the strongest, most consistent stretch from May to September.</p>
            <p>Spring and autumn are cooler on board (great for sleeping), summer is hot but with the most reliable wind. Water temperature stays 23–28°C across the whole season — shorty or board shorts.</p>
          </>
        ),
      },
      {
        heading: 'What is included on board',
        body: (
          <ul className="list-disc pl-6 space-y-2">
            <li>7 nights in a private cabin (Twin, Master Suite or Panoramic Suite)</li>
            <li>Full board — breakfast, lunch, dinner, snacks, water, tea and coffee</li>
            <li>Daily kite sessions from the boat with a safety RIB</li>
            <li>A certified kite coach on board</li>
            <li>Transfers from Hurghada airport to the marina</li>
            <li>Snorkelling gear, towels, linen, AC and en-suite bathrooms</li>
          </ul>
        ),
      },
      {
        heading: 'A typical day',
        body: (
          <p>Breakfast at sunrise, then the boat repositions to the first kite spot of the day while you rig. Two sessions of 1.5–2 hours each, lunch on deck between them. Afternoon downwinder or coaching session. Sunset on the bow, dinner under the stars, then to bed before doing it again in a new bay.</p>
        ),
      },
      {
        heading: 'Who it suits',
        body: (
          <>
            <p>You should be able to <strong>ride upwind independently</strong>. Body dragging back to a moving boat is not realistic, so the safari is not for absolute beginners. If you are not yet upwind, do a land course first (Egypt or Cyprus) and then book the safari.</p>
            <p>Intermediate and advanced riders get the most out of it: flat water for jumps and tricks, downwinders, and a coach on the boat to film and debrief sessions.</p>
          </>
        ),
      },
      {
        heading: 'Land trip vs catamaran safari',
        body: (
          <p>A land trip is cheaper and good for total beginners and people who want a town in the evening. A catamaran safari delivers more water time, untouched spots, a smaller group, and a luxury setting — and costs roughly twice as much. If you are upwind and want a deep-progression week, the safari wins on every metric except price.</p>
        ),
      },
      {
        heading: 'How to book',
        body: (
          <p>Cabins go fast — most weeks sell out 3–6 months in advance. Message us on WhatsApp with your preferred week and cabin type. We hold the cabin for 48 hours; a 30% deposit confirms the booking.</p>
        ),
      },
    ]}
    faqs={[
      { q: 'Do I need to be an advanced kiter for an Egypt safari?', a: 'You need to ride upwind independently. Coaching on board takes you further from there. Total beginners should do a land course first.' },
      { q: 'What is the wind like in the Red Sea?', a: 'Steady north wind, 15–25 knots most days from March through November. Strongest from May to September.' },
      { q: 'How much does a kite safari in Egypt cost?', a: 'A cabin on a luxury catamaran safari starts from around €1850 per person for 7 nights, including full board, coaching and transfers.' },
      { q: 'What kite size should I bring?', a: 'You do not need to bring kites — rental is available on board. If you bring your own, two sizes covering 9–12 m² work for most riders most weeks.' },
      { q: 'Is Egypt safe to travel to for kitesurfing?', a: 'The Red Sea resort areas and offshore kite spots are well-developed and safe. The safari operates entirely in the kite-tourism zone with proper permits.' },
    ]}
    ctaTitle="Want to join a safari?"
    ctaText="See current dates and available cabins on the main safari page, or message us for a personal recommendation."
    ctaPrimary={{ label: 'See Egypt safari', to: '/kite-safari' }}
  />
);

export default Page;
