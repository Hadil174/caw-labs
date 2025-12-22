import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { Sparkles, Zap } from 'lucide-react';
import styles from './Projects.module.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const labs = [
    {
      title: 'Lab 1: HTML & CSS Fundamentals',
      description: 'Palestine Information Card and Gaza Genocide documentation with DOM manipulation, semantic HTML, multimedia integration, and internal navigation.',
      tech: ['HTML5', 'CSS3', 'DOM Tree', 'Semantic Markup'],
      github: 'https://github.com/Hadil174/caw-labs/tree/lab2-setup/lab1',
      demo: 'https://lab1-demo.netlify.app',
      gradient: 'emeraldTealCyan'
    },
    {
      title: 'Git & GitHub Mastery',
      description:' Version Control System fundamentals',
      tech : ['Git', 'GitHub', 'Version Control', 'Branching'],
      github: 'https://github.com/Hadil174/caw-labs/tree/lab2-setup/lab2',
      demo: 'https://lab2-demo.netlify.app',
      gradient: 'limeGreenEmerald'
    },
    {
      title: 'Lab 3: Node.js Fundamentals',
      description: 'Server-side JavaScript with Node.js core modules, NPM package management, file system operations, and custom module creation.',
      tech: ['Node.js', 'NPM', 'File System', 'Modules'],
      github: 'https://github.com/Hadil174/caw-labs/tree/lab2-setup/caw',
      demo: 'https://lab3-demo.netlify.app',
      gradient: 'amberOrangeRed'
    },
    {
       title: 'Lab 4: Unit Testing with Jest',
      description: 'Comprehensive JavaScript testing framework implementation with test suites, assertions, array manipulation tests, and TDD practices.',
      tech: ['Jest', 'Unit Testing', 'TDD', 'JavaScript'],
      github: 'https://github.com/Hadil174/caw-labs/tree/lab2-setup/lab4_jest',
      demo: 'https://lab4-demo.netlify.app',
      gradient: 'greenEmeraldTeal'
    },
    {
         title: 'Lab 5: React Components & State',
      description: 'Interactive React applications with state management, event handling, form validation, dynamic lists with map iteration, and component composition.',
      tech: ['React', 'Hooks', 'State Management', 'Events'],
      github: 'https://github.com/yourusername/lab5-movies',
      demo: 'https://lab5-demo.netlify.app',
      gradient: 'yellowAmberOrange'
    },
    {
      title: 'Lab 6: React with Vite',
      description: 'Modern React development environment with Vite build tool, ES modules, component architecture, props system, and CSS conventions.',
      tech: ['React', 'Vite', 'ES Modules', 'Components'],
      github: 'https://github.com/Hadil174/caw-labs/tree/lab2-setup/lab6',
      demo: 'https://lab6-demo.netlify.app',
      gradient: 'tealCyanBlue'
    },
    {
      title: 'Lab 7: Hotel Management System',
      description: 'Full-stack hotel management platform with room booking, reservation system, customer management, payment processing, and admin dashboard built with Laravel backend.',
      tech: ['React', 'Laravel', 'MySQL', 'REST API'],
      github: 'https://github.com/Hadil174/hadil',
      demo: 'https://lab7-demo.netlify.app',
      gradient: 'limeEmeraldGreen'
    },
   
  ];

  return (
    <section className={styles.projects}>
      {/* Animated Background */}
      <div className={styles.background}></div>
      
      {/* Floating Orbs Background */}
      <div className={styles.orbsContainer}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
      </div>

      <div className={styles.container}>
        {/* Epic Header */}
        <div className={`${styles.header} ${isVisible ? styles.headerVisible : ''}`}>
          {/* Mega Badge */}
          <div className={styles.badge}>
            <Sparkles className={styles.badgeIconLeft} />
            <span className={styles.badgeText}>Portfolio Showcase</span>
            <Zap className={styles.badgeIconRight} />
          </div>

          {/* Massive Title */}
          <h2 className={styles.title}>
            <span className={styles.titleLine1}>Featured</span>
            <br />
            <span className={styles.titleLine2}>Projects</span>
          </h2>

          {/* Subtitle with Effects */}
          <p className={styles.subtitle}>
            Explore my semester labs showcasing{' '}
            <span className={styles.highlightEmerald}>modern React development</span>,{' '}
            <span className={styles.highlightTeal}>creative problem-solving</span>, and{' '}
            <span className={styles.highlightCyan}>cutting-edge design</span>
          </p>

          {/* Animated Divider */}
          <div className={styles.divider}>
            <div className={styles.dividerLine}></div>
            <Sparkles className={styles.dividerIcon} />
            <div className={styles.dividerLine}></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {labs.map((lab, index) => (
            <ProjectCard
              key={index}
              {...lab}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Epic CTA */}
        <div className={`${styles.cta} ${isVisible ? styles.ctaVisible : ''}`}>
          <p className={styles.ctaText}>Ready to see more amazing work?</p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            <div className={styles.ctaButtonBg}></div>
            <svg className={styles.ctaIconLeft} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span className={styles.ctaButtonText}>Explore All Projects</span>
            <svg className={styles.ctaIconRight} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <div className={styles.ctaButtonGlow}></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;