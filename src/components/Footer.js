import React from "react";
import '../Style/footer.css';

function Footer() {
  return (
    <div className="nav">
      <ul className="navbar">
        <a href="#">
        <li>About</li>
        </a>
        <a href="#">
        <li>Advertising</li>
        </a>
        <a href="#">
        <li>Business</li>
        </a>
        <li>Investor</li>
        <a href="#">
        <li>We are Hiring</li>
        </a>
        <div className="right-items">
            <a href="#">
          <li>Privacy</li>
          </a>
          <a href="#">
          <li>Terms</li>
          </a>
          <a href="#">
          <li>Help</li>
          </a>
        </div>
      </ul>
    </div>
  );
}

export default Footer;
