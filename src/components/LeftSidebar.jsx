import React from "react";
// images
import Logo from "../assets/images/logo.png";
import Me from "../assets/images/me.jpg";
import { Link } from "react-router-dom";
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
          <p className="sidebar-job-text">Framer Designer & Developer</p>
        </div>
      </div>
      <div className="sidebar-main">
        <img className="sidebar-main-img" src={Me} alt="me" />
        <h2 className="gmail">hello@drake.design</h2>
        <h2 className="country">Based in Los Angeles, CA</h2>
        <p className="copyright">© 2022 Drake. All Rights Reserved</p>
        <div className="social">
          <Link className="social-link">
            <AiOutlineInstagram />
          </Link>
          <Link className="social-link">
            <AiOutlineTwitter />
          </Link>
          <Link className="social-link">
            <AiFillLinkedin />
          </Link>
          <Link className="social-link">
            <AiFillGithub />
          </Link>
        </div>
        <Link className="sidebar-btn">
          <RxEnvelopeClosed className="sidebar-btn-icon" /> hire me!
        </Link>
      </div>
    </div>
  );
};
