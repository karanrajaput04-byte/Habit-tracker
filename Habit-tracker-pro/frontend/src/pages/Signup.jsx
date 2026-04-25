import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSignup = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.password
    ) {
      alert("Fill all fields");
      return;
    }

    alert("Account Created Successfully 🔥");
    navigate("/");
  };

  return (
    <div className="container-fluid min-vh-100 d-flex bg-dark justify-content-center align-items-center">
      <div
        className="main-card p-5"
        style={{ width: "100%", maxWidth: "460px" }}
      >
        <h2 className="fw-bold text-center mb-4">
          Create Account 🚀
        </h2>

        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label>Full Name</label>
            <input
              className="form-control"
              placeholder="Enter name"
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value
                })
              }
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              className="form-control"
              placeholder="Enter email"
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value
                })
              }
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Create password"
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value
                })
              }
            />
          </div>

          <button className="gradient-btn w-100">
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4 mb-0">
          Already have account?{" "}
          <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}