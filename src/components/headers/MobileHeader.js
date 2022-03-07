import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../img/Ai_logo_new.png";

import "../../css/components/headers/MobileHeader.css";
const MobileHeader = () => {
  const navButtonRef = useRef();
  const navLinksRef = useRef();
  const location = useLocation();
  useEffect(() => {
    navButtonRef.current.classList.remove("open");
    navLinksRef.current.classList.remove("open");
  }, [location]);
  const handleMobileNavClick = (e) => {
    if (e.currentTarget.classList.contains("open")) {
      // if nav is open: close nav and change icon to menu
      e.currentTarget.classList.remove("open");
      navLinksRef.current.classList.remove("open");
    } else {
      // else nav is closed: open nav and change icon to x
      e.currentTarget.classList.add("open");
      navLinksRef.current.classList.add("open");
    }
  };

  return (
    <header className="mobile">
      <nav>
        <Link to="/">
          <img id="logo" src={logo} alt="Ahmad's Logo" />
        </Link>
        <div ref={navButtonRef} onClick={handleMobileNavClick} id="nav-icon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <div ref={navLinksRef} id="nav-links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>
        <Link to="/portfolio" className="link">
          Portfolio
        </Link>
      </div>
    </header>
  );
};

export default MobileHeader;
