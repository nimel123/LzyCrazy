import React from "react";
import logo from '../images/lzy.png';
import '../Style/header.css';
import video from '../video/lzycrazy.mp4';

function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="box">
          <div className="logo">
            <img src={logo} className="logo-img" alt="Logo" />
          </div>
        </div>

        <main className="main-content">
          <div className="video-section">
            <video controls className="play">
              <source src={video} type="video/mp4" />
            </video>
          </div>

          <div className="login-section">
            <form>
              <input
                type="email"
                placeholder="Email address or phone number"
                className="form-input"
              />
              <input
                type="password"
                placeholder="Password"
                className="form-input"
              />
              <button className="login-btn" type="submit">
                Log In
              </button>
              <a href="/forgot-password" className="forgot-password">
                Forgotten password?
              </a>
              <button className="create-btn" type="button">
                Create New Account
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Header;
