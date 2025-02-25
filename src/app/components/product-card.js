import styles from "./product-card.module.css"

export default function ProductCard({ product }) {
  const { title, price, originalPrice, rating, sales, discount, image } = product

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image || "/placeholder.svg"} alt={title} />
        {discount && <span className={styles.discount}>-{discount}%</span>}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.pricing}>
          <span className={styles.price}>₦{price.toLocaleString()}</span>
          {originalPrice && <span className={styles.originalPrice}>₦{originalPrice.toLocaleString()}</span>}
        </div>

        <div className={styles.meta}>
          <div className={styles.rating}>⭐ {rating}</div>
          <div className={styles.sales}>{sales}</div>
        </div>
      </div>
    </div>
  )
}

