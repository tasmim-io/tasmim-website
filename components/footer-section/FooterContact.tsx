import styles from "./Footer.module.scss";
import { SOCIAL_LINKS } from "@/lib/links";

type SocialItem = {
  key: string;
  label: string;
  icon: string;
};

type ContactProps = {
  title: string;
  emailLabel: string;
  email: string;
  servingLabel: string;
  serving: string;
  social: SocialItem[];
};

type FooterContactProps = {
  contact: ContactProps;
};

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" role="img" aria-hidden="true">
    <path
      d="M20.45 20.45H17.1v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9.75V9h3.22v1.56h.05c.45-.85 1.55-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.18v6.46ZM5.86 7.52a1.96 1.96 0 1 1 0-3.92 1.96 1.96 0 0 1 0 3.92Zm1.67 12.93H4.19V9h3.34v11.45Z"
      fill="currentColor"
    />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" role="img" aria-hidden="true">
    <path
      d="M18.9 3h2.63l-5.75 6.57 6.77 8.93h-5.32l-4.17-5.45-4.77 5.45H5.66l6.15-7.03L5.33 3h5.46l3.77 4.98L18.9 3Zm-.92 14.02h1.46L9.92 4.9H8.35l9.63 12.12Z"
      fill="currentColor"
    />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" role="img" aria-hidden="true">
    <path
      d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.5A3 3 0 0 0 4.5 7.5v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3h-9Zm4.5 3.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5-2.1a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Z"
      fill="currentColor"
    />
  </svg>
);

const iconMap = {
  Linkedin: LinkedInIcon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
};

export const FooterContact = ({ contact }: FooterContactProps) => {
  return (
    <div className={styles.column}>
      <p className={styles.columnTitle}>{contact.title}</p>
      <div className={styles.contactBlock}>
        <span className={styles.label}>{contact.emailLabel}</span>
        <a href={`mailto:${contact.email}`} className={styles.link}>
          {contact.email}
        </a>
      </div>
      <div className={styles.contactBlock}>
        <span className={styles.label}>{contact.servingLabel}</span>
        <span className={styles.contactValue}>{contact.serving}</span>
      </div>
      <div className={styles.social}>
        {contact.social.map((social) => {
          const Icon = iconMap[social.icon as keyof typeof iconMap];
          const href = SOCIAL_LINKS[social.key as keyof typeof SOCIAL_LINKS];
          if (!Icon || !href) return null;
          return (
            <a
              key={social.label}
              href={href}
              className={styles.socialLink}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
            >
              <Icon className={styles.socialIcon} aria-hidden="true" />
            </a>
          );
        })}
      </div>
    </div>
  );
};
