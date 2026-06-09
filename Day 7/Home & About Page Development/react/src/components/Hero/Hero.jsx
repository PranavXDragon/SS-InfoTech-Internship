import './Hero.css'
import { useEffect, useState } from 'react'
import img1 from '../../assets/d88240e6-bae4-4979-b325-403f07ca7274.jpeg'
import img2 from '../../assets/download (4).jpg'
import img3 from '../../assets/download (5).jpg'
import img4 from '../../assets/download (6).jpg'
import heroImg from '../../assets/hero.png'
import img5 from '../../assets/Indian Cricket Team - Rohit Sharma.jpeg'

function Hero() {
  // use up to 5 images from assets
  const desiredCount = 5
  const all = [img1, img2, img3, img4, heroImg, img5]
  const images = all.slice(0, desiredCount)
  const visibleCount = 2
  const maxIndex = Math.max(0, images.length - visibleCount)

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return undefined
    const id = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1))
    }, 2000)
    return () => clearInterval(id)
  }, [paused, maxIndex])

  function prev() {
    setIndex((i) => (i === 0 ? maxIndex : i - 1))
  }

  function next() {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1))
  }

  return (
    <section className="hero" id="home">
      <p className="eyebrow">Simple starter page</p>
      <h1>Welcome to my website</h1>
      <p className="lead">
        This is a clean, basic white page with a header, a small content area,
        and a footer for my projects. It’s a great starting point for building a
        personal website or portfolio. I can customize it with my own colors,
        fonts, and content to make it my own. It’s a simple and effective way to
        showcase my work and share information about myself with others.
      </p>

      <div
        className="slider"
        aria-label="Photo slider"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="slides"
          style={{ transform: `translateX(-${index * (100 / visibleCount)}%)` }}
        >
          {images.map((src, i) => (
            <div className="slide" key={i}>
              <img src={src} alt={`slide-${i}`} />
            </div>
          ))}
        </div>

        <button className="slider-btn prev" onClick={prev} aria-label="Previous">
          ‹
        </button>
        <button className="slider-btn next" onClick={next} aria-label="Next">
          ›
        </button>
      </div>
    </section>
  )
}

export default Hero
