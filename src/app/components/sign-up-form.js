"use client"

import { useState } from "react"
import styles from "./sign-up-form.module.css"

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Sign up</h1>

        <div className={styles.inputGroup}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="First and last name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="emailOrPhone">Email or mobile number</label>
          <input
            type="text"
            id="emailOrPhone"
            name="emailOrPhone"
            placeholder="First and last name"
            value={formData.emailOrPhone}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="At least 6 characters"
            value={formData.password}
            onChange={handleChange}
            minLength={6}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword">Re-enter password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="At least 6 characters"
            value={formData.confirmPassword}
            onChange={handleChange}
            minLength={6}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
         <a href="/page"> Continue </a>
        </button>

        <p className={styles.signin}>
          Already have an account? <a href="/auth/signin">Sign in</a>
        </p>
      </form>
    </div>
  )
}

