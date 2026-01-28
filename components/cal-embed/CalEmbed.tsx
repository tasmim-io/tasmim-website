"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useCookieConsent } from "@/lib/cookie-consent-context";
import { Calendar, ExternalLink } from "lucide-react";
import styles from "./CalEmbed.module.scss";

type CalEmbedProps = {
  className?: string;
};

export const CalEmbed = ({ className }: CalEmbedProps) => {
  const { preferences, hasConsented } = useCookieConsent();
  const canLoadCal = hasConsented && preferences.marketing;

  useEffect(() => {
    if (!canLoadCal) return;

    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#161616" },
          dark: { "cal-brand": "#f4f4f4" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [canLoadCal]);

  // Show placeholder if consent not given for marketing/third-party
  if (!canLoadCal) {
    return (
      <div className={`${styles.placeholder} ${className || ""}`}>
        <div className={styles.placeholderContent}>
          <div className={styles.iconWrapper}>
            <Calendar size={32} />
          </div>
          <h3 className={styles.placeholderTitle}>Booking Calendar</h3>
          <p className={styles.placeholderText}>
            Accept third-party cookies to view the embedded calendar, or book directly on Cal.com
          </p>
          <a
            href="https://cal.eu/tasmim/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.externalLink}
          >
            <span>Book on Cal.com</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    );
  }

  return (
    <Cal
      namespace="30min"
      calLink="tasmim/30min"
      calOrigin="https://app.cal.eu"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      className={className}
      config={{
        layout: "month_view",
        theme: "dark",
      }}
    />
  );
};
