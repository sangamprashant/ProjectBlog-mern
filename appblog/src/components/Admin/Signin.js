import React, { useState } from 'react'
import "../css/Log.css"
import {useNavigate, Link } from 'react-router-dom';
import { toast } from "react-toastify";
function Signin() {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const navigate = useNavigate();
    const notifyA = (msg) => toast.error(msg);
    const notifyB = (msg) => toast.success(msg);
  const postData = () => {
    // Sending data to server
    fetch(`http://localhost:5000/api/admin/signin`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          notifyA(data.error);
        } else {
          notifyB("Signed In Successfully");
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
         
          navigate("/admin/profile");
        }
        console.log(data);
      });
  };
  return (
    <div style={{marginTop:"100px"}}>
      <div className="login-page">
        <div className="form">
          <p>Prashant Login</p>
          <form className="login-form">
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" 
            onClick={postData}
            >
              login
            </button>
            <p className="message">
              Not registered? <Link to="/admin/signup">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin
