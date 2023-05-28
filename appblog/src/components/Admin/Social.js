import React, { useState } from "react";

function Social() {
  const [uploadContainer,setUploadContainer]=useState(false)
  return (
    <div>
      <div class="content-panel">
        <div class="content-header-wrapper">
          <h2 class="title"> Admin Social </h2>
          <div class="actions">
            {!uploadContainer?<button class="btn btn-success"  onClick={()=>{setUploadContainer(true)}}>
              <i class="fa fa-plus"></i> Upload New Item
            </button>:<button class="btn btn-danger"  onClick={()=>{setUploadContainer(false)}}>
              <i class="fa fa-times"></i> Cancel Upload 
            </button>}
          </div>
        </div>
        {!uploadContainer?<>{
          <div class="follow">
            <h3>Social Links</h3>
            <div class="box" style={{ marginTop: "100px" }}>
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
          </div>
        }
        <hr />
        {
          <footer class=" text-black text-center text-lg-start">
            <div class="container p-4">
              <div
                class="row"
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                  <h5 class="text-uppercase">Footer Content</h5>

                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Iste atque ea quis molestias. Fugiat pariatur maxime quis
                    culpa corporis vitae repudiandae aliquam voluptatem veniam,
                    est atque cumque eum delectus sint!
                  </p>
                </div>

                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase mb-0">Links</h5>

                  <ul class="list-unstyled">
                    <li>
                      <a href="#!" class="text-black">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-black">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-black">
                        Link 3
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-black">
                        Link 4
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-black">
                        Link 4
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-black">
                        Link 4
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-black">
                        Link 4
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-black">
                        Link 4
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              class="text-center p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              © 2020 Copyright:
              <a class="text-black" href="https://mdbootstrap.com/">
                MDBootstrap.com
              </a>
            </div>
          </footer>
        }</>:<div className="card-0 justify-content-center ">
          <div className="card-body px-sm-4 px-0">
            <div className="row justify-content-center mb-5"></div>

            <div className="row justify-content-center round">
              <div className="col-lg-10 col-md-12 ">
                <div className="card shadow-lg card-1">
                  <div className="card-body inner-card">
                    <div className="row justify-content-center">
                      <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Title</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=" Title"
                           // value={title}
                           // onChange={(e) => {
                           //   setTitle(e.target.value);
                           // }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Link</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                           // value={tagline}
                           // onChange={(e) => {
                           //   setTagline(e.target.value);
                           // }}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Description</label>
                          <p>Write  font_awsome icon name <br/>where fa fa-(logo)</p>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Logo</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="logo"
                           // value={tagline}
                           // onChange={(e) => {
                           //   setTagline(e.target.value);
                           // }}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default Social;
