import React from "react";
import Nav from "react-bootstrap/Nav";
const Navbar = () => {
  return (
    <div className="navbar">
      <img
        id="logo"
        className="navbar-brand"
        src={require("../assets/images/Vivtruian-Man.-Logo-1024x1024.png")}
        alt="logo"
      />
      <div className="heading p-1">
        <ul>
          <li id="top">Albert (AJ) Grimmett Jr</li>
          <li id="btm">Web Designer & Developer </li>
        </ul>
      </div>

      <Nav
        variant="pills"
        defaultActiveKey="/home"
        className="  navbar navbar-expand-lg navbar-dark"
        style={{ paddingRight: "4%" }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          data-bs-delay='{"show":0,"hide":0}'
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about" eventKey="link-1">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact" eventKey="link-2">
              Contact
            </Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    </div>
  );
};
export default Navbar;
