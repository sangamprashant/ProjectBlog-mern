import React, { useState, useRef, useEffect } from "react";
import { storage } from "../../firebase/FirebaseLink";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Certificate() {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prevState) => !prevState);
  };

  const [certificate, setcertificate] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newdescription, setNewdescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // Update the avatar URL preview
    setImageUrl(file ? URL.createObjectURL(file) : null);
  };
  // Function to fetch the description items from the API
  const fetchcertificateData = async () => {
    try {
      const response = await fetch("/api/get/certificate");

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

  const uploadFile = () => {
    if (!selectedFile || !newTitle || !newdescription) {
      toast.error("Please fill all the file");
      return;
    } else {
      const fileRef = ref(storage, `Certificates/${selectedFile.name + uuidv4()}`);
      uploadBytes(fileRef, selectedFile).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          // Update the avatar URL with the newly uploaded file URL
          setImageUrl(url);
          // Call handleUpload function with the updated avatarUrl
          handleAddItem(url);
        });
      });
    }
  };

  const handleAddItem = async (url) => {
    if (newTitle && newdescription) {
      try {
        const response = await fetch(
          "/api/admin/add/certificate",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
            body: JSON.stringify({
              name: newTitle,
              description: newdescription,
              link: url,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to add certificate item");
        }
        // Clear the input fields
        setNewTitle("");
        setNewdescription("");
        fetchcertificateData();
        // Show success message
        toast.success("certificate item added successfully");
      } catch (error) {
        console.error(error);
        // Handle error
        toast.error("Failed to add certificate item");
      }
    }
  };
  // Function to delete a description item by ID
  const deleteDescriptionItem = async (id) => {
    try {
      const response = await fetch(
        `/api/delete/certificate/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete certificate item");
      }

      fetchcertificateData();

      // Show success message
      toast.success("certificate item deleted successfully");
    } catch (error) {
      console.error(error);
      // Handle error
      toast.error("Failed to delete certificate item");
    }
  };

  return (
    <div>
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
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                placeholder="Enter description"
                type="text"
                className="form-control"
                value={newdescription}
                onChange={(e) => setNewdescription(e.target.value)}
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
                      <img
                        src={item.link}
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">{item.name}</p>
                        <p className="text-muted mb-0">{item.description}</p>
                        <Link onClick={()=>{deleteDescriptionItem(item._id)}}>Delete</Link>
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

export default Certificate;
