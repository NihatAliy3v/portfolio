// Libraries
import { Element } from "react-scroll";
// Icons
import { AiOutlineUser } from "react-icons/ai";
export const About = () => {
  return (
    <Element name="about">
      <section className="about">
        <div className="container">
          <div className="row">
            <div
              className="section-head"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              <AiOutlineUser className="icon-element" />
              <h2 className="title">about</h2>
            </div>
            <div className="about-main">
              <h2
                className="about-title"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                I am
                <span className="strong"> Frontend Developer</span>
              </h2>
              <p
                className="about-paragraph"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                I have enjoyed coding since I started writing code. I work hard to learn every day because it's enjoyable for me. Learning new things excites me, and I've explored different programming languages like C, C++, and Java. Eventually, I developed a strong interest in the JavaScript programming language, which is why I find frontend development suitable for me.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};
