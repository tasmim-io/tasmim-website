import styles from "./ProcessSection.module.scss";
import type { ProcessStep as ProcessStepType } from "./types";
import { renderVisual } from "./ProcessVisuals";

type ProcessStepProps = {
  step: ProcessStepType;
  isActive: boolean;
  setStepRef: (element: HTMLDivElement | null) => void;
  setMarkerRef: (element: HTMLDivElement | null) => void;
};

export const ProcessStep = ({
  step,
  isActive,
  setStepRef,
  setMarkerRef,
}: ProcessStepProps) => (
  <div
    ref={setStepRef}
    className={`${styles.step} ${isActive ? styles.stepActive : ""}`}
  >
    <div className={styles.stepContent}>
      <div className={styles.stepMarker} ref={setMarkerRef} />
      <span className={styles.timePill}>{step.duration}</span>
      <h3 className={styles.stepTitle}>{step.title}</h3>
      <p className={styles.stepDescription}>{step.description}</p>
      <div className={styles.requirementBox}>
        <div className={styles.requirementLabel}>Your part:</div>
        <div className={styles.requirementText}>{step.requirement}</div>
      </div>
    </div>

    <div className={styles.stepVisual}>{renderVisual(step.visual)}</div>
  </div>
);
