import Image from "next/image";
import styles from "./ProjectCard.module.scss";
import { Fragment } from "react";

interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  label?: string;
  description?: string;
  technologies?: string[];
  year?: string;
  isReversed?: boolean;
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
}: ProjectCardProps) => {
  return (
    <article className={`${styles.projectCard} ${isReversed ? styles.reversed : ""}`}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 60vw"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.contentInner}>
          {label && <span className={styles.label}>{label}</span>}
          <h3 className={styles.title}>{title}</h3>
          {description && <p className={styles.description}>{description}</p>}
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
    </article>
  );
};
