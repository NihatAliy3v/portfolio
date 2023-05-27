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
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink className="nav-link" smooth={true}>
              <AiOutlineUser className="icon" />
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink className="nav-link" smooth={true}>
              <IoBriefcaseOutline className="icon" />
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink className="nav-link" smooth={true}>
              <FaStream className="icon" />
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink className="nav-link" smooth={true}>
              <IoShapesOutline className="icon" />
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink className="nav-link" smooth={true}>
              <BsGrid1X2 className="icon" />
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink className="nav-link" smooth={true}>
              <BiMessageDetail className="icon" />
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink className="nav-link" smooth={true}>
              <RxEnvelopeClosed className="icon" />
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
