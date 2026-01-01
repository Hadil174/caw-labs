import { useState } from 'react'
import styles from './Projects.module.css'
import ProjectCard from './ProjectCard'

function Projects() {
  // Modifiez ce tableau avec vos vrais projets/labs
  const [projects] = useState([
    {
      id: 1,
      title: 'Lab 1: Todo List Application',
      description: 'A fully functional todo list with add, edit, delete, and filter features. Built with React hooks and local storage persistence.',
      tech: ['React', 'Vite', 'CSS Modules', 'Hooks'],
      github: 'https://github.com/username/lab1-todo',
      demo: 'https://lab1-todo-demo.netlify.app',
      image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=Todo+App'
    },
    {
      id: 2,
      title: 'Lab 2: Weather Dashboard',
      description: 'Real-time weather application fetching data from OpenWeather API. Features city search and 5-day forecast.',
      tech: ['React', 'API Integration', 'Axios', 'Responsive Design'],
      github: 'https://github.com/username/lab2-weather',
      demo: 'https://lab2-weather-demo.netlify.app',
      image: 'https://via.placeholder.com/400x250/764ba2/ffffff?text=Weather+App'
    },
    {
      id: 3,
      title: 'Lab 3: E-Commerce Product Page',
      description: 'Interactive product page with image gallery, cart functionality, and responsive design.',
      tech: ['React', 'Context API', 'CSS Grid', 'React Hooks'],
      github: 'https://github.com/username/lab3-ecommerce',
      demo: 'https://lab3-ecommerce-demo.netlify.app',
      image: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=E-Commerce'
    },
    {
      id: 4,
      title: 'Lab 4: Recipe Finder',
      description: 'Search and discover recipes using external API. Features include filters, favorites, and detailed recipe views.',
      tech: ['React', 'REST API', 'React Router', 'Styled Components'],
      github: 'https://github.com/username/lab4-recipes',
      demo: null,
      image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Recipe+Finder'
    },
    {
      id: 5,
      title: 'Lab 5: Movie Database',
      description: 'Browse and search movies using TMDB API. Features include trending movies, search, and detailed movie information.',
      tech: ['React', 'TMDB API', 'React Hooks', 'CSS Modules'],
      github: 'https://github.com/username/lab5-movies',
      demo: 'https://lab5-movies-demo.netlify.app',
      image: 'https://via.placeholder.com/400x250/6366f1/ffffff?text=Movie+DB'
    },
    {
      id: 6,
      title: 'Lab 6: Quiz Application',
      description: 'Interactive quiz app with multiple choice questions, score tracking, and timer functionality.',
      tech: ['React', 'useState', 'useEffect', 'Custom Hooks'],
      github: 'https://github.com/username/lab6-quiz',
      demo: null,
      image: 'https://via.placeholder.com/400x250/10b981/ffffff?text=Quiz+App'
    }
  ])

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleGradient}>Featured Projects</span>
          </h2>
          <p className={styles.subtitle}>
            Here are some of the labs and projects I've worked on during this semester
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects