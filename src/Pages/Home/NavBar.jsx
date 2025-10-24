import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../../img/image.png";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => setNavActive((prev) => !prev);
  const closeMenu = () => setNavActive(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { to: "heroSection", label: "Home" },
    { to: "AboutMe", label: "About Me" },
    { to: "mySkills", label: "Skills" },
    { to: "MyPortfolio", label: "Portfolio" },
  ];

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src={logo} alt="logo" className="navbar-logo" />
      </div>

      {/* Hamburger Menu */}
      <button
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
        aria-label="Toggle navigation"
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </button>

      {/* Nav Items */}
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to={to}
                className="navbar--content"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Button */}
      <Link
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;
