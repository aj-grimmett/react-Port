import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
const linked = <FontAwesomeIcon icon={faLinkedin} />;
const git = <FontAwesomeIcon icon={faSquareGithub} />;
const footer = () => {
  return (
    <div className="footer">
      <div className="information  d-flex-lg-row justify-content-between">
        <ul style={{ listStyleType: "none" }}>
          <li className="btn btn-danger btn-sm ">
            <a href="tel:3047857578"> 304-784-7578</a>
          </li>
          <li className="btn btn-secondary btn-sm ">
            <a href="mailto:ajgrimm23@gmail.com">ajgrimmett23@gmail.com</a>
          </li>
          <li>
            <a
              id="icon"
              href="https://www.linkedin.com/in/albert-grimmett-jr-572343654464q313"
              rel="noreferrer"
              target="_blank"
            >
              {linked}
            </a>
          </li>
          <li>
            <a
              id="icon-2"
              href="https://github.com/aj-grimmett"
              rel="noreferrer"
              target="_blank"
            >
              {git}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default footer;
