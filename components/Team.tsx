import Image from 'next/image'
import styles from '../styles/Team.module.css'

const team = [
  {
    name: "Cain Gentle-King",
    role: "CEO / Educator",
    image: "/images/cainTeam.jpg"
  },
  {
    name: "Shea Gentle-King",
    role: "Game Developer / Educator",
    image: "/images/cainTeam.jpg"
  },
  {
    name: "Seraiyah Gentle-King",
    role: "Game Developer / Game Artist",
    image: "/images/raiTeam.jpg"
  },
  {
    name: "Lance Gentle-King",
    role: "COO / Educator",
    image: "/images/lanceTeam.jpg"
  }
]

export default function Team() {
  return (
    <section id="team" className={styles.teamSection}>
      <h2>Meet The Team</h2>
      <p>A family-run business whose passion started with playing games at home on their Sega Megadrive to then deciding to create their own games.</p>
      <div className={styles.teamGrid}>
        {team.map((member, index) => (
          <div key={index} className={styles.teamCard}>
            <Image src={member.image} alt={member.name} width={200} height={200} />
            <h3>{member.name}</h3>
            <p>Role: {member.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}