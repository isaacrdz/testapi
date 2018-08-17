import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
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
                      <small>Sign in with</small>
                    </div>
                    <div className="btn-wrapper text-center">
                      <a href="" className="btn btn-neutral btn-icon">
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
                      <small>Or sign in with credentials</small>
                    </div>
                    <form onSubmit={this.onSubmit}>
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

                      <div className="text-center">
                        <button type="submit" className="btn btn-primary my-4">
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-6">
                    <a href="" className="text-light">
                      <small>Forgot password?</small>
                    </a>
                  </div>
                  <div className="col-6 text-right">
                    <Link to="/register" className="text-light">
                      <small>Create new account</small>
                    </Link>
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
