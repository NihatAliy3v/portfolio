import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Element } from "react-scroll";
export const About = () => {
  return (
    <Element name="about">
      <section className="about">
        <div className="container">
          <div className="row">
            <div
              className="section-head"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <AiOutlineUser className="icon-element" />
              <h2 className="title">about</h2>
            </div>
            <div className="about-main">
              <h2
                className="about-title"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                Every great design begin with an even
                <span className="strong"> better story</span>
              </h2>
              <p
                className="about-paragraph"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                Since beginning my journey as a freelance designer nearly 8
                years ago, I've done remote work for agencies, consulted for
                startups, and collaborated with talented people to create
                digital products for both business and consumer use. I'm quietly
                confident, naturally curious, and perpetually working on
                improving my chopsone design problem at a time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};
