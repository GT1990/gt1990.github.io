import { Link } from "react-router-dom";
import logo from "../../img/Ai_logo_new.png";
import "../../css/components/headers/DesktopHeader.css";

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
          <Link to="/" className="button link">
            About
          </Link>
          <Link to="/" className="button link">
            Contact
          </Link>
          <Link to="/" className="button">
            Portfolio
          </Link>
        </ul>
      </nav>
    </header>
  );
};
export default DesktopHeader;
