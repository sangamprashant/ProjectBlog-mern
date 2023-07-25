import "../css/Log.css";
import React, { useEffect, useState } from "react";
import "../css/Log.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [userName, setUserName] = useState();
  const [userNameAvailability, setUserNameAvailability] = useState("");
  const navigate = useNavigate();
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  useEffect(() => {
    if (userName) {
      // Checking username availability on input change
      fetch(`/api/admin/check-username`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setUserNameAvailability(false);
          } else {
            setUserNameAvailability(true);
          }
        })
        .catch((error) => {
          console.log(error);
          setUserNameAvailability(false);
        });
    }
  }, [userName]);

  const handleSubmit = () => {
    // Sending data to server
    fetch(`/api/admin/signup`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        userName:userName,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          notifyA(data.error);
        } else {
          notifyB(data.message);
          navigate(`/admin/signin`);
        }
        console.log(data);
      });
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="login-page">
        <div className="form">
          <p>Admin Login</p>
          <form className="login-form">
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="UserName"
              onChange={(e) => setUserName(e.target.value)}
            />
            {userNameAvailability === false && (
              <p className="WarningSignUp">UserName already taken.</p>
            )}
            {userNameAvailability === true && (
              <p className="SuccessSignUp">UserName {userName} available</p>
            )}
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
            <button type="button" onClick={handleSubmit}>
              Register
            </button>
            <p className="message">
              Already have an account?{" "}
              <Link to="/admin/signin">Login an account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
