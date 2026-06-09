import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'
import { useEffect, useState } from 'react'

function App() {
  const [route, setRoute] = useState(() => {
    const h = location.hash.replace('#/', '')
    return h === '' ? 'home' : h
  })

  useEffect(() => {
    function onHash() {
      const h = location.hash.replace('#/', '')
      setRoute(h === '' ? 'home' : h)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <div className="page">
      <Header />

      <main className="main">
        {route === 'about' ? (
          <About />
        ) : route === 'services' ? (
          <Services />
        ) : route === 'contact' ? (
          <Contact />
        ) : (
          <>
            <Hero />
            {/* other home content can go here */}
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App
