import React from "react";
import "./css/Home.css";
import WebProject from "./HomeSubComponent/WebProject";
import { useParams } from "react-router-dom";

function Home() {
  const {userName}=useParams();
  return (
    <div  class="content-panel">                <div class="content-header-wrapper">
                  <h2 class="title">My Projects</h2>
                </div>

                <WebProject type="application" heading="Android Projects" userName={userName} />
                <WebProject type="web" heading="Web Projects" userName={userName} />
                </div>

             
  );
}

export default Home;
