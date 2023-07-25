import React, { useState, useRef, useEffect } from "react";
import { storage } from "../../firebase/FirebaseLink";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

function Resume({ user }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [resume, setResume] = useState("");

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
    fetchProjects(user._id);
  }, []);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // Update the avatar URL preview
    setImageUrl(file ? URL.createObjectURL(file) : null);
  };
  const uploadFile = () => {
    if (!selectedFile) {
      toast.error("Please fill all the file");
      return;
    } else {
      const fileRef = ref(storage, `resume/${selectedFile.name + uuidv4()}`);
      uploadBytes(fileRef, selectedFile).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrl(url);
          handleUpload(url);
        });
      });
    }
  };
  const handleUpload = async (url) => {
    try {
      const response = await fetch(
        `/api/admin/add/resume`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
          body: JSON.stringify({
            imageUrl: url,
            userId: user._id,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        toast.success("Resume uploaded successfully");
        setImageUrl("");
        fetchProjects(user._id);
      } else {
        const data = await response.json();
        toast.error(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {/* input  */}
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title">Resume</h5>
          <div className="text-center">
            <div className="col">
              <input
                type="file"
                onChange={handleFileChange}
                className="form-control"
              />
            </div>
            {imageUrl && (
              <div>
                <embed
                  src={imageUrl}
                  title="Resume"
                  style={{ width: "100%", height: "500px" }}
                ></embed>
              </div>
            )}
            <button className="btn btn-secondary mt-2" onClick={uploadFile}>
              Update
            </button>
          </div>
        </div>
      </div>
      {/* display */}
      {resume && (
        <div className="card my-2">
          <div className="card-body">
            <h5 className="card-title">Resume</h5>
            <div className="text-center">
              <div>
                <embed
                  src={resume}
                  title="Resume"
                  style={{ width: "100%", height: "500px" }}
                ></embed>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Resume;
