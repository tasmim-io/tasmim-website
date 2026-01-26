import styles from "./Problem.module.scss";

type CardHeaderProps = {
  title: string;
  subtitle: string;
};

export const CardHeader = ({ title, subtitle }: CardHeaderProps) => {
  return (
    <div className={styles.cardHeader}>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};
