// Generate a unique visitor ID (stored in localStorage for persistence)
const getVisitorId = (): string => {
  const storageKey = 'ogo_visitor_id';
  let visitorId = localStorage.getItem(storageKey);
  
  if (!visitorId) {
    visitorId = `${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 9)}`;
    localStorage.setItem(storageKey, visitorId);
  }
  
  return visitorId;
};

export interface TrackingData {
  ip: string;
  user_agent: string;
  browser_language: string;
  referer: string;
  visitor_id: string;
  request_time: string;
}

export interface WebhookPayload {
  lead_source: string;
  package: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  timestamp: string;
  tracking: TrackingData;
}

export const getTrackingData = (): TrackingData => {
  const requestTime = new Date().toISOString();
  
  return {
    ip: '', // Will be populated by the webhook receiver
    user_agent: navigator.userAgent,
    browser_language: navigator.languages ? navigator.languages.join(',') : navigator.language,
    referer: window.location.href,
    visitor_id: getVisitorId(),
    request_time: requestTime,
  };
};

export const buildWebhookPayload = (
  leadSource: string,
  packageName: string,
  name: string,
  phone: string,
  email: string,
  message: string
): WebhookPayload => {
  const timestamp = new Date().toISOString();
  
  return {
    lead_source: leadSource,
    package: packageName,
    name,
    phone,
    email,
    message,
    timestamp,
    tracking: getTrackingData(),
  };
};
