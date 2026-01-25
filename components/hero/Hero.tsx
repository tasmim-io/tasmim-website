"use client";

import { Button } from "../button/Button";
import { StatCard } from "../stat-card/StatCard";
import { BOOK_A_CALL_HREF } from "../../lib/links";
import { Users, Check, Clock } from "lucide-react";
import styles from "./Hero.module.scss";
import buttonStyles from "../button/Button.module.scss";
import HeroDashboard from "./HeroDashboard";

export const Hero = () => {
  return (
    <section id="hero" className={styles.hero} aria-label="Hero section">
      <div className={styles.content}>
        <h1 className={styles.title}>
          Premium websites.
          <br />
          Intelligent automations.
        </h1>
        <p className={styles.description}>
          For agencies and experts who value calm operations as much as strong first impressions.
        </p>
        <div className={styles.buttonGroup}>
          <Button
            href={BOOK_A_CALL_HREF}
            external
            variant="secondary"
            className={buttonStyles.heroCta}
          >
            Book a call
          </Button>
          <Button href="#services" variant="outline" className={buttonStyles.heroButton}>
            View Services
          </Button>
        </div>
        </div>
        <div className={styles.visualsWrapper}>
          <HeroDashboard />
          <StatCard
            variant="default"
            icon={Users}
            label="Qualified Leads"
            value="18"
            subLabel="4"
            badge="CRM"
            color="purple"
            className={styles.card1}
          />
          <StatCard
            variant="compact"
            icon={Check}
            label="Sync Complete"
            subLabel="454 records updated"
            color="green"
            className={styles.card2}
          />
          <StatCard
            variant="compact"
            icon={Clock}
            label="Time Saved"
            subLabel="12.5 hrs this week"
            color="blue"
            className={styles.card3}
          />
        </div>
      
    </section>
  );
};
