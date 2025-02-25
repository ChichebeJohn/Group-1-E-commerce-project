"use client"

import { useState } from "react"
import styles from "./product-tabs.module.css"

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("about")

  return (
    <div className={styles.tabs}>
      <div className={styles.tabList}>
        <button
          className={`${styles.tab} ${activeTab === "about" ? styles.active : ""}`}
          onClick={() => setActiveTab("about")}
        >
          About this item
        </button>
        <button
          className={`${styles.tab} ${activeTab === "details" ? styles.active : ""}`}
          onClick={() => setActiveTab("details")}
        >
          Product details
        </button>
        <button
          className={`${styles.tab} ${activeTab === "reviews" ? styles.active : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          Customers review (9)
        </button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === "about" && (
          <div>
            <p>
              Elevate your style with our exquisite fancy bag. Crafted from the finest materials and designed with
              precision, this stunning piece exudes luxury and sophistication. Perfect for special occasions or everyday
              use, this fancy bag is sure to make a statement.
            </p>
            <p>
              Large capacity Practical tote bag : 9.2 liter capacity top-handle handbags are suitable for fits up to 16
              inches Laptops, Magazines, Books, Cosmetics, folding umbrella, beverages, Thermos flask, Scarves, Thin
              clothes, Toiletries and more. Internal zippered pockets can be used to hold important small items. Such as
              Cards, Keys, Jewelry, Cash, Cell phones, etc.
            </p>
          </div>
        )}

        {activeTab === "details" && (
          <div className={styles.details}>
            <div className={styles.detail}>
              <span>Product Dimensions</span>
              <span>{product.details.dimensions}</span>
            </div>
            <div className={styles.detail}>
              <span>Department</span>
              <span>{product.details.department}</span>
            </div>
            <div className={styles.detail}>
              <span>Manufacturer</span>
              <span>{product.details.manufacturer}</span>
            </div>
            <div className={styles.detail}>
              <span>Date First Available</span>
              <span>{product.details.dateFirstAvailable}</span>
            </div>
          </div>
        )}

        {activeTab === "reviews" && <div className={styles.reviews}>{/* Add reviews content */}</div>}
      </div>
    </div>
  )
}

