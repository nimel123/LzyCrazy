import React from "react";
import '../Style/footer.css';

function Footer() {
  return (
    <div className="nav">
      <ul className="navbar">
        <a>
        <li>About</li>
        </a>
        <a>
        <li>Advertising</li>
        </a>
        <a>
        <li>Business</li>
        </a>
        <li>Investor</li>
        <a>
        <li>We are Hiring</li>
        </a>
        <div className="right-items">
            <a>
          <li>Privacy</li>
          </a>
          <a>
          <li>Terms</li>
          </a>
          <a>
          <li>Help</li>
          </a>
        </div>
      </ul>
    </div>
  );
}

export default Footer;
