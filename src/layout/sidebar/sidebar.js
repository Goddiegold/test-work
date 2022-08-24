import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import Data from "./sidebarData";

const Sidebar = ({ full, openModal, closeModal }) => {

    const [id, setId] = useState(0);
    const [dropdown, setDropdown] = useState(false);
    const navigate = useNavigate();
    // const [isMobile, setIsMobile] = useState(false);
    const workspace = ["My Researches", "My Projects", "My Progress"];
    const handleRoute = (val) => {
        console.log(val);
        if(val === "My Progress") openModal();
        if (val === "My Projects") navigate("/dashboard/projects")
        else return;
    }

    return (
        <div className={full ? "sidebar_full" : "sidebar"}>
            <div className="sidebar_contents">
                <div className="sidebar_workspace">
                    <span 
                    onClick={() => setDropdown(!dropdown)}>
                        {full ? "My Workspace" : ""}
                        {full && 
                            <svg width="20px" height="20px" viewBox="0 0 24 24" 
                            style={{transform: !dropdown?"rotate(0deg)":"rotate(180deg)"}}
                            xmlns="http://www.w3.org/2000/svg">
                                <rect x="0" fill="none" width="24" height="24"/>
                                <g><path d="M7 10l5 5 5-5"/></g>
                            </svg>
                        }
                    </span>
                    
                    {dropdown && 
                        <div className="workspace_dropdown">
                            <div className="workspace_dropdown_content">
                                {workspace.map((val, idx) => (
                                    <div className="workspace_dropdown_span" 
                                    key={idx} onClick={() => handleRoute(val)}>
                                        {val}
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                </div>
                
                <ul className="sidebar_routes">
                    {Data.map((val, idx) => (
                        <li key={idx}>
                            <Link to={val.link} 
                            className={full ? "sidebar_route_full" : "sidebar_route"}
                            style={{textDecoration: "none"}}
                            onClick={() => setId(idx)}>
                                <img src={val.img} 
                                style={{filter: idx===id&&"brightness(0) invert(1)"}} />
                                <span className="route_txt">{val.text}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="invite">
                    <Link to="#" className={full ? "invite_link_full" : "invite_link"}
                    style={{textDecoration: "none"}}>
                        <svg width="35" height="33" viewBox="0 0 45 33" fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.0625 1.1875L22.5 16.5L43.9375 1.1875M1.0625 31.8125H43.9375V1.1875H1.0625V31.8125Z" 
                            stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="invite_txt">Invite</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;