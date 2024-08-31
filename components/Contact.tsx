import styles from '../styles/Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2>Get in Touch</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit" className={styles.ctaButton}>Send Message</button>
      </form>
    </section>
  )
}