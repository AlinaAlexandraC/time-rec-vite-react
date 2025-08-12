// Accessible only by admins.
// Page for viewing/editing past shifts for any user/date.

import { useState } from "react";
import "./AdminPanel.css";
import UserList from "../UserList/UserList";
import TeamOverview from "../TeamOverview/TeamOverview";
import ExportData from "../ExportData/ExportData";

// Contains:

// <UserList /> – dropdown or table of users.
// <DateSelector /> – pick a date or range.
// <ShiftHistoryTable /> – display all shifts for selected user/date.
// <ShiftEditor /> – modal or inline editor for editing shift details.

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="admin-panel-container">
      <div className="admin-panel-tabs">
        <div
          className={`admin-tab ${
            activeTab === "TeamOverview" ? "active" : ""
          }`}
          onClick={() => setActiveTab("TeamOverview")}
        >
          <span>Team Overview</span>
        </div>
        <div
          className={`admin-tab ${
            activeTab === "UserManagement" ? "active" : ""
          }`}
          onClick={() => setActiveTab("UserManagement")}
        >
          <span>User Management</span>
        </div>
        <div
          className={`admin-tab ${activeTab === "ExportData" ? "active" : ""}`}
          onClick={() => setActiveTab("ExportData")}
        >
          <span>Export Data</span>
        </div>
      </div>
      {activeTab === "TeamOverview" && <TeamOverview />}
      {activeTab === "UserManagement" && <UserList />}
      {activeTab === "ExportData" && <ExportData />}
    </div>
  );
};

export default AdminPanel;
