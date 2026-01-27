import styles from "./Footer.module.scss";
import { FooterLink } from "./FooterLink";

type LinkItem = {
  label: string;
  href: string;
};

type FooterLinksColumnProps = {
  title: string;
  links: LinkItem[];
};

export const FooterLinksColumn = ({ title, links }: FooterLinksColumnProps) => {
  return (
    <div className={styles.column}>
      <p className={styles.columnTitle}>{title}</p>
      <ul className={styles.linkList}>
        {links.map((link) => (
          <li key={link.label}>
            <FooterLink href={link.href} label={link.label} className={styles.link} />
          </li>
        ))}
      </ul>
    </div>
  );
};
