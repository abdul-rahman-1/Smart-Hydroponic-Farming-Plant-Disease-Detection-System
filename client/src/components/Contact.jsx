import { useState } from "react";
import "./a.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App rounded-2 d-flex justify-content-center align-items-center row">
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="wrapper">
                <div className="row vanishIn justify-content-center">
                  <div className="center col-lg-8 mt-5 mb-5">
                    <div id="social-test">
                      <div className="social">
                        <div>
                          <a href="tel://+919555708358">
                            <i
                              className="fa fa-whatsapp"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </div>
                        <div>
                          <a href="https://www.instagram.com/ucancallme_rk/">
                            <i
                              className="fa fa-instagram"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </div>
                        <div>
                          <a href="https://github.com/abdul-rahman-1">
                            <i class="fa-brands fa-discord"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="contact-wrap">
                      <div
                        id="form-message-warning"
                        className="mb-4 w-100 text-center"
                      ></div>
                      <div
                        id="form-message-success"
                        className="mb-4 w-100 text-center"
                      >
                        Your message was sent, thank you!
                      </div>
                      <form
                        id="contactForm"
                        name="HireInfo"
                        method="POST"
                        data-netlify="true"
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                cols="30"
                                rows="8"
                                placeholder="Message"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="submit"
                                value="Send Message"
                                className="btn btn-primary"
                              />
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
