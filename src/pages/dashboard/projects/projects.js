import React, { useState, useEffect } from "react";
// import ProgressSidebar from "../../../layout/progress_sidebar/progress_sidebar";
import { Routes, Route, Link } from "react-router-dom";
import "../dashboard.css";
import "./projects.css";
import CreateProject from "./create_projects/create_project";
import ProjectsView from "./projects_view/Projects";


const Projects = ({ full }) => {

    const [state, setState] = useState({});

    return (
        <div className={full ? "projects" : "projects_full"}>
            <Routes>
                <Route path="/" element={<ProjectsView />} />
                <Route path="/create/*" element={<CreateProject />} />
            </Routes>
        </div>
    )
}

export default Projects;