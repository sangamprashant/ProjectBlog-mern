import React from "react";

function PublicDescription() {
  const descriptionData = [
    { label: "Full Name", value: "Johnatan Smith" },
    { label: "Email", value: "example@example.com" },
    { label: "Phone", value: "(097) 234-5678" },
    { label: "Mobile", value: "(098) 765-4321" },
    { label: "Address", value: "Bay Area, San Francisco, CA" },
    // Add more description details here
  ];

  return (
    <div>
      <div className="card mb-4">
        <div className="card-body">
          {descriptionData.map((item, index) => (
            <div className="row" key={index}>
              <div className="col-sm-6">
                <p className="mb-0">{item.label}</p>
              </div>
              <div className="col-sm-6">
                <p className="text-muted mb-0">{item.value}</p>
              </div>
              {index < descriptionData.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PublicDescription;
