import styles from "./category-card.module.css"

export default function ProductCard({ product }) {
  const { title,  image } = product

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image || "/placeholder.svg"} alt={title} />
        
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
       

       
      </div>
    </div>
  )
}

