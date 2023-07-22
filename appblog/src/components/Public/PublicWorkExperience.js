import React from "react";
import "../css/Qualification.css";

function PublicQuyalification() {
  const workExperience = [
    {
      position: "Front-end Web Designer",
      duration: "Apr 2016 - Now",
    },
    {
      position: "Design Assistant",
      duration: "Mar 2015 - Dec 2015",
    },
    {
      position: "Design Assistant (Part-time)",
      duration: "Oct 2014 - Jul 2015",
    },
    // Add more work experience data here
  ];

  const educationData = [
    { title: "Front-end Web Designer", duration: "Apr 2016 - Now" },
    { title: "Design Assistant", duration: "Mar 2015 - Dec 2015" },
    { title: "Design Assistant (Part-time)", duration: "Oct 2014 - Jul 2015" },
    // Add more education details here
  ];


  return (
    <div className="row">


    <div className="col-md-6 my-2">
      <div className="card mb-4 mb-md-0">
        <div className="card-body">
          <div className="work">
            <h3 style={{ whiteSpace: 'nowrap',}}>
              <i className="fa fa-briefcase"></i> Work Experience
            </h3>
            <ul style={{ padding: 0 }}>
              {workExperience.map((item, index) => (
                <li key={index} style={{ whiteSpace: 'nowrap' }}>
                  <span>{item.position}</span>
                  <small>{item.duration}</small>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>
      <div className="col-md-6 my-2">
      <div className="card mb-4 mb-md-0">
        <div className="card-body">
          <div class="work">
            <h3 style={{ whiteSpace: 'nowrap', }}>
              <i class="fa fa-graduation-cap"></i> Education
            </h3>
            <ul style={{ padding: 0 }}>
              {educationData.map((item, index) => (
                <li key={index} style={{ whiteSpace: 'nowrap', }}>
                  <span>{item.title}</span>
                  <small>{item.duration}</small>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default PublicQuyalification;
