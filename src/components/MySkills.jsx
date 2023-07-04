import React from "react";
import { IoShapesOutline } from "react-icons/io5";
import ReactIcon from "../assets/images/react-icon.png";
import HtmlIcon from "../assets/images/html-icon.png";
import CssIcon from "../assets/images/css-icon.png";
import JsIcon from "../assets/images/javascript-icon.webp";
import ReduxIcon from "../assets/images/redux-icon.png";
import { Element } from "react-scroll";
export const MySkills = () => {
  return (
    <Element name="skills">
      <section className="my-skills">
        <div className="container">
          <div className="row">
            <div
              className="section-head"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <IoShapesOutline className="icon-element" />
              <h2 className="title">my skills</h2>
            </div>
            <h2
              className="my-skills-title"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              My <span className="strong">Advantages</span>
            </h2>
            <div className="skills-main">
              <div className="skill-group">
                <div
                  className="skill-item-container"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <div className="skill-item">
                    <div className="skill-box">
                      <img src={HtmlIcon} alt="html-icon" />
                      <span className="skill-percent">98%</span>
                    </div>
                    <h4 className="skill-text">Html</h4>
                  </div>
                </div>
                <div
                  className="skill-item-container"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="skill-item">
                    <div className="skill-box">
                      <img src={CssIcon} alt="css-icon" />
                      <span className="skill-percent">99%</span>
                    </div>
                    <h4 className="skill-text">Css</h4>
                  </div>
                </div>
                <div
                  className="skill-item-container"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  <div className="skill-item">
                    <div className="skill-box">
                      <img src={JsIcon} alt="js-icon" />
                      <span className="skill-percent">93%</span>
                    </div>
                    <h4 className="skill-text">JavaScript</h4>
                  </div>
                </div>
                <div
                  className="skill-item-container"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <div className="skill-item">
                    <div className="skill-box">
                      <img src={ReactIcon} alt="react-icon" />
                      <span className="skill-percent">95%</span>
                    </div>
                    <h4 className="skill-text">React</h4>
                  </div>
                </div>
                <div
                  className="skill-item-container"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <div className="skill-item">
                    <div className="skill-box">
                      <img src={ReduxIcon} alt="redux-icon" />
                      <span className="skill-percent">86%</span>
                    </div>
                    <h4 className="skill-text">Redux</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};
