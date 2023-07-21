import React, { useContext, useEffect, useState } from "react";
import "./css/Home.css";
import { useParams } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import Hero from "./UserNameSearched/Hero";

function Home() {
  const { setSearched,setIsSearched } = useContext(LoginContext);
  const { userName } = useParams();
  useEffect(() => {
    localStorage.removeItem("SearchedUser"); // Remove "SearchedUser" item from localStorage before making the API call

    fetch(`http://localhost:5000/api/user/searched/${userName}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.user) {
          localStorage.setItem("SearchedUser", JSON.stringify(data.user));
          setSearched(data.user);
          setIsSearched(true)
        }
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userName]);

  return (
    <div class="content-panel">
      
      <Hero/>
    </div>
  );
}

export default Home;
