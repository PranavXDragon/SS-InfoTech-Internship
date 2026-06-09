import './Contact.css'

function Contact() {
  return (
    <section className="content" id="contact">
      <h2>Contact</h2>

      <p>
        We'd love to hear from you — send us a message and we'll get back to
        you shortly.
      </p>

      <div className="contact-info">
        <div className="contact-item">
          <strong>Email:</strong> hello@example.com
        </div>
        <div className="contact-item">
          <strong>Phone:</strong> +1 (555) 123-4567
        </div>
      </div>
    </section>
  )
}

export default Contact
