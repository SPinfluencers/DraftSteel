import { Link } from 'react-router-dom';
import '../App.css';
// import logo from '../imges/cadsteelfab.png'

// Header Component
const Header = () => (
  <header className="header">
    <nav className="navbar">
      <div className="logo">
        <img src="/path-to-your-logo.png" alt="CaddSteel Engineering Services" className="logo-img" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/engineering-services">Engineering Services</Link></li>
        <li><Link to="/structural-steel">Structural Steel</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/career">Career</Link></li>
        <li><Link to="/contact">Contact</Link></li> 
      </ul>
    </nav>
  </header>
);

export default Header