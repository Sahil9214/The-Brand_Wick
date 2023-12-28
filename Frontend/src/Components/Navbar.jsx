import React, { useState } from "react";
import "../Styles/Navbar.css";
import { Image, Box, Text } from "@chakra-ui/react";
import logo from "../Images/logo.png";
import phone from "../Images/phone.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Image src={logo} height={"30px"} />
      </div>

      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li>
          <a><Link to='/'>Home</Link></a>
        </li>
        <li>
          <a>Portfolio</a>
        </li>
        <li>
          <a>Services</a>
        </li>
        <li>
          <a>Team</a>
        </li>
        <li>
          <a>Blogs</a>
        </li>
        <li>
          <a>
            <Link to="/login">Login</Link>
          </a>
        </li>
        <li>
          <a>
            <Link to="/signup">Signup</Link>
          </a>
        </li>
      </ul>
      <div style={{ height: "20px", backgroundColor: "grey" }}></div>

      <div className="burger-menu" onClick={toggleMobileMenu}>
        <div className={isMobile ? "line line1" : "line"}></div>
        <div className={isMobile ? "line line2" : "line"}></div>
        <div className={isMobile ? "line line3" : "line"}></div>
      </div>
    </nav>
  );
};

export default Navbar;
