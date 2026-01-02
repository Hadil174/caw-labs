import { useState, useEffect } from 'react';
import { Sparkles, Code, Palette, Zap } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTextLine, setActiveTextLine] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Start fading after 20% of viewport height
      const fadeStart = windowHeight * 0.2;
      const fadeEnd = windowHeight * 0.8;
      
      if (scrollPosition < fadeStart) {
        setScrollProgress(0);
      } else if (scrollPosition > fadeEnd) {
        setScrollProgress(1);
      } else {
        const progress = (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-display text lines on mount
  useEffect(() => {
    const timers = [
      setTimeout(() => setActiveTextLine(1), 500),
      setTimeout(() => setActiveTextLine(2), 1000),
      setTimeout(() => setActiveTextLine(3), 1500),
      setTimeout(() => setActiveTextLine(4), 2000),
      setTimeout(() => setActiveTextLine(5), 2500),
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { icon: Code, text: 'React', color: 'emerald' },
    { icon: Palette, text: 'UI/UX', color: 'lime' },
    { icon: Zap, text: 'Vite', color: 'yellow' }
  ];

  // Calculate opacity for fade out effect - smoother transition
  const contentOpacity = Math.max(0, 1 - scrollProgress * 1.5);
  const contentTranslateY = scrollProgress * 50;

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Text Content - Left Side */}
          <div 
            className={styles.textContent}
            style={{
              opacity: contentOpacity,
              transform: `translateY(${contentTranslateY}px)`
            }}
          >
            {/* Badge */}
            <div 
              className={`${styles.badge} ${activeTextLine >= 1 ? styles.visible : ''}`}
            >
              <span className={styles.badgeGlow}></span>
              <span className={styles.badgeText}>
                <Sparkles className={styles.badgeIcon} />
                <span className={styles.badgeTextInner}>Available for Work</span>
                <span className={styles.badgePulse}></span>
              </span>
            </div>

            {/* Title */}
            <h1 className={styles.title}>
              <span 
                className={`${styles.titleLine1} ${activeTextLine >= 2 ? styles.visible : ''}`}
              >
                Hello, I am
              </span>
              <span 
                className={`${styles.titleLine2} ${activeTextLine >= 3 ? styles.visible : ''}`}
              >
                Hadil
                <span className={styles.cursor}>|</span>
              </span>
            </h1>

            {/* Subtitle */}
            <div 
              className={`${styles.subtitleWrapper} ${activeTextLine >= 4 ? styles.visible : ''}`}
            >
              <div className={styles.subtitleLine}></div>
              <p className={styles.subtitle}>
                <Code className={styles.subtitleIcon} />
                Junior React Developer
              </p>
              <div className={styles.subtitleLine}></div>
            </div>

            {/* Description */}
            <p 
              className={`${styles.description} ${activeTextLine >= 5 ? styles.visible : ''}`}
            >
              Crafting <span className={styles.highlight}>pixel-perfect</span>, 
              high-performance web experiences with modern technologies. 
              Passionate about <span className={styles.highlight}>clean code</span> and 
              beautiful design.
            </p>

            {/* Skills Pills */}
            <div className={styles.skillsPills}>
              {skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={i} 
                    className={`${styles.skillPill} ${styles[skill.color]} ${activeTextLine >= 5 ? styles.visible : ''}`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <Icon className={styles.skillIcon} />
                    <span>{skill.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Button */}
            <div className={styles.buttons}>
              <button
                onClick={() => scrollToSection('contact')}
                className={`${styles.secondaryBtn} ${activeTextLine >= 5 ? styles.visible : ''}`}
              >
                <span className={styles.btnBorder}></span>
                <span className={styles.btnText}>Contact Me</span>
              </button>
            </div>

            {/* Stats */}
            <div className={`${styles.stats} ${activeTextLine >= 5 ? styles.visible : ''}`}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>8+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>3+</span>
                <span className={styles.statLabel}>Technologies</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Passion</span>
              </div>
            </div>
          </div>

          {/* Image - Right Side */}
          <div 
            className={styles.imageContent}
            style={{
              opacity: contentOpacity,
              transform: `translateY(${contentTranslateY}px)`
            }}
          >
            <div className={styles.imageGlow}></div>
            
            <div className={styles.decorativeRing1}></div>
            <div className={styles.decorativeRing2}></div>
            <div className={styles.decorativeRing3}></div>

            <div className={styles.imageWrapper}>
              <div className={styles.imageContainer}>
                <div className={styles.imageOverlay}></div>
                
                <img
                  src="/profile.jpg"
                  alt="Hadil - React Developer"
                  className={styles.image}
                />

                <div className={styles.badge3d}>
                  <span className={styles.badge3dInner}>💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;