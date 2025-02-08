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
        <button className="day-button">Mon</button>
        <button className="day-button">Tue</button>
        <button className="day-button">Wed</button>
        <button className="day-button">Thu</button>
        <button className="day-button">Fri</button>
      </div>
      <div className="time-buttons">
        {times.map((time) => (
          <button key={time} className="time-button">{time}</button>
        ))}
      </div>
      <div className="action-buttons">
        <button className="action-button">Long</button>
        <button className="action-button">Short</button>
        <button className="action-button">True</button>
        <button className="action-button">False</button>
      </div>
      <button className="clear-filter action-button">Clear Filter</button>
      <button className="settings action-button">Settings</button>
      <div className="navigation">
        <Link to="/">
          <button className="navigation-button">Go to Welcome Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
