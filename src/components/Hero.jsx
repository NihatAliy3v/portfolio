// React
import { Element } from "react-scroll";
import { Link as ScrollLink } from "react-scroll";
// Icons
import { AiOutlineHome } from "react-icons/ai";
import { BsArrowDown } from "react-icons/bs";
// Images
import RoundText from "../assets/images/round-text.png";
import { useTranslation } from "react-i18next";


export const Hero = () => {
 

  const { t } = useTranslation();
  return (
    <Element name="hero">
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="section-head">
              <AiOutlineHome className="icon-element" />
              <h2 className="title">introduce</h2>
            </div>
            <div className="hero-main">
              <h1 className="hero-title">
                <span className="name">Nihat Aliyev</span>, Frontend Developer
              </h1>
              <p className="hero-summary">{t("hero_me")}</p>
            </div>
            <div className="go-to-ptoject-container">
              <ScrollLink
                to="test"
                spy={true}
                smooth={true}
                duration={2000}
                className="go-to-ptoject-btn"
              >
                <img src={RoundText} alt="rounded-text" />
                <BsArrowDown className="icon" />
              </ScrollLink>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};
