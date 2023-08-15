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
                I am
                <span className="strong"> Frontend Developer</span>
              </h2>
              <p
                className="about-paragraph"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                I am a hardworking and ambitious individual with a great passion
                for Frontend. I have excellent communication skills, enabling me
                to effectively communicate with a wide range of people.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};
