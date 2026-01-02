import { useState, useEffect, useRef } from 'react'

function Home() {
  const [displayText, setDisplayText] = useState('')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const fullText = 'Aspiring Front-End Developer'
  const containerRef = useRef(null)
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        })
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const styles = {
    home: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '6rem 2rem 2rem',
      background: 'linear-gradient(180deg, #fbf4faff 0%, #f2ebf4ff 50%, #faf6fbff 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 15s ease infinite'
    },
    background: {
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      overflow: 'hidden'
    },
    floatingShape: {
      position: 'absolute',
      borderRadius: '50%',
      filter: 'blur(80px)',
      opacity: 0.4,
      animation: 'float 20s infinite ease-in-out'
    },
    shape1: {
      width: '500px',
      height: '500px',
      background: 'radial-gradient(circle, #b574caff 0%, transparent 70%)',
      top: '10%',
      left: '5%',
      animationDelay: '0s'
    },
    shape2: {
      width: '400px',
      height: '400px',
      background: 'radial-gradient(circle, #dc81bcff 0%, transparent 70%)',
      bottom: '15%',
      right: '10%',
      animationDelay: '7s'
    },
    shape3: {
      width: '350px',
      height: '350px',
      background: 'radial-gradient(circle, #a36db7ff 0%, transparent 70%)',
      top: '40%',
      right: '20%',
      animationDelay: '3s'
    },
    shape4: {
      width: '300px',
      height: '300px',
      background: 'radial-gradient(circle, #FF6BCB 0%, transparent 70%)',
      bottom: '30%',
      left: '15%',
      animationDelay: '5s'
    },
    sparkle: {
      position: 'absolute',
      width: '4px',
      height: '4px',
      background: 'white',
      borderRadius: '50%',
      boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
      animation: 'twinkle 3s infinite ease-in-out'
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6rem',
      animation: 'fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    imageWrapper: {
      flexShrink: 0,
      position: 'relative',
      animation: 'slideInLeft 1s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    imageBorder: {
      position: 'relative',
      padding: '10px',
      background: 'linear-gradient(135deg, #ea9fecff 0%, #ab70cfff 25%, #b169f4ff 50%, #d967b1ff 75%, #ba5fabff 100%)',
      borderRadius: '50%',
      boxShadow: '0 20px 60px rgba(255, 107, 107, 0.4), 0 0 80px rgba(78, 205, 196, 0.3)'
      // Suppression de l'animation de rotation
    },
    imageFrame: {
      position: 'relative',
      width: '400px',
      height: '400px',
      borderRadius: '50%',
      overflow: 'hidden',
      background: 'white',
      boxShadow: 'inset 0 0 30px rgba(0,0,0,0.1)'
    },
    profileImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 35%',
      transition: 'transform 0.6s ease'
    },
    floatingIcon: {
      position: 'absolute',
      width: '80px',
      height: '80px',
      background: 'linear-gradient(135deg, #eb8ff0ff, #e755f4ff)',
      borderRadius: '25px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 15px 40px rgba(255, 107, 107, 0.4)',
      animation: 'floatUpDown 3s ease-in-out infinite',
      zIndex: 2,
      transform: 'rotate(-10deg)'
    },
    iconEmoji: {
      fontSize: '2.5rem',
      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))'
    },
    textContent: {
      flex: 1,
      animation: 'slideInRight 1s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    greeting: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1rem',
      animation: 'fadeIn 1.5s ease'
    },
    wave: {
      fontSize: '4rem',
      animation: 'wave 2s ease-in-out infinite',
      display: 'inline-block',
      filter: 'drop-shadow(0 4px 10px rgba(255, 230, 109, 0.5))'
    },
    greetingText: {
      fontSize: '2.5rem',
      color: '#2D3561',
      fontWeight: 700
    },
    name: {
      background: 'linear-gradient(135deg, #af70d8ff 0%, #af81ecff 50%, #814e84ff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontWeight: 900,
      animation: 'shimmer 3s ease-in-out infinite',
      backgroundSize: '200% 200%',
      fontSize: '3rem'
    },
    title: {
      fontSize: '4rem',
      fontWeight: 900,
      marginBottom: '2rem',
      lineHeight: 1.2
    },
    titleGradient: {
      background: 'linear-gradient(135deg, #fa8ad5ff 0%, #5d206fff 50%, #df76dcff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      backgroundSize: '200% 200%',
      animation: 'shimmer 3s ease-in-out infinite',
      textShadow: '0 4px 20px rgba(255, 23, 68, 0.3)'
    },
    cursor: {
      color: '#b24ea6ff',
      animation: 'blink 1s infinite',
      fontWeight: 300
    },
    bio: {
      fontSize: '1.3rem',
      color: '#2D3561',
      marginBottom: '2.5rem',
      lineHeight: 2,
      maxWidth: '700px',
      fontWeight: 500
    },
    highlight: {
      color: '#fc83d3ff',
      fontWeight: 800,
      position: 'relative',
      background: 'linear-gradient(135deg, #6b4674ff, #d85aefff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    stats: {
      display: 'flex',
      gap: '3rem',
      marginBottom: '2.5rem',
      flexWrap: 'wrap'
    },
    statItem: {
      textAlign: 'center',
      padding: '1.5rem 2rem',
      background: 'rgba(255, 255, 255, 0.7)',
      borderRadius: '25px',
      boxShadow: '0 10px 30px rgba(255, 107, 107, 0.2)',
      border: '3px solid transparent',
      backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #8f418eff, #d580e7ff, #5d2486ff)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
      animation: 'fadeInUp 1s ease',
      animationFillMode: 'both',
      transform: 'translateY(0)',
      transition: 'transform 0.3s ease'
    },
    statNumber: {
      fontSize: '3rem',
      fontWeight: 900,
      background: 'linear-gradient(135deg, #913b8fff, #ea45c4ff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '0.5rem'
    },
    statLabel: {
      color: '#2D3561',
      fontSize: '1rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '2px'
    },
    buttons: {
      display: 'flex',
      gap: '1.5rem',
      marginBottom: '3rem',
      flexWrap: 'wrap'
    },
    primaryBtn: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '1.5rem 3rem',
      fontSize: '1.2rem',
      fontWeight: 800,
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      fontFamily: 'inherit',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #a0489cff 0%, #9a419dff 100%)',
      color: 'white',
      boxShadow: '0 15px 40px rgba(255, 107, 107, 0.4)',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    secondaryBtn: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '1.5rem 3rem',
      fontSize: '1.2rem',
      fontWeight: 800,
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      fontFamily: 'inherit',
      background: 'white',
      color: '#8b1294ff',
      border: '4px solid #ef07e7ff',
      boxShadow: '0 10px 30px rgba(255, 107, 107, 0.2)',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    socialLinks: {
      display: 'flex',
      gap: '1.5rem'
    },
    socialIcon: {
      position: 'relative',
      width: '70px',
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #7e2f94ff, #d170e0ff)',
      borderRadius: '20px',
      color: 'white',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      textDecoration: 'none',
      boxShadow: '0 10px 30px rgba(255, 107, 107, 0.3)',
      transform: 'rotate(-5deg)'
    },
    scrollIndicator: {
      position: 'absolute',
      bottom: '40px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem',
      animation: 'fadeIn 2s ease 1s both'
    },
    scrollMouse: {
      width: '35px',
      height: '60px',
      border: '4px solid #7e467eff',
      borderRadius: '25px',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '10px',
      animation: 'bounce 2s infinite',
      background: 'rgba(255, 255, 255, 0.5)'
    },
    scrollWheel: {
      width: '6px',
      height: '12px',
      background: 'linear-gradient(180deg, #b86ec9ff, transparent)',
      borderRadius: '3px',
      animation: 'scroll 2s infinite'
    },
    scrollText: {
      color: '#2D3561',
      fontSize: '0.9rem',
      textTransform: 'uppercase',
      letterSpacing: '3px',
      fontWeight: 800
    }
  }

  return (
    <section id="home" style={styles.home} ref={containerRef}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          10%, 30% { transform: rotate(14deg); }
          20%, 40% { transform: rotate(-8deg); }
          50% { transform: rotate(14deg); }
          60% { transform: rotate(0deg); }
        }
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -50px) scale(1.1); }
          66% { transform: translate(-50px, 50px) scale(0.9); }
        }
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0) rotate(-10deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @media (max-width: 968px) {
          .content { flex-direction: column; text-align: center; gap: 3rem; }
          .imageFrame { width: 300px; height: 300px; }
          .title { font-size: 2.5rem; }
        }
      `}</style>

      <div style={styles.background}>
        {[styles.shape1, styles.shape2, styles.shape3, styles.shape4].map((shapeStyle, i) => (
          <div key={i} style={{...styles.floatingShape, ...shapeStyle}}></div>
        ))}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.sparkle,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div style={styles.container}>
        <div className="content" style={styles.content}>
          <div style={styles.imageWrapper}>
            <div style={styles.imageBorder}>
              <div style={styles.imageFrame}>
                <img 
                  src="/images/serine.jpg"   
                  alt="Serine - Profile Picture" 
                  style={styles.profileImage}
                />
              </div>
            </div>
            
            <div style={{...styles.floatingIcon, top: '-30px', right: '-30px', background: 'linear-gradient(135deg, #d475d5ff, #be81e7ff)'}}>
              <span style={styles.iconEmoji}>⚛️</span>
            </div>
            <div style={{...styles.floatingIcon, bottom: '-30px', left: '-30px', animationDelay: '1s', background: 'linear-gradient(135deg, #b272d1ff, #FF6BCB)'}}>
              <span style={styles.iconEmoji}>💻</span>
            </div>
            <div style={{...styles.floatingIcon, top: '50%', right: '-40px', animationDelay: '2s', background: 'linear-gradient(135deg, #c56dffff, #8d5ea1ff)'}}>
              <span style={styles.iconEmoji}>🚀</span>
            </div>
          </div>

          <div style={styles.textContent}>
            <div style={styles.greeting}>
              <span style={styles.wave}>👋</span>
              <h1 style={styles.greetingText}>
                Hi, I'm <span style={styles.name}>Brik Serine Dounia Zed</span>
              </h1>
            </div>
            
            <h2 style={styles.title}>
              <span style={styles.titleGradient}>{displayText}</span>
              <span style={styles.cursor}>|</span>
            </h2>

            <p style={styles.bio}>
              Passionate about creating <span style={styles.highlight}>elegant</span> and 
              <span style={styles.highlight}> high-performance</span> web applications, 
              I specialize in front-end development using modern JavaScript technologies.
            </p>

            <div style={styles.stats}>
              {[
                { number: '15+', label: 'Projects' },
                { number: '5+', label: 'Technologies' },
                { number: '100%', label: 'Dedication' }
              ].map((stat, i) => (
                <div key={i} style={{...styles.statItem, animationDelay: `${0.2 + i * 0.2}s`}}>
                  <div style={styles.statNumber}>{stat.number}</div>
                  <div style={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div style={styles.buttons}>
              <button onClick={scrollToProjects} style={styles.primaryBtn}>
                <span>View My Work</span>
                <span style={{ fontSize: '1.5rem' }}>→</span>
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                style={styles.secondaryBtn}
              >
                <span>Contact Me</span>
                <span style={{ fontSize: '1.5rem' }}>✉</span>
              </button>
            </div>

            <div style={styles.socialLinks}>
              <a href="https://github.com/Hadil174" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '32px', height: '32px' }}>
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.scrollIndicator}>
        <div style={styles.scrollMouse}>
          <div style={styles.scrollWheel}></div>
        </div>
        <span style={styles.scrollText}>Scroll</span>
      </div>
    </section>
  )
}

export default Home