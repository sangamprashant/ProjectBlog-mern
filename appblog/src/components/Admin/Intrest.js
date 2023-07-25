import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Intrest() {
  const [interests, setinterest] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newValue, setNewValue] = useState("");

  // Function to fetch the description items from the API
  const fetchinterestData = async () => {
    try {
      const response = await fetch("/api/get/interest");

      if (!response.ok) {
        throw new Error("Failed to fetch description items");
      }

      const data = await response.json();
      setinterest(data);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  // Fetch the description items when the component mounts
  useEffect(() => {
    fetchinterestData();
  }, []);

  const handleAddItem = async () => {
    if (newTitle && newValue) {
      try {
        const response = await fetch(
          "/api/admin/add/interest",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
            body: JSON.stringify({
              label: newTitle,
              icon: newValue,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to add interest item");
        }
        // Clear the input fields
        setNewTitle("");
        setNewValue("");
        fetchinterestData();
        // Show success message
        toast.success("interest item added successfully");
      } catch (error) {
        console.error(error);
        // Handle error
        toast.error("Failed to add interest item");
      }
    }
  };
  // Function to delete a description item by ID
  const deleteDescriptionItem = async (id) => {
    try {
      const response = await fetch(
        `/api/delete/interest/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete interest item");
      }

      fetchinterestData();

      // Show success message
      toast.success("interest item deleted successfully");
    } catch (error) {
      console.error(error);
      // Handle error
      toast.error("Failed to delete interest item");
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
                placeholder="Enter label"
                type="text"
                className="form-control"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                placeholder="Enter icon :fa fa-xxxxx"
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
      <div className="card my-3" style={{ backgroundColor: "white" }}>
        <div className="card-body mb-4 mb-md-0">
          <h4>Interests</h4>
          <div className="interests-items">
            {interests.map((interest, index) => (
              <div key={index}>
                <i className={` ${interest.icon}`}></i>
                <span>{interest.label}</span>
                <Link onClick={()=>{deleteDescriptionItem(interest._id)}}>Delete</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intrest;
