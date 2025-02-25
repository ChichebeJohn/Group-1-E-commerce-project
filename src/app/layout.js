import "./globals.css"
import Header from "./components/header"
// import Footer from "./components/footer"

export const metadata = {
  title: "Xpressbuy - Online Shopping",
  description: "Shop the latest products at great prices",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}

