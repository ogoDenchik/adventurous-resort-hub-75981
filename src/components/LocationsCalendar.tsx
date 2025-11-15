import React, { useState } from 'react';
import { CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeIn } from '@/hooks/use-scroll-animation';
import { Calendar } from '@/components/ui/calendar';
import { parseISO, format, addMonths } from 'date-fns';
import { Button } from '@/components/ui/button';
import { DayProps } from 'react-day-picker';

const LocationsCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 10, 1)); // November 2024

  const schedule = [
    { dates: 'Nov 4–28, 2024', location: '🇧🇷 Brazil', start: '2024-11-04', end: '2024-11-28' },
    { dates: 'Nov 28 – Dec 22, 2024', location: '🇵🇱 Poland', start: '2024-11-28', end: '2024-12-22' },
    { dates: 'Dec 22–29, 2024', location: '🇮🇹 Italy (Alps)', start: '2024-12-22', end: '2024-12-29' },
    { dates: 'Dec 31 – Jan 10, 2025', location: '🇵🇱 Poland', start: '2024-12-31', end: '2025-01-10' },
    { dates: 'Jan 10 – Mar 10, 2025', location: '🇻🇳 Vietnam ★', start: '2025-01-10', end: '2025-03-10', available: true },
    { dates: 'Mar 10 – May 30, 2025', location: '🇪🇬 Egypt ★', start: '2025-03-10', end: '2025-05-30', available: true }
  ];

  const getLocationForDate = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    return schedule.find(item => {
      return dateStr >= item.start && dateStr <= item.end;
    });
  };

  const modifiers = schedule.reduce((acc, item) => {
    const key = item.location.split(' ')[0];
    acc[key] = {
      from: parseISO(item.start),
      to: parseISO(item.end)
    };
    return acc;
  }, {} as Record<string, { from: Date; to: Date }>);

  const DayContent = (props: DayProps) => {
    const location = getLocationForDate(props.date);
    const flag = location?.location.split(' ')[0];
    
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <span className={location ? 'relative z-10' : ''}>{props.date.getDate()}</span>
        {flag && (
          <span className="absolute top-0 right-0 text-[10px] leading-none">
            {flag}
          </span>
        )}
      </div>
    );
  };

  const handlePrevMonth = () => {
    setCurrentMonth(prev => addMonths(prev, -1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => addMonths(prev, 1));
  };

  const canGoPrev = currentMonth > new Date(2024, 10, 1);
  const canGoNext = currentMonth < new Date(2025, 4, 1);

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
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl p-6 md:p-10 shadow-xl border border-border/50">
              {/* Navigation */}
              <div className="flex items-center justify-between mb-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrevMonth}
                  disabled={!canGoPrev}
                  className="h-10 w-10"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                
                <h3 className="text-xl font-bold">
                  {format(currentMonth, 'MMMM yyyy')}
                </h3>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNextMonth}
                  disabled={!canGoNext}
                  className="h-10 w-10"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>

              <Calendar
                mode="single"
                month={currentMonth}
                onMonthChange={setCurrentMonth}
                className="w-full pointer-events-auto"
                modifiers={modifiers}
                components={{
                  Day: DayContent as any
                }}
                fromDate={new Date(2024, 10, 1)}
                toDate={new Date(2025, 5, 30)}
              />
              
              {/* Legend */}
              <div className="mt-8 pt-8 border-t border-border/50">
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Where I'll be:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {schedule.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                      <span className="text-2xl flex-shrink-0">{item.location.split(' ')[0]}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">
                          {item.location.slice(3)}
                        </p>
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
