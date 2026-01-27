"use client";

import { Check, Search, TrendingUp, type LucideIcon } from "lucide-react";
import styles from "./Services.module.scss";
import type { SupportingService } from "./types";
import { useLocation } from "@/lib/location-context";
import { formatPrice } from "@/lib/format-price";

const iconMap: Record<string, LucideIcon> = {
  Search,
  TrendingUp,
};

type SupportingServiceCardProps = {
  service: SupportingService;
};

export const SupportingServiceCard = ({ service }: SupportingServiceCardProps) => {
  const { currency } = useLocation();
  const Icon = iconMap[service.icon];

  return (
    <div id={`service-${service.id}`} className={styles.supportingCard}>
      <div>
        <div className={styles.supportingHeader}>
          <div className={styles.supportingIcon}>
            <Icon size={24} />
          </div>
          <h4 className={styles.supportingTitle}>{service.title}</h4>
        </div>
        <p className={styles.supportingDescription}>{service.description}</p>
        <div className={styles.supportingDetails}>
          <span className={styles.supportingLabel}>{service.detailsLabel}</span>
          <ul className={styles.supportingDetailList}>
            {service.details.map((detail) => (
              <li key={detail} className={styles.supportingDetailItem}>
                <Check size={18} className={styles.supportingDetailIcon} />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
        {service.note ? <p className={styles.supportingNote}>{service.note}</p> : null}
      </div>
      <div className={styles.supportingMeta}>
        <div className={styles.supportingRow}>
          <span className={styles.supportingMetaLabel}>{service.timelineLabel}</span>
          <span className={styles.supportingMetaValue}>{service.timeline}</span>
        </div>
        <div className={styles.supportingRow}>
          <span className={styles.supportingMetaLabel}>{service.investmentLabel}</span>
          <span className={styles.supportingMetaValue}>
            {formatPrice(service.pricing, currency)}
          </span>
        </div>
      </div>
    </div>
  );
};
