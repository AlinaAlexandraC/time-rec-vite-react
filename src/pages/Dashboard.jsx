import { useState } from "react";
import AdminPanel from "../components/admin/AdminPanel/AdminPanel";
import Navbar from "../components/Navbar/Navbar";
import TimeTracker from "../components/user/TimeTracker/TimeTracker";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("User");

    return (
        <div>
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === "User" && <TimeTracker />}
            {activeTab === "Admin" && <AdminPanel />}
        </div>
    );
};

export default Dashboard;