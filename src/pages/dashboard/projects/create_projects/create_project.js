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
import { LoadingSpinner } from "../../../../components/LoadingSpinner/Spinner";
import { createNewPoll, createNewProject, createNewTrivia } from "../../../../services/userService";
import { yaarnBoxMaxToken } from "../../../../context/UserContext";
import { toast } from "react-toastify";
import FormTemplate from "./createPages/formTemplate";
import { useProjectsContext } from "../../../../context/ProjectsContext";


const CreateProject = ({ viewProgress }) => {
    
    const path = window.location.pathname;
    const navigate = useNavigate();
    const [ requestLoading, setLoading ] = useState(false);
    const { setProjects } = useProjectsContext();
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
        if (requestLoading) return;
        if (backPath === "/dashboard/projects/create/") {
            setCreateData({});
            navigate("//dashboard/projects")
        }
        navigate(backPath);
    }
    const handleButtonClick = () => {
        const forwardPath = nextRoute;
        
        setLoading(true);
        
        const token = localStorage.getItem(yaarnBoxMaxToken);
        if (!token) return setLoading(false);

        switch (forwardPath) {
            case "/dashboard/projects/create/2":
                if (!createData.researchType) {
                    toast.info("Please select a research type");
                    return setLoading(false);
                }
                if (createData.researchType === "qualitative") {
                    toast.info("Still currently in development");
                    return setLoading(false);
                }
                const newProject = {
                    title: createData.title,
                    researchType: createData.researchType,
                    goal: createData.goal,
                    startDate: createData.date && createData.date.start_date.split("-").reverse().join("-"),
                    endDate: createData.date && createData.date.end_date.split("-").reverse().join("-"),
                }

                createNewProject(newProject, token).then(res => {
                    updateCreateData("project_id", res.data._id);
                    toast.success("Project successfully created!");
                    setLoading(false);
                    setProjects(prevProjects => { return [ ...prevProjects, res.data ]});
                    
                    navigate(forwardPath);
                }).catch(err => {
                    toast.error(err.response.data);
                    setLoading(false);
                })

                return

            case "/dashboard/projects/create/3":
                toast.info("Still currently in development");
                setLoading(false);
                return

            case "/dashboard/projects/create/form":
                setLoading(false);

                if (!createData.sourceSelected) return toast.info("Please select a data source.");

                return navigate(forwardPath);
            
            case "/dashboard/projects/create/invite":
                if (!createData.projectType) {
                    setLoading(false);
                    toast.error("No research selected.");
                    return navigate(-1);
                }

                if (createData.projectType === "trivia") {
                    if (!createData.project_id) return navigate("/dashboard/projects/create");

                    const formData = createData.formData;
                    const title = formData.find(formElem => formElem.element === "Header").content;
                    const formQuestions = formData.filter(formElem => formElem.element === "Paragraph").map(elem => elem.content);
                    const formOptions = formData.filter(formElem => formElem.element === "RadioButtons").map(elem => elem.options).flat();
                    const options = formOptions.map(option => option.text);
                    
                    const questions = [];
                    formQuestions.forEach((question, index) => {
                        let questionFormat = {};
                        questionFormat.options = [];
                        questionFormat.text = question;
                        questionFormat.options.push(options[index]);
                        questions.push(questionFormat);
                    })
                    const answers = formOptions.filter(option => option.correct).map(elem => elem.text);
                    
                    const newTrivia = {
                        title: title,
                        questions: questions,
                        answers: answers,
                    }
                    console.log(newTrivia)

                    createNewTrivia(newTrivia, token, "6304fa4bc2092e93a1989d1d").then(res => {
                        console.log(res);
                        setLoading(false);
                        toast.success("Successfully created trivia!");
                        navigate(forwardPath);
                    }).catch(err => {
                        toast.error(err.response.data);
                        setLoading(false);
                    })
                }
                
                setLoading(false);
                return

            default:
                setLoading(false)
                navigate(forwardPath);
        }
    }
    
    return (
        <div className={viewProgress ? "create_projects" : "create_projects_full"}>
            <div className="create_projects_wrapper">
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
                                    createData={createData}
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
                                        text={requestLoading ? <LoadingSpinner /> : "Save & go next"} 
                                        handleButtonClick={handleButtonClick}
                                        disabled={requestLoading}
                                        />
                                    </div>
                                </div> :
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