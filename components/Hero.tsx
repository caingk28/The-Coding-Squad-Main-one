import Image from 'next/image'
import styles from '../styles/Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 id="typing-effect">The Coding Squad</h1>
          <h2>Empower Your Child with Coding Skills</h2>
          <p>Our fun and interactive curriculum teaches children to code using Scratch and Python, starting with simple games and progressing to more advanced projects.</p>
          <button className={styles.ctaButton}>Sign Up Here</button>
        </div>
        <div className={styles.heroImage}>
          <Image src="/images/hero.png" alt="Coding illustration" width={400} height={400} />
        </div>
      </div>
    </section>
  )
}