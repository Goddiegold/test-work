import React, { useEffect, useState, useContext } from "react";
import "./dashboard.css";
import Header from "../../layout/header/header";
import { Routes, Route, useNavigate } from "react-router-dom";
import DashboardHome from "./dashboard_home/dashboard_home";
import Projects from "./projects/projects";
import { UserContext } from "../../context/UserContext";

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
            <Routes>
                <Route path="/" element={<DashboardHome full={full} />} />
                <Route path="/projects" element={<Projects full={full} />} />
            </Routes>
            
        </div>
    )
}

export default Dashboard;