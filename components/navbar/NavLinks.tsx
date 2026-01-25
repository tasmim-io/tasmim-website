import { forwardRef } from "react";
import Link from "next/link";
import { Button } from "../button/Button";
import { BOOK_A_CALL_HREF } from "../../lib/links";
import styles from "./Navbar.module.scss";

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
];

export const NavLinks = forwardRef<HTMLElement>((_, ref) => {
  return (
    <nav ref={ref} className={styles.nav}>
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href} className={styles.navLink}>
          <span className={styles.linkText}>
            <span data-text={link.label}>{link.label}</span>
          </span>
        </Link>
      ))}
      <div className={styles.cta}>
        <Button href={BOOK_A_CALL_HREF} external variant="secondary">
          Book a call
        </Button>
      </div>
    </nav>
  );
});

NavLinks.displayName = "NavLinks";
