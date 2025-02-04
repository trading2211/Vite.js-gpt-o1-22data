import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const times = [
    "10:30", "10:40", "10:50", "11:00", "11:10",
    "11:20", "11:30", "11:40", "11:50", "12:00",
  ];

  return (
    <div className="sidebar">
      <select className="dropdown">
        <option>E6 - Euro FX Future</option>
      </select>
      <div className="filters">
        <button>Mon</button>
        <button>Tue</button>
        <button>Wed</button>
        <button>Thu</button>
        <button>Fri</button>
      </div>
      <div className="time-buttons">
        {times.map((time) => (
          <button key={time}>{time}</button>
        ))}
      </div>
      <div className="buttons">
        <button>Long</button>
        <button>Short</button>
        <button>True</button>
        <button>False</button>
      </div>
      <button className="clear-filter">Clear Filter</button>
      <button className="settings">Settings</button>
      <div className="navigation">
        <Link to="/">
          <button>Go to Welcome Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
