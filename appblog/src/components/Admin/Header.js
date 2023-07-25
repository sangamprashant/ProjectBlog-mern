import React, { useState, useEffect, useContext } from "react";
import { storage } from "../../firebase/FirebaseLink";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { LoginContext } from "../../context/LoginContext";

function Header() {
  const { user,setUser } = useContext(LoginContext);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [textFields, setTextFields] = useState({
    name: "",
    email: "",
    profession: "",
    location: "",
    avatarUrl: "",
    _id: "",
  });

  useEffect(() => {
    // Set the text field values and avatar URL when the user prop changes
    setTextFields({
      name: user.name,
      email: user.email,
      profession: user.profession,
      location: user.location,
      avatarUrl: user.avatarUrl,
      _id: user._id,
    });
    setAvatarUrl(user.avatarUrl);
  }, [user]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // Update the avatar URL preview
    setAvatarUrl(file ? URL.createObjectURL(file) : user.avatarUrl);
  };

  // Handle changes to text fields
  const handleTextChange = (event) => {
    const { name, value } = event.target;
    setTextFields((prevTextFields) => ({
      ...prevTextFields,
      [name]: value,
    }));
  };

  const uploadFile = () => {
    if (!selectedFile) {
      setTextFields((prevTextFields) => ({
        ...prevTextFields,
        avatarUrl: user.avatarUrl,
      }));
      handleUpload(user.avatarUrl);
    } else {
      const fileRef = ref(storage, `image/${selectedFile.name + uuidv4()}`);
      uploadBytes(fileRef, selectedFile).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          // Update the avatar URL with the newly uploaded file URL
          setAvatarUrl(url);
          // Update the textFields with the new avatarUrl
          setTextFields((prevTextFields) => ({
            ...prevTextFields,
            avatarUrl: url,
          }));
          // Call handleUpload function with the updated avatarUrl
          handleUpload(url);
        });
      });
    }
  };

  const handleUpload = async (url) => {
    try {
      const response = await fetch(
        `/api/admin/userprofile/${user._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
          body: JSON.stringify({
            textFields: {
              ...textFields,
              avatarUrl: url,
            },
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
        // Update the user state with the new textFields and updated avatarUrl
        if (response.ok) {
          const data = await response.json();
          setMessage(data.message);
          // Update the user state with the new textFields and updated avatarUrl
          setUser((prevUser) => ({
            ...prevUser,
            textFields: {
              ...textFields,
              avatarUrl: url,
            },
          }));
        }
      } else {
        const data = await response.json();
        setMessage(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card ">
      <div className="text-center">
        <img
          src={avatarUrl}
          alt="avatar"
          className="rounded-circle img-fluid"
          style={{ width: "150px" }}
        />
        <h5 className="my-3">{textFields.name}</h5>
        <p className="text-muted mb-1">{textFields.email}</p>
        <form className="m-3">
        
          <div className="mb-3">
          <p style={{textAlign:"left"}}>Name</p>
            <input
              type="text"
              name="name"
              value={textFields.name}
              onChange={handleTextChange}
              className="form-control"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-3">
          <p style={{textAlign:"left"}}>Email</p>
            <input
              type="email"
              name="email"
              value={textFields.email}
              onChange={handleTextChange}
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-3">
          <p style={{textAlign:"left"}}>Profession</p>
            <input
              type="text"
              name="profession"
              value={textFields.profession}
              onChange={handleTextChange}
              className="form-control"
              placeholder="Profession"
            />
          </div>
          <div className="mb-3">
          <p style={{textAlign:"left"}}>Location</p>
            <input
              type="text"
              name="location"
              value={textFields.location}
              onChange={handleTextChange}
              className="form-control"
              placeholder="Location"
            />
          </div>
          <div className="mb-3">
          <p style={{textAlign:"left"}}>Image</p>
            <input
              type="file"
              onChange={handleFileChange}
              className="form-control"
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={uploadFile}
          >
            Update Profile
          </button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default Header;
