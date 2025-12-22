import { useEffect, useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    const section = document.getElementById('contact');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contacts = [
    { 
      icon: Mail, 
      title: 'Email', 
      value: 'ichtahadil56@gmail.com', 
      link: 'mailto:ichtahadil56@gmail.com', 
      gradient: 'emeraldTeal', 
      emoji: '📧' 
    },
    { 
      icon: Github, 
      title: 'GitHub', 
      value: '@Hadil174', 
      link: 'https://github.com/Hadil174', 
      gradient: 'limeGreen', 
      emoji: '🚀' 
    },
    { 
      icon: Linkedin, 
      title: 'LinkedIn', 
      value: '@yourusername', 
      link: 'https://linkedin.com/in/yourusername', 
      gradient: 'yellowAmber', 
      emoji: '💼' 
    }
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>📬 Let's Connect</span>
          </div>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.description}>
            Have a project in mind or just want to chat? I'd love to hear from you. Drop me a message and let's create something extraordinary together.
          </p>
        </div>

        <div className={`${styles.contactGrid} ${isVisible ? styles.visible : ''}`}>
          {contacts.map((contact, i) => {
            const Icon = contact.icon;
            return (
              <a
                key={i}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.contactCard} ${styles[contact.gradient]}`}
              >
                <div className={styles.cardGlow}></div>
                <div className={styles.cardContent}>
                  <div className={styles.iconBox}>
                    <Icon className={styles.icon} />
                  </div>
                  <div className={styles.emoji}>{contact.emoji}</div>
                  <h3 className={styles.cardTitle}>{contact.title}</h3>
                  <p className={styles.cardValue}>{contact.value}</p>
                </div>
              </a>
            );
          })}
        </div>

        <div className={`${styles.formWrapper} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.formGlow}></div>
          <div className={styles.formContent}>
            <h3 className={styles.formTitle}>
              <span className={styles.formEmoji}>✨</span>
              Send Me a Message
            </h3>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className={styles.input}
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className={styles.textarea}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span>Sending</span>
                    <div className={styles.spinner}></div>
                  </>
                ) : submitSuccess ? (
                  <>
                    <span>Message Sent!</span>
                    <span>✓</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Mail className={styles.btnIcon} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;