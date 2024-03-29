// Icons
import { FaStream } from "react-icons/fa";
import { HiCodeBracket } from "react-icons/hi2";
// Libraries
import { Element } from "react-scroll";
export const Services = () => {
  return (
    <Element name="services">
      <section className="services">
        <div className="container">
          <div className="row">
            <div
              className="section-head"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              <FaStream className="icon-element" />
              <h2 className="title">services</h2>
            </div>
            <h2
              className="services-title"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              My <span className="strong">Specializations</span>
            </h2>
            <div className="services-main">
              <div
                className="services-list"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                <div
                  className="services-item"
                  data-aos="fade-up"
                  data-aos-duration="900"
                >
                  <h3 className="title">Development</h3>
                  <p className="description">
                    I create website with react library
                  </p>
                  <span className="amount">10 PROJECTS</span>
                  <HiCodeBracket className="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};
