import React from "react";
import { RxEnvelopeClosed } from "react-icons/rx";

export const ContactSection = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div
            className="section-head"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <RxEnvelopeClosed className="icon-element" />
            <h2 className="title">contact</h2>
          </div>
          <div className="contact-main">
            <h2
              className="contact-title"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Let's Work <span className="strong">Together!</span>
            </h2>
            <div className="contact-form">
              <h4
                className="form-title"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                hello@drake.design
              </h4>
              <form className="form">
                <div className="form-row">
                  <div className="input-container">
                    <label htmlFor="fullName">
                      FULL NAME <span className="star">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div className="input-container">
                    <label htmlFor="email">
                      EMAIL <span className="star">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email adress"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="input-container">
                    <label htmlFor="phone">Number (OPTIONAL)</label>
                    <input
                      type="text"
                      id="phone"
                      placeholder="Your number phone"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="input-container">
                    <label htmlFor="message">MESSAGE</label>
                    <textarea
                      name=""
                      id="message"
                      placeholder="Write your message here ..."
                    ></textarea>
                  </div>
                </div>
                <button className="btn send-btn">send message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
