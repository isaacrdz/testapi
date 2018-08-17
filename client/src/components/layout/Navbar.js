import React, { Component } from "react";
import White from "../../assets/img/brand/white.png";
import Blue from "../../assets/img/brand/blue.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
        <li className="nav-item dropdown">
          <a href="" onClick={this.onLogoutClick.bind(this)}>
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "25px", marginRight: "5px" }}
              title="You must have a gravtar connected to your email to display an image"
            />
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
        <li className="nav-item dropdown">
          <Link className="nav-link" to="/login">
            <span className="nav-link-inner--text">Login</span>
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link" to="/register">
            <span className="nav-link-inner--text">Register</span>
          </Link>
        </li>
      </ul>
    );
    return (
      <header className="header-global">
        <nav
          id="navbar-main"
          className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light"
        >
          <div className="container">
            <Link className="navbar-brand mr-lg-5" to="/">
              <img src={White} alt="Logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar_global"
              aria-controls="navbar_global"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="navbar-collapse collapse" id="navbar_global">
              <div className="navbar-collapse-header">
                <div className="row">
                  <div className="col-6 collapse-brand">
                    <a href="./index.html">
                      <img src={Blue} alt="" />
                    </a>
                  </div>
                  <div className="col-6 collapse-close">
                    <button
                      type="button"
                      className="navbar-toggler"
                      data-toggle="collapse"
                      data-target="#navbar_global"
                      aria-controls="navbar_global"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span />
                      <span />
                    </button>
                  </div>
                </div>
              </div>

              {isAuthenticated ? authLinks : guestLinks}
              <ul className="navbar-nav align-items-lg-center ml-lg-auto">
                <li className="nav-item">
                  <a
                    className="nav-link nav-link-icon"
                    href="https://www.facebook.com/creativetim"
                    data-toggle="tooltip"
                    title="Like us on Facebook"
                  >
                    <i className="fab fa-facebook" />
                    <span className="nav-link-inner--text d-lg-none">
                      Facebook
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link nav-link-icon"
                    href="https://www.instagram.com/creativetimofficial"
                    data-toggle="tooltip"
                    title="Follow us on Instagram"
                  >
                    <i className="fab fa-instagram" />
                    <span className="nav-link-inner--text d-lg-none">
                      Instagram
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link nav-link-icon"
                    href="https://twitter.com/creativetim"
                    data-toggle="tooltip"
                    title="Follow us on Twitter"
                  >
                    <i className="fab fa-twitter-square" />
                    <span className="nav-link-inner--text d-lg-none">
                      Twitter
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link nav-link-icon"
                    href="https://github.com/creativetimofficial/argon-design-system"
                    data-toggle="tooltip"
                    title="Star us on Github"
                  >
                    <i className="fab fa-github" />
                    <span className="nav-link-inner--text d-lg-none">
                      Github
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
