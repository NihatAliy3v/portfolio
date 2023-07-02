// React
import { Link } from "react-router-dom";
// Icons
import { AiOutlineHome } from "react-icons/ai";
import { BsArrowDown } from "react-icons/bs";
// Images
import RoundText from "../assets/images/round-text.png";

export const Hero = () => {

  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="section-head">
            <AiOutlineHome className="icon-element" />
            <h2 className="title">introduce</h2>
          </div>
          <div className="hero-main">
            <h1 className="hero-title">
              Say Hi from <span className="name">Nihat</span>, Frontend
              Developer
            </h1>
            <p className="hero-summary">
              I design and code beautifully simple things and i love what i do.
              Just simple like that!
            </p>
          </div>
          <div className="go-to-ptoject-container">
            <Link className="go-to-ptoject-btn">
              <img src={RoundText} alt="rounded-text" />
              <BsArrowDown className="icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
