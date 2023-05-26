import React, { useEffect, useState } from "react";
import "./css/Home.css";
import {useNavigate, Link } from 'react-router-dom';

function Admin() {
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [webProjects, setWebProjects] = useState([]);
  const [appProjects, setAppProjects] = useState([]);
  const userId = loggedUser._id; // Replace with the actual user ID

  useEffect(() => {
    // Fetch web projects for the user
    fetch(`http://localhost:5000/api/projects/web/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setWebProjects(data.projects);
      })
      .catch((error) => {
        console.log(error);
      });

    // Fetch app projects for the user
    fetch(`http://localhost:5000/api/projects/application/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setAppProjects(data.projects);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);


  return (
    <div>
      

              <div class="content-panel">
                <div class="content-header-wrapper">
                  <h2 class="title">My Projects</h2>
                  <div class="actions">
                    <button class="btn btn-success" onClick={()=>{navigate("/admin/upload")}}>
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
                          <td class="date">{appProjects.length}  {" "}Projects</td>
                          <td class="size">--</td>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>

                <div class="drive-wrapper drive-grid-view ">
                  <div class="grid-items-wrapper ">
                  {appProjects.map((project) => (
                    <div
                      class="drive-item module text-center"
                      style={{ width: "300px" }}
                    >
                      <div class="drive-item-inner module-inner">
                        <div class="drive-item-title">
                          <Link to={project.link}>{project.title}</Link>
                        </div>
                        <div class="drive-item-thumb">
                          <a href="#">
                            <img
                              class="img-responsive"
                              src={project.imageUrl}
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
                    </div>))}
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
                          <td class="date">{webProjects.length}  {" "}Projects</td>
                          
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
                <div class="drive-wrapper drive-grid-view ">
                  <div class="grid-items-wrapper ">
                  {webProjects.map((project) => (
                    <div
                      class="drive-item module text-center"
                      style={{ width: "300px" }}
                    >
                      <div class="drive-item-inner module-inner">
                        <div class="drive-item-title">
                          <Link to={project.link}>{project.title}</Link>
                        </div>
                        <div class="drive-item-thumb">
                          <a href="#">
                            <img
                              class="img-responsive"
                              src={project.imageUrl}
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
                    </div>))}
                  </div>
                </div>
              </div>
              
             
    </div>
  );
}

export default Admin;
