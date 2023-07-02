import React from "react";
import { IoShapesOutline } from "react-icons/io5";
import portfolio1 from "../assets/images/portfolio1.jpg";
import portfolio2 from "../assets/images/portfolio2.jpg";
import portfolio3 from "../assets/images/portfolio3.jpg";
import portfolio4 from "../assets/images/portfolio4.jpg";

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
            className="portfolio-title"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Featured <span className="strong">Projects</span>
          </h2>
          <div className="portfolio-main">
            <div className="card-group">
              <div className="card-line">
                <div
                  className="card"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="image-item">
                    <img src={portfolio1} alt="" />
                  </div>
                  <h4 className="title">
                    Bureau - Architecture Studio Website
                  </h4>
                </div>
              </div>
              <div className="card-line">
                <div
                  className="card"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <div className="image-item">
                    <img src={portfolio2} alt="" />
                  </div>
                  <h4 className="title">Moonex WordPress Theme</h4>
                </div>
                <div
                  className="card"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <div className="image-item">
                    <img src={portfolio3} alt="" />
                  </div>
                  <h4 className="title">Taskly Dashboard</h4>
                </div>
              </div>
              <div className="card-line">
                <div
                  className="card"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="image-item">
                    <img src={portfolio4} alt="" />
                  </div>
                  <h4 className="title">
                    Hinterland - Real Estate Site Redesign
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
