import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

// ── RevealOnScroll ─────────────────────────────────────────────────────────
interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
  direction?: 'up' | 'none';
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className,
  delay = 0,
  direction = 'up',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? 'translateY(0)'
          : direction === 'up'
          ? 'translateY(32px)'
          : 'none',
        transition: `opacity 0.9s ease ${delay}ms, transform 0.9s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// ── AnimatedLine ───────────────────────────────────────────────────────────
interface AnimatedLineProps {
  className?: string;
  delay?: number;
}

export const AnimatedLine: React.FC<AnimatedLineProps> = ({ className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn('h-px bg-border overflow-hidden', className)}
    >
      <div
        style={{
          height: '100%',
          background: 'hsl(var(--foreground) / 0.15)',
          transform: visible ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
          transition: `transform 1.2s ease ${delay}ms`,
        }}
      />
    </div>
  );
};

// ── StaggeredList ──────────────────────────────────────────────────────────
interface StaggeredListProps {
  children: React.ReactNode[];
  className?: string;
  staggerMs?: number;
  baseDelay?: number;
}

export const StaggeredList: React.FC<StaggeredListProps> = ({
  children,
  className,
  staggerMs = 120,
  baseDelay = 0,
}) => {
  return (
    <div className={cn(className)}>
      {React.Children.map(children, (child, i) => (
        <RevealOnScroll key={i} delay={baseDelay + i * staggerMs}>
          {child}
        </RevealOnScroll>
      ))}
    </div>
  );
};
