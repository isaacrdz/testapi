import React from "react";

export default () => {
  return (
    <footer className="footer">
      <div className="container">
        <hr />
        <div className="row align-items-center justify-content-md-between">
          <div className="col-md-6">
            <div className="copyright">
              &copy; 2018
              <a href="https://www.creative-tim.com">Creative Tim</a>.
            </div>
          </div>
          <div className="col-md-6">
            <ul className="nav nav-footer justify-content-end">
              <li className="nav-item">
                <a href="https://www.creative-tim.com" className="nav-link">
                  Creative Tim
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.creative-tim.com/presentation"
                  className="nav-link"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="http://blog.creative-tim.com" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                  className="nav-link"
                >
                  MIT License
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
