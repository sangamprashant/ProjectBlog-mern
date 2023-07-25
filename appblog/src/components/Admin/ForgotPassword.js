import React, { useState, useContext } from "react";
import "../css/Log.css";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginContext } from "../../context/LoginContext";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpEnter, setOtpEnter] = useState(false);
  const [rePasswordError, setRePasswordError] = useState(false);
  const [incorrectAttempts, setIncorrectAttempts] = useState(0);
  const [otpError, setOtpError] = useState(false);
  const [passwordPart, setPasswordPart] = useState(false);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const navigate = useNavigate();

  const generateOtp = () => {
    if (!email) {
      toast.error("Please enter a email.");
      return;
    }
    // Sending data to server
    fetch("/api/check/email", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          toast.success(data.message);
          setGeneratedOtp(data.otp);
          setOtpEnter(true);
        } else {
          toast.error(data.error);
          setOtpEnter(false);
        }
      });
  };
  const verifyOtp = () => {
    if (incorrectAttempts >= 2) {
      // Reload the page after three incorrect attempts
      window.location.reload();
      return;
    }

    if (generatedOtp === Number(otp)) {
      // When OTP matches
      setPasswordPart(true);
    } else {
      setOtpError(true);
      setIncorrectAttempts(incorrectAttempts + 1);
    }
  };

  const passwordReset = () => {
    if (password === rePassword) {
      // Sending data to server
      fetch("/api/admin/backend/reset-password", {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          newPassword: password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            toast.success(data.message);
            navigate("/admin/signin");
          } else {
            toast.error(data.error);
          }
        });
    } else {
      setRePasswordError(true);
    }
  };

  return (
    <div>
      <div className="login-page">
        {!passwordPart ? (
          <div className="form">
            <p>Forgot password</p>
            <form className="login-form">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {otpEnter && (
                <>
                  <input
                    type="number"
                    placeholder="OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  {otpError && <p style={{ color: "red" }}>Wrong otp..</p>}
                </>
              )}
              {otpEnter ? (
                <button
                  type="button"
                  onClick={() => {
                    verifyOtp();
                  }}
                >
                  Verify
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    generateOtp();
                  }}
                >
                  Generate Otp
                </button>
              )}
            </form>
          </div>
        ) : (
          <div className="form">
            <p>New password</p>
            <form className="login-form">
              <input
                type="password"
                placeholder="New password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <input
                type="password"
                placeholder="Re-enter"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
              {rePasswordError && (
                <p style={{ color: "red" }}>Password not match..</p>
              )}

              <button
                type="button"
                onClick={() => {
                  passwordReset();
                }}
              >
                Set Password
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
