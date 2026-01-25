"use client";

import { Users, type LucideIcon } from "lucide-react";
import styles from "./StatCard.module.scss";

interface StatCardProps {
  variant?: "default" | "compact";
  icon?: LucideIcon;
  label?: string;
  value?: string | number;
  subLabel?: string;
  badge?: string;
  showProgress?: boolean;
  source?: string;
  color?: "purple" | "green" | "blue";
  className?: string;
}

export const StatCard = ({
  variant = "default",
  icon: Icon = Users,
  label = "Qualified Leads",
  value = "18",
  subLabel = "4",
  badge = "CRM",
  showProgress = true,
  source = "Source: LinkedIn Automation",
  color = "purple",
  className,
}: StatCardProps) => {
  if (variant === "compact") {
    return (
      <div className={`${styles.card} ${styles.compact} ${className || ""}`}>
        <div className={`${styles.compactIconWrapper} ${styles[color]}`}>
          <Icon size={20} />
        </div>
        <div className={styles.textColumn}>
          <div className={styles.compactTitle}>{label}</div>
          <div className={styles.compactSubtitle}>{subLabel}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.card} ${className || ""}`}>
      <div className={styles.header}>
        <div className={`${styles.iconWrapper} ${styles[color]}`}>
          <Icon size={20} className={styles.icon} />
        </div>
        {badge && <div className={styles.badge}>{badge}</div>}
      </div>

      <div className={styles.bodyWrapper}>
        <div className={styles.content}>
          <div className={styles.label}>{label}</div>
          <div className={styles.statRow}>
            <span className={styles.value}>{value}</span>
            <div className={styles.change}>
              <div className={styles.triangle}></div>
              <span>{subLabel}</span>
            </div>
          </div>
        </div>

        {showProgress && (
          <div className={styles.footer}>
            <div className={styles.progressBar}>
              <div className={styles.progressFill}></div>
            </div>
            {source && <div className={styles.source}>{source}</div>}
          </div>
        )}
      </div>
    </div>
  );
};
