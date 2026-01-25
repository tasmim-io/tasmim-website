import styles from "./Problem.module.scss";
import { AlertCircle, CheckCircle2, type LucideIcon } from "lucide-react";
import { Button } from "@/components/button/Button";
import problemData from "../../data/problem.json";

const iconMap: Record<string, LucideIcon> = {
  AlertCircle,
  CheckCircle2,
};

type ButtonVariant = "primary" | "secondary" | "outline";

export const Problem = () => {
  const { heading, cards, cta } = problemData;
  const ProblemIcon = iconMap[cards.growthCeiling.icon];
  const SolutionIcon = iconMap[cards.scalableAgency.icon];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{heading}</h2>

      <div className={styles.grid}>
        <div className={`${styles.card} ${styles.growthCard}`}>
          <div className={styles.cardHeader}>
            <h3>{cards.growthCeiling.title}</h3>
            <p>{cards.growthCeiling.subtitle}</p>
          </div>
          <div className={styles.list}>
            {cards.growthCeiling.items.map((item, index) => (
              <div key={index} className={styles.listItem}>
                <div className={styles.iconWrapper}>
                  {ProblemIcon && <ProblemIcon />}
                </div>
                <div className={styles.itemContent}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.card} ${styles.scalableCard}`}>
          <div className={styles.cardHeader}>
            <h3>{cards.scalableAgency.title}</h3>
            <p>{cards.scalableAgency.subtitle}</p>
          </div>
          <div className={styles.list}>
            {cards.scalableAgency.items.map((item, index) => (
              <div key={index} className={styles.listItem}>
                <div className={styles.iconWrapper}>
                  {SolutionIcon && <SolutionIcon />}
                </div>
                <div className={styles.itemContent}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.ctaContainer}>
        <p>{cta.text}</p>
        <Button
          href={cta.button.href}
          variant={cta.button.variant as ButtonVariant}
          size="lg"
        >
          {cta.button.text}
        </Button>
      </div>
    </section>
  );
};
