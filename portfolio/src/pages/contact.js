import React from "react";
// import emailjs from "emailjs.com";
const Contact = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Sending...");

    const { name, tel, email, company, message } = e.target.elements;
    let conFom = {
      name: name.value,
      tel: tel.value,
      email: email.value,
      company: company.value,
      message: message.value,
    };
    // const serviceId = "service_igxnw7p";
    // const templateId = "template_rjdi9i7";
    // const userId = "AOZCBh8cfjMr0uP22";
    // const templateParams = {
    //   name,
    //   tel,
    //   email,
    //   company,
    //   message,
    // };

    // emailjs
    //   .send(serviceId, templateId, templateParams, userId)
    //   .then((response) => console.log(response))
    //   .then((error) => console.log(error));
    console.log(conFom);
  };

  return (
    <div className="contact">
      <div className="container mt-5">
        <h2 className="mt-5">Contact Form </h2>
        <p style={{ fontSize: "1rem" }}>* means required to fill </p>
        <form onSubmit={onSubmit}>
          <div className="mb-5">
            <label className="form-label" htmlFor="name">
              Name*
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-5">
            <label className="form-label" htmlFor="tel">
              Phone Number
            </label>
            <input className="form-control" type="text" id="tel" />
          </div>
          <div className="mb-5">
            <label className="form-label" htmlFor="email">
              Email*
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-5">
            <label className="form-label" htmlFor="Company">
              Company
            </label>
            <input className="form-control" type="text" id="company" />
          </div>
          <div className="mb-5">
            <label className="form-label" htmlFor="message">
              Message*
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-md btn-danger mb-5" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
