import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer
        className="text-black"
        style={{ borderTop: "5px solid #CDB380", background: "#033649" }}
      >
        <div>
          <div className="container">
            <div>
              <div className="row">
                <div className="col">
                  <div className="card shadow">
                    <h5 className="">Importent Page :</h5>
                    <ul>
                      <h6>
                        <Link to="/">
                          <i className="fa fa-home fa-fw"></i>Home
                        </Link>
                      </h6>
                      <h6>
                        <Link to="/privacy">
                          <i className="fa fa-link"></i>Privacy Policy
                        </Link>
                      </h6>
                      <h6>
                        <Link to="/contact">
                          <i className="fa fa-envelope fa-fw"></i>Contact Us
                        </Link>
                      </h6>
                    </ul>
                  </div>
                </div>

                <div className="col-sm-6 col-md-2">
                  <div
                    id="recent-posts-3"
                    className="widget widgetFooter widget_recent_entries"
                  >
                    <h4 className="widgettitle">Our social media :</h4>
                    <ul>
                      <h6>
                        <a
                          href="https://www.facebook.com/nabhithpartyplanner"
                          target=""
                        >
                          <i className="fab fa-facebook"></i> Facebook
                        </a>
                      </h6>
                      <h6>
                        <a
                          href="https://www.twitter.com/nabhithpartyplanner"
                          target="/"
                        >
                          <i className="fab fa-twitter"></i> Twitter
                        </a>
                      </h6>
                      <h6>
                        <a
                          href="http://www.youtube.com/user/nabhithpartyplanner"
                          target="/"
                        >
                          <i className="fab fa-youtube"></i> Youtube
                        </a>
                      </h6>
                    </ul>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4">
                  <div id="meta-4" className="widget widgetFooter widget_meta">
                    <h4 className="widgettitle">Subscribe :</h4>

                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">E-mail :</span>
                        <input
                          className="form-control"
                          placeholder="Write your email .."
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">Mobile :</span>
                        <input
                          className="form-control"
                          placeholder="+911112223334"
                          type="text"
                        />
                        <span className="input-group-btn">
                          <button className="btn btn-primary" type="button">
                            Subscribe !
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4">
                  <div
                    id="search-3"
                    className="widget widgetFooter widget_search"
                  >
                    <h4 className="widgettitle">Search in NPP :</h4>

                    <div className="form-group">
                      <label className="control-label">
                        Write what you want to search for it :
                      </label>
                      <div className="input-group">
                        <span className="input-group-addon">Keyword :</span>
                        <input
                          className="form-control"
                          placeholder="Keyword for search ..."
                          type="text"
                        />
                        <span className="input-group-btn">
                          <button className="btn btn-primary" type="button">
                            Search !
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="sub-floor">
          <div className="container">
            <div className="row">
              <div className="col-md-4 copyright">
                Copyright Nabhith Party Planner © 2016
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
