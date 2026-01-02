import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://formspree.io/f/xqezyobb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus(''), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus(''), 5000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus(''), 5000)
    }
  }

  const copyEmail = (email) => {
    navigator.clipboard.writeText(email).then(() => {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    })
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'douniazed.brik@univ-constantine2.dz',
      isEmail: true,
      gradient: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)'
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: 'github.com/Hadil174',
      link: 'https://github.com/Hadil174',
      isEmail: false,
      gradient: 'linear-gradient(135deg, #4ECDC4 0%, #FF6BCB 100%)'
    }
  ]

  const styles = {
    contact: {
      minHeight: '100vh',
      padding: '100px 30px 60px',
      background: 'linear-gradient(135deg, #FFE5E5 0%, #FFF4E0 25%, #E8F8FF 50%, #FFE5F0 75%, #FFF0E5 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 15s ease infinite',
      position: 'relative'
    },
    container: {
      maxWidth: '1300px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '60px'
    },
    title: {
      fontSize: '4.2rem',
      fontWeight: 900,
      marginBottom: '1.5rem',
      background: 'linear-gradient(135deg, #FF1744 0%, #FF6B35 50%, #FFE66D 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      fontSize: '1.3rem',
      color: '#2D3561',
      fontWeight: 600,
      maxWidth: '700px',
      margin: '0 auto'
    },
    content: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.5fr',
      gap: '3rem'
    },
    infoSection: {
      background: 'rgba(255, 255, 255, 0.85)',
      padding: '2.5rem',
      borderRadius: '35px',
      border: '4px solid transparent',
      backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #FF6B6B, #FFE66D, #4ECDC4)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
      boxShadow: '0 20px 60px rgba(255, 107, 107, 0.25)',
      height: 'fit-content',
      backdropFilter: 'blur(15px)'
    },
    infoTitle: {
      fontSize: '1.8rem',
      color: '#2D3561',
      marginBottom: '2rem',
      fontWeight: 900
    },
    infoList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.8rem'
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.3rem',
      padding: '1.4rem',
      background: 'rgba(255, 255, 255, 0.7)',
      borderRadius: '25px',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      border: '3px solid transparent',
      cursor: 'pointer'
    },
    infoIcon: (gradient) => ({
      fontSize: '2.6rem',
      width: '70px',
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: gradient,
      borderRadius: '18px',
      flexShrink: 0,
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
    }),
    infoText: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    infoLabel: {
      fontSize: '0.95rem',
      color: '#2D3561',
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    infoValue: {
      fontSize: '1.05rem',
      color: '#2D3561',
      fontWeight: 700
    },
    formContainer: {
      background: 'rgba(255, 255, 255, 0.85)',
      padding: '2.5rem',
      borderRadius: '35px',
      border: '4px solid transparent',
      backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #FF6B6B, #4ECDC4, #FFE66D)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
      boxShadow: '0 20px 60px rgba(78, 205, 196, 0.25)',
      backdropFilter: 'blur(15px)'
    },
    formGroup: {
      marginBottom: '1.8rem'
    },
    label: {
      display: 'block',
      marginBottom: '0.7rem',
      color: '#2D3561',
      fontWeight: 800,
      fontSize: '1rem',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    input: {
      width: '100%',
      padding: '1.1rem 1.4rem',
      background: 'rgba(255, 255, 255, 0.9)',
      border: '3px solid #FFE66D',
      borderRadius: '18px',
      color: '#2D3561',
      fontSize: '1.05rem',
      fontFamily: 'inherit',
      fontWeight: 600,
      transition: 'all 0.3s ease',
      boxShadow: '0 5px 15px rgba(255, 230, 109, 0.15)',
      boxSizing: 'border-box'
    },
    textarea: {
      width: '100%',
      padding: '1.1rem 1.4rem',
      background: 'rgba(255, 255, 255, 0.9)',
      border: '3px solid #FFE66D',
      borderRadius: '18px',
      color: '#2D3561',
      fontSize: '1.05rem',
      fontFamily: 'inherit',
      fontWeight: 600,
      transition: 'all 0.3s ease',
      resize: 'vertical',
      minHeight: '140px',
      boxShadow: '0 5px 15px rgba(255, 230, 109, 0.15)',
      boxSizing: 'border-box'
    },
    submitBtn: {
      width: '100%',
      padding: '1.4rem 2rem',
      background: 'linear-gradient(135deg, #FF6B6B 0%, #FF9A76 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '25px',
      fontSize: '1.2rem',
      fontWeight: 900,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontFamily: 'inherit',
      boxShadow: '0 15px 40px rgba(255, 107, 107, 0.35)',
      textTransform: 'uppercase',
      letterSpacing: '2px'
    },
    successMessage: {
      marginTop: '1.5rem',
      padding: '1.4rem',
      borderRadius: '20px',
      textAlign: 'center',
      fontWeight: 800,
      fontSize: '1.05rem',
      background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.2) 0%, rgba(255, 230, 109, 0.2) 100%)',
      color: '#2D3561',
      border: '3px solid #4ECDC4'
    },
    errorMessage: {
      marginTop: '1.5rem',
      padding: '1.4rem',
      borderRadius: '20px',
      textAlign: 'center',
      fontWeight: 800,
      fontSize: '1.05rem',
      background: 'rgba(255, 107, 107, 0.2)',
      color: '#FF1744',
      border: '3px solid #FF6B6B'
    },
    footer: {
      marginTop: '5rem',
      paddingTop: '2.5rem',
      borderTop: '4px solid rgba(255, 107, 107, 0.2)',
      textAlign: 'center',
      color: '#2D3561',
      fontSize: '1rem',
      fontWeight: 700
    },
    copiedMessage: {
      marginTop: '1.5rem',
      padding: '1rem 2rem',
      background: 'linear-gradient(135deg, #4ECDC4 0%, #FFE66D 100%)',
      color: 'white',
      border: '3px solid white',
      borderRadius: '25px',
      textAlign: 'center',
      fontWeight: 900,
      fontSize: '1.05rem',
      boxShadow: '0 10px 30px rgba(78, 205, 196, 0.35)',
      animation: 'fadeInOut 2s ease'
    }
  }

  return (
    <section id="contact" style={styles.contact}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(-10px); }
          10%, 90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @media (max-width: 968px) {
          .content { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>
            Get In Touch 💬
          </h2>
          <p style={styles.subtitle}>
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="content" style={styles.content}>
          <div style={styles.infoSection}>
            <h3 style={styles.infoTitle}>Contact Info</h3>
            <div style={styles.infoList}>
              {contactInfo.map((info, index) => (
                info.isEmail ? (
                  <div
                    key={index}
                    style={styles.infoItem}
                    onClick={() => copyEmail(info.value)}
                    title="Click to copy email"
                  >
                    <div style={styles.infoIcon(info.gradient)}>
                      <span>{info.icon}</span>
                    </div>
                    <div style={styles.infoText}>
                      <span style={styles.infoLabel}>{info.title}</span>
                      <span style={styles.infoValue}>{info.value}</span>
                    </div>
                  </div>
                ) : (
                  <a
                    key={index}
                    href={info.link}
                    style={styles.infoItem}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div style={styles.infoIcon(info.gradient)}>
                      <span>{info.icon}</span>
                    </div>
                    <div style={styles.infoText}>
                      <span style={styles.infoLabel}>{info.title}</span>
                      <span style={styles.infoValue}>{info.value}</span>
                    </div>
                  </a>
                )
              ))}
            </div>
            
            {copiedEmail && (
              <p style={styles.copiedMessage}>✓ Email copied!</p>
            )}
          </div>

          <div style={styles.formContainer}>
            <div style={styles.formGroup}>
              <label htmlFor="name" style={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="Your name"
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="your.email@example.com"
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="message" style={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={styles.textarea}
                placeholder="Your message..."
              ></textarea>
            </div>

            <button 
              onClick={handleSubmit}
              style={styles.submitBtn}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending... ⏳' : 'Send Message 🚀'}
            </button>

            {status === 'success' && (
              <p style={styles.successMessage}>✓ Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p style={styles.errorMessage}>✗ Failed to send. Please try again.</p>
            )}
          </div>
        </div>

        <footer style={styles.footer}>
          <p>© 2025 Serine. Built with React & Vite 🎨✨</p>
        </footer>
      </div>
    </section>
  )
}

export default Contact