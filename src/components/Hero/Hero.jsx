import { useState, useEffect } from 'react';
import { Sparkles, Rocket, Code, Palette, Zap } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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

  return (
    <section id="home" className={styles.hero}>
      {/* Floating Elements Background */}
      <div className={styles.floatingElements}>
        <div className={styles.floatingCircle} style={{ 
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` 
        }}></div>
        <div className={styles.floatingSquare} style={{ 
          transform: `translate(${-mousePosition.x}px, ${mousePosition.y}px)` 
        }}></div>
        <div className={styles.floatingTriangle} style={{ 
          transform: `translate(${mousePosition.x}px, ${-mousePosition.y}px)` 
        }}></div>
      </div>

      <div className={styles.container}>
        <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.textContent}>
            {/* Animated Badge */}
            <div className={styles.badge}>
              <span className={styles.badgeGlow}></span>
              <span className={styles.badgeText}>
                <Sparkles className={styles.badgeIcon} />
                <span className={styles.badgeTextInner}>Available for Work</span>
                <span className={styles.badgePulse}></span>
              </span>
            </div>

            {/* Animated Title */}
            <h1 className={styles.title}>
              <span className={styles.titleLine1}>
                {['H', 'e', 'l', 'l', 'o', ',', ' ', 'I', ' ', 'a', 'm'].map((char, i) => (
                  <span 
                    key={i} 
                    className={styles.char}
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
              <span className={styles.titleLine2}>
                {['H', 'a', 'd', 'i', 'l'].map((char, i) => (
                  <span 
                    key={i} 
                    className={styles.charGradient}
                    style={{ animationDelay: `${(i + 11) * 0.05}s` }}
                  >
                    {char}
                  </span>
                ))}
                <span className={styles.cursor}>|</span>
              </span>
            </h1>

            {/* Subtitle with Icon */}
            <div className={styles.subtitleWrapper}>
              <div className={styles.subtitleLine}></div>
              <p className={styles.subtitle}>
                <Code className={styles.subtitleIcon} />
                Junior React Developer
              </p>
              <div className={styles.subtitleLine}></div>
            </div>

            {/* Description */}
            <p className={styles.description}>
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
                    className={`${styles.skillPill} ${styles[skill.color]}`}
                    style={{ animationDelay: `${i * 0.1 + 0.5}s` }}
                  >
                    <Icon className={styles.skillIcon} />
                    <span>{skill.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className={styles.buttons}>
              <button
                onClick={() => scrollToSection('projects')}
                className={styles.primaryBtn}
              >
                <span className={styles.btnShine}></span>
                <span className={styles.btnText}>View My Work</span>
                <Rocket className={styles.btnIcon} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={styles.secondaryBtn}
              >
                <span className={styles.btnBorder}></span>
                <span className={styles.btnText}>Contact Me</span>
              </button>
            </div>

            {/* Stats */}
            <div className={styles.stats}>
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

          {/* Image Section with Creative Elements */}
          <div className={styles.imageContent}>
            <div className={styles.imageGlow}></div>
            
            {/* Decorative Rings */}
            <div className={styles.decorativeRing1}></div>
            <div className={styles.decorativeRing2}></div>
            <div className={styles.decorativeRing3}></div>

            <div className={styles.imageWrapper}>
              <div className={styles.imageContainer}>
                {/* Gradient Overlay */}
                <div className={styles.imageOverlay}></div>
                
                <img
                  src="/profile.jpg"
                  alt="Hadil - React Developer"
                  className={styles.image}
                />

                {/* Floating Badge */}
                <div className={styles.badge3d}>
                  <span className={styles.badge3dInner}>⚡</span>
                </div>

                {/* Corner Accents */}
                <div className={styles.cornerAccent} style={{ top: '-10px', left: '-10px' }}></div>
                <div className={styles.cornerAccent} style={{ top: '-10px', right: '-10px' }}></div>
                <div className={styles.cornerAccent} style={{ bottom: '-10px', left: '-10px' }}></div>
                <div className={styles.cornerAccent} style={{ bottom: '-10px', right: '-10px' }}></div>
              </div>

              {/* Social Proof */}
              <div className={styles.socialProof}>
                <div className={styles.socialProofIcon}>✨</div>
                <div className={styles.socialProofText}>
                  <span className={styles.socialProofTitle}>Ready to Build</span>
                  <span className={styles.socialProofSubtitle}>Let's create something amazing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.mouseWheel}></div>
        </div>
        <span className={styles.scrollText}>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;