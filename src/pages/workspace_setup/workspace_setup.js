import React from "react";
import "./workspace_setup.css";
import image2 from "../../assets/Ellipse 5.png";

const WorkspaceSetup = () => {

    return (
        <div className="workspace_setup">
            <div className="workspace_setup_top">
                <div className="message">
                    <svg width="33" height="33" viewBox="0 0 43 38" fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.7074 36.4105C33.2954 36.4105 37.0904 36.4105 39.4466 33.838C41.8049 31.2677 41.8049 27.1281 41.8049 18.8509C41.8049 10.5738 41.8049 6.43413 39.4466 3.86386C37.0904 1.29138 33.2954 1.29138 25.7074 1.29138H17.6586C10.0706 1.29138 6.27561 1.29138 3.91933 3.86386C1.56103 6.43413 1.56104 10.5738 1.56104 18.8509C1.56104 27.1281 1.56103 31.2677 3.91933 33.838C5.23329 35.2735 6.99396 35.9078 9.60982 36.1866" 
                        fill="#F2F2F2"/>
                        <path d="M25.7074 36.4105C33.2954 36.4105 37.0904 36.4105 39.4466 33.838C41.8049 31.2677 41.8049 27.1281 41.8049 18.8509C41.8049 10.5738 41.8049 6.43413 39.4466 3.86386C37.0904 1.29138 33.2954 1.29138 25.7074 1.29138H17.6586C10.0706 1.29138 6.27561 1.29138 3.91933 3.86386C1.56103 6.43413 1.56104 10.5738 1.56104 18.8509C1.56104 27.1281 1.56103 31.2677 3.91933 33.838C5.23329 35.2735 6.99396 35.9078 9.60982 36.1866" 
                        stroke="#0076F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="avatar">
                    <img src={image2} />
                </div>
            </div>
            <div className="WS_main">
                <div className="WS_main_content">
                    <span className="bold">
                        Please wait we are setting up your workspace ...
                    </span>
                    <span className="light">
                        Your workspace has all the tools you need for an effective data research without the hassle. 
                    </span>
                    <div className="range_bar">
                        <div className="range" style={{width: "50%"}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkspaceSetup;