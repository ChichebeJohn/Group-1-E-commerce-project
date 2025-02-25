import ProductGallery from "@/app/components/product-gallery"
import ProductInfo from "@/app/components/product-info"
import ProductTabs from "@/app/components/product-tabs"
// import RelatedItems from "@/components/related-items"
import styles from "./page.module.css"

export default function ProductPage() {
  const product = {
    id: 1,
    title: "Kateamoda Women Bags Ladies Bags",
    price: 30050,
    originalPrice: 60100,
    rating: 4.5,
    reviews: 9,
    sales: "70+ Sold",
    description: "Our designer already made a lot of beautiful collection of interiors that inspire you.",
    color: "Red",
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
      "/placeholder.svg?height=100&width=100",
    ],
    details: {
      dimensions: "13.78 x 4.13 x 9.84 inches; 1.94 Pounds",
      department: "Women",
      manufacturer: "Katony",
      dateFirstAvailable: "October 22, 2024",
    },
  }

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <ProductGallery images={product.images} />
        <ProductInfo product={product} />
      </div>
      <ProductTabs product={product} />
      {/* <RelatedItems /> */}
    </main>
  )
}

