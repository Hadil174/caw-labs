import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll to section on click
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80; // hauteur du navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  // Scroll spy pour mettre à jour activeSection automatiquement
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'featured-work', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100; // ajuster selon la navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy(); // initial check
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  // Nav items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'featured-work', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo */}
          <div className={styles.logo} onClick={() => scrollToSection('home')}>
            <div className={styles.logoIconWrapper}>
              <div className={styles.logoGlow}></div>
              <Code2 className={styles.logoIcon} />
            </div>
            <span className={styles.logoText}>Portfolio</span>
          </div>

          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${styles.navItem} ${
                  activeSection === item.id ? styles.active : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`${styles.mobileNavItem} ${
                activeSection === item.id ? styles.active : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
