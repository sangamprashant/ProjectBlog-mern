import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/Public.css"

function SideNav({footer,}) {

  // Get the first 4 items from the contactItems array
  const firstFourItems = footer.slice(0, 4);
  const colors = ["#f39c12", "#333333", "#55acee", "#ac2bac", "#3b5998"];
  return (
    <div className="contact">
      <div className=" card my-4">
        <div className="view-account">
          <section className="module">
            <div className="module-inner">
              <div className=" my-2 ">
                <div className="card-body mb-4 mb-md-0">
                  <ul className="list-group list-group-flush rounded-3">
                    {firstFourItems.map((item, index) => (
                      <li
                        className="list-group-item d-flex justify-content-between align-items-center p-3"
                        key={index}
                      >
                        <i
                          className={`fa-lg ${item.icon}`}
                          style={{
                            color: colors[index % colors.length],
                            fontSize: "30px",
                          }}
                        ></i>
                        <p className="mb-0">{item.name}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
