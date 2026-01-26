import styles from "./Problem.module.scss";
import type { LucideIcon } from "lucide-react";

type ListItemProps = {
  title: string;
  description: string;
  Icon?: LucideIcon;
};

export const ListItem = ({ title, description, Icon }: ListItemProps) => {
  return (
    <div className={styles.listItem}>
      <div className={styles.iconWrapper}>{Icon && <Icon />}</div>
      <div className={styles.itemContent}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};
