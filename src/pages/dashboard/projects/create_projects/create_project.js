import React, { useState, useRef } from "react";
import "./create_project.css";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import CreatePage1 from "./createPages/Page1";
import CreatePage2 from "./createPages/Page2";
import CreatePage3 from "./createPages/Page3";


const CreateProject = () => {
    
    const path = window.location.pathname;
    const navigate = useNavigate();
    const getForwardLink = () => {
        if(!path.includes("2") && !path.includes("3")) return "/dashboard/projects/create/2";
        else if(path.includes("2")) return "/dashboard/projects/create/3";
        return "/dashboard/projects/";
    }
    const getBackwardLink = () => {
        if(path.includes("2")) return "/dashboard/projects/create/";
        else if(path.includes("3")) return "/dashboard/projects/create/2";
        else return "/dashboard/projects/";
    }
    const handleBack = () => {
        const backPath = getBackwardLink();
        navigate(backPath);
    }
    return (
        <div className="create_projects">
            <div className="create_projects_wrapper">
                <div className="create_projects_content">
                    <Breadcrumb clicked={"new"} />
                    <h1>Create a project</h1>
                    <span className="big">
                    Every research work is called a project, enter specific details to get started 
                    </span>
                    <div className="report_container">
                        <Routes>
                            <Route path="/" element={<CreatePage1 />} />
                            <Route path="/2" element={<CreatePage2 />} />
                            <Route path="/3" element={<CreatePage3 />} />
                        </Routes>
                    </div>
                    <div className="create_projects_base">
                        <div className="create_projects_base_content">
                            <Link to="/dashboard/" className="create_projects_back">
                                <svg width="50" height="50" viewBox="0 0 66 66" fill="none" 
                                xmlns="http://www.w3.org/2000/svg" 
                                onClick={() => handleBack()}>
                                    <path d="M33 0.999997C50.6747 0.999996 65 15.3253 65 33C65 50.6747 50.6747 65 33 65C15.3253 65 1 50.6747 1 33C1 15.3253 15.3253 0.999999 33 0.999997Z" 
                                    stroke="#2C75D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M18.7778 33L47.2223 33" stroke="#2C75D3" strokeWidth="2" strokeLinecap="round" 
                                    strokeLinejoin="round"/>
                                    <path d="M29.4445 44.1514L18.7778 33.4847L29.4445 22.8181" stroke="#2C75D3" 
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                            <div className="create_projects_base_button">
                                <Button 
                                text={"Save & go next"} 
                                link={getForwardLink()}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* // <div className="create_projects_PS">
            //     <ProgressSidebar />
            // </div> */}
        </div>
    )
}

export default CreateProject;