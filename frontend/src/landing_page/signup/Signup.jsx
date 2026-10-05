import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:3002";
const DASHBOARD_URL = "http://localhost:3000";

function Signup() {
  const [inputValue, setInputValue] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data } = await axios.post(`${API_URL}/signup`, inputValue, {
        withCredentials: true,
      });

      if (data.success) {
        window.location.href = DASHBOARD_URL;
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5 align-items-center">
        <div className="col-lg-6 text-center">
          <img
            src="media\images\signup.svg"
            alt="Signup"
            style={{ width: "100%" }}
          />
        </div>

        <div className="col-lg-5 offset-lg-1 mt-5 mt-lg-0">
          <h1 className="fs-2">Signup now</h1>
          <p className="text-muted mb-4">
            Or track your existing application
          </p>

          {error && <div className="alert alert-danger py-2">{error}</div>}

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              className="form-control form-control-lg mb-3"
              placeholder="Email"
              value={inputValue.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="username"
              className="form-control form-control-lg mb-3"
              placeholder="Username"
              value={inputValue.username}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              className="form-control form-control-lg mb-3"
              placeholder="Password"
              value={inputValue.password}
              onChange={handleChange}
              minLength={6}
              required
            />
            <button
              type="submit"
              className="btn btn-primary fs-5 w-100 mb-3"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Signup"}
            </button>
          </form>

          <p className="text-muted">
            Already have an account?{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;