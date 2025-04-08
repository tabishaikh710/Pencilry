import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'; // Import icons
import '../style/footer.css'; // Custom CSS for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt="Logo" className="footer-logo-img" />
        </div>
        
        <div className="footer-links">
          <div className="footer-section">
            <h4>Vehicle</h4>
            <ul>
              <li><Link to="/vehicle">Vehicle</Link></li>
              <li><Link to="/autonomy">Autonomy</Link></li>
              <li><Link to="/safety">Safety</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Learn More</h4>
            <ul>
              <li><Link to="/press">Press Room</Link></li>
              <li><Link to="/journal">Journal</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-use">Terms of Use</Link>
            <Link to="/newsletter">Newsletter</Link>
          </div>
          <div className="footer-social">
            <a href="https://www.linkedin.com" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.twitter.com" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.youtube.com" aria-label="YouTube">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
