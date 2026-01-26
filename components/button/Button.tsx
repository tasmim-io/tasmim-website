import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "lg" | "xl";
  external?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  children,
  href,
  variant = "primary",
  size = "sm",
  external = false,
  onClick,
  className = "",
}: ButtonProps) => {
  const text = typeof children === "string" ? children : "";
  const sizeClass =
    size === "xl" ? styles.xl : size === "lg" ? styles.lg : "";

  return (
    <Link
      href={href}
      className={`${styles.button} ${styles[variant]} ${sizeClass} ${className}`.trim()}
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
