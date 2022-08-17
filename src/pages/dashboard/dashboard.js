import React, { useState } from "react";
import "./dashboard.css";
import Header from "../../layout/header/header";
import { Routes, Route } from "react-router-dom";
import DashboardHome from "./dashboard_home/dashboard_home";
import Projects from "./projects/projects";

const Dashboard = () => {
    
    const [full, setFull] = useState(false);
    const toggleSidebar = () => {
        setFull(!full);
    }
    return (
        <div className="dashboard">
            <Header toggleSidebar={toggleSidebar} />
            <Routes>
                <Route path="/" element={<DashboardHome full={full} />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
            
        </div>
    )
}

export default Dashboard;