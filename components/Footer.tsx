import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© 2024 The Coding Squad. All rights reserved.</p>
        <nav>
          <Link href="#home">Home</Link>
          <Link href="#about">About Us</Link>
          <Link href="#curriculum">Curriculum</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </div>
    </footer>
  )
}