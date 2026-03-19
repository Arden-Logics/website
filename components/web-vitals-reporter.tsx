"use client";

import { useEffect } from "react";
import { onCLS, onINP, onLCP } from "web-vitals";

/**
 * Reports Core Web Vitals to Google Analytics (GA4).
 * Vercel Analytics also collects these; this sends to gtag for GA4 dashboards.
 */
function reportWebVitals(metric: { name: string; value: number; id: string }) {
  if (typeof window !== "undefined" && "gtag" in window) {
    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void })
      .gtag;
    if (gtag) {
      // CLS is 0-1; multiply by 1000 for GA4. Others (LCP, INP) are in ms.
      const value =
        metric.name === "CLS"
          ? Math.round(metric.value * 1000)
          : Math.round(metric.value);
      gtag("event", metric.name, {
        value,
        event_label: metric.id,
        non_interaction: true,
      });
    }
  }
}

export function WebVitalsReporter() {
  useEffect(() => {
    onCLS(reportWebVitals);
    onINP(reportWebVitals);
    onLCP(reportWebVitals);
  }, []);

  return null;
}
