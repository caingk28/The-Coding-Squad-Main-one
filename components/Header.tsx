import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
  const [isNavActive, setIsNavActive] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.logo}>LOGO</div>
        <nav className={`${styles.navLinks} ${isNavActive ? styles.active : ''}`}>
          <Link href="#home">Home</Link>
          <Link href="#games">Games</Link>
          <Link href="#team">Team</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#contact">Contact</Link>
          <Link href="#curriculum">Curriculum</Link>
          <Link href="#subscription">Subscription</Link>
        </nav>
        <div 
          className={styles.hamburger} 
          onClick={() => setIsNavActive(!isNavActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}