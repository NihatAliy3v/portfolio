import React from "react";
import { AiOutlineUser } from "react-icons/ai";

export const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="section-head">
            <AiOutlineUser className="icon-element" />
            <h2 className="title">about</h2>
          </div>
          <div className="about-main">
            <h2 className="about-title">
              Every great design begin with <br /> an even 
              <span className="strong"> better story</span>
            </h2>
            <p className="about-paragraph">
              Since beginning my journey as a freelance designer nearly 8 years
              ago, I've done remote work for agencies, consulted for startups,
              and collaborated with talented people to create digital products
              for both business and consumer use. I'm quietly confident,
              naturally curious, and perpetually working on improving my
              chopsone design problem at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
