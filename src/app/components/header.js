import Link from "next/link"
import styles from "./header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <span className={styles.x}>X</span>pressbuy
        </Link>
      </div>

      <div className={styles.search}>
        <input type="text" placeholder="Search items" />
        <button type="submit">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M19 19L13 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/cart" className={styles.cart}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Cart
        </Link>
      </nav>
    </header>
  )
}

