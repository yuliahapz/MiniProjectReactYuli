import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://reqres.in/api/register`, { email, password })
      .then((res) => {
        toast.success("Registration successful! Redirecting...");
        setTimeout(() => navigate("/"), 2000); 
      })
      .catch((err) => {
        toast.error("Registration failed. Please try again.");
        console.log(err);
      });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <a href="/" className="logo-link">
          <img src="./src/assets/logo.jpeg" alt="Logo" className="logo" />
        </a>
        <h1>Join Us</h1>
        <p>Welcome! Let's get you started</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <h2>Register</h2>
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
          <button type="submit">Register</button>
        </form>
        <div className="signup-link">
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
