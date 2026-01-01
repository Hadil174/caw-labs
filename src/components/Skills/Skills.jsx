import { useState, useEffect, useRef } from 'react'
import styles from './Skills.module.css'

function Skills() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const skillCategories = [
    {
      title: 'Languages',
      icon: '💻',
      skills: [
        { name: 'JavaScript', level: 85 },
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'TypeScript', level: 70 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: '⚛️',
      skills: [
        { name: 'React', level: 85 },
        { name: 'Vite', level: 80 },
        { name: 'Redux', level: 70 },
        { name: 'React Router', level: 75 }
      ]
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', level: 80 },
        { name: 'Jest', level: 65 },
        { name: 'REST APIs', level: 75 },
        { name: 'Responsive Design', level: 90 }
      ]
    }
  ]

  return (
    <section id="skills" className={styles.skills} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleGradient}>Skills & Technologies</span>
          </h2>
          <p className={styles.subtitle}>
            Technologies and tools I've learned and worked with
          </p>
        </div>

        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`${styles.category} ${inView ? styles.visible : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>{category.icon}</span>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>

              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div 
                        className={`${styles.progress} ${inView ? styles.progressAnimate : ''}`}
                        style={{ 
                          '--target-width': `${skill.level}%`,
                          animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills