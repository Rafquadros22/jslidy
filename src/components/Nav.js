import React from "react";
import SearchName from "./SearchName.js";

import "../styles/Nav.css";

function Nav() {
  return (
    <nav className=" shadow-lg p-3 mb-5 bg-info rounded navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">
            Employee Directory
          </a>

          <SearchName />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
