import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import Logo from "../../assets/logo/logo.png"

const Links = () => {
  return (
    <>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/#popular">Popular</a>
        </li>
        <li>
          <a href="/#blog">Blog</a>
        </li>
        <li>
          <a href="/#genres">Genres</a>
        </li>
      </ul>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar">
      <div onClick={() => window.location = "/"} className="nav-item nav-item-logo">
        <h1 className="logo">
          <a href="/"><img className="logo-png" src={Logo} alt="logo-img" /></a>
        </h1>
        <h1 className="title">Anime Blog</h1>
      </div>
      <div className="nav-item nav-item-links">
        <Links />
      </div>
      <div className="nav-item nav-toggle">
        <div className="bar" onClick={() => setToggleMenu(!toggleMenu)}>
          {!toggleMenu ? (
            <FaBars size={25} cursor="pointer" />
          ) : (
            <FaTimes size={25} cursor="pointer" />
          )}
        </div>
      </div>
      {toggleMenu && (
        <div className="menu">
          <Links />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
