import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Enter email and password");
      return;
    }

    localStorage.setItem("loggedIn", "true");
    navigate("/home");
  };

  return (
    <div className="container-fluid min-vh-100 d-flex">
      
      {/* Left */}
      <div
        className="col-md-6 d-none d-md-flex flex-column justify-content-center p-5"
        style={{
          background:
            "linear-gradient(135deg,#0f172a,#1e3a8a,#06b6d4)",
          color: "white"
        }}
      >
        <h1 className="fw-bold display-4 mb-3">
          Habit Tracker Pro 🔥
        </h1>

        <p className="fs-4 opacity-75">
          Build Discipline Daily.  
          Success follows consistency.
        </p>

        <div className="mt-4">
          <h5>✅ Track Habits</h5>
          <h5>📈 View Growth</h5>
          <h5>🏆 Unlock Badges</h5>
        </div>
      </div>

      {/* Right */}
      <div className="col-md-6 d-flex align-items-center justify-content-center bg-dark">
        <div
          className="main-card p-5"
          style={{ width: "100%", maxWidth: "430px" }}
        >
          <h2 className="fw-bold mb-4 text-center">
            Welcome Back 👋
          </h2>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <div className="input-group">
                <input
                  type={showPass ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

                <button
                  type="button"
                  className="btn btn-outline-light"
                  onClick={() =>
                    setShowPass(!showPass)
                  }
                >
                  {showPass ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="gradient-btn w-100 mt-2"
            >
              Login
            </button>
          </form>

          <p className="text-center mt-4 mb-0">
            New user?{" "}
            <Link to="/signup">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}