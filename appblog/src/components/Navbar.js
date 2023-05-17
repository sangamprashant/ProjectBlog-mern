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
              
              
              <Link class="nav-link" aria-current="page" to="/Admin/home" style={{color:'white'}}>
                Admin
              </Link>
              <Link class="nav-link" aria-current="page" to="/admin/signup" style={{color:'white'}}>
                SignUp
              </Link>
              <Link class="nav-link" aria-current="page" to="/admin/signin" style={{color:'white'}}>
                Signin
              </Link>
              <Link class="nav-link" aria-current="page" to="/Admin/profile/image" style={{color:'white'}}>
                Pic
              </Link>
              

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
