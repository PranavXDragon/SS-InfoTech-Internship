import './Services.css'

function Services() {
  return (
    <section className="content" id="services">
      <h2>Services</h2>

      <div className="services-grid">
        <div className="service-item">
          <h3>Web Design</h3>
          <p>Responsive, accessible designs tailored to your brand.</p>
        </div>

        <div className="service-item">
          <h3>Frontend Development</h3>
          <p>Modern React-based UIs with performance and maintainability in mind.</p>
        </div>

        <div className="service-item">
          <h3>Optimization</h3>
          <p>Performance, accessibility, and SEO improvements for existing sites.</p>
        </div>

        <div className="service-item">
          <h3>Consulting</h3>
          <p>Architecture and implementation guidance for small teams and projects.</p>
        </div>
      </div>
    </section>
  )
}

export default Services
