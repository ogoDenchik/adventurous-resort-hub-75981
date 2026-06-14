// Meta Pixel + Conversions API tracking for contact button clicks
// Only fires on the Cyprus page

import { supabase } from '@/integrations/supabase/client';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export type ContactChannel = 'whatsapp' | 'telegram' | 'instagram';

const generateEventId = (): string =>
  `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

const isCyprusPage = (): boolean => {
  if (typeof window === 'undefined') return false;
  const p = window.location.pathname;
  return p === '/' || p.startsWith('/cyprus');
};

/**
 * Track a contact click via Meta Pixel (browser) + Conversions API (server)
 * Uses the same eventId for deduplication.
 *
 * @param channel  whatsapp | telegram | instagram
 * @param source   where the click happened, e.g. "cyprus_contact_card", "cyprus_fab", "cyprus_hero"
 * @param force    bypass the Cyprus-only guard (default false)
 */
export const trackContactClick = (
  channel: ContactChannel,
  source: string,
  force = false
): void => {
  if (!force && !isCyprusPage()) return;

  const eventId = generateEventId();
  const eventName = 'ContactClick';
  const params = {
    channel,
    source,
    page: typeof window !== 'undefined' ? window.location.pathname : '',
  };

  // 1. Browser pixel
  try {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('trackCustom', eventName, params, { eventID: eventId });
    }
  } catch (e) {
    console.warn('[meta] pixel error', e);
  }

  // 2. Server-side via Conversions API (fire-and-forget)
  try {
    supabase.functions
      .invoke('meta-capi', {
        body: {
          event_name: eventName,
          event_id: eventId,
          event_source_url:
            typeof window !== 'undefined' ? window.location.href : '',
          user_agent:
            typeof navigator !== 'undefined' ? navigator.userAgent : '',
          custom_data: params,
        },
      })
      .catch((err) => console.warn('[meta-capi] invoke error', err));
  } catch (e) {
    console.warn('[meta-capi] error', e);
  }
};
