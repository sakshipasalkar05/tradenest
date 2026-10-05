import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:3002";
const DASHBOARD_URL = "http://localhost:3000";

function Login() {
  const [inputValue, setInputValue] = useState({
    email: "",
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
      const { data } = await axios.post(`${API_URL}/login`, inputValue, {
        withCredentials: true,
      });

      if (data.success) {
        window.location.href = DASHBOARD_URL;
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5 align-items-center">
        <div className="col-lg-6 text-center">
          <img
            src="media/images/homeHero.png"
            alt="Login"
            style={{ width: "100%" }}
          />
        </div>

        <div className="col-lg-5 offset-lg-1 mt-5 mt-lg-0">
          <h1 className="fs-2">Login to Zerodha</h1>
          <p className="text-muted mb-4">
            Welcome back. Enter your details to continue.
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
              type="password"
              name="password"
              className="form-control form-control-lg mb-3"
              placeholder="Password"
              value={inputValue.password}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="btn btn-primary fs-5 w-100 mb-3"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-muted">
            New to Zerodha?{" "}
            <Link to="/signup" style={{ textDecoration: "none" }}>
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;