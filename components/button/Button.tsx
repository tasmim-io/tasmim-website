import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  children,
  href,
  variant = "primary",
  external = false,
  onClick,
  className = "",
}: ButtonProps) => {
  const text = typeof children === "string" ? children : "";

  return (
    <Link
      href={href}
      className={`${styles.button} ${styles[variant]} ${className}`}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <span className={styles.textWrapper}>
        <span data-text={text}>{children}</span>
      </span>
    </Link>
  );
};
