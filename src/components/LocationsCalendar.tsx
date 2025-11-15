import React from 'react';
import { CalendarIcon } from 'lucide-react';
import { FadeIn } from '@/hooks/use-scroll-animation';
import { Calendar } from '@/components/ui/calendar';
import { parseISO } from 'date-fns';

const LocationsCalendar = () => {
  const schedule = [
    { dates: 'Nov 4–28, 2024', location: '🇧🇷 Brazil', start: '2024-11-04', end: '2024-11-28', color: '#009c3b' },
    { dates: 'Nov 28 – Dec 22, 2024', location: '🇵🇱 Poland', start: '2024-11-28', end: '2024-12-22', color: '#dc143c' },
    { dates: 'Dec 22–29, 2024', location: '🇮🇹 Italy (Alps)', start: '2024-12-22', end: '2024-12-29', color: '#009246' },
    { dates: 'Dec 31 – Jan 10, 2025', location: '🇵🇱 Poland', start: '2024-12-31', end: '2025-01-10', color: '#dc143c' },
    { dates: 'Jan 10 – Mar 10, 2025', location: '🇻🇳 Vietnam ★', start: '2025-01-10', end: '2025-03-10', color: '#da251d', available: true },
    { dates: 'Mar 10 – May 30, 2025', location: '🇪🇬 Egypt ★', start: '2025-03-10', end: '2025-05-30', color: '#ce1126', available: true }
  ];

  const modifiers = schedule.reduce((acc, item) => {
    const key = item.location.split(' ')[0];
    acc[key] = {
      from: parseISO(item.start),
      to: parseISO(item.end)
    };
    return acc;
  }, {} as Record<string, { from: Date; to: Date }>);

  const modifiersStyles = schedule.reduce((acc, item) => {
    const key = item.location.split(' ')[0];
    acc[key] = { 
      backgroundColor: item.color, 
      color: 'white',
      fontWeight: item.available ? 'bold' : 'normal'
    };
    return acc;
  }, {} as Record<string, { backgroundColor: string; color: string; fontWeight: string }>);

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn direction="up" distance={30}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <CalendarIcon className="w-6 h-6 text-primary" />
              <h2 className="text-3xl md:text-5xl font-display font-bold">
                2024–2025 Season Calendar
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Following the perfect wind seasons worldwide
            </p>
          </div>
        </FadeIn>

        {/* Calendar */}
        <FadeIn direction="up" distance={30}>
          <div className="max-w-6xl mx-auto">
            <div className="bg-card rounded-2xl p-6 md:p-10 shadow-xl border border-border/50">
              <Calendar
                mode="single"
                className="w-full pointer-events-auto [&_.rdp-months]:grid [&_.rdp-months]:grid-cols-1 [&_.rdp-months]:md:grid-cols-2 [&_.rdp-months]:lg:grid-cols-3 [&_.rdp-months]:gap-8"
                modifiers={modifiers}
                modifiersStyles={modifiersStyles}
                fromDate={new Date(2024, 10, 1)}
                toDate={new Date(2025, 5, 30)}
                numberOfMonths={8}
              />
              
              {/* Legend */}
              <div className="mt-8 pt-8 border-t border-border/50">
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Where I'll be:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {schedule.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div 
                        className={`w-6 h-6 rounded flex-shrink-0 ${item.available ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                        style={{ backgroundColor: item.color }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">{item.location}</p>
                        <p className="text-xs text-muted-foreground">{item.dates}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-6 text-center">
                  ★ Training available | During snowboarding season, kite training is unavailable
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default LocationsCalendar;
