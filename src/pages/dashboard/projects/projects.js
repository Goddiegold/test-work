import React, { useState } from "react";
import ProgressSidebar from "../../../layout/progress_sidebar/progress_sidebar";
import Sidebar from "../../../layout/sidebar/sidebar";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import "../dashboard.css";
import "./projects.css";
import Select from "react-select";

const Projects = ({ full }) => {

    const [state, setState] = useState({});
    const researchType = [
        {label: "Quiz", value: "Quiz"},
        {label: "Questionaire", value: "Questionaire"}
    ]
    const handleSelect = (name, val) => {
        setState({
            ...state,
            name: val.value
        })
    }
    const customStyles = {
        control: (styles) => ({
            ...styles,
            paddingTop: 5,
            paddingRight: 0,
            paddingLeft: 5,
            paddingBottom: 5,
            borderRadius: 10,
            background: "#F8F8F8"
        }),
        option: (provided, state) => ({
            ...provided,
            padding: 10
        })
    }

    return (
        <div className="dashboard_contents">
            <Sidebar full={full} />
            <div className={full ? "projects" : "projects_full"}>
                <div className="projects_wrapper">
                    <div className="projects_content">
                        <h1>Create a project</h1>
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
                                    <div className="select_dropdown">
                                        <Select 
                                        width="100%"
                                        styles={customStyles}
                                        options={researchType}
                                        isSearchable={true}
                                        onChange={(val) => handleSelect("research_type", val)}
                                        closeMenuOnSelect={true}
                                        />
                                    </div>
                                </div>
                                {/* select dropdown */}
                                <div className="texts">
                                    <h1>Enter details of your research</h1>
                                    <span>Decribe your research work with text, images and notes</span>
                                </div>
                                {/* <input className="desc_input" */}
                            </div>
                        </div>
                        <div className="projects_base">
                            <div className="projects_base_content">
                                <Link to="/dashboard/" className="projects_back">
                                    <svg width="50" height="50" viewBox="0 0 66 66" fill="none" 
                                    xmlns="http://www.w3.org/2000/svg">
                                        <path d="M33 0.999997C50.6747 0.999996 65 15.3253 65 33C65 50.6747 50.6747 65 33 65C15.3253 65 1 50.6747 1 33C1 15.3253 15.3253 0.999999 33 0.999997Z" 
                                        stroke="#2C75D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M18.7778 33L47.2223 33" stroke="#2C75D3" strokeWidth="2" strokeLinecap="round" 
                                        strokeLinejoin="round"/>
                                        <path d="M29.4445 44.1514L18.7778 33.4847L29.4445 22.8181" stroke="#2C75D3" 
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Link>
                                <div className="projects_base_button">
                                    <Button text={"Save & go next"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ProgressSidebar />
            </div>
        </div>
    )
}

export default Projects;