import React from "react";
import "./contact.scss";
import { LocationOn, Cake, Mail, Person, Phone } from "@material-ui/icons";

export default function Contact({ items }) {
  return (
    <div className="contact" id="contact">
      <div className="contact">
        <h2>Contact</h2>
        <p>Gọi cho tôi hoặc gửi cho tôi một email. Tôi sẽ phản hồi ngay.</p>
      </div>

      <div className="container">
        {items.map((item) => (
          <div className="left" key={item}>
            <p>
              <Cake /> {item.birthday}
            </p>
            <p>
              <Person /> {item.sex}
            </p>
            <p>
              <Mail /> {item.email}
            </p>
            <p>
              <Phone /> {item.phone}
            </p>
            <p>
              <LocationOn /> {item.address}
            </p>
          </div>
        ))}

        <div className="right">
          <div className="row">
            <div className="contact-form">
              <form
                className="mb-0"
                id="cf"
                name="cf"
                action=""
                method="post"
                autoComplete="off"
              >
                <div className="form-row">
                  <div className="form-process"></div>

                  <div className="col-12 col-md-6">
                    <div className="form-group error-text-white">
                      <input
                        type="text"
                        id="cf-name"
                        name="cf-name"
                        placeholder="Enter your name"
                        className="form-control required"
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="form-group error-text-white">
                      <input
                        type="email"
                        id="cf-email"
                        name="cf-email"
                        placeholder="Enter your email address"
                        className="form-control required"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group error-text-white">
                      <input
                        type="text"
                        id="cf-subject"
                        name="cf-subject"
                        placeholder="Subject (Optional)"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-12 mb-4">
                    <div className="form-group error-text-white">
                      <textarea
                        name="cf-message"
                        id="cf-message"
                        placeholder="Here goes your message"
                        className="form-control required"
                        rows="7"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-12 d-none">
                    <input
                      type="text"
                      id="cf-botcheck"
                      name="cf-botcheck"
                      className="form-control"
                    />
                  </div>

                  <div className="col-12 text-center">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      id="cf-submit"
                      name="cf-submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
