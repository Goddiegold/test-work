import React from "react";
import "./progress_sidebar.css";
import { Link } from "react-router-dom";

const ProgressSidebar = ({ viewProgress }) => {
    
    const check = (path) => {
        if(path.includes("2") || path.includes("3") || path.includes("form")) return 2;
        else if(path.includes("invite")) return 3;
        else if(path.includes("success")) return 4;
        else return 1;
    }
    const Progress = check(window.location.pathname);

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
                                <span 
                                style={{fontWeight: Progress >= 1 ? "550" : "400"}}>
                                    Base Setup</span>
                                {Progress >= 1 &&
                                    <div className="PS_progress_info">{Progress} out of 4</div>
                                }
                            </div>
                            <div className="PS_threads" 
                            style={{backgroundColor: Progress >= 2 ? "white":"#6198DE"}}></div>
                        </div>
                        <div className="PS_progress_tree">
                            <div className="PS_progression">
                                <svg width="10" height="10" viewBox="0 0 11 12" fill="none" 
                                xmlns="http://www.w3.org/2000/svg" color="#6198DE">
                                    <circle cx="5.5" cy="6" r="5.5" 
                                    fill={Progress >= 2 ? "white":"#6198DE"} />
                                </svg>
                                
                                <span 
                                style={{fontWeight: Progress >= 2 ? "550" : "400"}}>
                                    Data Source
                                </span>
                                {/* <span>Data Source</span> */}
                                {/* {Progress >= 2 &&
                                    <div className="PS_progress_info">2 out of 4</div>
                                } */}
                            </div>
                            <div className="PS_threads" 
                            style={{backgroundColor:  Progress >= 3 ? "white":"#6198DE"}}></div>
                        </div>
                        <div className="PS_progress_tree">
                            <div className="PS_progression">
                                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" 
                                xmlns="http://www.w3.org/2000/svg" color="#6198DE">
                                    <circle cx="5.5" cy="6" r="5.5" 
                                    fill={ Progress >= 3 ? "white":"#6198DE"}/>
                                </svg>
                                <span 
                                style={{fontWeight: Progress >= 3 ? "550" : "400"}}>
                                    Invite Participants
                                </span>
                                {/* <span>Invite Participants</span> */}
                                {/* {Progress >= 3 &&
                                    <div className="PS_progress_info">3 out of 4</div>
                                } */}
                            </div>
                            <div className="PS_threads" 
                            style={{backgroundColor:  Progress >= 4 ? "white":"#6198DE"}}></div>
                        </div>
                        <div className="PS_progress_tree">
                            <div className="PS_progression">
                                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" 
                                xmlns="http://www.w3.org/2000/svg" color="#6198DE">
                                    <circle cx="5.5" cy="6" r="5.5" 
                                    fill={ Progress >= 4 ? "white":"#6198DE"}/>
                                </svg>
                                <span 
                                style={{fontWeight: Progress >= 4 ? "550" : "400"}}>
                                    Finish
                                </span>
                                {/* <span style={{}}>Finish</span> */}
                                {/* {Progress >= 4 &&
                                    <div className="PS_progress_info">4 out of 4</div>
                                } */}
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