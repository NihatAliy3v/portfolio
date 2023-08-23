// images
import Logo from "../assets/images/main-logo.png";
import Me from "../assets/images/real-me.jpg";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

// icons
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { RxEnvelopeClosed } from "react-icons/rx";

export const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <span className="setting">
        <AiOutlineSetting className="setting-icon" />
      </span>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img className="sidebar-logo-img" src={Logo} alt="logo" />
        </div>
        <div className="sidebar-job">
          <p className="sidebar-job-text">Frontend Developer</p>
        </div>
      </div>
      <div className="sidebar-main">
        <img className="sidebar-main-img" src={Me} alt="me" />
        <h2 className="gmail">nihataliy3v@gmail.com</h2>
        <h2 className="country">Baku, Azerbaijan</h2>
        <div className="social">
          <Link
            to="https://www.instagram.com/aliyev_n04/"
            className="social-link"
            target="_blank"
          >
            <AiOutlineInstagram />
          </Link>
          <Link
            to="https://twitter.com/Nihat_Aliyev_"
            className="social-link"
            target="_blank"
          >
            <AiOutlineTwitter />
          </Link>
          <Link
            to="https://linkedin.com/in/nihat-aliyev"
            className="social-link"
            target="_blank"
          >
            <AiFillLinkedin />
          </Link>
          <Link
            to="https://github.com/NihatAliy3v"
            className="social-link"
            target="_blank"
          >
            <AiFillGithub />
          </Link>
        </div>
        <ScrollLink
          activeClass="active"
          to="contact"
          smooth={true}
          duration={1000}
          offset={60}
          className="sidebar-btn"
        >
          <RxEnvelopeClosed className="sidebar-btn-icon" /> hire me!
        </ScrollLink>
      </div>
    </div>
  );
};
