import React from "react";
import { RxEnvelopeClosed } from "react-icons/rx";

export const ContactSection = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="section-head">
            <RxEnvelopeClosed className="icon-element" />
            <h2 className="title">contact</h2>
          </div>
          <div className="contact-main">
            <h2 className="contact-title">
              Let's Work <span className="strong">Together!</span>
            </h2>
            <div className="contact-form">
              <h4 className="form-title">hello@drake.design</h4>
              <form action="">
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
