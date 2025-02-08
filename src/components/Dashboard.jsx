import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import DashboardContent from "./DashboardContent";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <DashboardContent />
        <div className="navigation">
          <Link to="/">
            <button>Go to Welcome Page</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
