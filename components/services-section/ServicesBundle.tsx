import styles from "./Services.module.scss";
import type { BundleData } from "./types";

type ServicesBundleProps = {
  bundle: BundleData;
};

export const ServicesBundle = ({ bundle }: ServicesBundleProps) => {
  return (
    <div className={styles.bundle}>
      <h3 className={styles.bundleTitle}>{bundle.title}</h3>
      <p className={styles.bundleText}>{bundle.text}</p>
    </div>
  );
};
