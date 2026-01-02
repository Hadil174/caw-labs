import { useState, useEffect, useRef } from 'react'

function FeaturedWork() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const videoRef = useRef(null)

  const projectImages = [
      {
      url: 'src/assets/images/x10.jpg',
      title: 'Hotel Homepage',
      description: 'Elegant and modern landing page'
    },
    {
      url: 'src/assets/images/x01.jpg',
      title: 'Reservation Management System',
      description: 'Complete booking system with approval workflow'
    },
    {
      url: 'src/assets/images/x02.jpg',
      title: 'Room Booking Interface',
      description: 'User-friendly booking form with real-time availability'
    },
    {
      url: 'src/assets/images/x03.jpg',
      title: 'Payment Confirmation',
      description: 'Secure payment processing and booking confirmation'
    },
    {
      url: 'src/assets/images/x04.jpg',
      title: 'Booking Success Page',
      description: 'Detailed booking reference and receipt'
    },
    {
      url: 'src/assets/images/x05.jpg',
      title: 'PayPal Integration',
      description: 'Multiple payment methods including PayPal'
    },
    {
      url: 'src/assets/images/x06.jpg',
      title: 'Financial Dashboard',
      description: 'Real-time revenue tracking and analytics'
    },
    {
      url: 'src/assets/images/x07.jpg',
      title: 'Employee Management',
      description: 'Staff management and payroll system'
    },
    {
      url: 'src/assets/images/x08.jpg',
      title: 'Staff Directory',
      description: 'Complete employee information system'
    },
    {
      url: 'src/assets/images/hi.jpg',
      title: 'Room Gallery',
      description: 'Beautiful showcase of available rooms'
    }
  
  ]

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % projectImages.length)
      }, 4000)
      return () => clearInterval(timer)
    }
  }, [isPlaying, projectImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projectImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projectImages.length) % projectImages.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const handleVideoPlay = () => {
    setShowVideo(true)
  }

  const handleVideoClose = () => {
    setShowVideo(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const styles = {
    featuredWork: {
      minHeight: '100vh',
      padding: '6rem 2rem 4rem',
      background: 'linear-gradient(180deg, #fbf4faff 0%, #f2ebf4ff 50%, #faf6fbff 100%)', // Changé
      position: 'relative',
      overflow: 'hidden'
    },
    container: {
      maxWidth: '1600px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    },
    header: {
      textAlign: 'center',
      marginBottom: '4rem',
      animation: 'fadeInUp 1s ease'
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.75rem 1.5rem',
      background: 'linear-gradient(135deg, #9491f0ff 0%, #783775ff 50%, #8976d6ff 100%)', // Changé
      border: '2px solid rgba(63, 70, 71, 0.3)', // Changé
      borderRadius: '50px',
      marginBottom: '2rem'
    },
    badgeText: {
      color: '#945ba5ff', // Changé
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '2px',
      fontSize: '0.9rem'
    },
    title: {
      fontSize: '4rem',
      marginBottom: '1.5rem',
      fontWeight: 800,
      color: '#664b6cff'
    },
    titleGradient: {
      background: 'linear-gradient(135deg, #9491f0ff 0%, #783775ff 50%, #8976d6ff 100%)', // Changé
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#4b3c54ff',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: 1.8
    },
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 0.8fr',
      gap: '2.5rem',
      alignItems: 'start'
    },
    slideshowSection: {
      position: 'relative'
    },
    slideshowWrapper: {
      marginBottom: '2rem'
    },
    slideshow: {
      position: 'relative',
      width: '100%',
      height: '450px',
      borderRadius: '20px',
      overflow: 'hidden',
      background: 'rgba(188, 156, 203, 0.6)',
      border: '2px solid rgba(6, 182, 212, 0.3)', // Changé
      backdropFilter: 'blur(20px)',
      boxShadow: '0 25px 80px rgba(214, 178, 222, 0.2)' // Changé
    },
    slide: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      transition: 'opacity 0.8s ease'
    },
    slideActive: {
      opacity: 1,
      zIndex: 1
    },
    slideImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    slideOverlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '2rem',
      background: 'linear-gradient(180deg, transparent 0%, rgba(205, 214, 235, 0.95) 100%)'
    },
    slideTitle: {
      fontSize: '1.5rem',
      color: '#5d496bff',
      fontWeight: 700,
      marginBottom: '0.5rem'
    },
    slideDescription: {
      fontSize: '1rem',
      color: '#493c51ff'
    },
    navBtn: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '50px',
      height: '50px',
      background: 'rgba(132, 76, 155, 0.9)', // Changé
      border: 'none',
      borderRadius: '50%',
      color: 'white',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    prevBtn: {
      left: '20px'
    },
    nextBtn: {
      right: '20px'
    },
    slideCounter: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.75rem 1.25rem',
      background: 'rgba(237, 215, 247, 0.9)',
      borderRadius: '50px',
      backdropFilter: 'blur(10px)',
      zIndex: 10,
      color: '#844d87ff', // Changé
      fontWeight: 600
    },
    playBtn: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      width: '50px',
      height: '50px',
      background: 'rgba(229, 173, 248, 0.9)', // Changé
      border: 'none',
      borderRadius: '50%',
      color: 'white',
      cursor: 'pointer',
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    thumbnails: {
      display: 'flex',
      gap: '0.5rem',
      marginTop: '1rem',
      overflowX: 'auto',
      padding: '0.5rem 0'
    },
    thumbnail: {
      flexShrink: 0,
      width: '70px',
      height: '50px',
      borderRadius: '8px',
      overflow: 'hidden',
      border: '2px solid transparent',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      background: 'none',
      padding: 0
    },
    thumbnailActive: {
      borderColor: '#ab82baff', // Changé
      boxShadow: '0 10px 30px rgba(219, 169, 240, 0.4)' // Changé
    },
    thumbnailImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    infoSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    projectDetails: {
      background: 'rgba(252, 248, 253, 0.6)',
      padding: '1.5rem',
      borderRadius: '20px',
      border: '2px solid rgba(6, 182, 212, 0.2)', // Changé
      backdropFilter: 'blur(20px)'
    },
    detailsTitle: {
      fontSize: '1.5rem',
      color: '#50555bff',
      fontWeight: 800,
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #a580c6ff, #8b5cf6)', // Changé
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    videoSection: {
      background: 'rgba(239, 217, 250, 0.6)',
      padding: '1.5rem',
      borderRadius: '20px',
      border: '2px solid rgba(6, 182, 212, 0.2)', // Changé
      backdropFilter: 'blur(20px)',
      marginTop: '2rem'
    },
    videoTitle: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '1.4rem',
      color: '#ab5fb8ff',
      fontWeight: 700,
      marginBottom: '1.5rem'
    },
    videoIcon: {
      fontSize: '1.8rem'
    },
    videoThumbnail: {
      position: 'relative',
      width: '100%',
      height: '350px',
      borderRadius: '15px',
      overflow: 'hidden',
      cursor: 'pointer',
      marginBottom: '1rem',
      background: 'rgba(30, 41, 59, 0.8)'
    },
    videoThumbnailImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.4s ease'
    },
    playOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(235, 203, 241, 0.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.4s ease'
    },
    playButton: {
      width: '80px',
      height: '80px',
      background: 'linear-gradient(135deg, #ca85d3ff, #f2a6f1ff)', // Changé
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      transition: 'all 0.4s ease',
      boxShadow: '0 10px 40px rgba(170, 93, 167, 0.4)' // Changé
    },
    playButtonSvg: {
      width: '32px',
      height: '32px',
      marginLeft: '4px'
    },
    videoDuration: {
      position: 'absolute',
      bottom: '15px',
      right: '15px',
      padding: '0.5rem 1rem',
      background: 'rgba(122, 83, 143, 0.9)',
      borderRadius: '8px',
      color: 'white',
      fontWeight: 700,
      fontSize: '0.95rem',
      backdropFilter: 'blur(10px)'
    },
    videoPlayer: {
      position: 'relative',
      width: '100%',
      height: '350px',
      borderRadius: '15px',
      overflow: 'hidden',
      marginBottom: '1rem',
      background: '#f6eaeaff'
    },
    closeVideo: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      width: '40px',
      height: '40px',
      background: 'rgba(181, 116, 212, 0.9)', // Changé
      border: 'none',
      borderRadius: '50%',
      color: 'white',
      cursor: 'pointer',
      zIndex: 10,
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    video: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    },
    videoDescription: {
      color: '#775687ff',
      fontSize: '0.95rem',
      lineHeight: 1.6,
      textAlign: 'center'
    },
    techGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.75rem',
      marginTop: '1rem'
    },
    techBadge: {
      padding: '0.6rem 1.2rem',
      background: 'rgba(228, 211, 235, 0.1)', // Changé
      border: '1px solid rgba(162, 119, 184, 0.3)', // Changé
      color: '#3a2c45ff', // Changé
      borderRadius: '50px',
      fontSize: '0.9rem',
      fontWeight: 600
    },
    featuresList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'grid',
      gap: '0.75rem',
      marginTop: '1rem'
    },
    featureItem: {
      color: '#5c4665ff',
      fontSize: '1rem',
      padding: '0.75rem',
      background: 'rgba(174, 121, 196, 0.05)', // Changé
      borderRadius: '10px',
      borderLeft: '3px solid #bf81dcff' // Changé
    },
    ctaButtons: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      marginTop: '2rem'
    },
    ctaBtn: {
      flex: 1,
      minWidth: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem',
      padding: '1.25rem 2rem',
      background: 'linear-gradient(135deg, #d2a2e8ff, #8b5cf6)', // Changé
      color: 'white',
      textDecoration: 'none',
      borderRadius: '50px',
      fontWeight: 700,
      fontSize: '1rem',
      transition: 'all 0.4s ease',
      boxShadow: '0 10px 40px rgba(207, 157, 223, 0.3)' // Changé
    }
  }

  return (
    <section id="featured-work" style={styles.featuredWork}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>
            <span style={{ fontSize: '6rem' }}>🏆</span>
            <span style={styles.titleGradient}>Featured Work</span>
          </h2>
          <h4 style={styles.title}>
            <span style={styles.titleGradient}>Hotel Management System</span>
          </h4>
          
          <p style={styles.subtitle}>
            A comprehensive hotel booking and management platform built with Laravel and modern web technologies
          </p>
        </div>

        <div style={styles.contentGrid}>
          <div style={styles.slideshowSection}>
            <div style={styles.slideshowWrapper}>
              <div style={styles.slideshow}>
                {projectImages.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      ...styles.slide,
                      ...(index === currentSlide ? styles.slideActive : {})
                    }}
                  >
                    <img src={image.url} alt={image.title} style={styles.slideImage} />
                    <div style={styles.slideOverlay}>
                      <h3 style={styles.slideTitle}>{image.title}</h3>
                      <p style={styles.slideDescription}>{image.description}</p>
                    </div>
                  </div>
                ))}

                <button style={{...styles.navBtn, ...styles.prevBtn}} onClick={prevSlide}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>

                <button style={{...styles.navBtn, ...styles.nextBtn}} onClick={nextSlide}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                <div style={styles.slideCounter}>
                  <span>{currentSlide + 1}</span>
                  <span style={{ color: '#64748b' }}>/</span>
                  <span style={{ color: '#94a3b8' }}>{projectImages.length}</span>
                </div>

                <button style={styles.playBtn} onClick={() => setIsPlaying(!isPlaying)}>
                  {isPlaying ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16"></rect>
                      <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  )}
                </button>
              </div>

              <div style={styles.thumbnails}>
                {projectImages.map((image, index) => (
                  <button
                    key={index}
                    style={{
                      ...styles.thumbnail,
                      ...(index === currentSlide ? styles.thumbnailActive : {})
                    }}
                    onClick={() => goToSlide(index)}
                  >
                    <img src={image.url} alt={`Thumbnail ${index + 1}`} style={styles.thumbnailImg} />
                  </button>
                ))}
              </div>
            </div>

            {/* Video Demo Section */}
            <div style={styles.videoSection}>
              <h3 style={styles.videoTitle}>
                <span style={styles.videoIcon}>🎥</span>
                Watch Demo Video
              </h3>
              
              {!showVideo ? (
                <div style={styles.videoThumbnail} onClick={handleVideoPlay}>
                  <img 
                    src="src/assets/images/duo bord.mp4" 
                    alt="Video Thumbnail" 
                    style={styles.videoThumbnailImg}
                  />
                  <div style={styles.playOverlay}>
                    <div style={styles.playButton}>
                      <svg viewBox="0 0 24 24" fill="currentColor" style={styles.playButtonSvg}>
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                  <div style={styles.videoDuration}>3:45</div>
                </div>
              ) : (
                <div style={styles.videoPlayer}>
                  <button style={styles.closeVideo} onClick={handleVideoClose}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <video
                    ref={videoRef}
                    controls
                    style={styles.video}
                  >
                    <source src="src/assets/images/duo bord.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              <p style={styles.videoDescription}>
                Full walkthrough of the hotel management system features and functionality
              </p>
            </div>
          </div>

          <div style={styles.infoSection}>
            <div style={styles.projectDetails}>
              <h3 style={styles.detailsTitle}>Project Overview</h3>
              
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ color: '#cbd5e1', lineHeight: 1.6 }}>
                  💼 <strong style={{ color: '#06b6d4' }}>Client:</strong> Ellissir Hotel<br/>
                  📅 <strong style={{ color: '#06b6d4' }}>Duration:</strong> 3 Months (2024)<br/>
                  👥 <strong style={{ color: '#06b6d4' }}>Team:</strong> 2 Developers<br/>
                  🎯 <strong style={{ color: '#06b6d4' }}>Role:</strong> Full-Stack Developer
                </p>
              </div>

              <h4 style={{ color: '#f1f5f9', fontSize: '1.25rem', marginBottom: '1rem' }}>
                Technologies Used
              </h4>
              <div style={styles.techGrid}>
                {['Laravel', 'PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'PayPal API', 'Bootstrap', 'REST API'].map(tech => (
                  <span key={tech} style={styles.techBadge}>{tech}</span>
                ))}
              </div>

              <h4 style={{ color: '#f1f5f9', fontSize: '1.25rem', marginTop: '2rem', marginBottom: '1rem' }}>
                Key Features
              </h4>
              <ul style={styles.featuresList}>
                <li style={styles.featureItem}>✅ Real-time room booking system</li>
                <li style={styles.featureItem}>✅ Secure PayPal payment integration</li>
                <li style={styles.featureItem}>✅ Admin dashboard with analytics</li>
                <li style={styles.featureItem}>✅ Employee management system</li>
                <li style={styles.featureItem}>✅ Financial reporting & tracking</li>
                <li style={styles.featureItem}>✅ Email notification system</li>
              </ul>
            </div>

            <div style={styles.ctaButtons}>
              <a 
                href="https://github.com/Hadil174/hadil" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.ctaBtn}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>View on GitHub</span>
              </a>
              
              <a 
                href="#contact" 
                style={styles.ctaBtn}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork