import React, {useState,useEffect} from "react";

function PublicDescription() {
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


  return (
    <div>
      <div className="card mb-4">
        <div className="card-body">
          {descriptionItems.map((item, index) => (
            <div className="row" key={index}>
              <div className="col-sm-6">
                <p className="mb-0">{item.label}</p>
              </div>
              <div className="col-sm-6">
                <p className="text-muted mb-0">{item.value}</p>
              </div>
              {index < descriptionItems.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PublicDescription;
