import React, { useState, useEffect } from "react";
import ProgressSidebar from "../../../layout/progress_sidebar/progress_sidebar";
import { Routes, Route, Link } from "react-router-dom";
import "../dashboard.css";
import "./projects.css";
import CreateProject from "./create_projects/create_project";
import ProjectsView from "./projects_view/Projects";


const Projects = ({ full }) => {

    const [state, setState] = useState({});
    const [viewProgress, setViewProgress] = useState(true);
    const toggleProgressView = () => {
        setViewProgress(!viewProgress);
    }

    return (
        <div className={full ? "projects" : "projects_full"}>
            <Routes>
                <Route 
                path="/" 
                element={<ProjectsView viewProgress={viewProgress}/>} 
                />
                <Route 
                path="/create/*" 
                element={<CreateProject viewProgress={viewProgress} />} 
                />
            </Routes>
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

export default Projects;