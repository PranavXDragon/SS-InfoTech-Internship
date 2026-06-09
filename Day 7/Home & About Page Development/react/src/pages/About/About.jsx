import './About.css'

function About() {
  return (
    <section className="content" id="about">
      <h2>About</h2>

      <div className="about-grid">
        <div className="about-section">
          <h3>About Us</h3>
          <p>
            We build clean, accessible web experiences. Our focus is on
            simplicity, performance, and clarity so visitors can quickly learn
            about our work.
          </p>
        </div>

        <div className="about-section">
          <h3>Who We Are</h3>
          <p>
            A small team of designers and developers passionate about crafting
            thoughtful interfaces and reliable frontend architectures.
          </p>
        </div>

        <div className="about-section">
          <h3>Our Mission</h3>
          <p>
            To help individuals and small teams present their projects with
            confidence by providing simple, maintainable starter templates and
            practical frontend solutions.
          </p>
        </div>

        <div className="about-section">
          <h3>What We Do</h3>
          <ul>
            <li>Design and build responsive websites</li>
            <li>Provide starter templates and components</li>
            <li>Optimize performance and accessibility</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
