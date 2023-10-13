import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./components/style.css";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import SignUp from "./components/signup/SignUp";
import MoreSteps from "./components/signup/MoreSteps";
import Hosting from "./components/hosting/Hosting";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/auth-steps" element={<MoreSteps />} />
          <Route path="/platform-usage" element={<Hosting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
