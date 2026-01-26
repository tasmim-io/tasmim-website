import { ProjectCard } from "./ProjectCard";
import styles from "./Work.module.scss";
import projectsData from "../../data/projects.json";

export const WorkSection = () => {
  return (
    <section id="work" className={styles.work} aria-label="Recent work section">
      <h2 className={styles.heading}>Recent Work</h2>
      <div className={styles.projects}>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            imageSrc={project.image}
            imageAlt={project.imageAlt}
            title={project.title}
            label={project.label}
            description={project.description}
            technologies={project.technologies}
            year={project.year}
            isReversed={project.isReversed}
            url={project.url}
            blurDataURL={project.blurDataURL}
          />
        ))}
      </div>
    </section>
  );
};
