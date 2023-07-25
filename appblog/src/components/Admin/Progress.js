import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Progress({screen}) {
    const [newTitle, setNewTitle] = useState("");
    const [newValue, setNewValue] = useState("");
  
    // State to hold the list of description items
    const [progressData, setProgressData] = useState([]);
  
    // Function to fetch the description items from the API
    const fetchProgressData = async () => {
      try {
        const response = await fetch("/api/get/progress");
  
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
  
    const handleAddItem = async () => {
      if (newTitle && newValue) {
        try {
          const response = await fetch(
            "/api/admin/add/progress",
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
            throw new Error("Failed to add progress item");
          }
          // Clear the input fields
          setNewTitle("");
          setNewValue("");
          fetchProgressData();
          // Show success message
          toast.success("Progress item added successfully");
        } catch (error) {
          console.error(error);
          // Handle error
          toast.error("Failed to add progress item");
        }
      }
    };
    // Function to delete a description item by ID
    const deleteDescriptionItem = async (id) => {
      try {
        const response = await fetch(
          `/api/delete/progress/${id}`,
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
    
        fetchProgressData();
    
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
      {/* Add section */}
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
                type="Number"
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
      <div className={`${screen === "small" ? "col-md-6" : "col-md-12"} my-2`}>
        <div className="card mb-4 mb-md-0">
          <div className="card-body">
            <p className="mb-4">
              <span className="text-primary font-italic me-1">Assignment</span>{" "}
              Project Status
            </p>
            {progressData.map((item, index) => (
              <React.Fragment key={index}>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <p className="mb-1 " style={{ fontSize: ".77rem" }}>
                    {item.label}
                  </p>
                  <Link
                    className="text-danger"
                    onClick={() => deleteDescriptionItem(item._id)}
                  >
                    Delete
                  </Link>
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
    </div>
  );
}

export default Progress;