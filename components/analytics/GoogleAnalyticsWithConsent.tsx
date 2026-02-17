"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useCookieConsent } from "@/lib/cookie-consent-context";

const GA_MEASUREMENT_ID = "G-5F5HPJ2KPM";

export function GoogleAnalyticsWithConsent() {
  const { preferences, isLoading } = useCookieConsent();

  if (isLoading || !preferences.marketing) {
    return null;
  }

  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}
