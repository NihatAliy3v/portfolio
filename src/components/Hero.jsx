import React from "react";
import { AiOutlineHome } from "react-icons/ai";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="section-head">
            <AiOutlineHome className="icon-element" />
            <h2 className="title">introduce</h2>
          </div>
          <div className="hero-main">
            <h1 className="hero-title">
              Say Hi from <span className="name">Drake</span>, Webflow Designer and Developer
            </h1>
            <p className="hero-summary">
              I design and code beautifully simple things and i love what i do.
              Just simple like that!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
