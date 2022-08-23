import React, { useEffect, useState, useContext } from "react";
import "./dashboard.css";
import Header from "../../layout/header/header";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "../../layout/sidebar/sidebar";
import DashboardHome from "./dashboard_home/dashboard_home";
import ProgressSidebar from "../../layout/progress_sidebar/progress_sidebar";
import Projects from "./projects/projects";
import { UserContext } from "../../context/UserContext";
import Modal from "react-modal";
Modal.setAppElement("#root");

const Dashboard = () => {
    
    const [full, setFull] = useState(false);
    const [progressModal, setProgressModal] = useState({
        modal: false,
        slideIn: false
    })
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        return () => {
            window.addEventListener("resize", () => {
                if(window.innerWidth >= 400) setIsMobile(false);
                else setIsMobile(true);
            })
        }
    }, [])
    const toggleSidebar = () => {
        setFull(!full);
    }

    const navigate = useNavigate()
    const {userTokenDetails} = useContext(UserContext)

    useEffect(()=>{
if(userTokenDetails?.accountType==="new"|| userTokenDetails?.accountType==="participant" || !userTokenDetails?.accountConfigured) return navigate("/login")
    },[])
    
    const customStyles = {
        content: {
            width: isMobile ? "300px" : "400px",
            height: "calc(100% - 0px)",
            top: "0px",
            right: "0%",
            left: `calc(100vw - ${isMobile? "300px" : "400px"})`,
            outline: "none",
            zIndex: "10000",
            paddingTop: "0px",
            paddingBottom: "0px",
            paddingLeft: "0px",
            paddingRight: "0px",
            overflowX: "hidden",
            border: "none"
        },
        overlay : {
            background: "rgba(0, 0, 0, 0.4)",
            top: "95px",
            height: "calc(100vh - 95px)",
            zIndex: "10000"
        },
    }

    const openModal = () => {
        setProgressModal({
            modal: true,
            slideIn: true
        })
    }
    const closeModal = () => {
        setProgressModal({
            modal: true,
            slideIn: false
        })
        setTimeout(() => {
            setProgressModal({
                modal: false,
                slideIn: false
            })
        }, 1000);
    }

    return (
        <div className="dashboard">
            <Header toggleSidebar={toggleSidebar} full={full} />
            <div className="dashboard_contents">
                <Sidebar 
                openModal={openModal}
                closeModal={closeModal}
                full={full} 
                />
                <Routes>
                    <Route path="/" element={<DashboardHome full={full} />} />
                    <Route path="/projects/*" element={<Projects full={full} />} />
                </Routes>
                <Modal
                isOpen={progressModal.modal}
                onRequestClose={closeModal}
                style={customStyles}
                >
                    <ProgressSidebar 
                    closeModal={closeModal} 
                    slideIn={progressModal.slideIn} 
                    />
                </Modal>
            </div>         
        </div>
    )
}

export default Dashboard;