import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function WebProject({ type, heading, userName }) {
  const [Projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch web projects for the user
    fetch(`http://localhost:5000/api/user/items/${userName}/${type}`)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [type, heading, userName, Projects]);

  return (
    <div>
      <div class="drive-wrapper drive-list-view">
        <div class="table-responsive drive-items-table-wrapper">
          <table class="table">
            <thead>
              <tr>
                <td class="type">
                  <i class="fa fa-folder text-primary"></i>
                </td>
                <td class="name truncate">
                  <a href="#">{heading}</a>
                </td>
                <td className="date">
                  {Projects ? Projects.length : 0} Projects
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      {Projects &&
        Projects.map((project) => (
          <div class="drive-item module text-center" style={{ width: "300px" }}>
            <div class="drive-item-inner module-inner">
              <div class="drive-item-title">
                <Link to={project.link}>{project.title}</Link>
              </div>
              <div class="drive-item-thumb">
                <a href="#">
                  <img class="img-responsive" src={project.imageUrl} alt="" />
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
        ))}
    </div>
  );
}

export default WebProject;
