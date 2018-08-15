import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    axios
      .post("/api/users/register", newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
  }

  render() {
    const { errors } = this.state;
    return (
      <main>
        <section className="section section-shaped section-lg my-0">
          <div className="shape shape-style-1 bg-gradient-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="container pt-lg-md">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="card bg-secondary shadow border-0">
                  <div className="card-header bg-white pb-5">
                    <div className="text-muted text-center mb-3">
                      <small>Sign up with</small>
                    </div>
                    <div className="text-center">
                      <a href="" className="btn btn-neutral btn-icon mr-4">
                        <span className="btn-inner--icon">
                          <i className="fab fa-github" />
                        </span>
                        <span className="btn-inner--text">Github</span>
                      </a>
                      <a href="" className="btn btn-neutral btn-icon">
                        <span className="btn-inner--icon">
                          <i className="fab fa-google" />
                        </span>
                        <span className="btn-inner--text">Google</span>
                      </a>
                    </div>
                  </div>
                  <div className="card-body px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>Or sign up with credentials</small>
                    </div>
                    <form noValidate onSubmit={this.onSubmit}>
                      <div
                        className={classnames("form-group", {
                          "has-danger": errors.name
                        })}
                      >
                        <div className="input-group input-group-alternative mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-user" />
                            </span>
                          </div>
                          <input
                            className={classnames("form-control", {
                              "is-invalid": errors.name
                            })}
                            placeholder="Name"
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                          />
                        </div>

                        {errors.name && (
                          <div className="alert alert-danger" role="alert">
                            {errors.name}
                          </div>
                        )}
                      </div>

                      <div
                        className={classnames("form-group", {
                          "has-danger": errors.email
                        })}
                      >
                        <div className="input-group input-group-alternative mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-envelope" />
                            </span>
                          </div>
                          <input
                            className={classnames("form-control", {
                              "is-invalid": errors.email
                            })}
                            placeholder="Email"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.onChange}
                          />
                        </div>
                        {errors.email && (
                          <div
                            className="alert alert-danger alert-dismissible fade show"
                            role="alert"
                          >
                            <span className="alert-inner--icon">
                              <i className="ni ni-support-16" />
                            </span>
                            <span className="alert-inner--text">
                              <strong>Danger! </strong>
                              {errors.email}
                            </span>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="alert"
                              aria-label="Close"
                            />
                          </div>
                        )}
                      </div>

                      <div
                        className={classnames("form-group", {
                          "has-danger": errors.password
                        })}
                      >
                        <div className="input-group input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-key" />
                            </span>
                          </div>
                          <input
                            className={classnames("form-control", {
                              "has-danger": errors.password
                            })}
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                          />
                        </div>
                        {errors.password && (
                          <div
                            className="alert alert-danger alert-dismissible fade show"
                            role="alert"
                          >
                            <span className="alert-inner--icon">
                              <i className="ni ni-support-16" />
                            </span>
                            <span className="alert-inner--text">
                              <strong>Danger! </strong>
                              {errors.password}
                            </span>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="alert"
                              aria-label="Close"
                            />
                          </div>
                        )}
                      </div>

                      <div
                        className={classnames("form-group", {
                          "has-danger": errors.password2
                        })}
                      >
                        <div className="input-group input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-key" />
                            </span>
                          </div>
                          <input
                            className={classnames("form-control", {
                              "is-invalid": errors.password2
                            })}
                            placeholder="Confirm Password"
                            type="password"
                            name="password2"
                            value={this.state.password2}
                            onChange={this.onChange}
                          />
                        </div>
                        {errors.password2 && (
                          <div
                            className="alert alert-danger alert-dismissible fade show"
                            role="alert"
                          >
                            <span className="alert-inner--icon">
                              <i className="ni ni-support-16" />
                            </span>
                            <span className="alert-inner--text">
                              <strong>Danger! </strong>
                              {errors.password2}
                            </span>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="alert"
                              aria-label="Close"
                            />
                          </div>
                        )}
                      </div>

                      <div className="text-center">
                        <button type="submit" className="btn btn-primary mt-4">
                          Create account
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Register;
