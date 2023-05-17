import React from "react";
import "./css/navbar.css"
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-bg-color fixed-top">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/" style={{color:'white'}}>
            Navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link" aria-current="page" to="/myapp" style={{color:'white'}}>
                Home
              </Link>
              <Link class="nav-link" aria-current="page" to="/about" style={{color:'white'}}>
                About
              </Link>
              <Link class="nav-link" aria-current="page" to="/contact" style={{color:'white'}}>
                Contact
              </Link>
              <Link class="nav-link" aria-current="page" to="/services" style={{color:'white'}}>
                Services
              </Link>

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
