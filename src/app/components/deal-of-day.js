import styles from "./deal-of-day.module.css"
import ProductCard from "./product-card"

export default function DealOfDay() {
  const deals = [
    {
      id: 1,
      title: "Macbook PRO laptop A1",
      price: 200050,
      originalPrice: 600000,
      rating: 4.5,
      sales: "600+ Sold",
      discount: 50,
      image: "/placeholder1.png?height=200&width=200",
    },
    {
        id: 2,
        title:"Macbook PRO laptop A1...",
        price: 200050,
        originalPrice:600000,
        rating: 4.5,
        sales:"70+ Sold",
        discount: 50,
        image: "/placeholder2.png?height=200&width=200",
    },

    {
        id: 3,
        title:"Macbook PRO laptop A1...",
        price: 200050,
        originalPrice:600000,
        rating: 4.5,
        sales:"32+ Sold",
        discount: 50,
        image: "/placeholder3.png?height=200&width=200",
    },

    {
        id: 4,
        title:"Macbook PRO laptop A1...",
        price: 200050,
        originalPrice:600000,
        rating: 4.5,
        sales:"120+ Sold",
        discount: 50,
        image: "/placeholder4.png?height=200&width=200",
    },

    {
        id: 5,
        title:"Macbook PRO laptop A1...",
        price: 200050,
        originalPrice:600000,
        rating: 4.5,
        sales:"70+ Sold",
        discount: 50,
        image: "/placeholder5.png?height=200&width=200",
    },
  ]

  return (
    <section className={styles.deals}>
      <div className={styles.header}>
        <div className={styles.title}>
          <span className={styles.icon}>🔥</span>
          Deal of the Day
        </div>
        <div className={styles.timer}>Time left : 3hr : 15min : 2sec</div>
        <a href="#" className={styles.more}>
          See more &gt;
        </a>
      </div>

      <div className={styles.products}>
        {deals.map((deal) => (
          <ProductCard key={deal.id} product={deal} />
        ))}
      </div>
    </section>
  )
}

