import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import Data from "./sidebarData";

const Sidebar = ({ full }) => {

    const [id, setId] = useState(0);

    return (
        <div className={full ? "sidebar_full" : "sidebar"}>
            <div className="sidebar_contents">
                <div className="sidebar_logo">{full ? "Penciledge" : ""}</div>
                <ul className="sidebar_routes">
                    {Data.map((val, idx) => (
                        <li key={idx}>
                            <Link to={val.link} 
                            className={full ? "sidebar_route_full" : "sidebar_route"}
                            style={{textDecoration: "none"}}
                            onClick={() => setId(idx)}>
                                <img src={val.img} 
                                style={{filter: idx===id&&"brightness(0) invert(1)"}} />
                                {full && <span className="route_txt">{val.text}</span>}
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
                        {full && <span className="invite_txt">Invite</span>}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;