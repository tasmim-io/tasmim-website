import { useEffect } from "react";
import Link from "next/link";
import { Button } from "../button/Button";
import { navLinks } from "./NavLinks";
import { BOOK_A_CALL_HREF } from "../../lib/links";
import styles from "./MobileMenu.module.scss";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
      <nav className={styles.mobileNav}>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className={styles.mobileNavLink} onClick={onClose}>
            {link.label}
          </Link>
        ))}
        <div className={styles.mobileCta}>
          <Link href={BOOK_A_CALL_HREF} onClick={onClose} target="_blank">
            <span>Book a call</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};
