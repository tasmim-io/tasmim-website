import Link from "next/link";

type FooterLinkProps = {
  href: string;
  label: string;
  className?: string;
};

export const FooterLink = ({ href, label, className }: FooterLinkProps) => {
  const isHttp = href.startsWith("http");
  const isMailto = href.startsWith("mailto:");
  const isExternal = isHttp || isMailto;

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target={isHttp ? "_blank" : undefined}
        rel={isHttp ? "noreferrer" : undefined}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
};
