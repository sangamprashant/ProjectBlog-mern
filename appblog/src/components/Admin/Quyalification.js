import React from "react";
import "../css/Qualification.css";

function Quyalification() {
  return (
    <div>
      <div class="content-panel">
        <div class="content-header-wrapper">
          <h2 class="title">Admin Qualification</h2>
          <div class="actions">
            <button class="btn btn-success">
              <i class="fa fa-plus"></i> Upload New Item
            </button>
          </div>
        </div>
        <div style={{marginTop:'100px'}}>
        <div class="work">
          <h3>
            <i class="fa fa-briefcase"></i>Work Exrerience
          </h3>
          <ul>
            <li style={{paddingTop:"50px",paddingBottom:'50px'}}>
              <span>Front-end Web Designer</span>
              <small>Apr 2016 - Now</small>
            </li>
            <li style={{paddingTop:"50px",paddingBottom:'50px'}}>
              <span>Design Assistant</span>
              <small>Mar 2015 - Dec 2015</small>
            </li>
            <li style={{paddingTop:"50px",paddingBottom:'50px'}}>
              <span>Design Assistant (Part-time)</span>
              <small>Oct 2014 - Jul 2015</small>
            </li>
          </ul>
        </div>
        <div class="edu">
          <h3>
            <i class="fa fa-graduation-cap"></i>Education
          </h3>
          <ul>
            <li style={{paddingTop:"50px",paddingBottom:'50px'}}>
              <span>Department of Information Management</span>
              <small>Set 2010 - Jun 2014</small>
            </li>
            <li style={{paddingTop:"50px",paddingBottom:'50px'}}>
              <span>Department of Data Processing</span>
              <small>Set 2007 - Jun 2010</small>
            </li>
          </ul>
        </div>
      </div>
      
     
      </div>
    </div>
  );
}

export default Quyalification;
