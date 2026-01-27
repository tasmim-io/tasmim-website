import styles from "./Footer.module.scss";
import footerData from "../../data/footer.json";
import { FooterBrand } from "./FooterBrand";
import { FooterContact } from "./FooterContact";
import { FooterLinksColumn } from "./FooterLinksColumn";

export const Footer = () => {
  const { brand, services, navigation, contact } = footerData;

  return (
    <footer className={styles.footer} aria-label="Footer">
      <div className={styles.grid}>
        <FooterBrand brand={brand} />
        <FooterLinksColumn title={services.title} links={services.links} />
        <FooterLinksColumn title={navigation.title} links={navigation.links} />
        <FooterContact contact={contact} />
      </div>
    </footer>
  );
};
