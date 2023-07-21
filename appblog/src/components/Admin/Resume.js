import React, { useEffect, useState } from "react";

function Resume() {
  const [uploadContainer, setUploadContainer] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  //cloudinary img
  const [image, setImage] = useState("");
  //from server
  const [resume, setResume] = useState(null);
  //to server
  const [url, setUrl] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageUrl(event.target.result);
        setImage(e.target.files[0]);
      };
      reader.readAsDataURL(file);
    }
  };
  //upload to server
  const handelOnClickUpload = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "instacloneps");
    data.append("cloud_name", "psss9799");
    fetch("https://api.cloudinary.com/v1_1/psss9799/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => setUrl(data.url))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setImageUrl(""); // Reset the image URL when uploadContainer changes
  }, [uploadContainer]);

  //get from server
  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    fetch(`http://localhost:5000/api/resume/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setResume(data.imageUrl);
        console.log(data);
      })
      .catch((error) => {
        console.error("Failed to fetch resume:", error);
      });
  }, []);

  //to send to server from cludniry
  useEffect(() => {
    if (url) {
      const userId = JSON.parse(localStorage.getItem("user"))._id;
      fetch("http://localhost:5000/api/admin/add/resume", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageUrl: url,
          userId,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            console.log("Resume uploaded:", data);
            setUploadContainer(false);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [url]);

  return (
    <div>
      <div className="content-panel">
        <div className="content-header-wrapper">
          <h2 className="title">Admin Resume</h2>
          <div className="actions">
            {!uploadContainer ? (
              <button
                className="btn btn-success"
                onClick={() => setUploadContainer(true)}
              >
                <i className="fa fa-plus"></i> Upload New Item
              </button>
            ) : (
              <button
                className="btn btn-danger"
                onClick={() => setUploadContainer(false)}
              >
                <i className="fa fa-times"></i> Cancel upload
              </button>
            )}
          </div>
        </div>
        <hr />

        {!uploadContainer ? (
          <iframe style={{ width: "100%",height:'800px' }} src={resume} alt="resume" />
        ) : (
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10 col-12">
              <div className="form-group files">
                <label className="my-auto">Upload Your File</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={handleFileChange}
                />
              </div>
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt="uploaded file"
                  style={{ maxWidth: "100%" }}
                />
              )}
              <button
                className="uploadBtn"
                onClick={() => {
                  handelOnClickUpload();
                }}
              >
                Upload
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Resume;
