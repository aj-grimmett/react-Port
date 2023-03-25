import React from "react";
import Resume from "../assets/pdf/Albert-Grimmett-Jr.pdf";
import SelfPort from "../assets/images/self.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const download = <FontAwesomeIcon icon={faDownload} />;

const About = () => {
  return (
    <div className="about">
      <div className="header ">
        <div className="image">
          <img
            id="self"
            className="img-thumbnail"
            src={SelfPort}
            alt="self portait"
          />
        </div>
        <div className="ab-info">
          <div className="me">
            <h1>Hi, I'm Albert Grimmett</h1>
            <h3>Frontend Developler</h3>
            <p>
              I have experiance in web desgin and developement for 4 years
              producing qualtiy work.
            </p>
            <div className="download">
              <a
                className="btn btn-danger btn-sm "
                href={Resume}
                role="button"
                download
              >
                <span id="icon1">{download}</span>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="ab-container">
        <div className="pro">
          <p>
            I leanered most of my skills since Lambda doing classes mainly on
            Udemy but also other online platforms including Youtube,
            Freecodecamp.com and Odinproject.com. I focused on certain coding
            langues to make me as well balanced of a developer as I can be.
          </p>

          <p>
            I am most comfortable doing frontend programming but open to backend
            and full-stack opportunities. I always enjoy challenging myslef and
            getting out of my comfort zone, because thats when you learn the
            most.
          </p>
        </div>
        <div className="free">
          <h2>Also...</h2>
          <p>
            For small businesses and individuals wanting a website I also offer
            facebook marketing ads and offer monthly payments if a one time fee
            isn't in your budget.
            <u style={{ fontWeight: "600", paddingLeft: "0.5%" }}>
              I do my best to work with you instead of just working for you.
            </u>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
