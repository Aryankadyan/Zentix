import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faqs from './sections/Faq.jsx'

const App = () => {
  return (
   <main className="overflow-hidden">
    <Header/>
    <Hero/>
    <Features/>
    <Pricing/>
    <Faqs/>
   </main>
  )
}

export default App

