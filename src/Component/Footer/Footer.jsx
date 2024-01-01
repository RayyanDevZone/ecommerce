import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-section'>
        <h4>About Us</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque euismod libero ut ligula.
        </p>
      </div>
      <div className='footer-section'>
        <h4>Contact Us</h4>
        <p>Email: info@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Main Street, City</p>
      </div>
      <div className='footer-section'>
        <h4>Follow Us</h4>
        <div className='social-icons'>
          <Link to='#'><FaFacebook/></Link>
          <Link to='#'><FaTwitter/></Link>
          <Link to='#'><FaInstagram/></Link>
          <Link to='#'><FaLinkedin/></Link>
        </div>
      </div>
      <div className='footer-section'>
        <h4>Newsletter</h4>
        <p>Subscribe to get updates on our latest products and offers.</p>
        <input type='email' placeholder='Your Email' />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Footer;
