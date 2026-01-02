import { useState, useRef, useEffect } from 'react'

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false)

  const cardStyle = {
    background: 'linear-gradient(180deg, #fbf4faff 0%, #f2ebf4ff 50%, #faf6fbff 100%)',
    backdropFilter: 'blur(20px)',
    border: '4px solid transparent',
    backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #652162ff, #e297e8ff, #de98eaff)',
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box',
    borderRadius: '35px',
    padding: '1.5rem', // Réduit de 2rem → 1.5rem
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    animation: 'fadeInUp 0.8s ease forwards',
    animationDelay: `${index * 0.15}s`,
    opacity: 0,
    transform: isHovered ? 'translateY(-20px) scale(1.03)' : 'translateY(0) scale(1)',
    boxShadow: isHovered 
      ? '0 30px 80px rgba(255, 107, 107, 0.4), 0 0 60px rgba(78, 205, 196, 0.3)'
      : '0 15px 40px rgba(255, 107, 107, 0.2)',
    position: 'relative',
    overflow: 'hidden'
  }

  const imageStyle = {
    width: '100%',
    height: '200px', // Réduit de 240px → 200px
    borderRadius: '25px',
    objectFit: 'cover',
    marginBottom: '1.2rem', // Légèrement réduit
    transition: 'transform 0.6s ease',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)'
  }

  const titleStyle = {
    fontSize: '1.4rem', // Légèrement réduit
    fontWeight: 600,
    marginBottom: '0.8rem',
    background: 'linear-gradient(180deg, #fbf4faff 0%, #f2ebf4ff 50%, #faf6fbff 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }

  const descStyle = {
    color: '#2D3561',
    fontSize: '0.95rem', // Légèrement réduit
    lineHeight: '1.7',
    marginBottom: '1.2rem',
    fontWeight: 500
  }

  const techContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.6rem', // Réduit
    marginBottom: '1.2rem'
  }

  const techBadgeStyle = {
    padding: '0.5rem 1rem', // Réduit
    background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.15) 0%, rgba(78, 205, 196, 0.15) 100%)',
    border: '2px solid #e18fd8ff',
    borderRadius: '25px',
    fontSize: '0.85rem', // Réduit
    color: '#5a4058ff',
    fontWeight: 700,
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }

  const linkContainerStyle = {
    display: 'flex',
    gap: '0.8rem', // Réduit
    marginTop: '1rem'
  }

  const buttonStyle = {
    flex: 1,
    padding: '0.9rem 1.2rem', // Réduit
    borderRadius: '25px',
    fontSize: '0.95rem', // Réduit
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '1px'
  }

  const githubBtnStyle = {
    ...buttonStyle,
    background: 'linear-gradient(135deg, #de86dcff 0%, #d675dfff 100%)',
    color: 'white',
    boxShadow: '0 10px 30px rgba(255, 107, 107, 0.4)'
  }

  const demoBtnStyle = {
    ...buttonStyle,
    background: 'white',
    color: '#395553ff',
    border: '3px solid #4ECDC4',
    boxShadow: '0 10px 30px rgba(78, 205, 196, 0.3)'
  }

  return (
    <div 
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {project.featured && (
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          background: 'linear-gradient(180deg, #fbf4faff 0%, #f2ebf4ff 50%, #faf6fbff 100%)',
          color: '#2D3561',
          padding: '0.5rem 1.2rem',
          borderRadius: '25px',
          fontSize: '0.85rem',
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '1px',
          boxShadow: '0 8px 25px rgba(255, 230, 109, 0.5)',
          zIndex: 10
        }}>
          ⭐ Featured
        </div>
      )}
      
      <div style={{ overflow: 'hidden', borderRadius: '25px' }}>
        <img src={project.image} alt={project.title} style={imageStyle} />
      </div>
      
      <h3 style={titleStyle}>{project.title}</h3>
      <p style={descStyle}>{project.description}</p>
      
      <div style={techContainerStyle}>
        {project.tech.slice(0, 4).map((tech, i) => (
          <span key={i} style={techBadgeStyle}>{tech}</span>
        ))}
      </div>
      
      <div style={linkContainerStyle}>
        <a href={project.github} target="_blank" rel="noopener noreferrer" style={githubBtnStyle}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
        
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" style={demoBtnStyle}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Demo
          </a>
        )}
      </div>
    </div>
  )
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const [projects] = useState([
    {
      id: 1,
      title: 'Lab 1: HTML & CSS Fundamentals',
      description: 'Created information cards about Palestine with structured HTML and responsive CSS.',
      tech: ['HTML5', 'CSS3', 'Semantic Markup', 'Responsive'],
      category: 'frontend',
      github: 'https://github.com/Hadil174/caw-labs/tree/master/lab1',
      demo: null,
      image: 'https://www.hrw.org/sites/default/files/styles/embed_xxl/public/media_2024/11/202411mena_ip_gaza_rafah_mosque_destruction.jpg?itok=lxNCeOh-',
      featured: false
    },
    {
      id: 2,
      title: 'Lab 2: Git & GitHub',
      description: 'Learned Git fundamentals: initialization, commits, branching, and pushing to remote repositories.',
      tech: ['Git', 'GitHub', 'Version Control', 'Branching'],
      category: 'tools',
      github: 'https://github.com/Hadil174/caw-labs/tree/lab2-setup/lab2',
      demo: null,
      image: 'https://media2.dev.to/dynamic/image/width=1000%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fvpxeexqyfvf4hw3zxtbn.png',
      featured: false
    },
    {
      id: 3,
      title: 'Lab 3: Node.js & NPM',
      description: 'Built Node.js scripts for file operations, module imports/exports, and NPM package management.',
      tech: ['Node.js', 'NPM', 'File System', 'Modules'],
      category: 'backend',
      github: 'https://github.com/Hadil174/caw-labs/tree/main/Lab3',
      demo: null,
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*RrGCCe5VG58QzFJbnI66bg.jpeg',
      featured: false
    },
    {
      id: 4,
      title: 'Lab 4: Unit Testing with Jest',
      description: 'Implemented comprehensive unit tests for JavaScript functions using Jest framework.',
      tech: ['Jest', 'Unit Testing', 'JavaScript', 'TDD'],
      category: 'backend',
      github: 'https://github.com/Hadil174/caw-labs/tree/lab2-setup/lab4_jest',
      demo: null,
      image: 'https://codesweetly.com/_astro/test-driven-development-tdd-workflow-diagram-codesweetly.Bw4JRNYE_ZWx3Lt.webp',
      featured: false
    },
    {
      id: 5,
      title: 'Lab 5: React Components',
      description: 'Created interactive React components with state management: toggle buttons, counters, dynamic lists.',
      tech: ['React', 'useState', 'Props', 'Event Handling'],
      category: 'frontend',
      github: 'https://github.com/Hadil174/caw-labs/tree/main/Lab5',
      demo: null,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 6,
      title: 'Lab 6: Vite & Modern React',
      description: 'Set up professional React development environment with Vite and modern ES6 modules.',
      tech: ['Vite', 'React', 'ES6', 'Components'],
      category: 'frontend',
      github: 'https://github.com/Hadil174/caw-labs/tree/lab2-setup/lab6',
      demo: null,
      image: 'https://miro.medium.com/1*Rsky5Y1sf0rKbCD8gAu7oQ.png',
      featured: true
    },
    {
      id: 7,
      title: 'Lab 7: Duo Board',
      description: 'Built a fully functional Kanban board with drag-and-drop task management across multiple columns.',
      tech: ['React', 'Vite', 'State Management', 'CSS'],
      category: 'fullstack',
      github: 'https://github.com/Hadil174/LAB7-',
      demo: 'https://hadil-kanban-board.netlify.app',
      image: 'src/assets/images/kanban.png',
      featured: true
    },
    {
      id: 8,
      title: 'Property Management System',
      description: 'Cloud-based hotel management system with Laravel-Vue.js, bilingual interfaces, and real-time reporting.',
      tech: ['Laravel', 'Vue.js', 'MySQL', 'REST API'],
      category: 'featured',
      github: 'https://github.com/Hadil174/hadil',
      demo: null,
      image: 'src/assets/images/hi.jpg',
      featured: true
    }
  ])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
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

  const filters = [
    { id: 'all', label: 'All Labs', icon: '🎯' },
    { id: 'featured', label: 'Featured', icon: '⭐' },
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'backend', label: 'Backend', icon: '⚙️' },
    { id: 'fullstack', label: 'Full Stack', icon: '🚀' },
    { id: 'tools', label: 'Tools', icon: '🛠️' }
  ]

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'featured') return project.featured
    return project.category === activeFilter
  })

  const sectionStyle = {
    position: 'relative',
    minHeight: '100vh',
    padding: '100px 40px 80px',
    background: 'linear-gradient(180deg, #fbf4faff 0%, #f2ebf4ff 50%, #faf6fbff 100%)',
    backgroundSize: '400% 400%',
    animation: 'gradientShift 15s ease infinite',
    overflow: 'hidden'
  }

  const containerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1
  }

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '80px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    transition: 'all 0.8s ease'
  }

  const titleStyle = {
    fontSize: '4.5rem',
    fontWeight: 900,
    marginBottom: '1.5rem',
    background: 'linear-gradient(135deg, #5c4367ff 0%, #783775ff 50%, #6e4570ff 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textShadow: '0 4px 20px rgba(255, 23, 68, 0.2)'
  }

  const subtitleStyle = {
    fontSize: '1.4rem',
    color: '#2D3561',
    maxWidth: '700px',
    margin: '0 auto 2rem',
    lineHeight: 1.8,
    fontWeight: 600
  }

  const countStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '1.5rem',
    padding: '1.5rem 3rem',
    background: 'rgba(255, 255, 255, 0.7)',
    border: '4px solid transparent',
    backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #4a3d4bff, #69556bff, #dc6ad2ff)',
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box',
    borderRadius: '50px',
    marginTop: '1rem',
    boxShadow: '0 15px 40px rgba(255, 107, 107, 0.3)'
  }

  const countNumberStyle = {
    fontSize: '3.5rem',
    fontWeight: 900,
    background: 'linear-gradient(135deg, #ca60d1ff, #5e6a69ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }

  const countLabelStyle = {
    color: '#2D3561',
    fontSize: '1.1rem',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '2px'
  }

  const filtersStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.2rem',
    justifyContent: 'center',
    marginBottom: '60px',
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.8s ease 0.2s'
  }

  const filterBtnStyle = (isActive) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1.2rem 2.5rem',
    background: isActive 
      ? 'linear-gradient(135deg, #db72f5ff 0%, #a249aeff 100%)' 
      : 'rgba(243, 199, 252, 0.7)',
    border: `4px solid ${isActive ? 'transparent' : '#a86dcaff'}`,
    borderRadius: '50px',
    color: isActive ? 'white' : '#2D3561',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontFamily: 'inherit',
    boxShadow: isActive 
      ? '0 15px 40px rgba(255, 107, 107, 0.4)' 
      : '0 10px 30px rgba(255, 107, 107, 0.2)',
    transform: isActive ? 'translateY(-5px)' : 'translateY(0)'
  })

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', // Réduit de 380px → 320px
    gap: '2rem', // Légèrement réduit de 2.5rem → 2rem
    marginBottom: '80px',
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.8s ease 0.4s'
  }

  return (
    <section id="projects" style={sectionStyle} ref={sectionRef}>
      <style>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>

      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>
            My Projects 🎨
          </h2>
          
          <p style={subtitleStyle}>
            Complete collection of labs and projects showcasing modern web technologies
          </p>

          <div style={countStyle}>
            <span style={countNumberStyle}>{filteredProjects.length}</span>
            <span style={countLabelStyle}>Projects</span>
          </div>
        </div>

        <div style={filtersStyle}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              style={filterBtnStyle(activeFilter === filter.id)}
            >
              <span style={{ fontSize: '1.5rem' }}>{filter.icon}</span>
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        <div style={gridStyle}>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects