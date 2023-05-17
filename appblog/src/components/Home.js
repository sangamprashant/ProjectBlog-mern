import React from "react";
import "./css/Home.css";
import WebProject from "./HomeSubComponent/WebProject";
import { useParams } from "react-router-dom";

function Home() {
  const {userName}=useParams();
  return (
    <div style={{ marginTop: "100px" }}>
      <div class="container">
        <div class="view-account">
          <section class="module">
            <div class="module-inner">
              <div class="side-bar">
                <div class="user-info">
                  <img
                    class="img-profile img-circle img-responsive center-block"
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
                    alt=""
                  />
                  <ul class="meta list list-unstyled">
                    <li class="name">
                      Prashant Srivastav <br />
                      <label class="label label-info">UX Designer</label>
                    </li>

                    <li class="activity">Last logged in: Today at 2:18pm</li>
                  </ul>
                </div>
              </div>

              <div class="content-panel">
                <div class="content-header-wrapper">
                  <h2 class="title">My Projects</h2>
                </div>

                <WebProject type="application" heading="Android Projects" userName={userName} />
                <WebProject type="web" heading="Web Projects" userName={userName} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
