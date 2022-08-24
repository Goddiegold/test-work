import React, { useState, useRef } from "react";
import "./create_project.css";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import CreatePage1 from "./createPages/Page1";
import CreatePage2 from "./createPages/Page2";
import CreatePage3 from "./createPages/Page3";
import CreateForm from "./createPages/Page4";
import CreateInvite from "./createPages/Invite";
import CreateSuccess from "./createPages/Success";
import { useNewProjectContext } from "../../../../context/NewProjectContext";
import { LoadingSpinner } from "../../../../components/LoadingSpinner/Spinner";
import { createNewPoll, createNewProject } from "../../../../services/userService";
import { yaarnBoxMaxToken } from "../../../../context/UserContext";
import { toast } from "react-toastify";
import { useProjectDataSourceContext } from "../../../../context/ProjectDataSourceSelection";


const CreateProject = () => {
    
    const path = window.location.pathname;
    const navigate = useNavigate();
    const [ requestLoading, setLoading ] = useState(false);
    const { newProject, setNewProject } = useNewProjectContext();
    const { sourceSelected, researchItem } = useProjectDataSourceContext();

    const getForwardLink = () => {
        if(path.includes("2")) return "/dashboard/projects/create/3";
        else if(path.includes("3")) return "/dashboard/projects/create/form";
        else if(path.includes("form")) return "/dashboard/projects/create/invite";
        else if(path.includes("invite")) return "/dashboard/projects/create/success";
        else if(path.includes("success")) return "/dashboard/projects/";
        //for page 1
        else return "/dashboard/projects/create/2";
    }
    const getBackwardLink = () => {
        if(path.includes("2")) return "/dashboard/projects/create/";
        else if(path.includes("3")) return "/dashboard/projects/create/2";
        else if(path.includes("form")) return "/dashboard/projects/create/3";
        else if(path.includes("invite")) return "/dashboard/projects/create/form";
        else if(path.includes("success")) return "/dashboard/projects/create/invite";
        else return "/dashboard/projects/";
    }
    const handleBack = () => {
        const backPath = getBackwardLink();
        if (requestLoading) return;
        navigate(backPath);
    }
    const handleButtonClick = () => {
        const forwardPath = getForwardLink();
        
        setLoading(true);
        
        const token = localStorage.getItem(yaarnBoxMaxToken);
        if (!token) return setLoading(false);

        switch (forwardPath) {
            case "/dashboard/projects/create/2":
                if (newProject.researchType === "") {
                    toast.info("Please select a research type");
                    return setLoading(false);
                }
                if (newProject.researchType === "qualitative") {
                    toast.info("Still currently in development");
                    return setLoading(false);
                }
                if (newProject._id) return navigate(forwardPath);

                // createNewProject(newProject, token).then(res => {
                //     setNewProject(res.data);
                //     toast.success("Project successfully created!");
                    
                //     navigate(forwardPath);
                // }).catch(err => {
                //     toast.error(err.response.data);
                // })
                setLoading(false);
                return navigate(forwardPath);
            case "/dashboard/projects/create/3":
                if (!sourceSelected) {
                    toast.info("Please select a data source.");
                    return setLoading(false);
                }
                if (sourceSelected === "template") {
                    toast.info("Still currently in development");
                    return setLoading(false);
                }
                setLoading(false);
                return navigate(forwardPath);

            case "/dashboard/projects/create/form":
                if (!researchItem) {
                    toast.info("Please select a data source.");
                    return setLoading(false);
                }
                if (researchItem === "Customer Survey") {
                    toast.info("Still currently in development");
                    return setLoading(false);
                }
                if (researchItem === "Yaarnbox Max Questionaire") {
                    toast.info("Still currently in development");
                    return setLoading(false);
                }
                setLoading(false);
                return navigate(forwardPath);

            default:
                setLoading(false)
                navigate(forwardPath);
        }
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
                            <Route path="/form" element={<CreateForm />} />
                            <Route path="/invite" element={<CreateInvite />} />
                            <Route path="/success" element={<CreateSuccess />} />
                        </Routes>
                    </div>
                    <div className="create_projects_base">
                        {!path.includes("success") ?
                            <div className="create_projects_base_content">
                                <div className={`create_projects_back ${requestLoading ? 'disabled' : '' }`}>
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
                                    text={requestLoading ? <LoadingSpinner /> : "Save & go next"} 
                                    handleButtonClick={handleButtonClick}
                                    disabled={requestLoading}
                                    />
                                </div>
                            </div> :
                            (!path.includes("invite") &&
                                <div className="create_projects_base_content">
                                    <div className="create_projects_base_button">
                                        <Button 
                                        text={requestLoading ? <LoadingSpinner /> : "Proceed to Overview"} 
                                        handleButtonClick={handleButtonClick}
                                        disabled={requestLoading}
                                        />
                                    </div>
                                </div>
                            )
                        }
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