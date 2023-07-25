import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Footer({ setFooter, footer, footerContent, setFooterContent,user }) {
  const [newTitle, setNewTitle] = useState("");
  const [newValue, setNewValue] = useState("");
  const [newName, setNewName] = useState("");
  const [FooterContentToInput, setFooterContentToInput] = useState("");

  // Inside the fetchProjects function
  const fetchFooterContent = async (id) => {
    try {
      const response = await fetch(`/api/Footercontent/${id}`);
      const data = await response.json();
      setFooterContentToInput(data.content);
      setFooterContent(data.content)
    } catch (error) {
      console.error("Error fetching Footer Content:", error);
    }
  };
  // Fetch work experience and education data on component mount
  useEffect(() => {
    fetchFooterContent(user._id);
  }, [user]);


  const handleUploadFooterContent = async () => {
    try {
      const response = await fetch(
        `/api/admin/add/Footercontent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
          body: JSON.stringify({
            content: FooterContentToInput,
            userId: user._id,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        toast.success("Resume uploaded successfully");
        fetchFooterContent(user._id);
      } else {
        const data = await response.json();
        toast.error(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };


  // Function to fetch the description items from the API
  const fetchfooterData = async () => {
    try {
      const response = await fetch("/api/get/footer");

      if (!response.ok) {
        throw new Error("Failed to fetch description items");
      }

      const data = await response.json();
      setFooter(data);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  // Fetch the description items when the component mounts
  useEffect(() => {
    fetchfooterData();
  }, []);

  const handleAddItem = async () => {
    if (newTitle && newValue && newName) {
      try {
        const response = await fetch(
          "/api/admin/add/footer",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
            body: JSON.stringify({
              icon: newTitle,
              link: newValue,
              name:newName
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to add footer item");
        }
        // Clear the input fields
        setNewTitle("");
        setNewValue("");
        fetchfooterData();
        // Show success message
        toast.success("footer item added successfully");
      } catch (error) {
        console.error(error);
        // Handle error
        toast.error("Failed to add footer item");
      }
    }else{
        toast.error("Please fill all the felds.");
    }
  };
  // Function to delete a description item by ID
  const deleteDescriptionItem = async (id) => {
    try {
      const response = await fetch(
        `/api/delete/footer/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete footer item");
      }

      fetchfooterData();

      // Show success message
      toast.success("footer item deleted successfully");
    } catch (error) {
      console.error(error);
      // Handle error
      toast.error("Failed to delete footer item");
    }
  };
  return (
    <div>
    {/* input details */}
    <div className="card my-3">
      
        <div className="card-body">
        <h3>Content</h3>
          <div className="row">
            <div className="col">
              <input
                placeholder="Enter content"
                type="text"
                className="form-control auto-height"
                value={FooterContentToInput}
                onChange={(e) => setFooterContentToInput(e.target.value)}
              />
            </div>
          </div>
          <div className="col text-center my-2">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUploadFooterContent}
              >
                Update Content
              </button>
            </div>
        </div>
      </div>
      {/* imput icon */}
      <div className="card my-3">
      
        <div className="card-body">
        <h3>Icon</h3>
          <div className="row">
            <div className="col">
              <input
                placeholder="Enter icon: fa fa-xxxx"
                type="text"
                className="form-control"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                placeholder="Enter link"
                type="text"
                className="form-control"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                placeholder="Enter name"
                type="text"
                className="form-control"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </div>
            
          </div>
          <div className="col text-center my-2">
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
      {/* display */}
      <div className="my-3">
        <hr />

        <footer className="text-black text-center text-lg-start ">
          <div className="follow ">
            <div className="box card py-3">
              {footer.map((item, index) => (
                <div>
                  <a
                    className="alingn-center"
                    key={index}
                    href={item.link}
                    target="_blank"
                  >
                    <i className={item.icon}></i>
                  </a>
                  <Link onClick={()=>{deleteDescriptionItem(item._id)}}>Delete</Link>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
