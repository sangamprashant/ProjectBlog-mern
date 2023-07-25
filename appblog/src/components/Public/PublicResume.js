import React, { useEffect, useState, useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

function PublicResume({ status }) {
  const [showResume, setShowResume] = useState(false);
  const [resume, setResume] = useState("");
  const { user } = useContext(LoginContext);
  useEffect(() => {
    setShowResume(status !== "close");
  }, [status]);

  const openResume = () => {
    setShowResume(true);
  };

  const closeResume = () => {
    setShowResume(false);
  };

  // Inside the fetchProjects function
  const fetchProjects = async (type) => {
    try {
      const response = await fetch(`/api/resume/${type}`);
      const data = await response.json();
      setResume(data.imageUrl);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  // Fetch work experience and education data on component mount
  useEffect(() => {
    if (user) {
      fetchProjects(user._id);
    }
  }, [user, showResume]);
  return (
    <div>
      {resume && (
        <div className="card my-2">
          <div className="card-body">
            <h5 className="card-title">Resume</h5>
            <div className="text-center">
              {!showResume && (
                <button className="btn btn-primary " onClick={openResume}>
                  Open Resume
                </button>
              )}
              {showResume && (
                <div>
                  <embed
                    src={resume}
                    title="Resume"
                    style={{ width: "100%", height: "500px" }}
                  ></embed>
                  <button
                    className="btn btn-secondary mt-2"
                    onClick={closeResume}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PublicResume;
