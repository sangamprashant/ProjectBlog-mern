import React, { useState, useEffect } from "react";

function PublicIntrest() {
  const [interests, setinterest] = useState([]);

  // Function to fetch the description items from the API
  const fetchinterestData = async () => {
    try {
      const response = await fetch("/api/get/interest");

      if (!response.ok) {
        throw new Error("Failed to fetch description items");
      }

      const data = await response.json();
      setinterest(data);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  // Fetch the description items when the component mounts
  useEffect(() => {
    fetchinterestData();
  }, []);
  return (
    <div>
      {interests && (
        <div className="card my-3" style={{ backgroundColor: "white" }}>
          <div className="card-body mb-4 mb-md-0">
            <h4>Interests</h4>
            <div className="interests-items">
              {interests.map((interest, index) => (
                <div key={index}>
                  <i className={` ${interest.icon}`}></i>
                  <span>{interest.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PublicIntrest;
