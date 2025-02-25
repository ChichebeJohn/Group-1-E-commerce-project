import SignUpForm from "@/app/components/sign-up-form"
import Logo from "@/app/components/logo"
import styles from "./page.module.css"

export default function SignUp() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Logo />
        <SignUpForm />
      </div>
    </main>
  )
}

