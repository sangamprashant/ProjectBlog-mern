import React from "react";

function PublicSkill({screen}) {
  const skills = [
    { category: "Android Developer", details: "Works on Java and Kotlin" },
    {
      category: "Fullstack developer",
      details: "React.js, Node.js, HTML, CSS, JavaScript, MERN",
    },
    {
      category: "Language",
      details: "C, Java, Kotlin, HTML, CSS, React, JavaScript, Node",
    },
    { category: "Database", details: "MySQL, MongoDB" },
    {
      category: "Software",
      details:
        "VS-Code, Android Studio, MS-Office, Adobe Photoshop, Video and photo editing software",
    },
  ];

  return (
    <div className={`${screen === "small" ? "col-md-6" : "col-md-12"} my-2`}>
      <div className="card mb-4 mb-md-0">
        <div className="card-body">
          <p className="mb-4">
            <span className="text-primary font-italic me-1">Skills</span>{" "}
            Project Status
          </p>
          {skills.map((skill, index) => (
            <div key={index}>
              <p className="mb-1">{skill.category}</p>
              <p style={{ fontSize: ".77rem" }}>{skill.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PublicSkill;
