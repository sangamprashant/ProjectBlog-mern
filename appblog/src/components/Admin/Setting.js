import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { LoginContext } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";

function Setting() {
  const { setLogged } = useContext(LoginContext);
  const [logOutButton, setLogOutButton] = useState(true);
  const navigate = useNavigate();
  const handelLogout = () => {
    localStorage.clear();
    navigate("/");
    setLogged(false);
    toast.success("Logged out successfully");
  };
  return (
    <div>
      <div class="content-panel">
        <div class="content-header-wrapper">
          <h2 class="title"> Admin Setting </h2>
        </div>
        <div style={{ width: "100%" }}>
          <div>
            <div className="login-page">
              <div className="form">
                <p>Setting</p>
                <form className="login-form">
                  {logOutButton ? (
                    <button
                      type="button"
                      onClick={() => {
                        setLogOutButton(false);
                      }}
                    >
                      LogOut
                    </button>
                  ) : (
                    <button
                      type="button"
                      style={{ backgroundColor: "red" }}
                      onClick={() => {
                        handelLogout();
                      }}
                    >
                      Confirm Logout
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
