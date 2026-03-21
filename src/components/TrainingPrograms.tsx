import React, { useState } from 'react';
import { EnhancedBookingPopup } from './EnhancedBookingPopup';
import { buildWebhookPayload } from '@/utils/tracking';
import { useToast } from '@/hooks/use-toast';
import { AnimatedLine, RevealOnScroll, StaggeredList } from '@/hooks/use-invisible-animation';

const HOMEPAGE_WEBHOOK_URL = 'https://ogodenchik.app.n8n.cloud/webhook/11ba0950-0d0d-46ac-b106-efe6059a0c87';

const TrainingPrograms = () => {
  const { toast } = useToast();
  const [leaveRequestOpen, setLeaveRequestOpen] = useState(false);

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/48884035225?text=${encodedMessage}`, '_blank');
  };

  const programs = [
    {
      num: '01',
      title: 'Private Coaching',
      subtitle: '10 Hours · Egypt & Vietnam',
      description: 'Perfect for beginners and intermediate riders',
      features: [
        'Structured step-by-step progression',
        'Premium equipment included',
        'Video analysis after sessions',
        'Safety briefing & theory',
        'Small groups (max 3–4 students) or 1-on-1 available',
      ],
      price: '€800',
      cta: 'Book Now',
      whatsappMessage: 'Hey, I would like to book lessons with OGO Academy.',
      badge: null,
    },
    {
      num: '02',
      title: 'VIP 1-on-1 Training',
      subtitle: '10 Hours · Egypt Only',
      description: 'Maximum attention, maximum results',
      features: [
        'Exclusively 1-on-1 (or max 2 students)',
        'Personalized progression plan',
        'Detailed video analysis every session',
        'Professional photo/video session included',
        'Priority scheduling & direct WhatsApp access',
      ],
      price: '€1,500',
      cta: 'Book VIP',
      whatsappMessage: 'Hey, I would like to book VIP training with OGO Academy.',
      badge: 'PREMIUM',
    },
    {
      num: '03',
      title: 'Refresh Course',
      subtitle: '3 Hours · Egypt & Vietnam',
      description: 'Get back in the game after a break',
      features: [
        'Technique tune-up',
        'Confidence rebuild',
        'Specific skill improvement',
        'Equipment included',
        'Video analysis',
      ],
      price: '€270',
      cta: 'Book Refresh',
      whatsappMessage: 'Hey, I would like to book a Refresh course.',
      badge: null,
    },
    {
      num: '04',
      title: 'Kite Camps & Safaris',
      subtitle: '7–10 Days · Vietnam & Egypt',
      description: 'All-inclusive adventures',
      features: [
        'Accommodation + meals included',
        'Daily kitesurfing lessons',
        'Equipment rental',
        'Excursions & community',
        'Airport transfers',
      ],
      price: 'From €1,200',
      priceSubtext: 'Egypt Safari: Custom pricing (families welcome)',
      cta: 'Request Details',
      whatsappMessage: 'Hey OGO Academy, I would like to learn more about your camps and kite safaris.',
      badge: null,
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">

        <RevealOnScroll>
          <p className="section-number mb-6">// 06 — Programs</p>
        </RevealOnScroll>

        <AnimatedLine className="mb-16" />

        <RevealOnScroll delay={100} className="mb-4">
          <h3 className="heading-display text-4xl md:text-5xl text-foreground">
            Training Programs
          </h3>
        </RevealOnScroll>

        <RevealOnScroll delay={200} className="mb-14">
          <p className="text-muted-foreground mt-4">Choose Your Path to Mastery</p>
        </RevealOnScroll>

        {/* Programs list */}
        <StaggeredList staggerMs={120} baseDelay={150}>
          {programs.map((program) => (
            <div key={program.num} className="group">
              <div className="py-8 flex flex-col md:flex-row md:items-start gap-6 md:gap-12 transition-all duration-300">
                {/* Number */}
                <div className="flex-shrink-0 w-10">
                  <span className="section-number text-base">{program.num}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-3 mb-1">
                    <h4 className="font-medium text-foreground uppercase text-sm tracking-widest">
                      {program.title}
                    </h4>
                    {program.badge && (
                      <span className="label-caps text-primary border border-primary/50 px-2 py-0.5 text-[10px]">
                        {program.badge}
                      </span>
                    )}
                  </div>
                  <p className="label-caps text-muted-foreground mb-4">{program.subtitle}</p>
                  <ul className="space-y-1 mb-6">
                    {program.features.map((f, i) => (
                      <li key={i} className="text-sm text-foreground/70 flex gap-3">
                        <span className="text-muted-foreground flex-shrink-0">—</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  {program.priceSubtext && (
                    <p className="label-caps text-muted-foreground mb-4">{program.priceSubtext}</p>
                  )}
                </div>

                {/* Price + CTA */}
                <div className="flex-shrink-0 md:text-right flex md:flex-col gap-4 md:gap-3 items-center md:items-end">
                  <div className="heading-display text-3xl text-primary">{program.price}</div>
                  <button
                    className="btn-primary whitespace-nowrap"
                    onClick={() => handleWhatsAppClick(program.whatsappMessage)}
                  >
                    {program.cta}
                  </button>
                </div>
              </div>
              <div className="section-divider" />
            </div>
          ))}
        </StaggeredList>

        {/* Leave a request */}
        <RevealOnScroll delay={200} className="pt-12 text-center">
          <p className="label-caps text-muted-foreground mb-6">Or leave a request</p>
          <button
            className="btn-primary"
            onClick={() => setLeaveRequestOpen(true)}
          >
            Leave a Request
          </button>
        </RevealOnScroll>

      </div>

      <EnhancedBookingPopup 
        open={leaveRequestOpen} 
        onOpenChange={setLeaveRequestOpen}
        backgroundImage="/lovable-uploads/hero-main-coaching.jpg"
        title="LEAVE A REQUEST"
        description="Fill in your details and we'll get back to you shortly"
        webhookUrl={HOMEPAGE_WEBHOOK_URL}
        leadSource="Homepage Training Programs - Leave a Request"
        bookingDetails={{ packageName: 'Request Details', location: 'Worldwide' }}
      />
    </section>
  );
};

export default TrainingPrograms;
