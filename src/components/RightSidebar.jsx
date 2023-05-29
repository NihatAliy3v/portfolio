// link
import { Link as ScrollLink } from "react-scroll";
// icons
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { IoBriefcaseOutline, IoShapesOutline } from "react-icons/io5";
import { FaStream } from "react-icons/fa";
import { BsGrid1X2 } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { RxEnvelopeClosed } from "react-icons/rx";

export const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <ScrollLink className="nav-link" smooth={true}>
              <AiOutlineHome className="icon" />
              <span className="link-title">Home</span>
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink className="nav-link" smooth={true}>
              <AiOutlineUser className="icon" />
              <span className="link-title">About</span>
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink className="nav-link" smooth={true}>
              <IoBriefcaseOutline className="icon" />
              <span className="link-title">Resume</span>
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink className="nav-link" smooth={true}>
              <FaStream className="icon" />
              <span className="link-title">Services</span>
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink className="nav-link" smooth={true}>
              <IoShapesOutline className="icon" />
              <span className="link-title">Skills</span>
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink className="nav-link" smooth={true}>
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
            <ScrollLink className="nav-link" smooth={true}>
              <RxEnvelopeClosed className="icon" />
              <span className="link-title">Contact</span>
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
