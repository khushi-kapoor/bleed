import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Women for Women. You go girls!</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Sign Up</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Mark your date</p>
        <p>Blogs</p>
        <p>Community</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>IIT BHU, Varanasi</p>
        <p>8447375251</p>
        <p>khushi210702@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 Bleed. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;