import React from "react";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
