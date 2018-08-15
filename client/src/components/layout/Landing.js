import React, { Component } from "react";
import White from "../../assets/img/brand/white.png";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <main>
        <div className="position-relative">
          <section className="section-hero section-shaped my-0">
            <div className="shape shape-style-1 shape-primary">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <div className="container shape-container d-flex align-items-center">
              <div className="col px-0">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-7 text-center pt-lg">
                    <img
                      src={White}
                      className="img-fluid"
                      style={{ width: 150 }}
                      alt=""
                    />
                    <p className="lead text-white mt-4 mb-5">
                      A beautiful Design System for Bootstrap 4. It's Free and
                      Open Source.
                    </p>
                    <div className="btn-wrapper">
                      <Link
                        to="/login"
                        className="btn btn-info btn-icon mb-3 mb-sm-0"
                      >
                        <span className="btn-inner--text">Login</span>
                      </Link>
                      <Link
                        to="/register"
                        className="btn btn-white btn-icon mb-3 mb-sm-0"
                      >
                        <span className="btn-inner--text">Register</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default Landing;
