import Image from "next/image";
import styles from "./ProjectCard.module.scss";
import { Fragment } from "react";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  label?: string;
  description?: string;
  technologies?: string[];
  year?: string;
  isReversed?: boolean;
  url?: string;
  blurDataURL?: string;
}

export const ProjectCard = ({
  imageSrc,
  imageAlt,
  title,
  label,
  description,
  technologies,
  year,
  isReversed = false,
  url,
  blurDataURL,
}: ProjectCardProps) => {
  const content = (
    <>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 60vw"
          placeholder={blurDataURL ? "blur" : "empty"}
          blurDataURL={blurDataURL}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.contentInner}>
          {label && <span className={styles.label}>{label}</span>}
          <h3 className={styles.title}>{title}</h3>
          {description && <p className={styles.description}>{description}</p>}
          {url && (
            <div className={styles.viewLink}>
              <span>View Live Website</span>
              <ArrowUpRight className={styles.arrowIcon} size={16} />
            </div>
          )}
        </div>
        {(technologies || year) && (
          <div className={styles.bottomBar}>
            {technologies && technologies.length > 0 && (
              <div className={styles.technologies}>
                {technologies.map((tech, index) => (
                  <Fragment key={index}>
                    <span>{tech}</span>
                    {index < technologies.length - 1 && <span className={styles.dot}></span>}
                  </Fragment>
                ))}
              </div>
            )}
            {year && <div className={styles.year}>{year}</div>}
          </div>
        )}
      </div>
    </>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.projectCard} ${isReversed ? styles.reversed : ""} ${styles.clickable}`}
      >
        {content}
      </a>
    );
  }

  return (
    <article className={`${styles.projectCard} ${isReversed ? styles.reversed : ""}`}>
      {content}
    </article>
  );
};
