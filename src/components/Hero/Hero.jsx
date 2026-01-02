import { useState, useEffect } from 'react';
import { Sparkles, Code, Palette, Zap, Rocket, Star, Coffee } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTextLine, setActiveTextLine] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
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

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timers = [
      setTimeout(() => setActiveTextLine(1), 300),
      setTimeout(() => setActiveTextLine(2), 600),
      setTimeout(() => setActiveTextLine(3), 900),
      setTimeout(() => setActiveTextLine(4), 1200),
      setTimeout(() => setActiveTextLine(5), 1500),
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
    { icon: Code, text: 'React', color: 'emerald', emoji: '⚛️' },
    { icon: Palette, text: 'UI/UX', color: 'purple', emoji: '🎨' },
    { icon: Zap, text: 'Performance', color: 'yellow', emoji: '⚡' },
    { icon: Rocket, text: 'Innovation', color: 'blue', emoji: '🚀' }
  ];

  const contentOpacity = Math.max(0, 1 - scrollProgress * 1.5);
  const contentTranslateY = scrollProgress * 50;

  return (
    <section id="home" className={styles.hero}>
      {/* Animated Background */}
      <div className={styles.animatedBg}>
        <div 
          className={styles.gradientOrb1}
          style={{
            transform: `translate(${mousePosition.x * 0.02}%, ${mousePosition.y * 0.02}%)`
          }}
        ></div>
        <div 
          className={styles.gradientOrb2}
          style={{
            transform: `translate(${mousePosition.x * -0.015}%, ${mousePosition.y * -0.015}%)`
          }}
        ></div>
        <div 
          className={styles.gradientOrb3}
          style={{
            transform: `translate(${mousePosition.x * 0.025}%, ${mousePosition.y * -0.02}%)`
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Text Content */}
          <div 
            className={styles.textContent}
            style={{
              opacity: contentOpacity,
              transform: `translateY(${contentTranslateY}px)`
            }}
          >
            {/* Premium Badge */}
            <div 
              className={`${styles.badge} ${activeTextLine >= 1 ? styles.visible : ''}`}
            >
              <span className={styles.badgeGlow}></span>
              <span className={styles.badgeText}>
                <Sparkles className={styles.badgeIcon} />
                <span className={styles.badgeTextInner}>Open to Opportunities</span>
                <span className={styles.badgePulse}></span>
              </span>
            </div>

            {/* Title with Gradient Animation */}
            <h1 className={styles.title}>
              <span 
                className={`${styles.titleLine1} ${activeTextLine >= 2 ? styles.visible : ''}`}
              >
                Hello, I am
              </span>
              <span 
                className={`${styles.titleLine2} ${activeTextLine >= 3 ? styles.visible : ''}`}
              >
                <span className={styles.nameGradient}>Hadil</span>
                <span className={styles.cursor}>|</span>
              </span>
            </h1>

            {/* Animated Subtitle */}
            <div 
              className={`${styles.subtitleWrapper} ${activeTextLine >= 4 ? styles.visible : ''}`}
            >
              <div className={styles.subtitleLine}></div>
              <p className={styles.subtitle}>
                <Code className={styles.subtitleIcon} />
                Creative React Developer
              </p>
              <div className={styles.subtitleLine}></div>
            </div>

            {/* Enhanced Description */}
            <p 
              className={`${styles.description} ${activeTextLine >= 5 ? styles.visible : ''}`}
            >
              Transforming <span className={styles.highlight}>visionary ideas</span> into 
              <span className={styles.highlight}> stunning digital realities</span>. 
              I craft immersive web experiences that blend cutting-edge technology with 
              <span className={styles.highlight}> artistic elegance</span>, 
              where every pixel tells a story and every interaction sparks joy.
            </p>

            {/* Enhanced Skills Pills */}
            <div className={styles.skillsPills}>
              {skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={i} 
                    className={`${styles.skillPill} ${styles[skill.color]} ${activeTextLine >= 5 ? styles.visible : ''}`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <span className={styles.skillEmoji}>{skill.emoji}</span>
                    <Icon className={styles.skillIcon} />
                    <span>{skill.text}</span>
                    <div className={styles.skillGlow}></div>
                  </div>
                );
              })}
            </div>

            {/* Premium Buttons */}
            <div className={styles.buttons}>
              <button
                onClick={() => scrollToSection('contact')}
                className={`${styles.primaryBtn} ${activeTextLine >= 5 ? styles.visible : ''}`}
              >
                <span className={styles.btnGlow}></span>
                <span className={styles.btnText}>
                  Let's Create Magic
                  <Star className={styles.btnIcon} />
                </span>
              </button>
              
            
            </div>

            {/* Enhanced Stats */}
            <div className={`${styles.stats} ${activeTextLine >= 5 ? styles.visible : ''}`}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>Projects Delivered</span>
                <div className={styles.statGlow}></div>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Tech Mastered</span>
                <div className={styles.statGlow}></div>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>∞</span>
                <span className={styles.statLabel}>Creative Energy</span>
                <div className={styles.statGlow}></div>
              </div>
            </div>
          </div>

          {/* Enhanced Image with 3D Effects */}
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
                  alt="Hadil - Creative React Developer"
                  className={styles.image}
                />

                <div className={styles.badge3d}>
                  <span className={styles.badge3dInner}>💻</span>
                </div>

                <div className={styles.floatingIcon1}>
                  <Coffee size={20} />
                </div>
                <div className={styles.floatingIcon2}>
                  <Star size={16} />
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