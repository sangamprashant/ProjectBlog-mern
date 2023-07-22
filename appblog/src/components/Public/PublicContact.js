import React from "react";
import "../css/Public.css"

function PublicContact() {
  const contactItems = [
    { icon: "fa fa-globe", content: "https://mdbootstrap.com" },
    { icon: "fa fa-github", content: "mdbootstrap" },
    { icon: "fa fa-twitter", content: "@mdbootstrap" },
    { icon: "fa fa-twitter", content: "@mdbootstrap" },
    { icon: "fa fa-twitter", content: "@mdbootstrap" },
    { icon: "fa fa-twitter", content: "@mdbootstrap" },
    { icon: "fa fa-instagram", content: "mdbootstrap" },
    { icon: "fa fa-facebook-f", content: "mdbootstrap" },
    { icon: "fa fa-instagram", content: "mdbootstrap" },
    { icon: "fa fa-instagram", content: "mdbootstrap" },
    { icon: "fa fa-instagram", content: "mdbootstrap" },
  ];

  const colors = ["#f39c12", "#333333", "#55acee", "#ac2bac", "#3b5998"];

  return (
    <div className="col-md-6 my-2 contact">
      <div className="card-body mb-4 mb-md-0">
        <ul className="list-group list-group-flush rounded-3">
          {contactItems.map((item, index) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center p-3"
              key={index}
            >
              <i
                className={`fa-lg ${item.icon}`}
                style={{ color: colors[index % colors.length], fontSize: "30px" }}
              ></i>
              <p className="mb-0">{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PublicContact;
