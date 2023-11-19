import { Link } from "react-router-dom";

import { GoProjectSymlink } from "react-icons/go";
import { BiMailSend } from "react-icons/bi";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import "./index.css";

const Header = () => (
  <nav className="header-container">
    <div className="mobile-view">
      <div className="logo-and-title-container">
        <h1 className="logo-name">SK</h1>
      </div>
      <div className="icon-container">
        <Link to="/">
          <ImProfile className="icons" />
          <p className="icon-name">Home</p>
        </Link>
        <Link to="/projects">
          <GoProjectSymlink className="icons" />
          <p className="icon-name">Projects</p>
        </Link>
        <Link to="/contact">
          <BiMailSend className="icons" />
          <p className="icon-name">Contact</p>
        </Link>
        <a
          href="https://drive.google.com/file/d/14SD1PyVq6z6N4DQ_g5ZIA0LQQeJ7M4xT/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="icons"
        >
          <FaCloudDownloadAlt className="icons" />
          <p className="icon-name">Download CV</p>
        </a>
      </div>
    </div>
    <div className="desktop-view">
      <div className="logo-and-title-container">
        <h1 className="logo-name">Sai Kumar</h1>
      </div>
      <ul className="nav-items-list">
        <li className="link-item">
          <Link className="route-link" to="/">
            About
          </Link>
        </li>
        <li className="link-item">
          <Link className="route-link" to="/projects">
            Projects
          </Link>
        </li>
        <li className="link-item">
          <Link className="route-link" to="/contact">
            Contact
          </Link>
        </li>
        <li className="link-item">
          <a
            href="https://drive.google.com/file/d/14SD1PyVq6z6N4DQ_g5ZIA0LQQeJ7M4xT/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
          >
            Download CV
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
