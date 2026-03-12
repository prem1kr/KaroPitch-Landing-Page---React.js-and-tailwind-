import Hero from "./components/Hero"
import About from "./components/About"
import HowItWorks from "./components/HowItWorks"
import Categories from "./components/Categories"
import Investors from "./components/Investors"
import Startups from "./components/Startups"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Categories />
      <Investors />
      <Startups />
      <Footer />
    </div>
  )
}

export default App