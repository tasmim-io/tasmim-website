"use client";

import { useState } from "react";
import Link from "next/link";
import { useCookieConsent } from "@/lib/cookie-consent-context";
import { Cookie, ChevronDown, ChevronUp } from "lucide-react";
import styles from "./CookieConsentBanner.module.scss";

export const CookieConsentBanner = () => {
  const { hasConsented, isLoading, acceptAll, acceptNecessary, updatePreferences } =
    useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [customPrefs, setCustomPrefs] = useState({
    marketing: true,
  });

  // Don't render during SSR or loading, or if already consented
  if (isLoading || hasConsented) {
    return null;
  }

  const handleCustomSave = () => {
    updatePreferences({
      marketing: customPrefs.marketing,
    });
  };

  return (
    <div className={styles.banner} role="dialog" aria-label="Cookie consent">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.iconWrapper}>
            <Cookie size={24} />
          </div>
          <div className={styles.text}>
            <h3 className={styles.title}>We value your privacy</h3>
            <p className={styles.description}>
              We use essential technologies to run this site and optional third-party services you
              can control.{" "}
              <Link href="/privacy" className={styles.privacyLink}>
                Read our full privacy policy
              </Link>
              .
            </p>
          </div>
        </div>

        <button
          className={styles.detailsToggle}
          onClick={() => setShowDetails(!showDetails)}
          aria-expanded={showDetails}
        >
          <span>Customize preferences</span>
          {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {showDetails && (
          <div className={styles.details}>
            <div className={styles.preferenceItem}>
              <div className={styles.preferenceInfo}>
                <span className={styles.preferenceLabel}>Necessary</span>
                <span className={styles.preferenceDescription}>
                  Required for the website to function, including basic location-based pricing.
                  Cannot be disabled.
                </span>
              </div>
              <div className={styles.toggle}>
                <input type="checkbox" checked disabled aria-label="Necessary cookies" />
                <span className={styles.toggleSlider} data-disabled="true" />
              </div>
            </div>

            <div className={styles.preferenceItem}>
              <div className={styles.preferenceInfo}>
                <span className={styles.preferenceLabel}>Third-party services</span>
                <span className={styles.preferenceDescription}>
                  Booking calendar (Cal.com) for scheduling consultations. Enabled only with your
                  consent.
                </span>
              </div>
              <label className={styles.toggle}>
                <input
                  type="checkbox"
                  checked={customPrefs.marketing}
                  onChange={(e) =>
                    setCustomPrefs((prev) => ({ ...prev, marketing: e.target.checked }))
                  }
                  aria-label="Third-party service cookies"
                />
                <span className={styles.toggleSlider} />
              </label>
            </div>
          </div>
        )}

        <div className={styles.actions}>
          <button className={styles.buttonSecondary} onClick={acceptNecessary}>
            Necessary only
          </button>
          {showDetails ? (
            <button className={styles.buttonPrimary} onClick={handleCustomSave}>
              Save preferences
            </button>
          ) : (
            <button className={styles.buttonPrimary} onClick={acceptAll}>
              Accept all
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
