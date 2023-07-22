import React from "react";

function PublicProgressBar({screen}) {
  const progressData = [
    { label: "Web Design", progress: 80 },
    { label: "Website Markup", progress: 72 },
    { label: "One Page", progress: 89 },
    { label: "Mobile Template", progress: 55 },
    { label: "Backend API", progress: 66 },
    // Add more progress bar data here
  ];

  return (
    <div className={`${screen === "small" ? "col-md-6" : "col-md-12"} my-2`}>
      <div className="card mb-4 mb-md-0">
        <div className="card-body">
          <p className="mb-4">
            <span className="text-primary font-italic me-1">Assignment</span>{" "}
            Project Status
          </p>
          {progressData.map((item, index) => (
            <React.Fragment key={index}>
              <p className="mb-1" style={{ fontSize: ".77rem" }}>
                {item.label}
              </p>
              <div className="progress rounded" style={{ height: "5px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${item.progress}%` }}
                  aria-valuenow={item.progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PublicProgressBar;