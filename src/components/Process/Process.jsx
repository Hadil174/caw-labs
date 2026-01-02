import { useEffect, useRef, useState } from 'react'

function Process() {
  const [activeStep, setActiveStep] = useState(null)
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      number: '01',
      title: 'First, we need an idea...',
      icon: '💡',
      gradient: 'from-blue-400 to-cyan-300',
      color: '#3b82f6'
    },
    {
      number: '02',
      title: 'Then an analysis and a direction...',
      icon: '🎯',
      gradient: 'from-purple-400 to-pink-300',
      color: '#a855f7'
    },
    {
      number: '03',
      title: 'Creativity takes place for the design',
      icon: '🎨',
      gradient: 'from-pink-400 to-rose-300',
      color: '#ec4899'
    },
    {
      number: '04',
      title: 'Finally, I code and publish your website!',
      icon: '🚀',
      gradient: 'from-orange-400 to-amber-300',
      color: '#f97316'
    },
    {
      number: '05',
      title: 'You must be wondering...',
      icon: '❓',
      gradient: 'from-emerald-400 to-teal-300',
      color: '#10b981'
    }
  ]

  const styles = {
    process: {
      minHeight: '100vh',
      padding: '100px 30px 80px', // Réduit (120px → 100px, 40px → 30px)
      background: 'linear-gradient(180deg, #fbf4faff 0%, #f2ebf4ff 50%, #faf6fbff 100%)',
      position: 'relative',
      overflow: 'hidden'
    },
    backgroundDecor: {
      position: 'absolute',
      inset: 0,
      opacity: 0.3,
      pointerEvents: 'none'
    },
    decorGrid: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'radial-gradient(circle, #e2e8f0 1px, transparent 1px)',
      backgroundSize: '50px 50px'
    },
    decorCircle1: {
      position: 'absolute',
      width: '500px',
      height: '500px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
      top: '-150px',
      right: '-100px',
      animation: 'float 15s ease-in-out infinite'
    },
    decorCircle2: {
      position: 'absolute',
      width: '400px',
      height: '400px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
      bottom: '-100px',
      left: '-80px',
      animation: 'float 20s ease-in-out infinite reverse'
    },
    container: {
      maxWidth: '1300px', // Réduit de 1400px → 1300px
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    },
    header: {
      textAlign: 'center',
      marginBottom: '60px', // Réduit de 80px → 60px
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 0.8s ease'
    },
  
    badgeText: {
      color: '#3b82f6',
      fontWeight: 700,
      fontSize: '0.85rem', // Réduit
      letterSpacing: '1px'
    },
    title: {
      fontSize: '4.2rem', // Réduit de 5rem → 4.2rem
      fontWeight: 900,
      background: 'linear-gradient(135deg, #9491f0ff 0%, #783775ff 50%, #8976d6ff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '1rem',
      letterSpacing: '-0.02em'
    },
    subtitle: {
      fontSize: '1.3rem', // Réduit
      color: '#64748b',
      fontWeight: 600,
      maxWidth: '700px',
      margin: '0 auto'
    },
    timeline: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem' // Réduit de 4rem → 3rem
    },
    timelineLine: {
      position: 'absolute',
      left: '50%',
      top: '80px', // Ajusté
      bottom: '80px',
      width: '4px',
      background: 'linear-gradient(180deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)',
      transform: 'translateX(-50%)',
      borderRadius: '10px',
      opacity: 0.2
    },
    stepWrapper: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
      transition: 'all 0.6s ease'
    },
    stepCard: {
      position: 'relative',
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '28px', // Réduit
      padding: '2.5rem', // Réduit de 3rem → 2.5rem
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.06)',
      border: '1px solid rgba(226, 232, 240, 0.8)',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.4s ease'
    },
    stepCardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
    },
    stepHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.2rem', // Réduit
      marginBottom: '1.8rem',
      paddingBottom: '1.2rem',
      borderBottom: '2px solid #f1f5f9'
    },
    stepNumber: (color) => ({
      fontSize: '2.6rem', // Réduit de 3rem → 2.6rem
      fontWeight: 900,
      color: color,
      lineHeight: 1,
      textShadow: `0 4px 12px ${color}40`
    }),
    stepIcon: {
      fontSize: '2.6rem', // Réduit de 3rem → 2.6rem
      filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))',
      animation: 'bounce 3s ease-in-out infinite'
    },
    stepTitle: {
      fontSize: '1.8rem', // Réduit de 2rem → 1.8rem
      fontWeight: 800,
      color: '#1e293b',
      flex: 1,
      letterSpacing: '-0.01em'
    },
    conversation: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.2rem', // Réduit
      padding: '1.8rem',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      borderRadius: '20px'
    },
    messageClient: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'flex-start'
    },
    messageDev: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'flex-start',
      flexDirection: 'row-reverse'
    },
    avatar: (isClient) => ({
      width: '45px', // Réduit de 50px → 45px
      height: '45px',
      borderRadius: '50%',
      background: isClient 
        ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
        : 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 900,
      fontSize: '1.1rem',
      flexShrink: 0,
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
    }),
    bubble: (isClient) => ({
      flex: 1,
      padding: '1.3rem', // Réduit
      borderRadius: '18px',
      background: isClient ? 'white' : 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      border: `2px solid ${isClient ? '#e2e8f0' : '#3b82f6'}20`
    }),
    bubbleText: {
      color: '#1e293b',
      fontSize: '1rem', // Réduit
      lineHeight: 1.6,
      marginBottom: '0.75rem'
    },
    analysisGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Légèrement réduit
      gap: '1.8rem',
      marginTop: '1.8rem'
    },
    analysisCard: {
      padding: '1.8rem', // Réduit
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      borderRadius: '20px',
      border: '2px solid #e2e8f0',
      transition: 'all 0.3s ease'
    },
    cardIcon: {
      fontSize: '2rem',
      marginBottom: '1rem',
      display: 'block'
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#1e293b',
      marginBottom: '1rem'
    },
    cardText: {
      color: '#31363dff',
      fontSize: '1rem',
      lineHeight: 1.6
    },
    directionButton: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.8rem',
      margin: '2.5rem auto',
      padding: '1.8rem',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      borderRadius: '20px',
      color: 'white',
      fontSize: '1.4rem',
      fontWeight: 800,
      boxShadow: '0 12px 32px rgba(59, 130, 246, 0.3)',
      animation: 'pulse 2s ease-in-out infinite'
    },
    arrowDown: {
      fontSize: '1.8rem',
      animation: 'bounce 2s ease-in-out infinite'
    },
    designShowcase: {
      marginTop: '1.8rem'
    },
    mockupBrowser: {
      background: 'white',
      borderRadius: '18px',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
      border: '1px solid #e2e8f0'
    },
    browserBar: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '0.9rem 1.3rem',
      background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
      borderBottom: '1px solid #0d60b2ff'
    },
    browserDots: {
      display: 'flex',
      gap: '0.5rem'
    },
    browserDot: (color) => ({
      width: '11px',
      height: '11px',
      borderRadius: '50%',
      background: color
    }),
    browserUrl: {
      flex: 1,
      padding: '0.4rem 0.9rem',
      background: 'white',
      borderRadius: '8px',
      color: '#64748b',
      fontSize: '0.85rem',
      textAlign: 'center',
      border: '1px solid #e2e8f0'
    },
    mockupContent: {
      padding: '2.5rem', // Réduit
      minHeight: '280px'
    },
    mockupHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2.5rem',
      paddingBottom: '1rem',
      borderBottom: '2px solid #f1f5f9'
    },
    mockupBrand: {
      fontSize: '1.6rem', // Réduit
      fontWeight: 900,
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    mockupNav: {
      color: '#292b2eff',
      fontSize: '0.9rem',
      fontWeight: 600
    },
    mockupHeroTitle: {
      fontSize: '2.2rem', // Réduit
      fontWeight: 900,
      color: '#1e293b',
      marginBottom: '1rem'
    },
    mockupHeroText: {
      fontSize: '1.1rem', // Réduit
      color: '#161719ff'
    },
    designFeatures: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
      gap: '1.8rem',
      marginTop: '1.8rem'
    },
    feature: {
      display: 'flex',
      gap: '1rem',
      padding: '1.3rem',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      borderRadius: '18px',
      border: '2px solid #e2e8f0'
    },
    featureIcon: {
      fontSize: '1.8rem',
      flexShrink: 0
    },
    featureTitle: {
      fontSize: '1.05rem',
      fontWeight: 800,
      color: '#1e293b',
      marginBottom: '0.5rem'
    },
    featureText: {
      fontSize: '0.9rem',
      color: '#161a21ff',
      lineHeight: 1.5
    },
    faqSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.8rem',
      marginTop: '1.8rem'
    },
    faqItem: {
      display: 'flex',
      gap: '1.3rem',
      padding: '1.8rem',
      background: 'linear-gradient(135deg, #eddcf0ff 0%, #f8fafc 100%)',
      borderRadius: '20px',
      border: '2px solid #e2e8f0',
      transition: 'all 0.3s ease'
    },
    faqIcon: {
      fontSize: '2.6rem', // Réduit
      flexShrink: 0
    },
    faqTitle: {
      fontSize: '1.4rem', // Réduit
      fontWeight: 800,
      color: '#1e293b',
      marginBottom: '0.8rem'
    },
    faqText: {
      fontSize: '0.95rem', // Réduit
      color: '#262c35ff',
      lineHeight: 1.6
    },
    ctaFinal: {
      textAlign: 'center',
      padding: '3.5rem 2rem', // Réduit
      marginTop: '4rem',
      background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 50%, #fce7f3 100%)',
      borderRadius: '28px',
      border: '2px solid rgba(59, 130, 246, 0.2)'
    },
    ctaTitle: {
      fontSize: '2.7rem', // Réduit
      fontWeight: 900,
      color: '#1e293b',
      marginBottom: '1rem'
    },
    ctaText: {
      fontSize: '1.2rem', // Réduit
      color: '#30353dff',
      marginBottom: '2rem'
    },
    ctaButton: {
      padding: '1.1rem 2.8rem', // Réduit
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontSize: '1.05rem',
      fontWeight: 80,
      cursor: 'pointer',
      boxShadow: '0 12px 32px rgba(59, 130, 246, 0.3)',
      transition: 'all 0.3s ease'
    }
  }

  return (
    <section id="process" style={styles.process} ref={sectionRef}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>

      <div style={styles.backgroundDecor}>
        <div style={styles.decorGrid}></div>
        <div style={styles.decorCircle1}></div>
        <div style={styles.decorCircle2}></div>
      </div>

      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>My Work Process</h2>
          <p style={styles.subtitle}>
            From initial idea to final deployment - here's how I bring your vision to life
          </p>
        </div>

        <div style={styles.timeline}>
          <div style={styles.timelineLine}></div>

          {/* Step 1 */}
          <div style={{...styles.stepWrapper, transitionDelay: '0.1s'}}>
            <div 
              style={{
                ...styles.stepCard,
                ...(activeStep === 0 ? styles.stepCardHover : {})
              }}
              onMouseEnter={() => setActiveStep(0)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div style={styles.stepHeader}>
                <span style={styles.stepNumber('#3b82f6')}>01</span>
                <span style={{...styles.stepIcon, animationDelay: '0s'}}>💡</span>
                <h3 style={styles.stepTitle}>First, we need an idea...</h3>
              </div>
              
              <div style={styles.conversation}>
                <div style={styles.messageClient}>
                  <div style={styles.avatar(true)}>C</div>
                  <div style={styles.bubble(true)}>
                    <p style={styles.bubbleText}>I need a website for my company.</p>
                    <p style={{...styles.bubbleText, marginBottom: 0}}>We specialize in eco-friendly and modern tech products.</p>
                  </div>
                </div>

                <div style={styles.messageDev}>
                  <div style={styles.avatar(false)}>S</div>
                  <div style={styles.bubble(false)}>
                    <p style={styles.bubbleText}>Alright, great!</p>
                    <p style={{...styles.bubbleText, marginBottom: 0}}>I'll handle everything. First, the <strong>design</strong> that I'll share with you. Once validated, I'll <strong>develop</strong> your website and put it online!</p>
                  </div>
                </div>

                <div style={styles.messageClient}>
                  <div style={styles.avatar(true)}>C</div>
                  <div style={styles.bubble(true)}>
                    <p style={{...styles.bubbleText, marginBottom: 0}}>Perfect, when do we start? :)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div style={{...styles.stepWrapper, transitionDelay: '0.2s'}}>
            <div 
              style={{
                ...styles.stepCard,
                ...(activeStep === 1 ? styles.stepCardHover : {})
              }}
              onMouseEnter={() => setActiveStep(1)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div style={styles.stepHeader}>
                <span style={styles.stepNumber('#a855f7')}>02</span>
                <span style={{...styles.stepIcon, animationDelay: '0.2s'}}>🎯</span>
                <h3 style={styles.stepTitle}>Then an analysis and a direction...</h3>
              </div>

              <div style={styles.analysisGrid}>
                <div style={styles.analysisCard}>
                  <span style={styles.cardIcon}>💡</span>
                  <h4 style={styles.cardTitle}>Market Analysis</h4>
                  <p style={styles.cardText}>Competitors mainly target a female audience. Additionally, their design is mostly very generic: few illustrations, rather "cold", especially when ecology is emphasized.</p>
                </div>

                <div style={styles.analysisCard}>
                  <span style={styles.cardIcon}>⚠️</span>
                  <h4 style={styles.cardTitle}>Problem</h4>
                  <p style={styles.cardText}>The target audience is broad. Therefore, we must speak to all genders without losing the audience defined as "female".</p>
                </div>
              </div>

              
            </div>
          </div>

          {/* Step 3 */}
          <div style={{...styles.stepWrapper, transitionDelay: '0.3s'}}>
            <div 
              style={{
                ...styles.stepCard,
                ...(activeStep === 2 ? styles.stepCardHover : {})
              }}
              onMouseEnter={() => setActiveStep(2)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div style={styles.stepHeader}>
                <span style={styles.stepNumber('#ec4899')}>03</span>
                <span style={{...styles.stepIcon, animationDelay: '0.4s'}}>🎨</span>
                <h3 style={styles.stepTitle}>Creativity takes place for the design</h3>
              </div>

              <div style={styles.designShowcase}>
                <div style={styles.mockupBrowser}>
                  <div style={styles.browserBar}>
                    <div style={styles.browserDots}>
                      <span style={styles.browserDot('#ef4444')}></span>
                      <span style={styles.browserDot('#f59e0b')}></span>
                      <span style={styles.browserDot('#10b981')}></span>
                    </div>
                    <div style={styles.browserUrl}>yourwebsite.com</div>
                  </div>
                  <div style={styles.mockupContent}>
                    <div style={styles.mockupHeader}>
                      <h2 style={styles.mockupBrand}>Your Brand</h2>
                      <nav style={styles.mockupNav}>Home | Products | About | Contact</nav>
                    </div>
                    <div style={styles.mockupHero}>
                      <h1 style={styles.mockupHeroTitle}>Eco-Friendly Solutions</h1>
                      <p style={styles.mockupHeroText}>Modern products for a sustainable future</p>
                    </div>
                  </div>
                </div>

                <div style={styles.designFeatures}>
                  <div style={styles.feature}>
                    <span style={styles.featureIcon}>🎨</span>
                    <div>
                      <h5 style={styles.featureTitle}>Highlight the product</h5>
                      <p style={styles.featureText}>Showcasing usefulness addresses a neutral audience</p>
                    </div>
                  </div>
                  <div style={styles.feature}>
                    <span style={styles.featureIcon}>⭐</span>
                    <div>
                      <h5 style={styles.featureTitle}>Light and warm page</h5>
                      <p style={styles.featureText}>Thanks to colors, borders, and illustrations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div style={{...styles.stepWrapper, transitionDelay: '0.4s'}}>
            <div 
              style={{
                ...styles.stepCard,
                ...(activeStep === 3 ? styles.stepCardHover : {})
              }}
              onMouseEnter={() => setActiveStep(3)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div style={styles.stepHeader}>
                <span style={styles.stepNumber('#f97316')}>04</span>
                <span style={{...styles.stepIcon, animationDelay: '0.6s'}}>🚀</span>
                <h3 style={styles.stepTitle}>Finally, I code and publish your website!</h3>
              </div>

              <div style={{
                display: 'flex',
                gap: '2rem',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2.5rem',
                background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                borderRadius: '20px'
              }}>
                <div style={{
                  padding: '1.8rem',
                  background: 'white',
                  borderRadius: '14px',
                  border: '2px solid #3b82f6',
                  boxShadow: '0 12px 32px rgba(59, 130, 246, 0.2)'
                }}>
                  <div style={{ fontSize: '3.5rem' }}>💻</div>
                  <p style={{ color: '#64748b', marginTop: '1rem', fontWeight: 600 }}>Desktop</p>
                </div>
                <div style={{
                  padding: '1.8rem',
                  background: 'white',
                  borderRadius: '14px',
                  border: '2px solid #ec4899',
                  boxShadow: '0 12px 32px rgba(236, 72, 153, 0.2)'
                }}>
                  <div style={{ fontSize: '3.5rem' }}>📱</div>
                  <p style={{ color: '#64748b', marginTop: '1rem', fontWeight: 600 }}>Mobile</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div style={{...styles.stepWrapper, transitionDelay: '0.5s'}}>
            <div 
              style={{
                ...styles.stepCard,
                ...(activeStep === 4 ? styles.stepCardHover : {})
              }}
              onMouseEnter={() => setActiveStep(4)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div style={styles.stepHeader}>
                <span style={styles.stepNumber('#10b981')}>05</span>
                <span style={{...styles.stepIcon, animationDelay: '0.8s'}}>❓</span>
                <h3 style={styles.stepTitle}>You must be wondering...</h3>
              </div>

              <div style={styles.faqSection}>
                <div style={styles.faqItem}>
                  <div style={styles.faqIcon}>💰</div>
                  <div>
                    <h4 style={styles.faqTitle}>How much does it cost?</h4>
                    <p style={styles.faqText}>Tell me about your project, the cost will depend on the time needed. For example, you should expect between $800 and $1500 for a showcase site. For larger projects, the rate will be based on the time required.</p>
                  </div>
                </div>

                <div style={styles.faqItem}>
                  <div style={styles.faqIcon}>🔧</div>
                  <div>
                    <h4 style={styles.faqTitle}>And after?</h4>
                    <p style={styles.faqText}>You can modify the content using the provided software (CMS)! Training hours are included to teach you how to modify or add content.</p>
                  </div>
                </div>

                <div style={styles.faqItem}>
                  <div style={styles.faqIcon}>🌙</div>
                  <div>
                    <h4 style={styles.faqTitle}>Sleep tight</h4>
                    <p style={styles.faqText}>You can leave the support and update of your content to me, based on a monthly subscription.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.ctaFinal}>
          <h3 style={styles.ctaTitle}>Ready to start your project?</h3>
          <p style={styles.ctaText}>Let's discuss your ideas and bring them to life</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={styles.ctaButton}
          >
            Work with me →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Process