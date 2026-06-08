import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="page">
      <Header />

      <main className="main">
        <Hero />
        <About />
      </main>

      <Footer />
    </div>
  )
}

export default App
