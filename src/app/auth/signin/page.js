import SignInForm from "@/app/components/sign-in-form"
import Logo from "@/app/components/logo"
import styles from "./page.module.css"

export default function SignIn() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Logo />
        <SignInForm />
      </div>
    </main>
  )
}

