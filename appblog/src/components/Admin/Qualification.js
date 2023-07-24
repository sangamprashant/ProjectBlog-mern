import React, { useState, useEffect } from "react";
import "../css/Qualification.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Qualification() {
  const [newTitle, setNewTitle] = useState("");
  const [newValue, setNewValue] = useState("");
  const [newType, setNewType] = useState("");
  const [workExperience, setWorkExperience] = useState([]);
  const [educationData, setEducationData] = useState([]);

  // Function to fetch Qualifications data from the server
  const fetchQualifications = async (type) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/get/Qualifications/${type}`
      );
      const data = await response.json();

      if (type === "work") {
        setWorkExperience(data); // Data is an array of objects with properties: label, value, and type
      } else if (type === "education") {
        setEducationData(data); // Data is an array of objects with properties: label, value, and type
      }
    } catch (error) {
      console.error("Error fetching qualifications:", error);
    }
  };

  // Fetch work experience and education data on component mount
  useEffect(() => {
    fetchQualifications("work");
    fetchQualifications("education");
  }, []);

  // Function to handle adding a new qualification
  const handleAddItem = async () => {
    try {
      // Validate the input fields
      if (!newTitle || !newValue || !newType) {
        alert("Please fill in all the fields.");
        return;
      }

      // Send a request to add the qualification to the server
      await fetch("http://localhost:5000/api/admin/add/Qualifications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
        body: JSON.stringify({
          label: newTitle,
          value: newValue,
          type: newType,
        }),
      });

      // Fetch updated data from the server
      fetchQualifications(newType);
      toast.success("Qualification added successfully!");
      // Clear the input fields after adding the item
      setNewTitle("");
      setNewValue("");
      setNewType("");
    } catch (error) {
      console.error("Error adding qualification:", error);
      toast.error("Error adding qualification. Please try again later.");
    }
  };

  // Function to delete a description item by ID
  const deleteDescriptionItem = async (content) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/delete/qualifications/${content._id}`,
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

      fetchQualifications(content.type);

      // Show success message
      toast.success("Progress item deleted successfully");
    } catch (error) {
      console.error(error);
      // Handle error
      toast.error("Failed to delete progress item");
    }
  };

  return (
    <div>
      {/* inputs */}
      <div className="card my-3">
        <div className="card-body">
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
                placeholder="Enter value"
                type="text"
                className="form-control"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
              />
            </div>
            <div className="col">
              <select
                className="form-control"
                value={newType}
                onChange={(e) => setNewType(e.target.value)}
              >
                <option value="">Select one</option>
                <option value="work">Work</option>
                <option value="education">Education</option>
              </select>
            </div>
            <div className="col text-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddItem}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* display */}
      <div className="row">
        <div className="col-md-6 my-2">
          <div className="card mb-4 mb-md-0">
            <div className="card-body">
              <div className="work">
                <h3 style={{ whiteSpace: "nowrap" }}>
                  <i className="fa fa-briefcase"></i> Work Experience
                </h3>
                <ul style={{ padding: 0 }}>
                  {workExperience.map((item, index) => (
                    <li key={index} style={{ whiteSpace: "nowrap" }}>
                      <hr />
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <p className="mb-1 " style={{ fontSize: ".77rem" }}>
                          {item.label}
                        </p>
                        <Link
                          className="text-danger"
                          onClick={() => deleteDescriptionItem(item)}
                        >
                          Delete
                        </Link>
                      </div>
                      <small>{item.value}</small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 my-2">
          <div className="card mb-4 mb-md-0">
            <div className="card-body">
              <div className="work">
                <h3 style={{ whiteSpace: "nowrap" }}>
                  <i className="fa fa-graduation-cap"></i> Education
                </h3>
                <ul style={{ padding: 0 }}>
                  {educationData.map((item, index) => (
                    <li key={index} style={{ whiteSpace: "nowrap" }}>
                      <hr />
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <p className="mb-1 " style={{ fontSize: ".77rem" }}>
                          {item.label}
                        </p>
                        <Link
                          className="text-danger"
                          onClick={() => deleteDescriptionItem(item)}
                        >
                          Delete
                        </Link>
                      </div>
                      <small>{item.value}</small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qualification;
