// Icons
import { IoShapesOutline } from "react-icons/io5";
// Images
import travalerImage from "../assets/images/travaler-image.png";
import hommeImage from "../assets/images/homme-image.png";
import adminImage from "../assets/images/admin-panel.png";
// Libraries
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
export const Portfolio = () => {
  return (
    <Element name="test">
      <section className="portfolio">
        <div className="container">
          <div className="row">
            <div
              className="section-head"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              <IoShapesOutline className="icon-element" />
              <h2 className="title">portfolio</h2>
            </div>

            <h2
              className="portfolio-title"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              Featured <span className="strong">Projects</span>
            </h2>
            <div className="portfolio-main">
              <div className="card-group">
                <div className="card-line">
                  <div
                    className="card"
                    data-aos="fade-up"
                    data-aos-duration="900"
                  >
                    <Link
                      to="https://github.com/NihatAliy3v/Homme-Project.git"
                      className="image-item"
                      target="_blank"
                    >
                      <img src={hommeImage} alt="" />
                    </Link>
                    <Link
                      to="https://github.com/NihatAliy3v/Homme-Project.git"
                      className="title-link"
                      target="_blank"
                    >
                      <h4 className="title">Homme - Clone</h4>
                    </Link>
                  </div>
                </div>
                <div className="card-line">
                  <div
                    className="card"
                    data-aos="fade-right"
                    data-aos-duration="900"
                  >
                    <Link
                      to="https://travaler-clone.netlify.app/"
                      className="image-item"
                      target="_blank"
                    >
                      <img src={travalerImage} alt="" />
                    </Link>
                    <Link
                      to="https://travaler-clone.netlify.app/"
                      className="title-link"
                      target="_blank"
                    >
                      <h4 className="title">Travalers - Clone</h4>
                    </Link>
                  </div>
                </div>
                <div className="card-line">
                  <div
                    className="card"
                    data-aos="fade-left"
                    data-aos-duration="900"
                  >
                    <Link
                      to="https://github.com/NihatAliy3v/Admin-Panel.git"
                      className="image-item"
                      target="_blank"
                    >
                      <img src={adminImage} alt="" />
                    </Link>
                    <Link
                      to="https://github.com/NihatAliy3v/Admin-Panel.git"
                      className="title-link"
                      target="_blank"
                    >
                      <h4 className="title">Admin Panel</h4>
                    </Link>
                  </div>
                </div>
                {/* <div className="card-line">
                  <div
                    className="card"
                    data-aos="fade-up"
                    data-aos-duration="900"
                  >
                    <Link to="" className="image-item">
                      <img src={portfolio4} alt="" />
                    </Link>
                    <Link to="" className="title-link">
                      <h4 className="title">
                        Hinterland - Real Estate Site Redesign
                      </h4>
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};
