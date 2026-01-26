import { Check, type LucideIcon } from "lucide-react";
import styles from "./Services.module.scss";
import { ServicesVisuals } from "./visuals/ServicesVisuals";
import type { MainService } from "./types";

type MainServiceCardProps = {
  service: MainService;
  Icon: LucideIcon;
};

export const MainServiceCard = ({ service, Icon }: MainServiceCardProps) => {
  return (
    <div className={styles.mainCard} data-service-card>
      <div className={styles.mainCardGrid}>
        <div className={styles.mainCardContent}>
          <div className={styles.iconBadge}>
            <Icon size={28} />
          </div>
          <h3 className={styles.serviceTitle}>{service.title}</h3>
          <p className={styles.serviceDescription}>{service.description}</p>
          <div className={styles.problemBox}>
            <span className={styles.problemLabel}>{service.problemTitle}</span>
            <p className={styles.problemText}>{service.problemText}</p>
          </div>
          <div className={styles.benefits}>
            <h4 className={styles.benefitsTitle}>{service.benefitsTitle}</h4>
            <ul className={styles.benefitsList}>
              {service.benefits.map((benefit) => (
                <li key={benefit} className={styles.benefitItem}>
                  <Check size={20} className={styles.benefitIcon} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.options}>
            <span className={styles.optionsLabel}>{service.optionsLabel}</span>
            <div className={styles.optionsList}>
              {service.options.map((option) => (
                <div key={option.title} className={styles.optionRow}>
                  <div className={styles.optionHeader}>
                    <div className={styles.optionContent}>
                      <span className={styles.optionTitle}>{option.title}</span>
                      <ul className={styles.optionDetails}>
                        {option.items.map((item) => (
                          <li key={item} className={styles.optionDetailItem}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.optionMeta}>
                      <span className={styles.optionPrice}>{option.price}</span>
                      <span className={styles.optionTimeline}>
                        {option.timeline}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.mainCardVisual}>
          <ServicesVisuals
            variant={service.id === "web" ? "web" : "automation"}
          />
        </div>
      </div>
    </div>
  );
};
