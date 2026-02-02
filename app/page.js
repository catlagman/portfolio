import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image src="/logo-cl.svg" alt="CL Logo" width={50} height={50} />
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#about" className={styles.active}>About</a></li>
          <li><a href="#design" className={styles.disabled}>Design</a></li>
          <li><a href="#art" className={styles.disabled}>Art</a></li>
          <li><a href="#photos" className={styles.disabled}>Photos</a></li>
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
            I'm a product designer specializing in visual design, with several years of experience across startups and corporate environments. I leverage user research and data to deeply understand user needs and guide design decisions to influence product strategy. I thrive on continuous experimentation, iteration, and optimization.
          </p>
          
          <p className={styles.aboutText}>
            I'm currently working at AWS to support AWS sellers and operations needs and workflows. When I'm not working, I'm hiking along the coast with my beloved dog/sidekick, Louie, drawing a whimsical dream in my sketchbook, or trying a new restaurant in a different neighborhood for dinner.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2026 Catherine Lagman. All content and images are reserved.</p>
        <p>Made in San Francisco · Last updated February 2026</p>
      </footer>
    </main>
  )
}
