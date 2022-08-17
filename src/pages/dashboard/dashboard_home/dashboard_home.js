import React from "react";
import "./dashboard_home.css";
import manSearching from "../../../assets/searching.png";
import Sidebar from "../../../layout/sidebar/sidebar";
import "../dashboard.css";

const DashboardHome = ({ full }) => {
    const val = ["morning","afternoon","evening","night"]
    const getGreeting = () => {
        const hr = new Date().getHours();
        if(hr < 12) return 0;
        else if(hr >= 12 && hr < 17) return 1;
        else if(hr >= 17 && hr < 21) return 2;
        else return 3;
    }
    const greeting = val[getGreeting()];
    return (
        <div className="dashboard_contents">
            <Sidebar full={full} />
            <div className={full ? "dash_home" : "dash_home_full"}>
                <div className="dash_home_wrapper">
                    <div className="dash_home_content">
                        <h1>Hi, Emmanuel 👋🏼</h1>
                        <span className="big">
                            Good {greeting}, see how your research is doing
                        </span>
                        <div className="dash_main_contents">
                            <img src={manSearching} />
                            <span>No Projects ?</span>
                        </div>
                        <div className="dash_main_contents"></div>
                        <div className="dash_main_contents"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHome;