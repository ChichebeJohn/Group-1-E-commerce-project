// import styles from "./deal-of-day.module.css"
import styles from "./category.module.css"
import CategoryCard from "./category-card"

export default function Categories() {
  const deals = [
    {
      id: 1,
      title: "Shoes",
     
      image: "/placeholder6.png?height=200&width=200",
    },
    {
        id: 2,
        title:"Chairs",
      
        image: "/placeholder7.png?height=200&width=200",
    },

    {
        id: 3,
        title:"Luxury",
      
        image: "/placeholder8.png?height=200&width=200",
    },

    {
        id: 4,
        title:"Clothing",
    
        image: "/placeholder9.png?height=200&width=200",
    },

    {
        id: 5,
        title:"Smart Phones",
       
        image: "/placeholder10.png?height=200&width=200",
    },
  ]

  return (
    <section className={styles.deals}>
      <div className={styles.header}>
        <div className={styles.title}>
          {/* <span className={styles.icon}>🔥</span> */}
          Explore Popular Categories
        </div>
      
      </div>

      <div className={styles.products}>
        {deals.map((deal) => (
          <CategoryCard key={deal.id} product={deal} />
        ))}
      </div>
    </section>
  )
}

