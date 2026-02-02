import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image src="/logo-cl.svg" alt="CL Logo" width={50} height={50} />
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#about">About</a></li>
          <li><a href="#design">Design</a></li>
          <li><a href="#art">Art</a></li>
          <li><a href="#photos">Photos</a></li>
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
            I'm a product designer specializing in visual design, with several years of experience across startups and corporate environments. I leverage user research and data to deeply understand user needs and guide design decisions and influence product strategy. I thrive on continuous experimentation, iteration, and optimization.
          </p>
          
          <p className={styles.aboutText}>
            I'm currently working at AWS to support AWS sellers and operations needs and workflows. When I'm not working, I'm hiking outside with my dog, Louie or trying a new restaurant.
          </p>
        </div>
      </section>

      {/* Placeholder sections for smooth scroll */}
      <section className={styles.section} id="design">
        <h2>Design</h2>
        <p>Coming soon...</p>
      </section>

      <section className={styles.section} id="art">
        <h2>Art</h2>
        <p>Coming soon...</p>
      </section>

      <section className={styles.section} id="photos">
        <h2>Photos</h2>
        <p>Coming soon...</p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2026 Catherine Lagman. All content and images are reserved.</p>
        <p>Made in San Francisco · Last updated February 2026</p>
      </footer>
    </main>
  )
}
