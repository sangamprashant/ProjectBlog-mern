import React from "react";
import { Link } from "react-router-dom";

function TopNav({login}) {
  const token = localStorage.getItem("jwt");
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
  ];
  const AdminNavigationItems = [
    { to: "/admin/header", label: "Admin Header", icon: "fa fa-user" },
    { to: "/admin/description", label: "Admin Details", icon: "fa fa-user" },
    { to: "/admin/progress", label: "Admin Progress", icon: "fa fa-credit-card" },
    { to: "/admin/skill", label: "Admin Skill", icon: "fa fa-graduation-cap" },
    { to: "/admin/qualification", label: "Admin Qualification", icon: "fa fa-code" },
    { to: "/admin/projects", label: "Admin Projects", icon: "fa fa-file-text" },
    { to: "/admin/certificates", label: "Admin Certificates", icon: "fa fa-file-text" },
    { to: "/admin/resume", label: "Admin Resume", icon: "fa fa-file-text" },
    { to: "/admin/intrest", label: "Admin Interests", icon: "fa fa-file-text" },
    { to: "/admin/footer", label: "Admin footer", icon: "fa fa-cog" },
    { to: "/admin/setting", label: "Admin Settings", icon: "fa fa-cog" },
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
                    {(login||token)&&AdminNavigationItems.map((item, index) => (
                      <li key={index}>
                        <Link to={item.to} className="nav-item" style={{color:'blue'}}>
                          <span className={item.icon} ></span> {item.label}
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
