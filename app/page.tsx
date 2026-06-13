import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Products from './components/Products'
import About from './components/About'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Products />
        <About />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
