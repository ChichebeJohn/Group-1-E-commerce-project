"use client"

import { useState } from "react"
import styles from "./product-info.module.css"

export default function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1)

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change))
  }

  return (
    <div className={styles.info}>
      <h1 className={styles.title}>{product.title}</h1>

      <div className={styles.pricing}>
        <div className={styles.price}>
          <span className={styles.current}>₦{product.price.toLocaleString()}</span>
          <span className={styles.original}>₦{product.originalPrice.toLocaleString()}</span>
          <span className={styles.discount}>50% off</span>
        </div>
      </div>

      <div className={styles.meta}>
        <div className={styles.rating}>
          <span className={styles.stars}>{"★".repeat(Math.floor(product.rating))}</span>
          <span>{product.rating}</span>
          <span className={styles.reviews}>{product.reviews} Reviews</span>
          <span className={styles.sales}>{product.sales}</span>
        </div>
      </div>

      <p className={styles.description}>{product.description}</p>

      <div className={styles.color}>
        <span>Colour : {product.color}</span>
        <div className={styles.variants}>
          <button className={styles.variant}>
            <img src="/placeholder.svg?height=40&width=40" alt="Red variant" />
          </button>
          <button className={styles.variant}>
            <img src="/placeholder.svg?height=40&width=40" alt="Red variant" />
          </button>
          <button className={styles.variant}>
            <img src="/placeholder.svg?height=40&width=40" alt="Red variant" />
          </button>
        </div>
      </div>

      <div className={styles.actions}>
        <div className={styles.quantity}>
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>

        <button className={styles.addToCart}>Add to Cart</button>
        <button className={styles.buyNow}>Buy Now</button>
      </div>
    </div>
  )
}

