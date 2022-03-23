import { Link } from "react-router-dom";
import logo from "../../img/ai_logo.png";
import "../../css/components/headers/DesktopHeader.css";
import ThemeIcon from "../icons/ThemeIcon";

const DesktopHeader = () => {
  return (
    <header className="desktop">
      <nav>
        <Link to="/">
          <img id="logo" src={logo} alt="Ahmad's Logo" />
        </Link>
        <ul>
          <Link to="/" className="button link">
            Home
          </Link>
          <Link to="/about" className="button link">
            About
          </Link>
          <Link to="/contact" className="button link">
            Contact
          </Link>
          <Link to="/resume" className="button link">
            Resume
          </Link>
          <Link to="/projects" className="button featured">
            Projects
          </Link>
          <ThemeIcon display="desktop" />
        </ul>
      </nav>
    </header>
  );
};
export default DesktopHeader;
