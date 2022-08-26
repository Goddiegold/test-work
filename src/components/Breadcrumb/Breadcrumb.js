import React from "react";
import "./Breadcrumb.css";
import { useNavigate } from "react-router-dom";

const Breadcrumb = ({ clicked }) => {

    const navigate = useNavigate();
    const handleBreadcrumbRoute = (val) => {
        if(val == "home") navigate("/dashboard/");
        else if(val == "projects") navigate("/dashboard/projects/");
        else navigate("/dashboard/projects/create/")
    }

    return (
        <div className="breadCrumb">
            <div className="breadcrumb_content">
                <div className="breadcrumb_home">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" 
                    xmlns="http://www.w3.org/2000/svg" className="home_svg">
                        <path d="M5 12H3L12 3L21 12H19" stroke={clicked=="home"?"#2F80ED":"#667085"} strokeWidth="1.66667" 
                        strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 12V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12" 
                        stroke={clicked=="home"?"#2F80ED":"#667085"} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 21V15C9 14.4696 9.21071 13.9609 9.58579 13.5858C9.96086 13.2107 10.4696 13 11 13H13C13.5304 13 14.0391 13.2107 14.4142 13.5858C14.7893 13.9609 15 14.4696 15 15V21" 
                        stroke={clicked=="home"?"#2F80ED":"#667085"} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="breadcrumb_txt" 
                    onClick={() => handleBreadcrumbRoute("home")}
                    style={{color: clicked=="home"?"#2F80ED":"#667085"}}>
                        Home
                    </span>
                    <span className="breadcrumb_txt" 
                    style={{color: clicked=="home"?"#2F80ED":"#667085"}}>
                        {">"}
                    </span>
                </div>
                <div className="breadcrumb_projects">
                    <svg width="14" height="14" viewBox="0 0 22 22" fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 2.48148C1 2.48148 3.85714 1 11 1C18.1429 1 21 2.48148 21 2.48148L13.1429 12.1111V18.7778L8.85714 21V12.1111L1 2.48148Z" 
                        stroke={clicked=="projects"?"#2F80ED":"#AAAAAA"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="breadcrumb_txt" 
                    onClick={() => handleBreadcrumbRoute("projects")}
                    style={{color: clicked=="projects"?"#2F80ED":"#667085"}}>
                        Projects
                    </span>
                    <span className="breadcrumb_txt" 
                    style={{color: clicked=="projects"?"#2F80ED":"#667085"}}>
                        {">"}
                    </span>
                </div>
                {/* {clicked==="new" && */}
                    <div className="breadcrumb_new">
                        <svg width="14" height="14" viewBox="0 0 24 24" 
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V15" 
                            stroke={clicked=="new"?"#2F80ED":"#AAAAAA"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9 15H12L20.5 6.49998C20.8978 6.10216 21.1213 5.56259 21.1213 4.99998C21.1213 4.43737 20.8978 3.89781 20.5 3.49998C20.1022 3.10216 19.5626 2.87866 19 2.87866C18.4374 2.87866 17.8978 3.10216 17.5 3.49998L9 12V15Z" 
                            stroke={clicked=="new"?"#2F80ED":"#AAAAAA"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16 5L19 8" stroke={clicked=="new"?"#2F80ED":"#AAAAAA"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                        <span className="breadcrumb_txt" 
                        onClick={() => handleBreadcrumbRoute("new")}
                        style={{color: clicked=="new"?"#2F80ED":"#667085"}}>
                            New
                        </span>
                        <span className="breadcrumb_txt" 
                        style={{color: clicked=="new"?"#2F80ED":"#667085"}}>
                            {">"}
                        </span>
                    </div>
                {/* } */}
            </div>
        </div>
    )
}

export default Breadcrumb;