import {
  ArrowRight,
  Check,
  Code,
  GitBranch,
  Globe,
  Mail,
  MessageSquare,
  Zap,
} from "lucide-react";
import styles from "./ServicesVisuals.module.scss";

type ServicesVisualsProps = {
  variant: "web" | "automation";
};

const WebVisual = () => {
  return (
    <div className={styles.visualWrapper}>
      <div className={styles.webWindow}>
        <div className={styles.webWindowHeader}>
          <span className={styles.windowDot} />
          <span className={styles.windowDot} />
          <span className={styles.windowDot} />
        </div>
        <div className={styles.webWindowBody}>
          <div className={styles.webWireframeLayer}>
            <div className={styles.webWireframeTop}>
              <div className={styles.webWireframeLogo} />
              <div className={styles.webWireframeNav}>
                <span />
                <span />
              </div>
            </div>
            <div className={styles.webWireframeHero}>
              <div className={styles.webWireframeHeroText}>
                <div className={styles.webWireframeTitle} />
                <div className={styles.webWireframeLine} />
                <div className={styles.webWireframeLine} />
                <div className={styles.webWireframeButton} />
              </div>
              <div className={styles.webWireframeCard} />
            </div>
            <div className={styles.webWireframeGrid}>
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className={styles.webHiFiLayer}>
            <div className={styles.webHiFiTop}>
              <div className={styles.webHiFiLogo}>BRAND.</div>
              <div className={styles.webHiFiNav}>
                <span className={styles.webHiFiNavActive}>Work</span>
                <span>About</span>
              </div>
            </div>
            <div className={styles.webHiFiHero}>
              <div className={styles.webHiFiHeroText}>
                <div className={styles.webHiFiHeadline}>
                  Elevate your
                  <br />
                  digital presence.
                </div>
                <p className={styles.webHiFiDescription}>
                  We build systems that scale with your business goals.
                </p>
                <span className={styles.webHiFiCta}>Start Project</span>
              </div>
              <div className={styles.webHiFiGlobe}>
                <Globe size={32} />
              </div>
            </div>
            <div className={styles.webHiFiGrid}>
              {[Zap, Check, ArrowRight].map((Icon, index) => (
                <div
                  key={index}
                  className={`${styles.webHiFiCard} ${styles[`webHiFiCard${index}`]}`}
                >
                  <div className={styles.webHiFiIcon}>
                    <Icon size={10} />
                  </div>
                  <span className={styles.webHiFiBar} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AutomationVisual = () => {
  return (
    <div className={styles.flowWrapper}>
      <div className={styles.flowGrid} />
      <div className={styles.flowCanvas}>
        <svg
          className={`${styles.flowLines} ${styles.flowLinesDesktop}`}
          viewBox="0 0 400 300"
          aria-hidden
        >
          <path d="M50 150 L 130 150" />
          <path d="M170 150 L 230 150" />
          <path d="M270 150 L 330 100" />
          <path d="M270 150 L 330 200" />
        </svg>
        <svg
          className={`${styles.flowLines} ${styles.flowLinesMobile}`}
          viewBox="0 0 280 300"
          aria-hidden
        >
          <path d="M20 150 L 80 150" />
          <path d="M120 150 L 160 150" />
          <path d="M200 150 L 240 100" />
          <path d="M200 150 L 240 200" />
        </svg>
        <div className={`${styles.flowNode} ${styles.flowNodeLeft}`}>
          <Zap size={18} />
        </div>
        <div className={`${styles.flowNode} ${styles.flowNodeTransform}`}>
          <div className={styles.flowNodeWire} />
          <div className={styles.flowNodeActive}>
            <Code size={18} />
          </div>
        </div>
        <div className={`${styles.flowNode} ${styles.flowNodeLogic}`}>
          <div className={styles.flowNodeWire} />
          <div className={styles.flowNodeActive}>
            <GitBranch size={18} />
          </div>
        </div>
        <div className={`${styles.flowNode} ${styles.flowNodeSuccess}`}>
          <MessageSquare size={18} />
        </div>
        <div className={`${styles.flowNode} ${styles.flowNodeError}`}>
          <Mail size={18} />
        </div>
        <span className={`${styles.flowLabel} ${styles.flowLabelLead}`}>
          New Lead
        </span>
        <span className={`${styles.flowLabel} ${styles.flowLabelEnrich}`}>
          CRM Enrich
        </span>
        <span className={`${styles.flowLabel} ${styles.flowLabelQualify}`}>
          Qualify
        </span>
        <span className={`${styles.flowLabel} ${styles.flowLabelSlack}`}>
          Slack Alert
        </span>
        <span className={`${styles.flowLabel} ${styles.flowLabelFollow}`}>
          Follow Up
        </span>
      </div>
    </div>
  );
};

export const ServicesVisuals = ({ variant }: ServicesVisualsProps) => {
  if (variant === "web") {
    return <WebVisual />;
  }

  return <AutomationVisual />;
};
