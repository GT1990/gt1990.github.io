import { Link } from "react-router-dom";
import "../css/components/Footer.css";

import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiTreehouse } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <div>
        <Link className="button" to="/">
          <span>Home</span>
        </Link>
        |
        <Link className="button" to="/about">
          <span>About</span>
        </Link>
        |
        <Link className="button" to="/contact">
          <span>Contact</span>
        </Link>
        |
        <Link className="button" to="/resume">
          <span>Resume</span>
        </Link>
        |
        <Link className="button" to="/projects">
          <span>Projects</span>
        </Link>
      </div>
      <div id="social-wrapper">
        <a href="https://twitter.com/AiGT1990" target="_blank">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/aigt1990/" target="_blank">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/GT1990" target="_blank">
          <FaGithub />
        </a>
        <a href="https://teamtreehouse.com/ahmadibrahim" target="_blank">
          <SiTreehouse />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
