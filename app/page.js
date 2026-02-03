'use client'

import Image from 'next/image'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import styles from './page.module.scss'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

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
        }
      })
    }, observerOptions)

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <main className={styles.main}>
      {/* Logo */}
      <div className={styles.logo}>
        <Image src="/logo-cl.svg" alt="CL Logo" width={50} height={50} />
      </div>

      {/* Navigation - Sticky Footer */}
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          <li><a href="#about" className={activeSection === 'about' ? styles.active : ''}>About</a></li>
          <li><a href="#design" className={styles.disabled}>Design</a></li>
          <li><a href="#art" className={styles.disabled}>Art</a></li>
          <li><a href="#photos" className={activeSection === 'photos' ? styles.active : ''}>Photos</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero} id="about">
        <h1 className={styles.heroName}>Catherine Lagman</h1>
        <p className={styles.heroSubtitle}>
          A multi-disciplinary UX/Product Designer and artist based in San Francisco, CA.
        </p>

        <div className={styles.about}>
          <p className={styles.aboutText}>
            I'm a product designer specializing in visual design, with several years of experience across startups and corporate environments. I leverage user research and data to deeply understand user needs and guide design decisions to influence product strategy. I thrive on continuous experimentation, iteration, and optimization to ensure we're building the best experience possible.
          </p>
          
          <p className={styles.aboutText}>
            I'm currently working at AWS to support AWS sellers and operations needs and workflows. When I'm not working, I'm hiking outside with my beloved dog/sidekick, Louie or trying a restaurant in a different neighborhood for dinner.
          </p>
        </div>
      </section>

      {/* Photos Section */}
      <section className={styles.section} id="photos">
        <h2 className={styles.heroName}>Photos</h2>
        <p className={styles.heroSubtitle}>
          Dreamy photos of some past clients. For more details, please reach out.
        </p>
        <div id="curator-feed-default-feed-layout"></div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2026 Catherine Lagman. All content and images are reserved.</p>
        <p>Made in San Francisco · Last updated February 2026</p>
      </footer>

      {/* Curator.io Script */}
      <Script
        id="curator-feed-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              var i,e,d=document,s="script";i=d.createElement("script");i.async=1;i.charset="UTF-8";
              i.src="https://cdn.curator.io/published/498605c4-fd0b-442f-831c-94f0da646ce6.js";
              e=d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
            })();
          `
        }}
      />
    </main>
  )
}
