import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();


    axios.post(`https://reqres.in/api/login`, { email, password })
      .then((res) => {
        localStorage.setItem("access_token", res.data.token);
        setError(""); // Clear previous errors
        toast.success("Login successful!");
        setTimeout(() => navigate("/"), 2000); // Delay navigation to allow toast to appear
      })
      .catch((err) => {
        setError(err?.response?.data?.error || "Login Failed");
        toast.error(err?.response?.data?.error || "Login Failed");
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    toast.success("Logged out successfully!");
    setTimeout(() => navigate("/login"), 2000); // Delay navigation to allow toast to appear
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <Link to="/" className="logo-link">
          <img src="./src/assets/logo.jpeg" alt="Logo" className="logo" />
        </Link>
        <h1>Welcome</h1>
        <p>We are glad to see you back with us</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <div className="signup-link">
          <p>Don't have an account? <Link to="/register">Sign up</Link></p>
        </div>
        </div>
      <ToastContainer />
    </div>
  );
};

export default Login;