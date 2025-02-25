"use client"

import { useState } from "react"
import styles from "./sign-in-form.module.css"

export default function SignInForm() {
  const [emailOrPhone, setEmailOrPhone] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", emailOrPhone, password)
  }

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Sign in</h1>

        <div className={styles.inputGroup}>
          <label htmlFor="emailOrPhone">Mobile phone number or Email</label>
          <input
            type="text"
            id="emailOrPhone"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            required
          />

<label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
            <a href="/home">
          Continue
          </a>
        </button>

        <p className={styles.signup}>
          Are you a new customer? <a href="/auth/signup">Sign up</a>
        </p>
      </form>
    </div>
  )
}

