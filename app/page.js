'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './page.module.scss'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')
  const [formStatus, setFormStatus] = useState('idle') // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('submitting')

    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/mpqjqvzn', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setFormStatus('success')
        form.reset()
        // Reset to idle after 5 seconds
        setTimeout(() => setFormStatus('idle'), 5000)
      } else {
        setFormStatus('error')
        setTimeout(() => setFormStatus('idle'), 5000)
      }
    } catch (error) {
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 5000)
    }
  }

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
          // Add visible class to trigger animation
          entry.target.classList.add(styles.visible)
        }
      })
    }, observerOptions)

    sections.forEach((section) => observer.observe(section))

    // Trigger animation for hero section on page load
    const heroSection = document.getElementById('about')
    if (heroSection) {
      setTimeout(() => {
        heroSection.classList.add(styles.visible)
      }, 100)
    }

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <main className={styles.main}>

      {/* Navigation - Sticky Footer */}
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          <li><a href="#about" className={activeSection === 'about' ? styles.active : ''}>About</a></li>
          <li><a href="#design" className={activeSection === 'design' ? styles.active : ''}>Design</a></li>
          <li className={styles.navLogo}>
            <a href="#about">
              <Image src="/logo-newest.svg" alt="CL Logo" width={30} height={33} />
            </a>
          </li>
          <li><a href="#art" className={styles.disabled}>Art</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? styles.active : ''}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero} id="about">
        <h1 className={styles.heroName}>Cat Lagman</h1>
        <p className={styles.heroSubtitle}>
          A multi-disciplinary UX/Product Designer and artist based in San Francisco, CA
        </p>

        <div className={styles.about}>
          <p className={styles.aboutText}>
            I'm a designer specializing in visual design, with several years of experience across startups and corporate environments. I leverage user research and data to deeply understand user needs and guide design decisions to influence product strategy. I thrive on continuous experimentation, iteration, and optimization to ensure we're building the best experience possible.
          </p>
          
          <p className={styles.aboutText}>
            I'm currently working at AWS to support AWS employees' needs and workflows in Sales and Sales Operations. When I'm not working, I'm hiking outside with my beloved dog/sidekick, Louie, painting whenever I feel a creative spark, snapping photos, or trying a restaurant in a different neighborhood for dinner.
          </p>
      
          <div className={styles.links}>
            <a href="mailto:calagman@gmail.com" className={styles.link}>Email me</a>
            <span className={styles.linkSeparator}>·</span>
            <a href="https://www.linkedin.com/in/catherinelagman/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
            <span className={styles.linkSeparator}>·</span>
            <a href="https://medium.com/@catlagman" target="_blank" rel="noopener noreferrer" className={styles.link}>Medium</a>
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section className={styles.section} id="design">
        <h2 className={styles.heroName}>Design</h2>
        <p className={styles.heroSubtitle}>
          Selected pieces of work. For more, please <a href="mailto:calagman@gmail.com" className={styles.underline}>reach out</a>.
        </p>
        
        <div className={styles.caseStudies}>
          <a href="/design/kespry" className={styles.caseStudyCard}>
            <h3>Reimagining Inventory Management</h3>
            <p className={styles.company}>Kespry, 2018</p>
            <p className={styles.cardSummary}>Redesigned Kespry's inventory management workspace, increasing engagement 17% and securing a partnership with one of North America's largest aggregate companies.</p>
          </a>

          <a href="/design/able-co" className={styles.caseStudyCard}>
            <h3>Helping Scientists Find Things Faster</h3>
            <p className={styles.company}>Able Co., 2020</p>
            <p className={styles.cardSummary}>Designed a global search feature that increased research collaboration among Nobel prize-winning cancer scientists by 17%.</p>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.section} id="contact">
        <h2 className={styles.heroName}>Contact</h2>
        <p className={styles.heroSubtitle}>
          Send me a message and say hello.
        </p>
        
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className={styles.formInput}
              disabled={formStatus === 'submitting'}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className={styles.formInput}
              disabled={formStatus === 'submitting'}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="8" 
              required 
              className={styles.formTextarea}
              disabled={formStatus === 'submitting'}
            ></textarea>
          </div>

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={formStatus === 'submitting'}
          >
            {formStatus === 'submitting' ? 'Sending...' : 'Send'}
          </button>

          {formStatus === 'success' && (
            <div className={styles.successMessage}>
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {formStatus === 'error' && (
            <div className={styles.errorMessage}>
              ✗ Something went wrong. Please try again or email me directly at calagman@gmail.com
            </div>
          )}
        </form>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2026 Catherine Lagman. All content and images are reserved.</p>
        <p>
          Made in San Francisco
          <span className={styles.linkSeparator}>·</span>
          Last updated February 2026
        </p>
      </footer>
    </main>
  )
}
