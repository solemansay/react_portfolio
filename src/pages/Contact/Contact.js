import React from "react";

function Contact() {
  return (
    <section className="col-10.5 col-md-7 col-lg-5 container card p-5 mt-4 contactform">
      <h1 className="h1-responsive font-weight-bold text-center">Contact</h1>
      <div className="row">
        <div className="col-12 col-md-9">
          <form
            id="contact-form"
            name="contact-form"
            action="mail.php"
            method="POST"
          >
            <div className="row">
              <div className="col-12 col-md-10">
                <div className="md-form mb-0">
                  <label for="name" className="">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
              </div>

              <div className="col-12 col-md-10">
                <div className="md-form mb-0">
                  <label for="email" className="">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-10">
                <div className="md-form">
                  <label for="message">Message</label>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    className="form-control md-textarea"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
            </div>
          </form>

          <div className="text-md-left mt-2">
            <button type="button" className="btn btn-info">
              Submit
            </button>
          </div>
          <div className="status"></div>
        </div>
      </div>
      <div className="text-center">
        <br />
        <p>
          <strong>My Contact Info:</strong>
        </p>
        <p><i class="fa fa-phone" aria-hidden="true"></i> Phone: 619-629-6030</p>
        <p><i class="fa fa-envelope-o" aria-hidden="true"></i> Email: solemansay@gmail.com</p>
      </div>
    </section>
  );
}

export default Contact;
