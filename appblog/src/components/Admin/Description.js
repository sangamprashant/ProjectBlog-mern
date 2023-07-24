import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Description() {
  const [newTitle, setNewTitle] = useState("");
  const [newValue, setNewValue] = useState("");

  // State to hold the list of description items
  const [descriptionItems, setDescriptionItems] = useState([]);

  // Function to fetch the description items from the API
  const fetchDescriptionItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/get/details");

      if (!response.ok) {
        throw new Error("Failed to fetch description items");
      }

      const data = await response.json();
      setDescriptionItems(data);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  // Fetch the description items when the component mounts
  useEffect(() => {
    fetchDescriptionItems();
  }, []);

  const handleAddItem = async () => {
    if (newTitle && newValue) {
      try {
        const response = await fetch(
          "http://localhost:5000/api/admin/add/details",
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
          throw new Error("Failed to add description item");
        }
        // Clear the input fields
        setNewTitle("");
        setNewValue("");
        fetchDescriptionItems();
        // Show success message
        toast.success("Description item added successfully");
      } catch (error) {
        console.error(error);
        // Handle error
        toast.error("Failed to add description item");
      }
    }
  };
  // Function to delete a description item by ID
  const deleteDescriptionItem = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/delete/details/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
  
      if (!response.ok) {
        throw new Error("Failed to delete description item");
      }
  
      fetchDescriptionItems();
  
      // Show success message
      toast.success("Description item deleted successfully");
    } catch (error) {
      console.error(error);
      // Handle error
      toast.error("Failed to delete description item");
    }
  };
  

  return (
    <div>
      {/* ... (existing code) ... */}

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

      {/* Display section */}
      <div className="card mb-4">
        <div className="card-body">
          {descriptionItems.map((item, index) => (
            <div className="row" key={index}>
              <div className="col-sm-4">
                <p className="mb-0">{item.label}</p>
              </div>
              <div className="col-sm-4">
                <p className="text-muted mb-0">{item.value}</p>
              </div>
              <div className="col-sm-4">
                <Link
                  className="text-danger"
                  onClick={() => deleteDescriptionItem(item._id)}
                >
                  Delete
                </Link>
              </div>
              {index < descriptionItems.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Description;
