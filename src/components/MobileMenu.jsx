import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { BsGrid1X2 } from "react-icons/bs";
import { FaStream } from "react-icons/fa";
import { IoBriefcaseOutline, IoShapesOutline } from "react-icons/io5";
import { RxEnvelopeClosed } from "react-icons/rx";
import { Link as ScrollLink } from "react-scroll";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="mb-menu">
      <div className="mb-menu-container">
        <div className={`menu-head ${open ? "open" : ""}`} onClick={openMenu}>
          menu
        </div>
        <div className={`menu-main ${open ? "open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <ScrollLink
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                duration={1500}
                className="nav-link"
              >
                <AiOutlineHome className="icon" size={20} />
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1500}
                className="nav-link"
                offset={2}
              >
                <AiOutlineUser className="icon" size={20} />
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                duration={1500}
                className="nav-link"
                offset={3}
              >
                <IoBriefcaseOutline className="icon" size={20} />
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={1500}
                className="nav-link"
                offset={6}
              >
                <FaStream className="icon" size={20} />
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                duration={1500}
                className="nav-link"
                offset={8}
              >
                <IoShapesOutline className="icon" size={20} />
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={1500}
                className="nav-link"
                offset={9}
              >
                <BsGrid1X2 className="icon" size={20} />
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" smooth={true}>
                <BiMessageDetail className="icon" size={20} />
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
                className="nav-link"
                offset={60}
              >
                <RxEnvelopeClosed className="icon" size={20} />
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
