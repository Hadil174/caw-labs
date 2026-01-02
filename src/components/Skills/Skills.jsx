import { useState, useEffect, useRef } from 'react'

function Skills() {
  const [inView, setInView] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState(null)
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
      gradient: 'from-rose-400 to-orange-300',
      bgGradient: 'linear-gradient(135deg, #fb7185 0%, #fdba74 100%)',
      skills: [
        { name: 'JavaScript', level: 85, color: '#fb7185', icon: '⚡' },
        { name: 'HTML5', level: 90, color: '#f97316', icon: '🎨' },
        { name: 'CSS3', level: 85, color: '#3b82f6', icon: '✨' },
        { name: 'PHP', level: 70, color: '#a855f7', icon: '🐘' },
        { name: 'Python', level: 75, color: '#10b981', icon: '🐍' }
      ]
    },
    {
      title: 'Frameworks',
      icon: '⚛️',
      gradient: 'from-blue-400 to-cyan-300',
      bgGradient: 'linear-gradient(135deg, #60a5fa 0%, #67e8f9 100%)',
      skills: [
        { name: 'React', level: 85, color: '#06b6d4', icon: '⚛️' },
        { name: 'Vite', level: 80, color: '#8b5cf6', icon: '⚡' },
        { name: 'Laravel', level: 70, color: '#ef4444', icon: '🔥' },
        { name: 'Node.js', level: 50, color: '#10b981', icon: '🟢' },
        { name: 'Tailwind', level: 75, color: '#06b6d4', icon: '💨' }
      ]
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      gradient: 'from-purple-400 to-pink-300',
      bgGradient: 'linear-gradient(135deg, #c084fc 0%, #f9a8d4 100%)',
      skills: [
        { name: 'Git & GitHub', level: 80, color: '#6366f1', icon: '📦' },
        { name: 'Jest', level: 65, color: '#ec4899', icon: '🧪' },
        { name: 'REST APIs', level: 75, color: '#14b8a6', icon: '🔌' },
        { name: 'Copilot', level: 85, color: '#8b5cf6', icon: '🤖' },
        { name: 'Responsive', level: 70, color: '#f59e0b', icon: '📱' }
      ]
    }
  ]

  const styles = {
    skills: {
      minHeight: '100vh',
      padding: '100px 30px 80px', // Réduit légèrement
      background: 'linear-gradient(180deg, #fbf4faff 0%, #f2ebf4ff 50%, #faf6fbff 100%)',
      position: 'relative',
      overflow: 'hidden'
    },
    backgroundDecor: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.4,
      pointerEvents: 'none'
    },
    decorCircle1: {
      position: 'absolute',
      width: '600px',
      height: '600px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(251, 113, 133, 0.15) 0%, transparent 70%)',
      top: '-200px',
      right: '-100px',
      animation: 'float 20s ease-in-out infinite'
    },
    decorCircle2: {
      position: 'absolute',
      width: '500px',
      height: '500px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(96, 165, 250, 0.15) 0%, transparent 70%)',
      bottom: '-150px',
      left: '-100px',
      animation: 'float 15s ease-in-out infinite reverse'
    },
    decorCircle3: {
      position: 'absolute',
      width: '400px',
      height: '400px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(192, 132, 252, 0.12) 0%, transparent 70%)',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      animation: 'pulse 10s ease-in-out infinite'
    },
    container: {
      maxWidth: '1300px', // Légèrement réduit
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    },
    header: {
      textAlign: 'center',
      marginBottom: '60px', // Réduit
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    titleWrapper: {
      display: 'inline-block',
      position: 'relative',
      marginBottom: '1.5rem'
    },
    title: {
      fontSize: '4.5rem', // Légèrement réduit pour équilibre
      fontWeight: 900,
      background: 'linear-gradient(135deg, #9491f0ff 0%, #783775ff 50%, #8976d6ff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      letterSpacing: '-0.02em',
      lineHeight: 1.2
    },
    titleUnderline: {
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60%',
      height: '6px',
      background: 'linear-gradient(135deg, #9491f0ff 0%, #783775ff 50%, #8976d6ff 100%)',
      borderRadius: '10px',
      animation: 'shimmerLine 3s ease-in-out infinite'
    },
    subtitle: {
      fontSize: '1.4rem', // Légèrement réduit
      color: '#64748b',
      fontWeight: 600,
      letterSpacing: '0.02em'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', // Cartes plus petites (420px → 360px)
      gap: '2rem' // Gap réduit (2.5rem → 2rem)
    },
    categoryCard: {
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '28px', // Légèrement réduit
      padding: '2rem', // Réduit de 2.5rem → 2rem
      border: '1px solid rgba(226, 232, 240, 0.8)',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02)',
      backdropFilter: 'blur(10px)',
      opacity: 0,
      transform: 'translateY(40px) scale(0.95)',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden'
    },
    categoryCardVisible: {
      opacity: 1,
      transform: 'translateY(0) scale(1)'
    },
    categoryCardHover: {
      transform: 'translateY(-8px) scale(1)',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.04)'
    },
    gradientBorder: (gradient) => ({
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '6px',
      background: gradient,
      borderRadius: '28px 28px 0 0'
    }),
    categoryHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.8rem',
      paddingBottom: '1.2rem',
      borderBottom: '2px solid #f1f5f9'
    },
    iconWrapper: {
      width: '55px',        // Réduit de 70px → 55px
      height: '55px',       // Réduit
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '16px', // Réduit
      fontSize: '2rem',     // Réduit de 2.5rem → 2rem
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.06)',
      animation: 'iconFloat 3s ease-in-out infinite'
    },
    categoryTitle: {
      fontSize: '1.6rem',   // Réduit légèrement
      color: '#1e293b',
      fontWeight: 900,
      letterSpacing: '-0.01em'
    },
    skillsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.4rem' // Réduit de 1.8rem → 1.4rem
    },
    skillItem: {
      position: 'relative',
      padding: '0.9rem', // Réduit
      borderRadius: '14px',
      background: 'transparent',
      transition: 'all 0.3s ease'
    },
    skillItemHover: {
      background: 'rgba(248, 250, 252, 0.8)',
      transform: 'translateX(8px)'
    },
    skillHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '0.7rem'
    },
    skillNameWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.7rem'
    },
    skillIcon: {
      fontSize: '1.3rem',   // Réduit de 1.5rem → 1.3rem
      filter: 'grayscale(0.3)'
    },
    skillName: {
      color: '#1e293b',
      fontWeight: 800,
      fontSize: '1.05rem',  // Légèrement réduit
      letterSpacing: '-0.01em'
    },
    skillBadge: (color) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.4rem 0.9rem', // Réduit
      borderRadius: '10px',
      background: `${color}15`,
      border: `2px solid ${color}30`
    }),
    skillLevel: (color) => ({
      fontWeight: 900,
      fontSize: '0.95rem',  // Réduit
      color: color
    }),
    progressWrapper: {
      position: 'relative',
      height: '10px',       // Réduit de 12px → 10px
      background: '#f1f5f9',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)'
    },
    progressBar: (color, level) => ({
      height: '100%',
      background: `linear-gradient(90deg, ${color} 0%, ${color}cc 100%)`,
      borderRadius: '10px',
      width: inView ? `${level}%` : '0%',
      transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      boxShadow: `0 0 12px ${color}40`
    }),
    progressGlow: (color) => ({
      position: 'absolute',
      top: 0,
      right: '-2px',
      width: '6px',         // Réduit
      height: '100%',
      background: color,
      borderRadius: '10px',
      boxShadow: `0 0 8px ${color}, 0 0 16px ${color}80`,
      animation: 'pulse 2s ease-in-out infinite'
    })
  }

  return (
    <section id="skills" style={styles.skills} ref={sectionRef}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(20px, -20px); }
          50% { transform: translate(-20px, 20px); }
          75% { transform: translate(20px, 20px); }
        }
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.12; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.08; }
        }
        @keyframes shimmerLine {
          0% { transform: translateX(-50%) scaleX(1); opacity: 1; }
          50% { transform: translateX(-50%) scaleX(1.5); opacity: 0.6; }
          100% { transform: translateX(-50%) scaleX(1); opacity: 1; }
        }
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      <div style={styles.backgroundDecor}>
        <div style={styles.decorCircle1}></div>
        <div style={styles.decorCircle2}></div>
        <div style={styles.decorCircle3}></div>
      </div>

      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.titleWrapper}>
            <h2 style={styles.title}>
              Skills & Technologies
            </h2>
            <div style={styles.titleUnderline}></div>
          </div>
          <p style={styles.subtitle}>
            Technologies and tools I've mastered ✨
          </p>
        </div>

        <div style={styles.grid}>
          {skillCategories.map((category, catIndex) => (
            <div 
              key={catIndex}
              style={{
                ...styles.categoryCard,
                ...(inView ? styles.categoryCardVisible : {}),
                ...(hoveredSkill?.category === catIndex ? styles.categoryCardHover : {}),
                transitionDelay: `${catIndex * 0.15}s`
              }}
              onMouseEnter={() => setHoveredSkill({ category: catIndex })}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div style={styles.gradientBorder(category.bgGradient)}></div>
              
              <div style={styles.categoryHeader}>
                <div style={{
                  ...styles.iconWrapper,
                  animationDelay: `${catIndex * 0.2}s`
                }}>
                  {category.icon}
                </div>
                <h3 style={styles.categoryTitle}>{category.title}</h3>
              </div>

              <div style={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    style={{
                      ...styles.skillItem,
                      ...(hoveredSkill?.category === catIndex && hoveredSkill?.skill === skillIndex 
                        ? styles.skillItemHover 
                        : {})
                    }}
                    onMouseEnter={() => setHoveredSkill({ category: catIndex, skill: skillIndex })}
                  >
                    <div style={styles.skillHeader}>
                      <div style={styles.skillNameWrapper}>
                        <span style={styles.skillIcon}>{skill.icon}</span>
                        <span style={styles.skillName}>{skill.name}</span>
                      </div>
                      <div style={styles.skillBadge(skill.color)}>
                        <span style={styles.skillLevel(skill.color)}>{skill.level}%</span>
                      </div>
                    </div>
                    <div style={styles.progressWrapper}>
                      <div 
                        style={{
                          ...styles.progressBar(skill.color, skill.level),
                          transitionDelay: `${(catIndex * 0.15) + (skillIndex * 0.1)}s`
                        }}
                      >
                        <div style={styles.progressGlow(skill.color)}></div>
                      </div>
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