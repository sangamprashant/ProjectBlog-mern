import React from "react";
import Quyalification from "./Quyalification";
import SoftSkill from "./SoftSkill";

function Profile() {
  return (
    <div>
      <div class="content-panel">
        <div class="content-header-wrapper">
          <h2 class="title"> Admin Profile </h2>
          <div class="actions">
            <button class="btn btn-success">
              <i class="fa fa-plus"></i> Upload New Item
            </button>
          </div>
        </div>
        
        {<div class="work">
          <h3>
            <i class="fa fa-briefcase"></i>Work Exrerience
          </h3>
          <ul>
            <li>
              <span>Front-end Web Designer</span>
              <small>Apr 2016 - Now</small>
            </li>
            <li>
              <span>Front-end Web Designer</span>
              <small>Apr 2016 - Now</small>
            </li>
            <li>
              <span>Front-end Web Designer</span>
              <small>Apr 2016 - Now</small>
            </li>
            <li>
              <span>Front-end Web Designer</span>
              <small>Apr 2016 - Now</small>
            </li>
            <li>
              <span>Front-end Web Designer</span>
              <small>Apr 2016 - Now</small>
            </li>
            <li>
              <span>Front-end Web Designer</span>
              <small>Apr 2016 - Now</small>
            </li>
            <li>
              <span>Front-end Web Designer</span>
              <small>Apr 2016 - Now</small>
            </li>
            <li>
              <span>Design Assistant</span>
              <small>Mar 2015 - Dec 2015</small>
            </li>
            <li>
              <span>Design Assistant (Part-time)</span>
              <small>Oct 2014 - Jul 2015</small>
            </li>
          </ul>
        </div>}
        {<div class="edu">
          <h3>
            <i class="fa fa-graduation-cap"></i>Education
          </h3>
          <ul>
            <li>
              <span>Department of Information Management</span>
              <small>Set 2010 - Jun 2014</small>
            </li>
            <li>
              <span>Department of Data Processing</span>
              <small>Set 2007 - Jun 2010</small>
            </li>
          </ul>
        </div>}
        <br/>
      {<div class="skills-prog">
     
      <ul>
        <li data-percent="92" style={{marginTop:"50px",marginBottom:'50px'}} ><span>HTML5 & PUG</span>
          <div class="skills-bar">
            <div class="bar"style={{width:'100%'}}> </div>
          </div>
        </li>
        <li data-percent="92" style={{marginTop:"50px",marginBottom:'50px'}}><span>HTML5 & PUG</span>
          <div class="skills-bar">
            <div class="bar"style={{width:'60%'}}></div>
          </div>
        </li>
        <li data-percent="92" style={{marginTop:"50px",marginBottom:'50px'}}><span>HTML5 & PUG</span>
          <div class="skills-bar">
            <div class="bar"style={{width:'40%'}}></div>
          </div>
        </li>
        <li data-percent="92" style={{marginTop:"50px",marginBottom:'50px'}}><span>HTML5 & PUG</span>
          <div class="skills-bar">
            <div class="bar"style={{width:'90%'}}></div>
          </div>
        </li>
        <li data-percent="92"><span>HTML5 & PUG</span>
          <div class="skills-bar">
            <div class="bar"style={{width:'50%'}}></div>
          </div>
        </li>
        
      </ul>
    </div>}
    {<div class="interests-items" style={{marginTop:"150px"}}>
        <div class="draw"><i class="fa fa-paint-brush"></i><span>Draw</span></div>
        <div class="movie"><i class="fa fa-film"></i><span>Movie</span></div>
        <div class="music"><i class="fa fa-headphones"></i><span>Music</span></div>
        <div class="game"><i class="fa fa-gamepad"></i><span>Game</span></div>
      </div>}
      <br/>
    {<div class="follow">
          <div class="box">
            <a href="javascript:void(0);">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="javascript:void(0);">
              <i class="fa fa-github"></i>
            </a>
            <a href="javascript:void(0);">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="javascript:void(0);">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="javascript:void(0);">
              <i class="fa fa-pinterest-p"></i>
            </a>
            <a href="javascript:void(0);">
              <i class="fa fa-tumblr"></i>
            </a>
            <a href="https://codepen.io/xichen/" target="_blank">
              <i class="fa fa-codepen"></i>
            </a>
          </div>
        </div>}
      </div>
      
    </div>
  );
}

export default Profile;
