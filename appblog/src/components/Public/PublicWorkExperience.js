import React, { useState, useEffect } from "react";
import "../css/Qualification.css";

function PublicQuyalification() {
  const [workExperience, setWorkExperience] = useState([]);
  const [educationData, setEducationData] = useState([]);
  // Function to fetch Qualifications data from the server
  const fetchQualifications = async (type) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/get/Qualifications/${type}`
      );
      const data = await response.json();

      if (type === "work") {
        setWorkExperience(data); // Data is an array of objects with properties: label, value, and type
      } else if (type === "education") {
        setEducationData(data); // Data is an array of objects with properties: label, value, and type
      }
    } catch (error) {
      console.error("Error fetching qualifications:", error);
    }
  };

  // Fetch work experience and education data on component mount
  useEffect(() => {
    fetchQualifications("work");
    fetchQualifications("education");
  }, []);

  return (
    <div className="row">
      <div className="col-md-6 my-2">
        <div className="card mb-4 mb-md-0">
          <div className="card-body">
            <div className="work">
              <h3 style={{ whiteSpace: "nowrap" }}>
                <i className="fa fa-briefcase"></i> Work Experience
              </h3>
              <ul style={{ padding: 0 }}>
                {workExperience.map((item, index) => (
                  <li key={index} style={{ whiteSpace: "nowrap" }}>
                    <span>{item.label}</span>
                    <small>{item.value}</small>
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
              <h3 style={{ whiteSpace: "nowrap" }}>
                <i class="fa fa-graduation-cap"></i> Education
              </h3>
              <ul style={{ padding: 0 }}>
                {educationData.map((item, index) => (
                  <li key={index} style={{ whiteSpace: "nowrap" }}>
                    <span>{item.label}</span>
                    <small>{item.value}</small>
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
