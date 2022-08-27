import React, { useState, useRef } from "react";
import "./create_project.css";
import "../projects.css";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import ProgressSidebar from "../../../../layout/progress_sidebar/progress_sidebar";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import CreatePage1 from "./createPages/Page1";
import CreatePage2 from "./createPages/Page2";
import CreatePage3 from "./createPages/Page3";
import CreateForm from "./createPages/Page4";
import CreateInvite from "./createPages/Invite";
import CreateSuccess from "./createPages/Success";
import FormTemplate from "./createPages/formTemplate";


const CreateProject = () => {
    
    const path = window.location.pathname;
    const navigate = useNavigate();
    //createData is the entire data created
    //this is one you can send to backend after last route
    //last route being invite page
    const [createData, setCreateData] = useState({});
    const [nextRoute, setNextRoute] = useState("/dashboard/projects/create/3");
    const updateCreateData = (name, value) => {
        setCreateData({
            ...createData,
            [name]: value
        })
    }
    const [viewProgress, setViewProgress] = useState(true);
    const toggleProgressView = () => {
        setViewProgress(!viewProgress);
    }
    const updateNextRoute = (val) => {
        setNextRoute(val);
    }

    const getBackwardLink = () => {
        if(path.includes("2")) return "/dashboard/projects/create/";
        else if(path.includes("3")) return "/dashboard/projects/create/2";
        else if(path.includes("form")) {
            let paths = path.split("/");
            if(paths[paths.length-1]==="form") return "/dashboard/projects/create/2";
            else return "/dashboard/projects/create/3";
        }
        else if(path.includes("invite")) return "/dashboard/projects/create/form";
        else if(path.includes("success")) return "/dashboard/projects/create/invite";
        else return "/dashboard/projects/";
    }
    const handleBack = () => {
        const backPath = getBackwardLink();
        navigate(backPath);
    }
    const handleButtonClick = () => {
        // const forwardPath = getForwardLink();
        const forwardPath = nextRoute;
        navigate(forwardPath);
    }
    
       
    return (
        <div className="create_projects">
            <div className={`create_projects_wrapper${viewProgress?"":"_full"}`}>
                <div className="create_projects_content">
                    <Breadcrumb clicked={"new"} />
                    <h1>Create a project</h1>
                    <span className="big">
                    Every research work is called a project, enter specific details to get started 
                    </span>
                    <div className="report_container">
                        <Routes>
                            <Route 
                                path="/" 
                                element={
                                    <CreatePage1 
                                    updateCreateData={updateCreateData}
                                    updateNextRoute={updateNextRoute} 
                                    />
                                } 
                            />
                            <Route 
                                path="/2" 
                                element={
                                    <CreatePage2 
                                    updateCreateData={updateCreateData} 
                                    updateNextRoute={updateNextRoute} 
                                    />
                                } 
                            />
                            <Route 
                                path="/3" 
                                element={
                                    <CreatePage3 
                                    updateCreateData={updateCreateData} 
                                    updateNextRoute={updateNextRoute} 
                                    />
                                } 
                            />
                            <Route 
                                path="/form" 
                                element={
                                    <CreateForm 
                                    updateCreateData={updateCreateData}
                                    updateNextRoute={updateNextRoute}  
                                    />
                                } 
                            />
                            <Route 
                                path="/customer-survey-form" 
                                element={
                                    <FormTemplate 
                                    updateCreateData={updateCreateData}
                                    updateNextRoute={updateNextRoute} 
                                    type={"customer-survey-form"} 
                                    />
                                } 
                            />
                            <Route 
                                path="/yaarnbox-max-poll-form" 
                                element={
                                    <FormTemplate 
                                    updateCreateData={updateCreateData}
                                    updateNextRoute={updateNextRoute}  
                                    type={"yaarnbox-max-poll-form"}
                                    />
                                } 
                            />
                            <Route 
                                path="/yaarnbox-max-questionaire-form" 
                                element={
                                    <FormTemplate 
                                    updateCreateData={updateCreateData}
                                    updateNextRoute={updateNextRoute} 
                                    type={"yaarnbox-max-questionaire-form"} 
                                    />
                                } 
                            />
                            <Route 
                                path="/yaarnbox-max-trivia-form" 
                                element={
                                    <FormTemplate 
                                    updateCreateData={updateCreateData}
                                    updateNextRoute={updateNextRoute} 
                                    type={"yaarnbox-max-trivia-form"} 
                                    />
                                } 
                            />
                            <Route 
                                path="/invite" 
                                element={
                                    <CreateInvite 
                                    createData={createData} 
                                    />
                                } 
                            />
                            <Route 
                                path="/success" 
                                element={
                                    <CreateSuccess 
                                    updateCreateData={updateCreateData} 
                                    updateNextRoute={updateNextRoute} 
                                    />
                                } 
                            />
                        </Routes>
                    </div>
                    <div className="create_projects_base">
                        {!path.includes("invite") &&
                            (!path.includes("success") ?
                                <div className="create_projects_base_content">
                                    <div className="create_projects_back">
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
                                    </div>
                                    <div className="create_projects_base_button">
                                        <Button 
                                        text={"Save & go next"} 
                                        handleButtonClick={handleButtonClick}
                                        />
                                    </div>
                                </div> :
                                <div className="create_projects_base_content">
                                    <div className="create_projects_base_button">
                                        <Button 
                                        text={"Proceed to Overview"} 
                                        handleButtonClick={handleButtonClick}
                                        />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div 
            className={viewProgress ? "PSD_toggler_full" : "PSD_toggler"}
            onClick={() => setViewProgress(!viewProgress)}>
                <svg width="25" height="20" viewBox="0 0 25 20" fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="2" fill="white"/>
                    <rect y="8" width="20" height="2" fill="white"/>
                    <rect y="16" width="20" height="2" fill="white"/>
                </svg>
            </div>
            {viewProgress &&
                <ProgressSidebar viewProgress={viewProgress} />
            }
        </div>
    )
}

export default CreateProject;