import Hero from "../components/hero"
import DealOfDay from "../components/deal-of-day"
import Header from "../components/header"
import Categories from "../components/categories"
 import TopSelling from "../components/top-selling"
import Interiors from "../components/interiors"

export default function Home() {
  return (
    <main>
        <Header />
       <Hero />
      <DealOfDay />
        <Categories /> 
        <TopSelling />
      <Interiors />     
  
    </main>
  )
}

