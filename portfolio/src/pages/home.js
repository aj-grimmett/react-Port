import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import background from "../assets/images/desk-5.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div
        className="background"
        id="backgrd"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="every">
          <div className="title">
            <p>Websites Done Right</p>
          </div>
          <div className="info">
            <p>
              I am a freelance web developer from Gilbert, West Virginia. I
              enjoy building everything from small business websites to
              interactive apps. If you are a business or an individual seeking a
              website or an employer looking to hire, you can get in touch{" "}
              <u>here</u>.
            </p>
          </div>
          <div
            id="butns"
            className=" pt-4 d-flex align-items-center flex-sm-row justify-content-center"
          >
            <div id="btn1" className="btn1 pe-3">
              <Link to="/contact">
                <button type="button" className=" btn btn-danger btn-lg">
                  I need a website
                </button>
              </Link>
            </div>
            <div id="btn2" className="btn2 px-1">
              <Link to="/contact">
                <button type="button" className=" btn btn-secondary btn-lg">
                  I am looking to hire
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="home-con">
        <div className="details">
          <p>
            I am mainly self-taught by doing courses on Udemy and been studying
            since 2019. Then in the summer of 2020 I enrolled into an online
            coding bootcamp at Lambda School which is now known as Bloom
            Insitute of Technology.
          </p>
          <p>
            As of now I have done two websites, One for Susan Perry who ran for
            WV State House of Representative in 2020 and the other for a small
            family owed lodge.<br></br>
            <a
              href="https://www.hawksriversidelodge.com/"
              rel="noreferrer"
              target="_blank"
            >
              <button type="button" className=" btn btn-primary btn-sm">
                Hawks Riverside Lodge
              </button>
            </a>
            <p id="link">link for the family owned lodge </p>I am currlently
            talking to owners of another lodge about doing a new website for
            them that includes online booking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
