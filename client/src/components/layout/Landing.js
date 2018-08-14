import React, { Component } from "react";
import White from "../../assets/img/brand/white.png";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <main>
        <div class="position-relative">
          <section class="section-hero section-shaped my-0">
            <div class="shape shape-style-1 shape-primary">
              <span class="span-150" />
              <span class="span-50" />
              <span class="span-50" />
              <span class="span-75" />
              <span class="span-100" />
              <span class="span-75" />
              <span class="span-50" />
              <span class="span-100" />
              <span class="span-50" />
              <span class="span-100" />
            </div>
            <div class="container shape-container d-flex align-items-center">
              <div class="col px-0">
                <div class="row justify-content-center align-items-center">
                  <div class="col-lg-7 text-center pt-lg">
                    <img
                      src={White}
                      class="img-fluid"
                      style={{ width: 150 }}
                      alt=""
                    />
                    <p class="lead text-white mt-4 mb-5">
                      A beautiful Design System for Bootstrap 4. It's Free and
                      Open Source.
                    </p>
                    <div class="btn-wrapper">
                      <Link
                        to="/login"
                        class="btn btn-info btn-icon mb-3 mb-sm-0"
                      >
                        <span class="btn-inner--text">Login</span>
                      </Link>
                      <Link
                        to="/register"
                        class="btn btn-white btn-icon mb-3 mb-sm-0"
                      >
                        <span class="btn-inner--text">Register</span>
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
