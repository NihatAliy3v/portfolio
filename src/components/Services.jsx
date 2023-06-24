import React from "react";
import { FaStream } from "react-icons/fa";
import { HiCodeBracket } from "react-icons/hi2";
export const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="row">
          <div className="section-head">
            <FaStream className="icon-element" />
            <h2 className="title">services</h2>
          </div>
          <h2 className="services-title">
            My <span className="strong">Specializations</span>
          </h2>
          <div className="services-main">
            <div className="services-list">
              <div className="services-item">
                <h3 className="title">Development</h3>
                <p className="description">
                  I build website go live with Framer, Webflow or WordPress
                </p>
                <span className="amount">126 PROJECTS</span>
                <HiCodeBracket className="icon"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
