import {
  Check,
  FileText,
  Layout,
  Rocket,
  User,
} from "lucide-react";
import styles from "./ProcessVisuals.module.scss";
import type {
  ClarityVisual,
  LaunchVisual,
  ProposalVisual,
  SprintVisual,
  StepVisual,
} from "./types";

const VisualClarity = ({ visual }: { visual: ClarityVisual }) => (
  <div className={`process-visual ${styles.visualCard} ${styles.visualClarity}`}>
    <div className={styles.visualHeaderRow}>
      <div className={styles.visualAvatar}>
        <User size={24} />
      </div>
      <div>
        <div className={styles.visualTitle}>{visual.title}</div>
        <div className={styles.visualMeta}>{visual.meta}</div>
      </div>
    </div>
    <div className={styles.visualSkeleton}>
      <span />
      <span />
      <span />
    </div>
    <div className={styles.visualStatusRow}>
      <div className={styles.visualStatusPill}>
        <Check size={12} />
        {visual.statusText}
      </div>
    </div>
  </div>
);

const VisualProposal = ({ visual }: { visual: ProposalVisual }) => (
  <div className={`process-visual ${styles.visualCard} ${styles.visualProposal}`}>
    <div className={styles.visualProposalHeader}>
      <span>{visual.fileName}</span>
      <FileText size={16} />
    </div>
    <div className={styles.visualProposalBody}>
      <div className={styles.visualProposalRow}>
        <span>{visual.timelineLabel}</span>
        <strong>{visual.timelineValue}</strong>
      </div>
      <div className={styles.visualProposalRow}>
        <span>{visual.investmentLabel}</span>
        <strong>{visual.investmentValue}</strong>
      </div>
      <div className={styles.visualProposalButton}>{visual.buttonText}</div>
    </div>
  </div>
);

const VisualSprint = ({ visual }: { visual: SprintVisual }) => (
  <div className={`process-visual ${styles.visualCard} ${styles.visualSprint}`}>
    <div className={styles.visualSprintHeader}>
      <div className={styles.visualSprintTitle}>
        <span className={styles.visualSprintIcon}>
          <Layout size={16} />
        </span>
        {visual.title}
      </div>
      <span className={styles.visualSprintStatus}>{visual.statusText}</span>
    </div>
    <div className={styles.visualSprintTasks}>
      {visual.tasks.map((task) => (
        <div
          key={task.text}
          className={`${styles.visualSprintTask} ${
            task.done ? styles.visualSprintTaskDone : ""
          }`}
        >
          <span className={styles.visualSprintCheckbox}>
            {task.done && <Check size={10} />}
          </span>
          <span>{task.text}</span>
        </div>
      ))}
    </div>
    <div className={styles.visualSprintComment}>
      <div className={styles.visualSprintAvatar}>{visual.commentAuthor}</div>
      <div className={styles.visualSprintBubble}>{visual.commentText}</div>
    </div>
  </div>
);

const VisualLaunch = ({ visual }: { visual: LaunchVisual }) => (
  <div className={`process-visual ${styles.visualCard} ${styles.visualLaunch}`}>
    <div className={styles.visualLaunchPanel}>
      <div className={styles.visualLaunchIcon}>
        <Rocket size={32} />
      </div>
      <h4>{visual.title}</h4>
      <p>{visual.subtitle}</p>
      <div className={styles.visualLaunchDots}>
        <span />
        <span />
        <span />
      </div>
    </div>
  </div>
);

export const renderVisual = (visual: StepVisual) => {
  switch (visual.type) {
    case "clarity":
      return <VisualClarity visual={visual} />;
    case "proposal":
      return <VisualProposal visual={visual} />;
    case "sprint":
      return <VisualSprint visual={visual} />;
    case "launch":
      return <VisualLaunch visual={visual} />;
    default:
      return null;
  }
};
