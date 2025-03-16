

// Contact Component

const ContactPage = () => (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <div className="contact-container">
        <div className="contact-block">
          <h2>Email Us</h2>
          <p>Email: <a href="mailto:info@business.com">info@draftsteel.com</a></p>
        </div>
        <div className="contact-block">
          <h2>Call Us</h2>
          <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
        </div>
        <div className="contact-block">
          <h2>Office Address</h2>
          <p>19, Grant Street, Liden, US <br />NJ-07036</p>
        </div>
        <div className="contact-block">
          <h2>Connect With Us</h2>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> |
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );

export default ContactPage
  