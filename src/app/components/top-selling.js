import styles from "./top-selling.module.css"
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
      image: "/placeholder11.png?height=200&width=200",
    },
    {
        id: 2,
        title:"Macbook PRO laptop A1...",
        price: 200050,
        originalPrice:600000,
        rating: 4.5,
        sales:"70+ Sold",
        discount: 50,
        image: "/placeholder12.png?height=200&width=200",
    },

    {
        id: 3,
        title:"Macbook PRO laptop A1...",
        price: 200050,
        originalPrice:600000,
        rating: 4.5,
        sales:"32+ Sold",
        discount: 50,
        image: "/placeholder13.png?height=200&width=200",
    },

    {
        id: 4,
        title:"Macbook PRO laptop A1...",
        price: 200050,
        originalPrice:600000,
        rating: 4.5,
        sales:"120+ Sold",
        discount: 50,
        image: "/placeholder14.png?height=200&width=200",
    },

    {
        id: 5,
        title:"Macbook PRO laptop A1...",
        price: 200050,
        originalPrice:600000,
        rating: 4.5,
        sales:"70+ Sold",
        discount: 50,
        image: "/placeholder15.png?height=200&width=200",
    },
  ]

  return (
    <section className={styles.deals}>
      <div className={styles.header}>
        <div className={styles.title}>
          
        Top Selling Items
        </div>
        
      </div>

      <div className={styles.products}>
        {deals.map((deal) => (
          <ProductCard key={deal.id} product={deal} />
        ))}
      </div>
    </section>
  )
}

