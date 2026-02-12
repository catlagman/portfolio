'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './page.module.scss'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')
  const [formStatus, setFormStatus] = useState('idle') // idle, submitting, success, error
  const [openModal, setOpenModal] = useState(null) // null, 'kespry', 'able-co'

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
        
        <div className={styles.caseStudyGrid}>
          <div className={styles.caseStudyCard} onClick={() => setOpenModal('kespry')}>
            <div className={styles.cardImage}>
              <img src="/kespry-thumbnail.png" alt="Kespry Inventory Management" />
            </div>
            <div className={styles.cardContent}>
              <h3>Reimagining Inventory Management</h3>
              <p className={styles.cardMeta}>Kespry · Research, Strategy, Interaction · 2018</p>
            </div>
          </div>

          <div className={styles.caseStudyCard} onClick={() => setOpenModal('able-co')}>
            <div className={styles.cardImage}>
              <img src="/able-co-thumbnail.png" alt="Able Co. Global Search" />
            </div>
            <div className={styles.cardContent}>
              <h3>Supporting epidemiologists to find relevant cancer research</h3>
              <p className={styles.cardMeta}>Able Co. · Research, Strategy, Interaction · 2019</p>
            </div>
          </div>

          <div className={styles.caseStudyCard} onClick={() => setOpenModal('aws')}>
            <div className={styles.cardImage}>
              <img src="/aws-thumbnail.jpg" alt="AWS Research Studies" />
            </div>
            <div className={styles.cardContent}>
              <h3>Strategic research studies that have informed design strategy and beyond</h3>
              <p className={styles.cardMeta}>AWS · Research, Strategy · 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Modals */}
      {openModal === 'kespry' && (
        <div className={styles.modalOverlay} onClick={() => setOpenModal(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setOpenModal(null)}>×</button>
            <h2 className={styles.modalTitle}>Reimagining Inventory Management</h2>
            <p className={styles.modalMeta}>Able Co. · Research, Strategy, Interaction · 2019</p>
            <div className={styles.modalBody}>
              <p>As Kespry's first design hire, I led the redesign of our inventory management workspace, a flagship project that transformed how the company approached product development. The initial workspace had low engagement and didn't meet customer needs, so I conducted extensive research with aggregate companies where I discovered Inventory Managers spent 3 weeks per quarter manually reconciling drone data with Enterprise Resource Planning (ERP) systems in Excel. I designed and validated three concepts ranging from low to high effort with customers, and landed on an approach that integrated into their existing workflows rather than requiring any organizational changes. The redesigned workspace was organized by site and flagged discrepancies through actionable alerts. This increased engagement by 17% within three months and secured a partnership with Summit Materials, one of North America's largest aggregate companies. This project also established user research as standard practice at Kespry and demonstrated how design drives business outcomes.</p>
              
              <div className={styles.modalImage}>
                <img src="/kespry-image1.jpg" alt="Kespry research" />
                <p className={styles.imageCaption}>Picture description</p>
              </div>

              <div className={styles.modalImage}>
                <img src="/kespry-image2.jpg" alt="Kespry design" />
                <p className={styles.imageCaption}>Picture description</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {openModal === 'able-co' && (
        <div className={styles.modalOverlay} onClick={() => setOpenModal(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setOpenModal(null)}>×</button>
            <h2 className={styles.modalTitle}>Supporting epidemiologists to find relevant cancer research</h2>
            <p className={styles.modalMeta}>Able Co. · Research, Strategy, Interaction · 2019</p>
            <div className={styles.modalBody}>
              <p>At Able Co., I designed a global search feature for the Parker Institute of Cancer Immunotherapy's platform, where Nobel prize-winning scientists collaborate to cure cancer. Scientists struggled to find information because search was siloed within specific product areas. Despite agency constraints—a 2-month timeline and stakeholder-prescribed solution—I evaluated three interaction concepts and recommended a search takeover approach that balanced usability with technical feasibility. The redesigned search featured cross-category results, engagement-based prioritization, and fuzzy matching. Results: 15% of sessions used search, 10% increase in daily active users, 13% increase in engagement, and 17% increase in research downloads, proving that better discoverability drives scientific collaboration.</p>
            </div>
          </div>
        </div>
      )}

      {openModal === 'aws' && (
        <div className={styles.modalOverlay} onClick={() => setOpenModal(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setOpenModal(null)}>×</button>
            <h2 className={styles.modalTitle}>Strategic research studies that have informed design strategy and beyond</h2>
            <p className={styles.modalMeta}>AWS · Research, Strategy · 2023</p>
            <div className={styles.modalBody}>
              <p>Content coming soon for AWS research project...</p>
            </div>
          </div>
        </div>
      )}

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
