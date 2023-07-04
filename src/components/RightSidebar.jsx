// link
import { Link as ScrollLink } from "react-scroll";
// icons
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { IoBriefcaseOutline, IoShapesOutline } from "react-icons/io5";
import { FaStream } from "react-icons/fa";
import { BsGrid1X2 } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { RxEnvelopeClosed } from "react-icons/rx";
// Active menu

export const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <nav className="navbar">
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
              <AiOutlineHome className="icon" />
              <span className="link-title">Home</span>
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
              offset={1}
            >
              <AiOutlineUser className="icon" />
              <span className="link-title">About</span>
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
              offset={2}
            >
              <IoBriefcaseOutline className="icon" />
              <span className="link-title">Resume</span>
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
              offset={5}
            >
              <FaStream className="icon" />
              <span className="link-title">Services</span>
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
              offset={5}
            >
              <IoShapesOutline className="icon" />
              <span className="link-title">Skills</span>
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
              offset={5}
            >
              <BsGrid1X2 className="icon" />
              <span className="link-title">Portfolio</span>
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink className="nav-link" smooth={true}>
              <BiMessageDetail className="icon" />
              <span className="link-title">Testimonial</span>
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
              offset={50}
            >
              <RxEnvelopeClosed className="icon" />
              <span className="link-title">Contact</span>
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
