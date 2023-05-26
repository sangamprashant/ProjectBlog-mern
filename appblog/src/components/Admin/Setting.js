import React, { useState } from "react";

function Setting() {
  const [logOutButton, setLogOutButton] = useState(true);
  return (
    <div>
      <div class="content-panel">
        <div class="content-header-wrapper">
          <h2 class="title"> Admin Setting </h2>
        </div>
        <div style={{ width: "100%" }}>
          <div style={{ marginTop: "100px" }}>
            <div className="login-page">
              <div className="form">
                <p>Setting</p>
                <form className="login-form">
                  {logOutButton ? (
                    <button type="button" onClick={()=>{setLogOutButton(false)}}>
                      LogOut
                    </button>
                  ) : (
                    <button type="button" style={{backgroundColor:"red"}}>Confirm Logout</button>
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
