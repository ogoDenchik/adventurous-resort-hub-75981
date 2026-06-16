import React from 'react';
import GuideLayout from '@/components/GuideLayout';

const Page: React.FC = () => (
  <GuideLayout
    title="How to Learn Kitesurfing — Beginner's Step-by-Step Guide"
    description="How to learn kitesurfing from zero: gear, lessons, progression stages, common mistakes, and how long it really takes to ride independently."
    path="/guides/how-to-learn-kitesurfing"
    heroImage="/lovable-uploads/hero-kite-learning.jpg"
    heroAlt="Beginner learning kitesurfing with an instructor"
    eyebrow="Beginners · Guide"
    h1="How to learn kitesurfing — beginner's guide"
    intro="Kitesurfing looks intimidating from the beach. In reality, with a good instructor and the right conditions, most people get up on the board within their first week. This guide breaks down the stages, what gear you need, and the common mistakes that slow people down."
    sections={[
      {
        heading: 'Stage 1 — Kite control on land',
        body: (
          <>
            <p>The first session is about understanding the wind window — where the kite generates power and where it sits safely. You start with a small trainer kite on the beach to feel how the kite reacts to your hands before there is any board involved.</p>
            <p>This stage usually takes 1–2 hours. It is the most important part of the whole sport: every problem on the water is a kite-control problem on land that did not get fixed.</p>
          </>
        ),
      },
      {
        heading: 'Stage 2 — Body drag in the water',
        body: (
          <p>Next you go into shallow water without the board. You learn to relaunch the kite from the water, steer with one hand, and use the kite to drag yourself upwind. This is also the rescue skill that you will use every time you lose a board, so it has to be solid before you ride.</p>
        ),
      },
      {
        heading: 'Stage 3 — Water start',
        body: (
          <p>Once body drag is comfortable, you add the board. The water start is a coordinated movement: kite goes up to 12 o'clock, board on your feet, then a controlled dive to the 2 or 10 o'clock that pops you onto the board. Most students need 5–10 attempts to get the first ride.</p>
        ),
      },
      {
        heading: 'Stage 4 — Riding upwind',
        body: (
          <p>Riding away from the beach is easy. Riding back is what makes you independent. Going upwind is about board edge, kite position low in the window, and weight on the back foot. This is usually the moment beginners go from "I crashed a lot" to "I had a session".</p>
        ),
      },
      {
        heading: 'How long does it take?',
        body: (
          <>
            <p><strong>8–12 hours</strong> of lessons is the realistic range to ride independently in both directions. Some people get there in 6 hours, some need 15. Variables that matter: wind consistency during your trip, your previous board-sport experience, and whether you take lessons close together or spread out.</p>
            <p>The single biggest accelerator: book 2 hours per day across a full week, in a spot with steady wind. Trying to learn over scattered weekends takes 2–3× longer.</p>
          </>
        ),
      },
      {
        heading: 'Gear you actually need at the start',
        body: (
          <p>Nothing. Schools provide kite, board, harness, helmet and impact vest. Bring swimwear, a long-sleeve rashguard, reef-safe sunscreen and a water bottle. Buy your own gear only after you can ride upwind — by then you know what size kite and board fit your weight and the local wind.</p>
        ),
      },
      {
        heading: 'Common beginner mistakes',
        body: (
          <ul className="list-disc pl-6 space-y-2">
            <li>Trying to learn alone from YouTube — kitesurfing has hard safety edges that need a coach on radio with you.</li>
            <li>Skipping body drag and going straight to the board — you will spend a week walking back upwind.</li>
            <li>Choosing a windy spot like Tarifa or Egypt in mid-August for lesson one — too much wind for a beginner kite.</li>
            <li>Buying gear before you can ride upwind.</li>
          </ul>
        ),
      },
    ]}
    faqs={[
      { q: 'How much does it cost to learn kitesurfing?', a: 'A full beginner course (8–12 hours) typically costs €400–€700 depending on the country and whether it is private or group. All gear is included.' },
      { q: 'Is kitesurfing dangerous?', a: 'When taught properly, it is safer than most people think. Modern kites have a quick-release that depowers the kite instantly. Risk comes from bad spots, bad conditions and skipping the basics — all of which a good school avoids.' },
      { q: 'Can I learn kitesurfing if I cannot swim well?', a: 'You should be comfortable in water and able to swim 50m, but you do not need to be a strong swimmer — the harness and the kite keep you up.' },
      { q: 'What is the best country to learn kitesurfing?', a: 'Look for shallow, flat water and steady side-onshore wind. Top beginner destinations: Egypt, Brazil (Jericoacoara, Cumbuco), Cyprus, Greece and Vietnam in season.' },
      { q: 'Group or private lessons?', a: 'Private 1-on-1 is the fastest. Two students per coach is a good balance of cost and progression. Above two students per coach progression slows significantly.' },
    ]}
    ctaTitle="Start your first session"
    ctaText="We teach beginners year-round in Cyprus and on seasonal trips in Egypt and Brazil. Tell us where you are and we will plan a course."
    ctaPrimary={{ label: 'See Cyprus lessons', to: '/' }}
  />
);

export default Page;
