import Hero from "./components/hero"
import DealOfDay from "./components/deal-of-day"
import SignIn from "./auth/signin/page"
// import Categories from "@/components/categories"
// import TopSelling from "@/components/top-selling"
// import Interiors from "@/components/interiors"

export default function Home() {
  return (
    <main>
      {/* <Hero />
      <DealOfDay />
       <Categories /> 
       <TopSelling />
      <Interiors />  */}
      <SignIn />
    </main>
  )
}

