import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";

type BrandProps = {
  logoText: string;
  tagline: string;
  copyright: string;
};

type FooterBrandProps = {
  brand: BrandProps;
};

export const FooterBrand = ({ brand }: FooterBrandProps) => {
  return (
    <div className={styles.brand}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/tasmim-logo.svg"
          alt="TASMIM Logo"
          width={40}
          height={24}
          className={styles.logoImage}
        />
        <span className={styles.logoText}>{brand.logoText}</span>
      </Link>
      <p className={styles.tagline}>{brand.tagline}</p>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} {brand.copyright}
      </p>
    </div>
  );
};
