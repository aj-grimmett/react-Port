import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [tel, setTel] = useState("");
  const [company, setCompany] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (
      name &&
      tel &&
      email &&
      message
      // (name && email && tel && company && message)
    ) {
      const templateParams = {
        name,
        tel,
        email,
        company,
        message,
      };
      emailjs
        .send(
          "service_igxnw7p",
          "template_a7to41u",
          templateParams,
          "XTadRl2FtdGez3O8I"
        )
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setTel("");
      setEmail("");
      setCompany("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="contact">
      <div className="container mt-5">
        <h1 className="mt-5">Contact Form </h1>
        <p style={{ fontSize: "1.25rem", fontWeight: "400" }}>
          * means required to fill{" "}
        </p>
        <form>
          <div className="mb-5">
            <label className="form-label" htmlFor="name">
              Name*
            </label>
            <input
              className="form-control"
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label className="form-label" htmlFor="tel">
              Phone Number*
            </label>
            <input
              className="form-control"
              value={tel}
              type="text"
              name="tel"
              onChange={(e) => setTel(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="form-label" htmlFor="email">
              Email*
            </label>
            <input
              className="form-control"
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label className="form-label" htmlFor="Company">
              Company
            </label>
            <input
              className="form-control"
              value={company}
              type="text"
              name="company"
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="form-label" htmlFor="message">
              Message*
            </label>
            <textarea
              placeholder="Your message"
              value={message}
              className="form-control"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div>
            <button
              onClick={submit}
              style={{ textAlign: "center" }}
              className="btn btn-md btn-danger mb-5"
              type="submit"
            >
              Submit
            </button>
          </div>

          <span
            style={{ fontWeight: "600", textAlign: "center" }}
            className={emailSent ? "visible" : null}
          >
            <u>
              Thank you for contacting me! I will be in touch as soon as I can.
            </u>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
