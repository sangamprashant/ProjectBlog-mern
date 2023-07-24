import React, { useState, useEffect } from "react";

function PublicCertificate() {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prevState) => !prevState);
  };

  const [certificate, setcertificate] = useState([]);

  // Function to fetch the description items from the API
  const fetchcertificateData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/get/certificate");

      if (!response.ok) {
        throw new Error("Failed to fetch description items");
      }

      const data = await response.json();
      setcertificate(data);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  // Fetch the description items when the component mounts
  useEffect(() => {
    fetchcertificateData();
  }, []);

  return (
    <div>
      {/* display */}
      <div className="card p-3 my-3">
        <div className="d-flex justify-content-between align-items-center">
          <h3 style={{ whiteSpace: "nowrap" }}>
            <i className="fa fa-briefcase"></i> Certificate
          </h3>
          <h3>{certificate.length}</h3>
        </div>
        <div className="row">
          {certificate
            .slice(0, showAll ? certificate.length : 3)
            .map((item, index) => (
              <div className="col-xl-4 col-lg-6 mb-4" key={index}>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="ms-3">
                        <p className="fw-bold mb-1">{item.name}</p>
                        <p className="text-muted mb-0">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {certificate.length > 3 && (
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
    </div>
  );
}

export default PublicCertificate;
