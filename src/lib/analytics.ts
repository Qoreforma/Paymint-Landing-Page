declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Dispatches a custom GA4 event safely without breaking if gtag is uninitialized or blocked.
 * Never pass PII (passwords, phone numbers, email addresses, or wallet balances).
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    try {
      window.gtag("event", eventName, params);
    } catch (e) {
      console.warn("[Analytics] Event dispatch failed:", e);
    }
  }
}

export function trackAppDownload(platform: "android" | "ios", location = "hero") {
  trackEvent("app_download_click", {
    platform,
    location,
    timestamp: new Date().toISOString(),
  });
}

export function trackWebAppClick(sourcePage = "landing", intent = "signup") {
  trackEvent("web_app_click", {
    source_page: sourcePage,
    intent,
    timestamp: new Date().toISOString(),
  });
}

export function trackServiceSelect(serviceName: string, location = "service_page") {
  trackEvent("select_service", {
    service_name: serviceName,
    location,
    timestamp: new Date().toISOString(),
  });
}
