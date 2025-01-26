
import { Link } from 'react-router-dom';
import '../App.css'

// Footer Component
const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section useful-links">
        <h4>Useful Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/career">Career</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="footer-section services">
        <h4>Services</h4>
        <ul>
          <li>Structural Steel Detailing</li>
          <li>Miscellaneous Steel Detailing</li>
          <li>Steel take-off and estimating services</li>
          <li>Engineering and Connection Design</li>
        </ul>
      </div>
      <div className="footer-section contact-us">
        <h4>Contact Us</h4>
        <p>Email: info@draftdesign.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 19, Grant Street, Liden, NJ-07036</p>
      </div>
      <div className="footer-section about-company">
        <h4>About Company</h4>
        <p>DRAFT-DESIGN is a leading provider of innovative solutions to help businesses succeed. Our mission is to deliver value and drive growth.</p>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> |
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
    <p className="footer-bottom">&copy; 2025 DRAFTDESIGN. All rights reserved.</p>
  </footer>
);
  

  export default Footer