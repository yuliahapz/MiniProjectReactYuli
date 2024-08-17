import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
        localStorage.setItem("access_token", res.data.token);  // Store the token
        navigate("/home");  // Redirect to home after successful login
      })
      .catch((err) => {
        setError(err?.response?.data?.error || "Login Failed");
      });
  };

  return (
    <div className="login-container">
      <div className="login-form">
      <h1>Welcome</h1>
      <p>We are glad to see you back with us</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
          <h2>Login</h2>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Login</button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <div className="signup-link">
          <p>Don't have an account? <a href="/register">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;