import React from "react";
import { useActiveMenu } from "react-active-menu";
import { AiOutlineUser } from "react-icons/ai";

export const About = () => {
  const { registerContainer, registerSection, registerTrigger } = useActiveMenu(
    {
      smooth: true,
    }
  );
  return (
    <section className="about" ref={registerSection("section-1")}>
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
              Every great design begin with <br /> an even
              <span className="strong"> better story</span>
            </h2>
            <p
              className="about-paragraph"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
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
