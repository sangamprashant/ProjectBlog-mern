import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function Skills({screen}) {

  const [skills,setSkills]=useState([]);
  const [newTitle, setNewTitle] = useState("");
    const [newValue, setNewValue] = useState("");
  
  
    // Function to fetch the description items from the API
    const fetchskillsData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/get/skills");
  
        if (!response.ok) {
          throw new Error("Failed to fetch description items");
        }
  
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };
  
    // Fetch the description items when the component mounts
    useEffect(() => {
      fetchskillsData();
    }, []);
  
    const handleAddItem = async () => {
      if (newTitle && newValue) {
        try {
          const response = await fetch(
            "http://localhost:5000/api/admin/add/skills",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
              },
              body: JSON.stringify({
                label: newTitle,
                value: newValue,
              }),
            }
          );
  
          if (!response.ok) {
            throw new Error("Failed to add skills item");
          }
          // Clear the input fields
          setNewTitle("");
          setNewValue("");
          fetchskillsData();
          // Show success message
          toast.success("skills item added successfully");
        } catch (error) {
          console.error(error);
          // Handle error
          toast.error("Failed to add skills item");
        }
      }
    };
    // Function to delete a description item by ID
    const deleteDescriptionItem = async (id) => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/delete/skills/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        );
    
        if (!response.ok) {
          throw new Error("Failed to delete skills item");
        }
    
        fetchskillsData();
    
        // Show success message
        toast.success("skills item deleted successfully");
      } catch (error) {
        console.error(error);
        // Handle error
        toast.error("Failed to delete skills item");
      }
    };

  return (
    <div>
    {/* input */}
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
<div className={`${screen === "small" ? "col-md-6" : "col-md-12"} my-2`}>
      <div className="card mb-4 mb-md-0">
        <div className="card-body">
          <p className="mb-4">
            <span className="text-primary font-italic me-1">Skills</span>{" "}
            Project Status
          </p>
          {skills.map((skill, index) => (
            <div key={index}>
            <hr/>
            <div className="d-flex justify-content-between align-items-center mb-2">
                  <p className="mb-1 " style={{ fontSize: ".77rem" }}>
                    {skill.label}
                  </p>
                  <Link
                    className="text-danger"
                    onClick={() => deleteDescriptionItem(skill._id)}
                  >
                    Delete
                  </Link>
                </div>
              <p style={{ fontSize: ".77rem" }}>{skill.value}</p>
             
            </div>
            
          ))}
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Skills;