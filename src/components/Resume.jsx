import React from "react";
import { IoBriefcaseOutline } from "react-icons/io5";

export const Resume = () => {
  return (
    <section className="resume">
      <div className="container">
        <div className="row">
          <div className="section-head">
            <IoBriefcaseOutline className="icon-element" />
            <h2 className="title">resume</h2>
          </div>
          <h2 className="resume-title">
            Education & <span className="strong">Experience</span>
          </h2>
        </div>
      </div>
    </section>
  );
};
