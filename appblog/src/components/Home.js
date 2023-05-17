import React from "react";
import "./css/Home.css";

function Home() {
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
                     Prashant Srivastav <br/>
                      <label class="label label-info">UX Designer</label>
                    </li>
                   
                    <li class="activity">Last logged in: Today at 2:18pm</li>
                  </ul>
                </div>
                <nav class="side-menu">
                  <ul class="nav">
                    <li>
                      <a href="#">
                        <span class="fa fa-user"></span> Profile
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="fa fa-cog"></span> Settings
                      </a>
                    </li>
                    <li class="active">
                      <a href="#">
                        <span class="fa fa-credit-card"></span> Billing
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="fa fa-envelope"></span> Messages
                      </a>
                    </li>

                    <li>
                      <a href="user-drive.html">
                        <span class="fa fa-th"></span> Drive
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="fa fa-clock-o"></span> Reminders
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div class="content-panel">
                <div class="content-header-wrapper">
                  <h2 class="title">My Projects</h2>
                  <div class="actions">
                    <button class="btn btn-success">
                      <i class="fa fa-plus"></i> Upload New Item
                    </button>
                  </div>
                </div>
                <div class="drive-wrapper drive-list-view">
                  <div class="table-responsive drive-items-table-wrapper">
                    <table class="table">
                      <thead>
                        <tr>
                          <td class="type">
                            <i class="fa fa-folder text-primary"></i>
                          </td>
                          <td class="name truncate">
                            <a href="#">Android Projects </a>
                          </td>
                          <td class="date">Jan 03, 2015</td>
                          <td class="size">--</td>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>

                <div class="drive-wrapper drive-grid-view ">
                  <div class="grid-items-wrapper ">
                    <div
                      class="drive-item module text-center"
                      style={{ width: "300px" }}
                    >
                      <div class="drive-item-inner module-inner">
                        <div class="drive-item-title">
                          <a href="#">Image DS2314.JPG</a>
                        </div>
                        <div class="drive-item-thumb">
                          <a href="#">
                            <img
                              class="img-responsive"
                              src="https://bootdey.com/img/Content/avatar/avatar6.png"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div class="drive-item-footer module-footer">
                        <ul class="utilities list-inline">
                          <li>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="Download"
                            >
                              <i class="fa fa-download"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="Delete"
                            >
                              <i class="fa fa-trash"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="drive-wrapper drive-list-view">
                  <div class="table-responsive drive-items-table-wrapper">
                    <table class="table">
                      <thead>
                        <tr>
                          <td class="type">
                            <i class="fa fa-folder text-primary"></i>
                          </td>
                          <td class="name truncate">
                            <a href="#">Web Projects</a>
                          </td>
                          <td class="date">10 Projects</td>
                          
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
                <div class="drive-wrapper drive-grid-view ">
                  <div class="grid-items-wrapper ">
                    <div
                      class="drive-item module text-center"
                      style={{ width: "300px" }}
                    >
                      <div class="drive-item-inner module-inner">
                        <div class="drive-item-title">
                          <a href="#">Image DS2314.JPG</a>
                        </div>
                        <div class="drive-item-thumb">
                          <a href="#">
                            <img
                              class="img-responsive"
                              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div class="drive-item-footer module-footer">
                        <ul class="utilities list-inline">
                          <li>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="Download"
                            >
                              <i class="fa fa-download"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              data-original-title="Delete"
                            >
                              <i class="fa fa-trash"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
