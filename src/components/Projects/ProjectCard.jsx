import { Github, ExternalLink } from 'lucide-react';
import styles from './Projects.module.css';

const ProjectCard = ({
  title,
  description,
  tech,
  github,
  demo,
  gradient,
  index,
  isVisible
}) => {
  return (
    <div
      className={`${styles.card} ${isVisible ? styles.cardVisible : ''} ${styles[gradient]}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={styles.cardGlow}></div>

      <div className={styles.cardContent}>
        <div className={styles.cardTop}></div>

        <div className={styles.cardBody}>
          <div className={styles.iconBox}>💡</div>

          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>

          <div className={styles.techStack}>
            {tech.map((item, i) => (
              <span key={i} className={styles.techBadge}>
                {item}
              </span>
            ))}
          </div>

          <div className={styles.cardLinks}>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
            >
              <Github className={styles.linkIcon} />
              Code
            </a>

            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.demoLink}
              >
                <ExternalLink className={styles.linkIcon} />
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
