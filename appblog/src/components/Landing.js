import React from "react";
import "./css/Landing.css";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div>
      <section
        id="hero"
        class="d-flex flex-column justify-content-center align-items-center"
      >
        <div class="container text-center text-md-left" data-aos="fade-up">
          <h1>
            Welcome to <span >Academic Queries</span>
          </h1>
          <h2>
          EMPOWERING EDUACTION , ACADEMIC ASSISTENCE
          </h2>
          <Link to="/test">
          <button >Get Started</button>
          </Link>
          
        </div>
      </section>
    </div>
  );
}

export default Landing;