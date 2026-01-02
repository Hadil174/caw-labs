import { useState, useEffect } from 'react';
import { Code2, Zap, Sparkles, TrendingUp } from 'lucide-react';
import styles from './Skills.module.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('languages');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillsData = {
    languages: [
      { name: "JavaScript", icon: "JS", level: 90, color: "yellowToYellow" },
      { name: "HTML5", icon: "HTML", level: 95, color: "orangeToRed" },
      { name: "CSS3", icon: "CSS", level: 88, color: "blueToBlue" },
      { name: "PHP", icon: "PHP", level: 82, color: "purpleToPurple" }
    ],
    frameworks: [
      { name: "React", icon: "⚛", level: 85, color: "cyanToBlue" },
      { name: "Laravel", icon: "L", level: 80, color: "redToPink" },
      { name: "Vite", icon: "⚡", level: 80, color: "purpleToIndigo" },
      { name: "Tailwind", icon: "TW", level: 78, color: "tealToCyan" }
    ],
    tools: [
      { name: "Git", icon: "GIT", level: 85, color: "orangeToRed" },
      { name: "Jest", icon: "JEST", level: 75, color: "pinkToRose" },
      { name: "NPM", icon: "NPM", level: 80, color: "redToRed" },
      { name: "Node.js", icon: "NODE", level: 78, color: "greenToEmerald" }
    ],
    databases: [
      { name: "MySQL", icon: "SQL", level: 80, color: "blueToCyan" },
      { name: "MongoDB", icon: "MDB", level: 70, color: "greenToEmerald" }
    ]
  };

  const categories = [
    { key: 'languages', label: 'Languages', icon: Code2 },
    { key: 'frameworks', label: 'Frameworks', icon: Zap },
    { key: 'tools', label: 'Tools', icon: Sparkles },
    { key: 'databases', label: 'Databases', icon: TrendingUp }
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      {/* Animated Background Orbs */}
      <div className={styles.backgroundOrbs}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
      </div>

      <div className={styles.container}>
        {/* Header Section */}
        <div className={`${styles.header} ${isVisible ? styles.headerVisible : ''}`}>
          {/* Badge */}
          <div className={styles.badge}>
            <Sparkles className={styles.badgeIconLeft} />
            <span className={styles.badgeText}>Technical Arsenal</span>
            <Zap className={styles.badgeIconRight} />
          </div>

          {/* Title */}
          <h2 className={styles.title}>
            <span className={styles.titleLine1}>Skills &</span>
            <br />
            <span className={styles.titleLine2}>Technologies</span>
          </h2>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            Mastered during my{' '}
            <span className={styles.highlightEmerald}>Web Development</span>
            {' '}journey
          </p>

          {/* Decorative Line */}
          <div className={styles.divider}>
            <div className={styles.dividerLine}></div>
            <Sparkles className={styles.dividerIcon} />
            <div className={styles.dividerLine}></div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className={`${styles.categoryTabs} ${isVisible ? styles.tabsVisible : ''}`}>
          {categories.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`${styles.categoryTab} ${activeCategory === key ? styles.activeTab : ''}`}
            >
              <div className={styles.tabContent}>
                <Icon className={styles.tabIcon} />
                <span>{label}</span>
              </div>
              {activeCategory === key && <div className={styles.tabGlow}></div>}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className={styles.skillsGrid}>
          {skillsData[activeCategory].map((skill, index) => (
            <div
              key={skill.name}
              className={`${styles.skillCard} ${isVisible ? styles.cardVisible : ''} ${styles[skill.color]}`}
              style={{ transitionDelay: `${index * 150 + 500}ms` }}
            >
              {/* Glow Effect */}
              <div className={styles.cardGlow}></div>

              {/* Card Content */}
              <div className={styles.cardContent}>
                {/* Background Gradient */}
                <div className={styles.cardBgGradient}></div>

                {/* Icon & Name */}
                <div className={styles.skillHeader}>
                  <div className={styles.skillIcon}>{skill.icon}</div>
                  <div className={styles.skillInfo}>
                    <h3 className={styles.skillName}>{skill.name}</h3>
                    <p className={styles.skillLabel}>Proficiency Level</p>
                  </div>
                </div>

                {/* Progress Section */}
                <div className={styles.progressSection}>
                  <div className={styles.progressHeader}>
                    <span className={styles.progressLabel}>Experience</span>
                    <span className={styles.progressValue}>{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 150 + 700}ms`
                      }}
                    >
                      <div className={styles.progressShimmer}></div>
                    </div>
                  </div>

                  {/* Level Indicators */}
                  <div className={styles.levelIndicators}>
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`${styles.levelDot} ${i < Math.floor(skill.level / 20) ? styles.levelDotActive : ''}`}
                        style={{ transitionDelay: `${index * 150 + 800 + i * 100}ms` }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Corner Accent */}
                <div className={styles.cornerAccent}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        
      </div>
    </section>
  );
};

export default Skills;