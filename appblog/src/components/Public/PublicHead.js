import React, { useState, useEffect, useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

function PublicHead() {
  const { user,setUser } = useContext(LoginContext);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/get/userprofile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: "sangamprashant",
          }),
        });
  
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
  
        const userProfiles = await response.json();
        setUser(userProfiles)
      } catch (error) {
        console.error("Error fetching user profiles:", error);
      }
    };
  
    fetchUserProfile();
  }, []);

  return (
    <div className="card my-3 py-3">
      {user ? (
        <div className=" text-center">
          <img
            src={user?.avatarUrl}
            alt="avatar"
            className="rounded-circle img-fluid"
            style={{ width: "150px" }}
          />
          <h5 className="my-3">{user?.name}</h5>
          <p className="text-muted mb-1">{user?.email}</p>
          <p className="text-muted mb-1">{user?.profession}</p>
          <p className="text-muted mb-4">{user?.location}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PublicHead;
