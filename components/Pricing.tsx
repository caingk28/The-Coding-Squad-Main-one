import styles from '../styles/Pricing.module.css'

export default function Pricing() {
  return (
    <section id="pricing" className={styles.pricingSection}>
      <h2>Pick a subscription that suits you</h2>
      <p>Feel free to cancel at anytime.</p>
      <div className={styles.pricingContainer}>
        <div className={styles.pricingCard}>
          <h3>Monthly Subscription</h3>
          <p className={styles.price}>£40/MO</p>
          <ul>
            <li>6 hours of coding a month</li>
            <li>Access to all learning materials</li>
            <li>Weekly progress reports</li>
          </ul>
          <button className={styles.ctaButton}>Subscribe</button>
        </div>
        <div className={styles.pricingInfo}>
          <h3>What You Get</h3>
          <ul>
            <li>6 hours of coding instruction per month</li>
            <li>1-on-1 personalized teaching</li>
            <li>Access to our full curriculum</li>
            <li>Project-based learning</li>
            <li>Regular feedback and progress tracking</li>
            <li>Flexible scheduling</li>
          </ul>
        </div>
      </div>
    </section>
  )
}