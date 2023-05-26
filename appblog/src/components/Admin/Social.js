import React from "react";

function Social() {
  return (
    <div>
      <div class="content-panel">
        <div class="content-header-wrapper">
          <h2 class="title"> Admin Social </h2>
          <div class="actions">
            <button class="btn btn-success">
              <i class="fa fa-plus"></i> Upload New Item
            </button>
          </div>
        </div>
        {<div class="follow">
          <h3>Follow</h3>
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

export default Social;
