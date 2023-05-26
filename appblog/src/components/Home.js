import React, { useEffect, useState } from "react";
import "./css/Home.css";
import { useParams } from "react-router-dom";

function Home({setSearchedUser}) {
  const { userName } = useParams();
  useEffect(() => {
    localStorage.removeItem("SearchedUser"); // Remove "SearchedUser" item from localStorage before making the API call
  
    fetch(`http://localhost:5000/api/user/searched/${userName}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.user) {
          localStorage.setItem("SearchedUser", JSON.stringify(data.user));
          setSearchedUser(data.user)
        }
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userName]);

  return (
    <div class="content-panel">
      {" "}
      <div class="content-header-wrapper">
        <h2 class="title">My Projects</h2>
      </div>
      fdfd
    </div>
  );
}

export default Home;
