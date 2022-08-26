import React from "react";
import "./progress_sidebar.css";
import { Link } from "react-router-dom";

const ProgressSidebar = ({ viewProgress }) => {
    
    const Progress = [1];

    return (
        <div className={viewProgress ? "PS_in" : "PS_out"}>
            <div className="PS_wrapper">
                <div className="PS_content">
                    <h1>Quick & Easy Setup</h1>
                    <div className="PS_progress">
                        <div className="PS_progress_tree">
                            <div className="PS_progression">
                                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" 
                                xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5.5" cy="6" r="5.5" fill="white"/>
                                </svg>
                                <span>Base Setup</span>
                                {Progress.length >= 1 &&
                                    <div className="PS_progress_info">1 out of 4</div>
                                }
                            </div>
                            <div className="PS_threads" style={{backgroundColor: "#6198DE"}}></div>
                        </div>
                        <div className="PS_progress_tree">
                            <div className="PS_progression">
                                <svg width="10" height="10" viewBox="0 0 11 12" fill="none" 
                                xmlns="http://www.w3.org/2000/svg" color="#6198DE">
                                    <circle cx="5.5" cy="6" r="5.5" fill="#6198DE"/>
                                </svg>
                                <span>Research Setup</span>
                                {Progress.length >= 2 &&
                                    <div className="PS_progress_info">2 out of 4</div>
                                }
                            </div>
                            <div className="PS_threads" style={{backgroundColor: "#6198DE"}}></div>
                        </div>
                        <div className="PS_progress_tree">
                            <div className="PS_progression">
                                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" 
                                xmlns="http://www.w3.org/2000/svg" color="#6198DE">
                                    <circle cx="5.5" cy="6" r="5.5" fill="#6198DE"/>
                                </svg>
                                <span>Conferencing Tool</span>
                                {Progress.length >= 3 &&
                                    <div className="PS_progress_info">3 out of 4</div>
                                }
                            </div>
                            <div className="PS_threads" style={{backgroundColor: "#6198DE"}}></div>
                        </div>
                        <div className="PS_progress_tree">
                            <div className="PS_progression">
                                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" 
                                xmlns="http://www.w3.org/2000/svg" color="#6198DE">
                                    <circle cx="5.5" cy="6" r="5.5" fill="#6198DE"/>
                                </svg>
                                <span>Invite Participant</span>
                                {Progress.length >= 4 &&
                                    <div className="PS_progress_info">4 out of 4</div>
                                }
                            </div>
                        </div>
                    </div> 
                    <div className="PS_base">
                        <div className="PS_base_txt">
                            <span className="PS_span">Need help?</span>
                            <Link to="#" className="PS_span" style={{marginLeft: "5px"}}>
                                Connect with support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressSidebar;