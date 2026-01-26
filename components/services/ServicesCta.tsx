import styles from "./Services.module.scss";
import { Button } from "@/components/button/Button";
import type { CtaData } from "./types";
import { BOOK_A_CALL_HREF } from "@/lib/links";

type ServicesCtaProps = {
  cta: CtaData;
};

export const ServicesCta = ({ cta }: ServicesCtaProps) => {
  const lines = cta.text.split("\n");

  return (
    <div className={styles.cta}>
      <h3 className={styles.ctaTitle}>{cta.title}</h3>
      <p className={styles.ctaText}>
        {lines.map((line, index) => (
          <span key={`${line}-${index}`}>
            {line}
            {index < lines.length - 1 ? <br /> : null}
          </span>
        ))}
      </p>
      <Button href={BOOK_A_CALL_HREF} size="xl" variant="secondary">
        {cta.buttonText}
      </Button>
    </div>
  );
};
