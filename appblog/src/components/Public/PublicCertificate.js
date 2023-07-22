import React, { useState } from "react";

function PublicCertificate() {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prevState) => !prevState);
  };

  const data = [
    { name: "Prashant srivastav", email: "srivastavp891@gmail.com" },
    { name: "Prashant srivastav", email: "srivastavp891@gmail.com" },
    { name: "Prashant srivastav", email: "srivastavp891@gmail.com" },
    { name: "Prashant srivastav", email: "srivastavp891@gmail.com" },
    // Add other data for cards here
  ];

  return (
    <div className="card p-3 my-2">
       <div className="d-flex justify-content-between align-items-center">
        <h3 style={{ whiteSpace: "nowrap" }}>
          <i className="fa fa-briefcase"></i> Certificate
        </h3>
        <h3>{data.length}</h3>
      </div>
      <div className="row">
        {data.slice(0, showAll ? data.length : 3).map((item, index) => (
          <div className="col-xl-4 col-lg-6 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{item.name}</p>
                    <p className="text-muted mb-0">{item.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {data.length > 3 && (
        <div className="text-center">
          {!showAll ? (
            <button className="btn btn-primary" onClick={toggleShowAll}>
              See More
            </button>
          ) : (
            <button className="btn btn-primary" onClick={toggleShowAll}>
              See Less
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default PublicCertificate;
