import React from "react";
import { Link } from "react-router-dom";
import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div className="dashboard-access">
        <h1>Access Your Dashboard</h1>
        <Link to="/dashboard">
          <button className="access-dashboard-button">Access Dashboard</button>
        </Link>
        <img
          src="https://via.placeholder.com/600x300"
          alt="Dashboard Preview"
          className="dashboard-image"
        />
      </div>
      <div className="login-panel">
        <h2>Welcome Back</h2>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default WelcomePage;
