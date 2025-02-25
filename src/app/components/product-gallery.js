"use client"

import { useState } from "react"
import styles from "./product-gallery.module.css"

export default function ProductGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className={styles.gallery}>
      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <button
            key={index}
            className={`${styles.thumbnail} ${selectedImage === index ? styles.active : ""}`}
            onClick={() => setSelectedImage(index)}
          >
            <img src={image || "/placeholder.svg"} alt={`Product view ${index + 1}`} />
          </button>
        ))}
      </div>

      <div className={styles.mainImage}>
        <img src={images[selectedImage] || "/placeholder.svg"} alt="Product main view" />
      </div>
    </div>
  )
}

