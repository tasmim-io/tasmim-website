import styles from "./FinalCtaSection.module.scss";
import finalCta from "../../data/final-cta.json";
import { Button } from "@/components/button/Button";
import { CalEmbed } from "@/components/cal-embed/CalEmbed";
import { BOOK_A_CALL_HREF } from "@/lib/links";

export const FinalCtaSection = () => {
  return (
    <section className={styles.section} aria-label="Final call to action">
      <div className={styles.cta}>
        <span className={styles.statusPill}>
          <span className={styles.statusDot} aria-hidden="true" />
          {finalCta.status}
        </span>
        <h2 className={styles.heading}>{finalCta.headline}</h2>
        <p className={styles.description}>{finalCta.description}</p>
        <Button href={BOOK_A_CALL_HREF} size="xl" variant="secondary" external>
          {finalCta.buttonText}
        </Button>
        <p className={styles.emailLine}>
          or email us{" "}
          <a href={`mailto:${finalCta.emailAddress}`} className={styles.emailLink}>
            {finalCta.emailAddress}
          </a>
        </p>
      </div>

      <div className={styles.embed}>
        <CalEmbed  />
      </div>
    </section>
  );
};
