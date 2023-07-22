import React, { useEffect, useState } from "react";

function PublicResume({status}) {
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    setShowResume(status !== "close");
  }, [status]);

  const openResume = () => {
    setShowResume(true);
  };

  const closeResume = () => {
    setShowResume(false);
  };
  return (
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
            <iframe
              src="https://firebasestorage.googleapis.com/v0/b/academic-quries.appspot.com/o/Pdf%2Fsoftware%20engernring.pdf95726e9f-b98f-476f-8bb3-21eead9b8197?alt=media&token=1299dc3e-ffc4-4a75-8d26-185c8325eb31"
              title="Resume"
              style={{ width: "100%", height: "500px" }}
            ></iframe>
            <button className="btn btn-secondary mt-2" onClick={closeResume}>
              Close
            </button>
          </div>
        )}
        </div>
     
      </div>
    </div>
  );
}

export default PublicResume;
