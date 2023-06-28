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
              <form className="form">
                <div className="form-row">
                  <div className="input-container">
                    <label htmlFor="">
                      FULL NAME <span className="star">*</span>
                    </label>
                    <input type="text" placeholder="Your Full Name" />
                  </div>
                  <div className="input-container">
                    <label htmlFor="">
                      EMAIL <span className="star">*</span>
                    </label>
                    <input type="text" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="input-container">
                    <label htmlFor="">PHONE (OPTIONAL)</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="input-container">
                    <label htmlFor="">MESSAGE</label>
                    <input type="text" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
