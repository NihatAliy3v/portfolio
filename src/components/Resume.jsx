import React from "react";
import { IoBriefcaseOutline } from "react-icons/io5";

export const Resume = () => {
  return (
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
                <span className="item-date">2020 - Present</span>
                <h3 className="item-title">Framer Desinger & Developer</h3>
                <p className="item-description">Brunodee Agency</p>
                <h3 className="item-title">Front-End WordPress Developer</h3>
                <p className="item-description">Envato Market</p>
              </div>
              <div
                className="resume-item"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <span className="item-date">2013 - 2019</span>
                <h3 className="item-title">Webflow Developer & Co-Founder</h3>
                <p className="item-description">Designflow Studio</p>
                <h3 className="item-title">Web Designer</h3>
                <p className="item-description">Freelance</p>
                <h3 className="item-title">Leader Team of Marketing</h3>
                <p className="item-description">AHA Marketing Agency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
