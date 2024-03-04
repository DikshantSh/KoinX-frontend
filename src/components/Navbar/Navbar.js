import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/koinx_logo.png";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="Logo" />
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
          <li>
            <a href="#">Crypto Taxes</a>
          </li>
          <li>
            <a href="#">Free Tools</a>
          </li>
          <li>
            <a href="#" className="">Resource Center</a>
          </li>
          <li>
            <button className="get-started-btn">Get Started</button>
          </li>
        </ul>
        {/* <button onClick={() => setIsMobile(!isMobile)}>
          {" "}
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button> */}
      </nav>
    </div>
  );
}

export default Navbar;
