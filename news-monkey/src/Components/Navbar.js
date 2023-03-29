import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            NewsMonkey
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex flex-row"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item text-white mx-2">
                <Link to="/economy">Economy</Link>
              </li>
              <li className="nav-item text-white mx-2">
                <li className="nav-item text-white mx-2">
                  <Link to="/fashion">Fashion</Link>
                </li>
              </li>

              <li className="nav-item text-white mx-2">
                <Link to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item text-white mx-2">
                <li className="nav-item text-white mx-2">
                  <Link to="/economy">Economy</Link>
                </li>
              </li>
              <li className="nav-item text-white mx-2">
                <li className="nav-item text-white mx-2">
                  <Link to="/politics">Politics</Link>
                </li>
              </li>
              <li className="nav-item text-white mx-2">
                <li className="nav-item text-white mx-2">
                  <Link to="/education">Education</Link>
                </li>
              </li>
              <li className="nav-item text-white mx-2">
                <li className="nav-item text-white mx-2">
                  <Link to="/health">Health</Link>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
