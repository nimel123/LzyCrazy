import React from "react";
import '../Style/footer.css';

function Footer() {
  return (
    <div className="nav">
      <ul className="navbar">
        <li>
        <a href="#about">About</a>
        </li>
        <li>
        <a href="#ads">Advertising</a>
        </li>
        <li>
        <a href="#business">Business</a>
        </li>
        <li>
        <a href="#investor">Investor</a>
        </li>
        <li>
        <a href="#hiring">We are Hiring</a>
        </li>
        <div className="right-items">
        <li>
        <a href="#privacy">Privacy</a>
        </li>
        <li>
        <a href="#term">Term</a>
        </li>
        <li>
        <a href="#help">Help</a>
        </li>
        </div>
      </ul>
    </div>
  );
}

export default Footer;
