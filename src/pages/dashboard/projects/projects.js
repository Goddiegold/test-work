import React from "react";
import ProgressSidebar from "../../../layout/progress_sidebar/progress_sidebar";
import "../dashboard.css";
import "./projects.css";

const Projects = () => {

    return (
        <div className="dashboard_contents">
            <div className="projects">
                <div className="projects_wrapper">
                    <div className="projects_content">
                        <h1>Create project</h1>
                        <span className="big">
                        Every research work is called a project, enter specific details to get started 
                        </span>
                        <div className="report_container">
                            <div className="report_content">
                                <div className="texts">
                                    <h1>Research title</h1>
                                    <span>Add proper title</span>
                                </div>
                                <input placeholder="Name" />
                                <div className="texts">
                                    <h1>Select research type</h1>
                                    <span>Select from the available options for data collection</span>
                                </div>
                                {/* select dropdown */}
                                <div className="texts">
                                    <h1>Enter details of your research</h1>
                                    <span>Decribe your research work with text, images and notes</span>
                                </div>
                                {/* <input className="desc_input" */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProgressSidebar />
        </div>
    )
}

export default Projects;