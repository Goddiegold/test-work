import React, { useEffect, useState, useContext } from "react";
import "./dashboard.css";
import Header from "../../layout/header/header";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "../../layout/sidebar/sidebar";
import DashboardHome from "./dashboard_home/dashboard_home";
// import ProgressSidebar from "../../layout/progress_sidebar/progress_sidebar";
import Projects from "./projects/projects";
import { UserContext } from "../../context/UserContext";
// import Modal from "react-modal";
// Modal.setAppElement("#root");

const Dashboard = () => {
    
    const [full, setFull] = useState(false);
    const toggleSidebar = () => {
        setFull(!full);
    }

    const navigate = useNavigate()
    const {userTokenDetails} = useContext(UserContext)

    useEffect(()=>{
if(userTokenDetails?.accountType==="new"|| userTokenDetails?.accountType==="participant" || !userTokenDetails?.accountConfigured) return navigate("/login")
    },[])
    
    
    return (
        <div className="dashboard">
            <Header toggleSidebar={toggleSidebar} full={full} />
            <div className="dashboard_contents">
                <Sidebar full={full} />
                <Routes>
                    <Route path="/" element={<DashboardHome full={full} />} />
                    <Route path="/projects/*" element={<Projects full={full} />} />
                </Routes>
            </div>         
        </div>
    )
}

export default Dashboard;