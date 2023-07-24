import React, { useState, useContext } from "react";
import "../css/Log.css";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginContext } from "../../context/LoginContext";
function Signin() {
  const { setLogged } = useContext(LoginContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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
          setLogged(true);
          navigate("/");
        }
        console.log(data);
      });
  };
  return (
    <div>
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
            <button type="button" onClick={postData}>
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

export default Signin;
