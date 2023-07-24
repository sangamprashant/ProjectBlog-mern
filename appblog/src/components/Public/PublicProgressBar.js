import React, {useState,useEffect} from "react";

function PublicProgressBar({screen}) {

    // State to hold the list of description items
    const [progressData, setProgressData] = useState([]);
  
    // Function to fetch the description items from the API
    const fetchProgressData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/get/progress");
  
        if (!response.ok) {
          throw new Error("Failed to fetch description items");
        }
  
        const data = await response.json();
        setProgressData(data);
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };
  
    // Fetch the description items when the component mounts
    useEffect(() => {
      fetchProgressData();
    }, []);
  

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
            <div className="d-flex justify-content-between align-items-center mb-2" >
            <p className="mb-1 " style={{ fontSize: ".77rem" }}>
                {item.label}
              </p>
              <p className="mb-1 " style={{ fontSize: ".77rem" }}>
              {item.value}%
              </p>
            </div>
              <div className="progress rounded" style={{ height: "5px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${item.value}%` }}
                  aria-valuenow={item.value}
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