import styles from "./Problem.module.scss";
import { AlertCircle, CheckCircle2, type LucideIcon } from "lucide-react";
import { Button } from "@/components/button/Button";
import problemData from "../../data/problem.json";
import { CardHeader } from "./CardHeader";
import { ListItem } from "./ListItem";

const iconMap: Record<string, LucideIcon> = {
  AlertCircle,
  CheckCircle2,
};

type ButtonVariant = "primary" | "secondary" | "outline";

export const ProblemSection = () => {
  const { heading, cards, cta } = problemData;
  const ProblemIcon = iconMap[cards.growthCeiling.icon];
  const SolutionIcon = iconMap[cards.scalableAgency.icon];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{heading}</h2>

      <div className={styles.grid}>
        <div className={`${styles.card} ${styles.growthCard}`}>
          <CardHeader title={cards.growthCeiling.title} subtitle={cards.growthCeiling.subtitle} />
          <div className={styles.list}>
            {cards.growthCeiling.items.map((item, index) => (
              <ListItem
                key={index}
                title={item.title}
                description={item.description}
                Icon={ProblemIcon}
              />
            ))}
          </div>
        </div>

        <div className={`${styles.card} ${styles.scalableCard}`}>
          <CardHeader title={cards.scalableAgency.title} subtitle={cards.scalableAgency.subtitle} />
          <div className={styles.list}>
            {cards.scalableAgency.items.map((item, index) => (
              <ListItem
                key={index}
                title={item.title}
                description={item.description}
                Icon={SolutionIcon}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.ctaContainer}>
        <p>{cta.text}</p>
        <Button href={cta.button.href} variant={cta.button.variant as ButtonVariant} size="xl">
          {cta.button.text}
        </Button>
      </div>
    </section>
  );
};
