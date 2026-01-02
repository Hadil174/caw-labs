import { useEffect, useState } from 'react';
import { Mail, Github, Smartphone, Send, CheckCircle, AlertCircle, Lightbulb, Palette, Code, Rocket, ArrowRight } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    succeeded: false,
    error: false
  });

  const FORMSPREE_URL = 'https://formspree.io/f/xnjageyd';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const timer = setInterval(() => {
            setActiveStep(prev => (prev < 3 ? prev + 1 : prev));
          }, 3000);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );
    const section = document.getElementById('contact');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setFormStatus({ submitting: true, succeeded: false, error: false });

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New message from ${formData.name} - Portfolio Contact`
        })
      });

      if (response.ok) {
        setFormStatus({ submitting: false, succeeded: true, error: false });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setFormStatus({ submitting: false, succeeded: false, error: false });
        }, 5000);
      } else throw new Error('Form submission failed');
    } catch (error) {
      console.error('Error:', error);
      setFormStatus({ submitting: false, succeeded: false, error: true });
      setTimeout(() => {
        setFormStatus({ submitting: false, succeeded: false, error: false });
      }, 5000);
    }
  };

  const workflowSteps = [
    {
      id: 1,
      emoji: '💡',
      icon: Lightbulb,
      title: "First, we need an idea...",
      user: {
        avatar: 'C',
        message: 'I need a modern website for  a restaurant.',
        subtext: 'present the restaurant, showcase the menu, and encourage visitors to make a reservation or place an order..'
      },
      assistant: {
        avatar: '👨‍💻',
        message: "Alright, great!",
        subtext: "I'll handle everything, first the design that I'll share with you. Once validated, I'll develop your website and put it online!"
      }
    },
    {
      id: 2,
      emoji: '🎨',
      icon: Palette,
      title: "Then, we create the design",
      user: {
        avatar: 'C',
        message: 'Perfect! When do we start?',
        subtext: 'I love your portfolio. Can we discuss the timeline?'
      },
      assistant: {
        avatar: '👨‍💻',
        message: "Let's start right away!",
        subtext: "I'll prepare mockups within 2-3 days. We'll iterate until you're 100% satisfied with the design before moving to development."
      }
    },
    {
      id: 3,
      emoji: '💻',
      icon: Code,
      title: "Development & Testing",
      user: {
        avatar: 'C',
        message: 'The design looks amazing!',
        subtext: 'Can we proceed with development?'
      },
      assistant: {
        avatar: '👨‍💻',
        message: "Absolutely! Development phase begins.",
        subtext: "I'll build your website with clean code, responsive design, and optimal performance. You'll receive weekly updates."
      }
    },
    {
      id: 4,
      emoji: '🚀',
      icon: Rocket,
      title: "Launch & Support",
      user: {
        avatar: 'C',
        message: 'Everything works perfectly!',
        subtext: "Let's launch it!"
      },
      assistant: {
        avatar: '👨‍💻',
        message: "Time to go live! 🎉",
        subtext: "I'll deploy your website and provide ongoing support. Your success is my priority!"
      }
    }
  ];

  const contacts = [
    { 
      icon: Mail, 
      value: 'ichtahadil56@gmail.com', 
      link: 'mailto:ichtahadil56@gmail.com', 
      label: 'Email me'
    },
    { 
      icon: Github, 
      value: '@Hadil174', 
      link: 'https://github.com/Hadil174', 
      label: 'GitHub'
    },
    { 
      icon: Smartphone, 
      value: '+213 XXX XXX XXX',
      link: 'tel:+213XXXXXXXXX',
      label: 'Call me'
    }
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.badge}>
            💼 My Work Process
          </span>
          <h2 className={styles.title}>
            How We'll Work Together
          </h2>
          <p className={styles.description}>
            Here's my proven workflow from concept to launch. Every step is designed to bring your vision to life.
          </p>
        </div>

        {/* Workflow Steps - Chat Style */}
        <div className={styles.workflowContainer}>
          {workflowSteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep >= index;
            
            return (
              <div 
                key={step.id}
                className={`${styles.stepWrapper} ${isActive ? styles.visible : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Step Header */}
                <div className={styles.stepHeader}>
                  <div className={styles.stepNumber}>
                    <span className={styles.stepNumberText}>0{step.id}</span>
                  </div>
                  <div className={styles.stepTitleWrapper}>
                    <div className={styles.stepTitle}>
                      <Icon className={styles.stepIcon} />
                      <h3 className={styles.stepTitleText}>{step.title}</h3>
                      <span className={styles.stepEmoji}>{step.emoji}</span>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className={styles.messagesContainer}>
                  {/* User Message */}
                  <div className={styles.messageWrapper}>
                    <div className={styles.userMessage}>
                      <div className={styles.userAvatar}>
                        {step.user.avatar}
                      </div>
                      <div className={styles.messageContent}>
                        <div className={styles.messageBubble}>
                          <p className={styles.messageText}>
                            {step.user.message}
                          </p>
                          <p className={styles.messageSubtext}>
                            {step.user.subtext}
                          </p>
                        </div>
                        <span className={styles.messageTime}>Just now</span>
                      </div>
                    </div>
                  </div>

                  {/* Assistant Message */}
                  <div className={styles.messageWrapper}>
                    <div className={styles.assistantMessage}>
                      <div className={styles.assistantAvatar}>
                        {step.assistant.avatar}
                      </div>
                      <div className={styles.messageContent}>
                        <div className={`${styles.messageBubble} ${styles.assistantBubble}`}>
                          <p className={styles.messageText}>
                            {step.assistant.message}
                          </p>
                          <p className={styles.messageSubtext}>
                            {step.assistant.subtext}
                          </p>
                        </div>
                        <span className={styles.messageTime}>Just now</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Final Call to Action Message */}
          <div className={`${styles.ctaMessage} ${activeStep >= 3 ? styles.visible : ''}`}>
            <div className={styles.ctaWrapper}>
              <div className={styles.ctaAvatar}>
                👨‍💻
              </div>
              <div className={styles.ctaBubble}>
                <div className={styles.ctaContent}>
                  <p className={styles.ctaTitle}>
                    Ready to bring your project to life? 🚀
                  </p>
                  <p className={styles.ctaDescription}>
                    Let's discuss your ideas! Fill out the form below and I'll get back to you within 24 hours. Together, we'll create something extraordinary.
                  </p>
                  <div className={styles.ctaAction}>
                    <button 
                      onClick={() => setShowForm(true)}
                      className={styles.ctaButton}
                    >
                      <span>Start Your Project Now</span>
                      <ArrowRight className={styles.ctaIcon} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form - Only show when button clicked */}
        {showForm && (
          <div className={`${styles.formSection} ${styles.visible}`}>
            <div className={styles.formWrapper}>
            <div className={styles.formGlow}></div>
            
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>
                Let's Start Your Project! 💬
              </h3>
              <p className={styles.formSubtitle}>
                Tell me about your vision and let's make it happen
              </p>
            </div>

            {formStatus.succeeded && (
              <div className={styles.successMessage}>
                <CheckCircle className={styles.successIcon} />
                <div>
                  <h4 className={styles.messageTitle}>Message sent successfully! 🎉</h4>
                  <p className={styles.messageDescription}>Thank you for reaching out. I'll get back to you within 24 hours!</p>
                </div>
              </div>
            )}

            {formStatus.error && (
              <div className={styles.errorMessage}>
                <AlertCircle className={styles.errorIcon} />
                <div>
                  <h4 className={styles.messageTitle}>Oops! Something went wrong 😕</h4>
                  <p className={styles.messageDescription}>Please try again or contact me directly at ichtahadil56@gmail.com</p>
                </div>
              </div>
            )}

            <div className={styles.formInputs}>
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                disabled={formStatus.submitting}
                className={styles.input}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                disabled={formStatus.submitting}
                className={styles.input}
              />
              <textarea
                name="message"
                placeholder="Tell me about your project... What's your vision? *"
                value={formData.message}
                onChange={handleChange}
                disabled={formStatus.submitting}
                className={styles.textarea}
              />
              <button
                onClick={handleSubmit}
                disabled={formStatus.submitting}
                className={styles.submitBtn}
              >
                <span className={styles.btnText}>
                  {formStatus.submitting ? 'Sending Your Message...' : 'Send Message & Start Project'}
                </span>
                {formStatus.submitting ? (
                  <div className={styles.spinner}></div>
                ) : (
                  <Send className={styles.btnIcon} />
                )}
              </button>
            </div>
          </div>
        </div>
        )}

        {/* Contact Info - Minimalist Footer Style */}
        <div className={`${styles.contactFooter} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.contactFooterText}>
            <p>Or reach me directly via</p>
          </div>
          <div className={styles.contactLinks}>
            {contacts.map((contact, i) => {
              const Icon = contact.icon;
              return (
                <a
                  key={i}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  <Icon className={styles.contactLinkIcon} />
                  <span className={styles.contactLinkText}>
                    {contact.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;