import React, { useState, useRef, useEffect } from "react";
import { storage } from "../../firebase/FirebaseLink";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

function PublicProject() {
  const [showAllWeb, setShowAllWeb] = useState(false);
  const [showAllAndroid, setShowAllAndroid] = useState(false);
  const [isInitiallyRendered, setIsInitiallyRendered] = useState(false);
  const [androidData, setAndroidData] = useState([]);
  const [webData, setWebData] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [type, setType] = useState("");

  const toggleShowAllWeb = () => {
    setIsInitiallyRendered(true);
    setShowAllWeb((prevState) => !prevState);
  };

  const toggleShowAllAndroid = () => {
    setIsInitiallyRendered(true);
    setShowAllAndroid((prevState) => !prevState);
  };

  const androidRef = useRef(null);
  const webRef = useRef(null);

  useEffect(() => {
    if (isInitiallyRendered && !showAllAndroid && androidRef.current) {
      androidRef.current.scrollIntoView({ behavior: "smooth" });
      setIsInitiallyRendered(false);
    }
  }, [showAllAndroid]);

  useEffect(() => {
    if (isInitiallyRendered && !showAllWeb && webRef.current) {
      webRef.current.scrollIntoView({ behavior: "smooth" });
      setIsInitiallyRendered(false);
    }
  }, [showAllWeb]);

  // Inside the fetchProjects function
  const fetchProjects = async (type) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/get/projects/${type}`
      );
      const data = await response.json();

      console.log("Fetched data for type", type, ":", data);

      if (type === "web") {
        setWebData(data.projects); // Data is an array of objects with properties: imageUrl, email, etc.
      } else if (type === "application") {
        setAndroidData(data.projects); // Data is an array of objects with properties: imageUrl, email, etc.
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  // Fetch work experience and education data on component mount
  useEffect(() => {
    fetchProjects("web");
    fetchProjects("application");
  }, []);
  
  return (
    <div className=" ">
      {/* display */}
      <div className="card p-3 my-2" ref={androidRef}>
        <div className="d-flex justify-content-between align-items-center">
          <h3 style={{ whiteSpace: "nowrap" }}>
            <i className="fa fa-briefcase"></i> Android Projects
          </h3>
          <h3>{androidData?.length}</h3>
        </div>

        <div className="row">
          {androidData &&
            androidData
              .slice(0, showAllAndroid ? androidData.length : 3)
              .map((item, index) => (
                <div class=" col-xl-4 col-lg-6 mb-4" key={index}>
                  <div className="card">
                    <img
                      class="card-img-top"
                      src={item.imageUrl}
                      style={{ width: "200px", height: "200px" }}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">{item.title}</h5>
                      <p class="card-text">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
        {androidData?.length > 3 && (
          <div className="text-center">
            <button className="btn btn-primary" onClick={toggleShowAllAndroid}>
              {showAllAndroid ? "See Less" : "See More"}
            </button>
          </div>
        )}
      </div>
      <div className="card p-3 my-2" ref={webRef}>
        <div className="d-flex justify-content-between align-items-center">
          <h3 style={{ whiteSpace: "nowrap" }}>
            <i className="fa fa-briefcase"></i> Web Projects
          </h3>
          <h3>{webData.length}</h3>
        </div>
        <div className="row">
          {webData &&
            webData
              .slice(0, showAllWeb ? webData.length : 3)
              .map((item, index) => (
                <div class=" col-xl-4 col-lg-6 mb-4" key={index}>
                  <div className="card">
                    <img
                      class="card-img-top"
                      src={item.imageUrl}
                      style={{ width: "200px", height: "200px" }}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">{item.title}</h5>
                      <p class="card-text">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
        {webData.length > 3 && (
          <div className="text-center">
            <button className="btn btn-primary" onClick={toggleShowAllWeb}>
              {showAllWeb ? "See Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


export default PublicProject;
