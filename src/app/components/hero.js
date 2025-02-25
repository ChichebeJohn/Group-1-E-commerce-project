import styles from "./hero.module.css"

export default function Hero() {
  return (
    <section className={styles.hero} >
      <img src="/hero_banner2.png?height=70&width=50" alt="Hero Banner" className={styles.banner1} />
      <img src="/hero_banner1.png?height=400&width=1200" alt="Hero Banner" className={styles.banner2} />
    </section>
  )
}

