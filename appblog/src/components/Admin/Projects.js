import React, { useState, useRef, useEffect } from "react";
import { storage } from "../../firebase/FirebaseLink";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

function Projects() {
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
        `/api/get/projects/${type}`
      );
      const data = await response.json();

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
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // Update the avatar URL preview
    setImageUrl(file ? URL.createObjectURL(file) : null);
  };
  const uploadFile = () => {
    if (!selectedFile || !title || !link || !type || !description) {
      toast.error("Please fill all the file");
      return;
    } else {
      const fileRef = ref(storage, `projects/${selectedFile.name + uuidv4()}`);
      uploadBytes(fileRef, selectedFile).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          // Update the avatar URL with the newly uploaded file URL
          setImageUrl(url);
          // Call handleUpload function with the updated avatarUrl
          handleUpload(url);
        });
      });
    }
  };
  const handleUpload = async (url) => {
    try {
      const response = await fetch(
        `/api/admin/upload-project`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
          body: JSON.stringify({
            imageUrl: url,
            title,
            link,
            type,
            description,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        toast.success(data.message);
        setImageUrl("");
        setTitle("");
        setLink("");
        setType("");
      } else {
        const data = await response.json();
        toast.error(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Function to delete a description item by ID
  const deleteDescriptionItem = async (item) => {
    try {
      const response = await fetch(
        `/api/delete/projects/${item._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete progress item");
      }

      fetchProjects(item.type);

      // Show success message
      toast.success("Progress item deleted successfully");
    } catch (error) {
      console.error(error);
      // Handle error
      toast.error("Failed to delete progress item");
    }
  };

  return (
    <div className=" ">
      {/* input */}
      <div className="card my-3">
        <div className="card-body">
          {imageUrl && (
            <div className="col text-center">
              <img
                src={imageUrl}
                alt="pic preview"
                style={{ height: "250px", width: "250px" }}
              />
            </div>
          )}
          <div className="row">
            <div className="col">
              <input
                placeholder="Enter title"
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                placeholder="Enter link"
                type="text"
                className="form-control"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col">
              <select
                className="form-control"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Select one</option>
                <option value="web">Web</option>
                <option value="application">Application</option>
              </select>
            </div>
            <div className="col">
              <input
                placeholder="Enter description"
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="col">
            <input
              type="file"
              onChange={handleFileChange}
              className="form-control"
            />
          </div>
          <div className="col text-center">
            <button
              type="button"
              className="btn btn-primary my-2"
              onClick={uploadFile}
            >
              Add
            </button>
          </div>
        </div>
      </div>
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
                    <div class="card-body d-flex justify-content-around">
                      <button type="button" className="btn btn-primary">
                        Update
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          deleteDescriptionItem(item);
                        }}
                      >
                        Delete
                      </button>
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
                    <div class="card-body d-flex justify-content-around">
                      <button type="button" className="btn btn-primary">
                        Update
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          deleteDescriptionItem(item);
                        }}
                      >
                        Delete
                      </button>
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

export default Projects;
