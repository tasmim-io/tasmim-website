import styles from "./page.module.scss";

export default function PrivacyPage() {
  return (
    <div className="container">
      <section aria-labelledby="privacy-heading" className={styles.page}>
        <h1 id="privacy-heading" className={styles.heading}>
          Privacy Policy
        </h1>
        <p className={styles.lead}>
          This page explains how Tasmim uses data on this website, including cookies and third-party
          services.
        </p>

        <div className={styles.richText}>
          <h2>What we collect</h2>
          <p>
            On this site we do not run advertising trackers or behavioral profiling. We only use the
            minimum data needed to:
          </p>
          <ul>
            <li>Show prices in an appropriate currency for your region.</li>
            <li>Let you schedule calls through our booking partner, Cal.com.</li>
            <li>Respond when you contact us directly by email.</li>
          </ul>

          <h2>Location-based pricing</h2>
          <p>
            To display pricing in a relevant currency (for example, EGP vs EUR), we make a request
            to an IP geolocation service (ipapi.co) when you first visit the site. We store only the
            resulting country code (for example, &quot;EG&quot;) in your browser&apos;s{" "}
            <strong>localStorage</strong> under the key <code>tasmim_user_country</code>. We do not
            store raw IP addresses in our own systems from this lookup.
          </p>

          <h2>Cookies and local storage</h2>
          <p>
            We use essential browser storage to remember your choices, such as currency and cookie
            preferences. These are required for the site to function as intended.
          </p>

          <h2>Third-party services (Cal.com)</h2>
          <p>
            For booking calls we integrate with Cal.com (Cal.eu). This service may set its own
            cookies or use similar technologies on their domain. We only load the embedded calendar
            after you opt in to third-party services in the cookie banner. You can also choose to
            book directly on Cal.com instead of using the embed.
          </p>

          <h2>Your choices</h2>
          <p>
            You can control non-essential technologies via the cookie banner at the bottom of the
            page. At any time, you can clear your browser&apos;s cookies and local storage to remove
            stored preferences.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about how we handle data on this site, you can contact us at{" "}
            <a href="mailto:contact@tasmim.io">contact@tasmim.io</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
