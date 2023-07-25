import React, { useState, useEffect } from "react";

function PublicSkill({screen}) {

  const [skills,setSkills]=useState([]);
      // Function to fetch the description items from the API
      const fetchskillsData = async () => {
        try {
          const response = await fetch("/api/get/skills");
    
          if (!response.ok) {
            throw new Error("Failed to fetch description items");
          }
    
          const data = await response.json();
          setSkills(data);
        } catch (error) {
          console.error(error);
          // Handle error
        }
      };
    
      // Fetch the description items when the component mounts
      useEffect(() => {
        fetchskillsData();
      }, []);

  return (
    <div className={`${screen === "small" ? "col-md-6" : "col-md-12"} my-2`}>
      <div className="card mb-4 mb-md-0">
        <div className="card-body">
          <p className="mb-4">
            <span className="text-primary font-italic me-1">Skills</span>{" "}
            {/* Project Status */}
          </p>
          {skills.map((skill, index) => (
            <div key={index}>
              <p className="mb-1">{skill.label}</p>
              <p style={{ fontSize: ".77rem" }}>{skill.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PublicSkill;
