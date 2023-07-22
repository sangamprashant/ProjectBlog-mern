import React from "react";
import { Link } from "react-router-dom";

function TopNav() {
  const navigationItems = [
    { to: "/", label: "Profile", icon: "fa fa-user" },
    { to: "/prashant/profile", label: "Details", icon: "fa fa-user" },
    { to: "/prashant/progress", label: "Progress", icon: "fa fa-credit-card" },
    { to: "/prashant/skill", label: "Skill", icon: "fa fa-graduation-cap" },
    { to: "/prashant/qualification", label: "Qualification", icon: "fa fa-code" },
    { to: "/prashant/projects", label: "Projects", icon: "fa fa-file-text" },
    { to: "/prashant/certificates", label: "Certificates", icon: "fa fa-file-text" },
    { to: "/prashant/resume", label: "Resume", icon: "fa fa-file-text" },
    { to: "/prashant/intrest", label: "Interests", icon: "fa fa-file-text" },
    { to: "/admin/setting", label: "Settings", icon: "fa fa-cog" },
  ];

  return (
    <div>
      <div className="card my-4">
        <div className="view-account">
          <section className="module">
            <div className="module-inner">
              <div className="side-bar">
                <nav className="side-menu">
                  <ul className="nav">
                    {navigationItems.map((item, index) => (
                      <li key={index}>
                        <Link to={item.to} className="nav-item">
                          <span className={item.icon}></span> {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
