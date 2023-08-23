// React
import React, { useRef } from "react";
// Icons
import { RxEnvelopeClosed } from "react-icons/rx";
// Libraries
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { Element } from "react-scroll";
// Formik
import { useFormik } from "formik";
import validations from "./validations";

export const ContactSection = () => {
  const form = useRef();
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
      },
      onSubmit: (values, e) => {
        console.log(values);
        e.resetForm();
        emailjs.sendForm(
          "service_8wghzon",
          "template_36lpw1i",
          form.current,
          "btxK6fUZkUldih7S3"
        );
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Sent successfully",
        });
      },
      validationSchema: validations,
    });
  return (
    <Element name="contact">
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
                Contact <span className="strong">Me!</span>
              </h2>
              <div className="contact-form">
                <h4
                  className="form-title"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  nihataliy3v@gmail.com
                </h4>
                <form className="form" onSubmit={handleSubmit} ref={form}>
                  <div className="form-row">
                    <div className="input-container">
                      <label htmlFor="fullName">
                        FULL NAME <span className="star">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Your Full Name"
                        value={values.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.fullName && touched.fullName && (
                        <span className="error-message">{errors.fullName}</span>
                      )}
                    </div>
                    <div className="input-container">
                      <label htmlFor="email">
                        EMAIL <span className="star">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email adress"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email && (
                        <span className="error-message">{errors.email}</span>
                      )}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="input-container">
                      <label htmlFor="phone">Number (OPTIONAL)</label>
                      <input
                        type="text"
                        id="phone"
                        name="phoneNumber"
                        placeholder="Your number phone"
                        value={values.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="input-container">
                      <label htmlFor="message">MESSAGE</label>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Write your message here ..."
                        value={values.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <button type="submit" className="btn send-btn">
                    send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};
