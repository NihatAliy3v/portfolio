import React from "react";
import { IoShapesOutline } from "react-icons/io5";

export const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="row">
          <div
            className="section-head"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <IoShapesOutline className="icon-element" />
            <h2 className="title">portfolio</h2>
          </div>
          <h2
            className="porfolio-title"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Featured <span className="strong">Projects</span>
          </h2>
        </div>
      </div>
    </section>
  );
};
