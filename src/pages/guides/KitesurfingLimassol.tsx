import React from 'react';
import GuideLayout from '@/components/GuideLayout';

const Page: React.FC = () => (
  <GuideLayout
    title="Kitesurfing in Limassol, Cyprus — Spots, Wind & Lessons Guide"
    description="Complete guide to kitesurfing in Limassol: best spots, wind seasons, when to go, gear, and how to book lessons with a certified instructor."
    path="/guides/kitesurfing-limassol"
    heroImage="/lovable-uploads/cyprus-hero-kate.jpg"
    heroAlt="Kitesurfing in Limassol, Cyprus"
    eyebrow="Cyprus · Guide"
    h1="Kitesurfing in Limassol — the complete guide"
    intro="Limassol is the kitesurfing capital of Cyprus: shallow water, warm sea most of the year, and reliable thermal wind from spring through autumn. This guide covers the local spots, when to come, what gear you need, and how lessons work if you are starting out."
    sections={[
      {
        heading: 'Why Limassol',
        body: (
          <>
            <p>Limassol sits on the south coast of Cyprus, where consistent westerly thermal winds build through the afternoon from April to October. Water temperature stays above 22°C from May to November, and the riding spots have shallow, sandy sections that are perfect for learning.</p>
            <p>Unlike crowded Mediterranean spots, the Limassol kite area is calm, with space to practise, no jet-skis, and easy access for both locals and visitors based around Limassol, Larnaca and Paphos.</p>
          </>
        ),
      },
      {
        heading: 'Wind season and best months',
        body: (
          <>
            <p>The main kite season runs from <strong>April through October</strong>. Wind is most consistent from May to September, with thermal afternoons of 15–22 knots. July and August are the windiest months and best for jumping; May, June and September are the calmest, best for learning and freeriding.</p>
            <p>Winter (November–March) brings occasional storm fronts with strong wind, but it is not a reliable beginner season.</p>
          </>
        ),
      },
      {
        heading: 'Where we ride',
        body: (
          <>
            <p>We choose the spot each day based on the wind direction. The main areas around Limassol cover shallow flat-water sections for beginners and small chop sections for riders who want to jump. We meet at the spot, rig your kite, and walk into the water — no long transfers.</p>
            <p>All locations are within a short drive of central Limassol. If you ride independently, gear storage and rental are available on request.</p>
          </>
        ),
      },
      {
        heading: 'Lessons: what to expect',
        body: (
          <>
            <p>If you are a complete beginner, plan for around 8–12 hours of lessons to reach independent riding. Sessions are typically 2 hours each, and we work in 1-on-1 or small private groups so progression is fast.</p>
            <p>All equipment is included: Duotone kites, twin-tip boards, harness, impact vest and helmet. You just bring swimwear, sunscreen and a long-sleeve rashguard.</p>
          </>
        ),
      },
      {
        heading: 'How to book',
        body: (
          <p>Message us on WhatsApp (+48 884 035 225) or Telegram (@ogodenchik_official) with your dates and experience level. We confirm the slot, suggest the best days for the forecast, and send a meeting point on the day.</p>
        ),
      },
    ]}
    faqs={[
      { q: 'When is the best time to kitesurf in Limassol?', a: 'May to September is the most consistent kite season, with reliable thermal wind in the afternoons and warm water.' },
      { q: 'How many lessons do I need as a beginner?', a: 'Most students reach independent riding after 8–12 hours of lessons. The exact number depends on conditions and how often you can practise.' },
      { q: 'Do I need my own kite gear?', a: 'No. All gear — kites, board, harness, safety equipment — is included with every lesson. Riders who want to ride independently can rent gear separately.' },
      { q: 'Is kitesurfing in Cyprus safe for beginners?', a: 'Yes. We use shallow, flat-water sections and small kites for first sessions, and you ride with an instructor on a radio helmet for safety.' },
      { q: 'Can I learn even if I have never done a board sport?', a: 'Yes. Most of our students start with zero board experience. The first two lessons are mostly about controlling the kite, not the board.' },
    ]}
    ctaTitle="Ready to learn in Cyprus?"
    ctaText="Tell us your dates and we will suggest the best days for the wind forecast."
    ctaPrimary={{ label: 'See Cyprus page', to: '/' }}
  />
);

export default Page;
