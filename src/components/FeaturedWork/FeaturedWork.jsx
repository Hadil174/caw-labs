import { useState, useRef } from 'react'

function FeaturedWork() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const videoRef = useRef(null)

  const projectImages = [
    {
      url: '/images/x10.jpg',
      title: 'Hotel Homepage',
      description: 'Elegant and modern landing page'
    },
    {
      url: '/images/x01.jpg',
      title: 'Reservation Management System',
      description: 'Complete booking system with approval workflow'
    },
    {
      url: '/images/x02.jpg',
      title: 'Room Booking Interface',
      description: 'User-friendly booking form with real-time availability'
    },
    {
      url: '/images/x03.jpg',
      title: 'Payment Confirmation',
      description: 'Secure payment processing and booking confirmation'
    },
    {
      url: '/images/x04.jpg',
      title: 'Booking Success Page',
      description: 'Detailed booking reference and receipt'
    },
    {
      url: '/images/x05.jpg',
      title: 'PayPal Integration',
      description: 'Multiple payment methods including PayPal'
    },
    {
      url: '/images/x06.jpg',
      title: 'Financial Dashboard',
      description: 'Real-time revenue tracking and analytics'
    },
    {
      url: '/images/x07.jpg',
      title: 'Employee Management',
      description: 'Staff management and payroll system'
    },
    {
      url: '/images/x08.jpg',
      title: 'Staff Directory',
      description: 'Complete employee information system'
    },
    {
      url: '/images/hi.jpg',
      title: 'Room Gallery',
      description: 'Beautiful showcase of available rooms'
    }
  ]

  const handleVideoPlay = () => {
    setShowVideo(true)
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play()
      }
    }, 100)
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
      background: 'linear-gradient(180deg, #e8f5e9 0%, #f1f8e9 50%, #e0f2f1 100%)',
      position: 'relative',
      overflow: 'hidden'
    },
    container: {
      maxWidth: '1600px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    },
    mainDisplay: {
      width: '100%',
      height: '700px',
      marginBottom: '3rem',
      borderRadius: '24px',
      overflow: 'hidden',
      background: 'rgba(165, 214, 167, 0.3)',
      border: '3px solid rgba(76, 175, 80, 0.4)',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 30px 90px rgba(76, 175, 80, 0.25)',
      position: 'relative'
    },
    displayImage: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      background: '#f1f8e9',
      transition: 'all 0.5s ease'
    },
    imageOverlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '2.5rem',
      background: 'linear-gradient(180deg, transparent 0%, rgba(46, 125, 50, 0.95) 100%)',
      backdropFilter: 'blur(10px)'
    },
    overlayTitle: {
      fontSize: '2rem',
      color: '#fff',
      fontWeight: 700,
      marginBottom: '0.75rem',
      textShadow: '0 2px 10px rgba(0,0,0,0.3)'
    },
    overlayDescription: {
      fontSize: '1.1rem',
      color: '#e8f5e9'
    },
    slideCounter: {
      position: 'absolute',
      top: '25px',
      right: '25px',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '1rem 1.5rem',
      background: 'rgba(129, 199, 132, 0.95)',
      borderRadius: '50px',
      backdropFilter: 'blur(10px)',
      zIndex: 10,
      color: '#fff',
      fontWeight: 700,
      fontSize: '1.1rem',
      boxShadow: '0 8px 25px rgba(46, 125, 50, 0.3)'
    },
    cardsContainer: {
      display: 'flex',
      gap: '2rem',
      overflowX: 'auto',
      overflowY: 'hidden',
      padding: '2rem 1rem',
      scrollBehavior: 'smooth',
      scrollbarWidth: 'thin',
      scrollbarColor: '#66bb6a #e8f5e9',
      marginBottom: '3rem'
    },
    projectCard: {
      flexShrink: 0,
      width: '350px',
      background: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '20px',
      overflow: 'hidden',
      border: '3px solid rgba(76, 175, 80, 0.3)',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      boxShadow: '0 10px 40px rgba(76, 175, 80, 0.2)'
    },
    cardActive: {
      borderColor: '#4caf50',
      boxShadow: '0 20px 60px rgba(76, 175, 80, 0.5)',
      transform: 'translateY(-5px)'
    },
    cardImageWrapper: {
      width: '100%',
      height: '250px',
      overflow: 'hidden',
      position: 'relative'
    },
    cardImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease'
    },
    cardContent: {
      padding: '1.5rem',
      background: 'linear-gradient(180deg, #fff 0%, #e8f5e9 100%)'
    },
    cardTitle: {
      fontSize: '1.3rem',
      color: '#2e7d32',
      fontWeight: 700,
      marginBottom: '0.75rem'
    },
    cardDescription: {
      fontSize: '0.95rem',
      color: '#558b2f',
      lineHeight: 1.6
    },
    videoSection: {
      background: 'rgba(200, 230, 201, 0.4)',
      padding: '2.5rem',
      borderRadius: '24px',
      border: '3px solid rgba(76, 175, 80, 0.4)',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 20px 60px rgba(76, 175, 80, 0.2)'
    },
    videoTitle: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      fontSize: '1.8rem',
      color: '#2e7d32',
      fontWeight: 700,
      marginBottom: '2rem'
    },
    videoIcon: {
      fontSize: '2rem'
    },
    videoThumbnail: {
      position: 'relative',
      width: '100%',
      height: '500px',
      borderRadius: '20px',
      overflow: 'hidden',
      cursor: 'pointer',
      marginBottom: '1.5rem',
      background: 'rgba(46, 125, 50, 0.1)',
      transition: 'all 0.4s ease',
      boxShadow: '0 15px 50px rgba(76, 175, 80, 0.3)'
    },
    videoThumbnailImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease'
    },
    playOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(129, 199, 132, 0.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.4s ease',
      backdropFilter: 'blur(5px)'
    },
    playButton: {
      width: '100px',
      height: '100px',
      background: 'linear-gradient(135deg, #66bb6a, #4caf50)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      transition: 'all 0.4s ease',
      boxShadow: '0 15px 50px rgba(46, 125, 50, 0.5)'
    },
    playButtonSvg: {
      width: '40px',
      height: '40px',
      marginLeft: '6px'
    },
    videoDuration: {
      position: 'absolute',
      bottom: '20px',
      right: '20px',
      padding: '0.75rem 1.25rem',
      background: 'rgba(46, 125, 50, 0.95)',
      borderRadius: '12px',
      color: 'white',
      fontWeight: 700,
      fontSize: '1rem',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 5px 20px rgba(0,0,0,0.3)'
    },
    videoPlayer: {
      position: 'relative',
      width: '100%',
      height: '500px',
      borderRadius: '20px',
      overflow: 'hidden',
      marginBottom: '1.5rem',
      background: '#1b5e20',
      boxShadow: '0 20px 60px rgba(76, 175, 80, 0.4)'
    },
    closeVideo: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      width: '50px',
      height: '50px',
      background: 'rgba(102, 187, 106, 0.95)',
      border: 'none',
      borderRadius: '50%',
      color: 'white',
      cursor: 'pointer',
      zIndex: 10,
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 8px 25px rgba(46, 125, 50, 0.4)'
    },
    video: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    },
    videoDescription: {
      color: '#2e7d32',
      fontSize: '1.1rem',
      lineHeight: 1.8,
      textAlign: 'center',
      fontWeight: 500
    }
  }

  return (
    <section id="featured-work" style={styles.featuredWork}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(76, 175, 80, 0.4);
          border-color: #4caf50;
        }

        .project-card:hover img {
          transform: scale(1.1);
        }

        .cardsContainer::-webkit-scrollbar {
          height: 10px;
        }

        .cardsContainer::-webkit-scrollbar-track {
          background: #e8f5e9;
          border-radius: 10px;
        }

        .cardsContainer::-webkit-scrollbar-thumb {
          background: #66bb6a;
          border-radius: 10px;
        }

        .cardsContainer::-webkit-scrollbar-thumb:hover {
          background: #4caf50;
        }

        .video-thumbnail:hover .play-overlay {
          background: rgba(129, 199, 132, 0.6);
        }

        .video-thumbnail:hover .play-button {
          transform: scale(1.15);
          box-shadow: 0 20px 60px rgba(46, 125, 50, 0.7);
        }

        .video-thumbnail:hover img {
          transform: scale(1.05);
        }

        .close-video:hover {
          transform: rotate(90deg) scale(1.1);
        }
      `}</style>

      <div style={styles.container}>
       
        <div style={styles.cardsContainer}>
          {projectImages.map((image, index) => (
            <div
              key={index}
              className="project-card"
              style={{
                ...styles.projectCard,
                ...(index === currentSlide ? styles.cardActive : {})
              }}
              onMouseEnter={() => setCurrentSlide(index)}
            >
              <div style={styles.cardImageWrapper}>
                <img src={image.url} alt={image.title} style={styles.cardImage} />
              </div>
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{image.title}</h3>
                <p style={styles.cardDescription}>{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div style={styles.videoSection}>
          <h3 style={styles.videoTitle}>
            <span style={styles.videoIcon}>🎥</span>
            Watch Full Demo
          </h3>
          
          {!showVideo ? (
            <div 
              className="video-thumbnail"
              style={styles.videoThumbnail} 
              onMouseEnter={handleVideoPlay}
            >
              <img 
                src="images/duo bord.mp4" 
                alt="Video Thumbnail" 
                style={styles.videoThumbnailImg}
              />
              <div className="play-overlay" style={styles.playOverlay}>
                <div className="play-button" style={styles.playButton}>
                  <svg viewBox="0 0 24 24" fill="currentColor" style={styles.playButtonSvg}>
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
              <div style={styles.videoDuration}>3:45</div>
            </div>
          ) : (
            <div style={styles.videoPlayer}>
              <button className="close-video" style={styles.closeVideo} onClick={handleVideoClose}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <video
                ref={videoRef}
                controls
                autoPlay
                style={styles.video}
              >
                <source src="src/assets/images/duo bord.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
          )}

          <p style={styles.videoDescription}>
          
          </p>
        </div>
    
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href="https://github.com/Hadil174"
           target="_blank"
             rel="noopener noreferrer"
               style={{
                 position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                 padding: '1rem 2rem',
                 background: 'linear-gradient(135deg, #22c55e, #10b981, #14b8a6)',
                 color: '#fff',
                 fontWeight: 700,
                 fontSize: '1.1rem',
                 borderRadius: '50px',
                 overflow: 'hidden',
                 textDecoration: 'none',
                 transition: 'all 0.3s ease',
                 boxShadow: '0 10px 40px rgba(46,125,50,0.4)'
    }}
  >
    
     <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ marginRight: '0.75rem' }}
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>

    <span>Explore All Projects</span>

    {/* Right arrow icon */}
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ marginLeft: '0.75rem' }}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  </a>
</div>

      </div>
    </section>
  )
}

export default FeaturedWork