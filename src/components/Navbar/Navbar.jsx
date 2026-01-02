import { useState, useEffect } from 'react'

function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'featured-work', label: 'Featured' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact', icon: '✉️' }
  ]

  const styles = {
    navbar: {
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      width: scrolled ? '95%' : '85%',
      maxWidth: '1200px'
    },
    container: {
      background: scrolled 
        ? 'linear-gradient(180deg, #fbf4faff 0%, #f2ebf4ff 50%, #faf6fbff 100%)'
        : 'linear-gradient(180deg, #fbf4faff 0%, #f2ebf4ff 50%, #faf6fbff 100%)',
      backdropFilter: 'blur(20px)',
      borderRadius: scrolled ? '50px' : '60px',
      padding: scrolled ? '0.8rem 2rem' : '1rem 2.5rem',
      boxShadow: scrolled 
        ? '0 20px 60px rgba(236, 72, 153, 0.3), 0 0 0 1px rgba(236, 72, 153, 0.2)'
        : '0 10px 40px rgba(251, 191, 36, 0.3), 0 0 0 1px rgba(251, 191, 36, 0.2)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'all 0.4s ease'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontSize: '1.8rem',
      fontWeight: 900,
      background: 'linear-gradient(180deg, #bb4aaaff 0%, #4e3355ff 50%, #e7a1f8ff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      backgroundSize: '200% 200%',
      animation: 'gradient 3s ease infinite',
      cursor: 'pointer',
      transition: 'transform 0.3s ease'
    },
    logoEmoji: {
      fontSize: '2rem',
      filter: 'drop-shadow(0 4px 8px rgba(236, 72, 153, 0.4))',
      animation: 'float 3s ease-in-out infinite'
    },
    navLinks: {
      display: 'flex',
      gap: '0.5rem',
      listStyle: 'none',
      alignItems: 'center',
      margin: 0,
      padding: 0
    },
    navLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#1f2937',
      textDecoration: 'none',
      fontWeight: 600,
      fontSize: '0.95rem',
      transition: 'all 0.3s ease',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '10px 20px',
      borderRadius: '30px',
      position: 'relative',
      overflow: 'hidden'
    },
    navLinkActive: {
      background: 'linear-gradient(135deg, #ec4899 0%, #d1c4aeff 100%)',
      color: 'white',
      transform: 'scale(1.05)',
      boxShadow: '0 8px 25px rgba(236, 72, 153, 0.4)'
    },
    navLinkHover: {
      background: 'rgba(236, 72, 153, 0.1)',
      transform: 'translateY(-2px)'
    },
    icon: {
      fontSize: '1.2rem',
      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
    },
    hamburger: {
      display: 'none',
      flexDirection: 'column',
      gap: '6px',
      background: 'linear-gradient(135deg, #ec4899, #9e4fb4ff)',
      border: 'none',
      cursor: 'pointer',
      padding: '12px',
      borderRadius: '15px',
      boxShadow: '0 8px 20px rgba(236, 72, 153, 0.3)'
    },
    hamburgerLine: {
      width: '25px',
      height: '3px',
      background: 'white',
      borderRadius: '3px',
      transition: 'all 0.3s ease'
    }
  }

  return (
    <>
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @media (max-width: 968px) {
          .nav-links-mobile {
            position: fixed;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            max-width: 400px;
            flex-direction: column;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(252, 231, 243, 0.98) 100%);
            backdrop-filter: blur(20px);
            padding: 2rem;
            gap: 1rem;
            border-radius: 30px;
            box-shadow: 0 25px 80px rgba(236, 72, 153, 0.4);
            border: 2px solid rgba(236, 72, 153, 0.3);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .hamburger-show {
            display: flex !important;
          }
        }
      `}</style>

      <nav style={styles.navbar}>
        <div style={styles.container}>
          <div style={styles.logo}>
            
            <span>✨ My Portfolio</span>
          </div>

          <button 
            style={{...styles.hamburger, display: 'none'}}
            className="hamburger-show"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span style={styles.hamburgerLine}></span>
            <span style={styles.hamburgerLine}></span>
            <span style={styles.hamburgerLine}></span>
          </button>

          <ul 
            style={styles.navLinks}
            className={mobileMenuOpen ? 'nav-links-mobile' : ''}
          >
            {navItems.map((item) => (
              <li key={item.id} style={{ listStyle: 'none' }}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    ...styles.navLink,
                    ...(activeSection === item.id ? styles.navLinkActive : {})
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.id) {
                      Object.assign(e.target.style, styles.navLinkHover)
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      e.target.style.background = 'transparent'
                      e.target.style.transform = 'translateY(0)'
                    }
                  }}
                >
                  <span style={styles.icon}>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar