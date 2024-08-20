import React from 'react';
import './Footer.css';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className='content' id='footer'>
      <footer className="footer">
        <p>&copy; {currentYear} Hotmeal. All rights reserved.</p>
        <a href="https://aditya-rudre-portfolio.onrender.com/">Contact Me</a>
    </footer>
    </div>
  );
};

export default Footer;
