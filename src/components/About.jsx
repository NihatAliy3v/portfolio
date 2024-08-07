// Libraries
import { Element } from "react-scroll";
// Icons
import { AiOutlineUser } from "react-icons/ai";
import { useTranslation } from "react-i18next";
export const About = () => {
  const { t } = useTranslation();
  return (
    <Element name="about">
      <section className="about">
        <div className="container">
          <div className="row">
            <div
              className="section-head"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              <AiOutlineUser className="icon-element" />
              <h2 className="title">about</h2>
            </div>
            <div className="about-main">
              <h2
                className="about-title"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                {t("title_me")}
                <span className="strong"> Frontend Developer</span>
              </h2>
              <p
                className="about-paragraph"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                {t("about_me")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};
