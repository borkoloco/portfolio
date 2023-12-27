import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useTheme } from "./ThemeContext";
import { BsSun, BsMoonStars } from "react-icons/bs";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [landingActive, setLandingActive] = useState(true);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(
    function setTheme() {
      const navbarElement = document.getElementById("navbar");
      if (theme === "light") {
        navbarElement.style.setProperty("--navbar-bg-color", "#f1f4f7");
      } else {
        navbarElement.style.setProperty("--navbar-bg-color", "#242424");
      }
      document.body.className = theme;
    },
    [theme]
  );

  useEffect(function detectTopOfPage() {
    const handleScroll = () => {
      if (window.scrollY < 10) {
        setLandingActive(true);
      } else {
        setLandingActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav id="navbar" className={`navbar${theme === "light" ? " light" : ""}`}>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span
            className={`navbar-toggler-icon${menuOpen ? " open" : ""}${
              theme === "light" ? " light" : ""
            }`}
          ></span>
        </button>
        <div
          className={`collapse navbar-collapse${menuOpen ? " show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <div className="link-container">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className={`nav-link${landingActive ? " active" : ""} ${
                    theme === "light" ? " light" : ""
                  }`}
                  to="landing"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onSetActive={() => setLandingActive(true)}
                  onSetInactive={() => setLandingActive(false)}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link${theme === "light" ? " light" : ""}`}
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link${theme === "light" ? " light" : ""}`}
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link${theme === "light" ? " light" : ""}`}
                  to="resume"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link${theme === "light" ? " light" : ""}`}
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </div>
            <li className="nav-item">
              <div className="theme-switch-wrapper">
                <div className="theme-switch-container">
                  <BsSun
                    className={
                      theme === "light"
                        ? "moon-icon light-mode"
                        : "moon-icon dark-mode"
                    }
                    style={{ color: theme === "dark" ? "black" : null }}
                  />
                  <label className="theme-switch">
                    <input
                      type="checkbox"
                      checked={theme === "light"}
                      onChange={toggleTheme}
                    />
                    <div className="slider round"></div>
                  </label>
                  <BsMoonStars
                    className={
                      theme === "dark"
                        ? "sun-icon dark-mode"
                        : "sun-icon light-mode"
                    }
                    style={{ color: theme === "light" ? "white" : null }}
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
