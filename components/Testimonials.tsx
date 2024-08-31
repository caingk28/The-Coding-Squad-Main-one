import styles from '../styles/Testimonials.module.css'

const testimonials = [
  {
    quote: "The Coding Squad has been amazing for my daughter. She's learned so much and loves creating her own games!",
    author: "Sarah P., Parent"
  },
  {
    quote: "I never thought coding could be this fun! The teachers are great and I've made cool games to show my friends.",
    author: "Jake M., Student (Age 12)"
  },
  {
    quote: "As a teacher, I'm impressed by the curriculum. It's well-structured and engages students in a meaningful way.",
    author: "Mark T., Educator"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <h2>What Our Students Say</h2>
      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <p>&quot;{testimonial.quote}&quot;</p>
            <p><strong>{testimonial.author}</strong></p>
          </div>
        ))}
      </div>
    </section>
  )
}