import React from "react";
import { IoBriefcaseOutline } from "react-icons/io5";
import { Element } from "react-scroll";
export const Resume = () => {
  return (
    <Element name="resume">
      <section className="resume">
        <div className="container">
          <div className="row">
            <div
              className="section-head"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <IoBriefcaseOutline className="icon-element" />
              <h2 className="title">resume</h2>
            </div>
            <h2
              className="resume-title"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Education & <span className="strong">Experience</span>
            </h2>
            <div className="resume-main">
              <div className="resume-list">
                <div
                  className="resume-item"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <span className="item-date">2022 - 2023</span>
                  <h3 className="item-title">Frontend Developer</h3>
                  <p className="item-description">Texnoera Academy</p>
                </div>
                <div
                  className="resume-item"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <span className="item-date">2021 - 2025</span>
                  <h3 className="item-title">Information Technology</h3>
                  <p className="item-description">
                    Baku Engineering University
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};
