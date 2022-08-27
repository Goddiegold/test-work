import React, { useState, useEffect } from "react";
import "./dashboard.css";
import Header from "../../layout/header/header";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../../layout/sidebar/sidebar";
import DashboardHome from "./dashboard_home/dashboard_home";
import VC from "./videoConferencing/VC";
import Projects from "./projects/projects";
// import Modal from "react-modal";
// Modal.setAppElement("#root");

const Dashboard = () => {
    
    const [full, setFull] = useState(false);
    const toggleSidebar = () => {
        setFull(!full);
    }

    return (
        <div className="dashboard">
            <Header toggleSidebar={toggleSidebar} full={full} />
            <div className="dashboard_contents">
                <Sidebar full={full} />
                <Routes>
                    <Route path="/" element={<DashboardHome full={full} />} />
                    <Route path="/projects/*" element={<Projects full={full} />} />
                    <Route path="/video-conference" element={<VC />} />
                </Routes>
            </div>         
        </div>
    )
}

export default Dashboard;