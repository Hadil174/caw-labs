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
     
      gradient: 'emeraldTealCyan'
    },
   
    {
      title: 'Lab 3: Node.js Fundamentals',
      description: 'Server-side JavaScript with Node.js core modules, NPM package management, file system operations, and custom module creation.',
      tech: ['Node.js', 'NPM', 'File System', 'Modules'],
      github: 'https://github.com/Hadil174/caw-labs/tree/lab2-setup/caw',
      
      gradient: 'amberOrangeRed'
    },
    
    {
         title: 'Lab 5: React Components & State',
      description: 'Interactive React applications with state management, event handling, form validation, dynamic lists with map iteration, and component composition.',
      tech: ['React', 'Hooks', 'State Management', 'Events'],
      github: 'https://github.com/yourusername/lab5-movies',
     
      gradient: 'yellowAmberOrange'
    },
    {
      title: 'Lab 6: React with Vite',
      description: 'Modern React development environment with Vite build tool, ES modules, component architecture, props system, and CSS conventions.',
      tech: ['React', 'Vite', 'ES Modules', 'Components'],
      github: 'https://github.com/Hadil174/caw-labs/tree/lab2-setup/lab6',
    
      gradient: 'tealCyanBlue'
    },
    {
      title: 'pfe: Hotel Management System',
      description: 'Full-stack hotel management platform with room booking, reservation system, customer management, payment processing, and admin dashboard built with Laravel backend.',
      tech: ['React', 'Laravel', 'MySQL', 'REST API'],
      github: 'https://github.com/Hadil174/hadil',
      
      gradient: 'limeEmeraldGreen'
    },
   
  ];

  return (
   <section id="projects" className={styles.projects}>
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
          
        </div>
      </div>
    </section>
  );
};

export default Projects;