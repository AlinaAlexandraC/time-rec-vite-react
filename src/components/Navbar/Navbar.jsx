// Shows navigation links (only relevant ones per role).
// Optionally displays the logged-in username.
// Includes Logout button.

import "./Navbar.css";
import { useEffect, useState } from "react";
import helpIcon from "../../assets/help.svg";
import logoIcon from "../../assets/logo.svg";

const Navbar = ({ activeTab, setActiveTab }) => {
  const formatTime = (time) => {
    return time.toLocaleString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  const [currentTime, setCurrentTime] = useState(() => formatTime(new Date()));

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCurrentTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(timeoutId);
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-dashboard">
          <img src={logoIcon} alt="logo" className="navbar-logo" />
          <span className="navbar-title">Dashboard</span>
        </div>
        <div className="navbar-tabs">
          <div
            className={`navbar-tab ${activeTab === "User" ? "active" : ""}`}
            onClick={() => setActiveTab("User")}
          >
            <span>User Panel</span>
          </div>
          <div
            className={`navbar-tab ${activeTab === "Admin" ? "active" : ""}`}
            onClick={() => setActiveTab("Admin")}
          >
            <span>Admin Panel</span>
          </div>
        </div>
      </div>
      <div className="navbar-time">
        <span>{currentTime}</span>
        <img src={helpIcon} alt="help" className="navbar-help-icon" />
      </div>
    </div>
  );
};

export default Navbar;
