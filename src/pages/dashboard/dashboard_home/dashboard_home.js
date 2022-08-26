import React,{useContext, useEffect} from "react";
import "./dashboard_home.css";
import manSearching from "../../../assets/searching.png";
import "../dashboard.css";
import { UserContext, yaarnBoxMaxToken } from "../../../context/UserContext";
import ProjectsComponent from "../../../components/projects_component/ProjectsComponent";
import BarChart from "../../../components/BarChart";
import DoughnutChart from "../../../components/Doughnuts";
import { useProjectsContext } from "../../../context/ProjectsContext";
import { getAllProjects } from "../../../services/userService";
import { Link } from "react-router-dom";

const DashboardHome = ({ full }) => {
    const val = ["morning","afternoon","evening","night"];
    const getGreeting = () => {
        const hr = new Date().getHours();
        if(hr < 12) return 0;
        else if(hr >= 12 && hr < 17) return 1;
        else if(hr >= 17 && hr < 21) return 2;
        else return 3;
    }
    const greeting = val[getGreeting()];
    const {user} = useContext(UserContext)
    const { projects, setProjects } = useProjectsContext();

    // const Data = [
    //     {
    //         title: "Dano vs Peak",
    //         desc: "This research is for qualitative analysis of both brand..."
    //     },
    //     {
    //         title: "Dano vs Peak",
    //         desc: "This research is for qualitative analysis of both brand..."
    //     },
    //     {
    //         title: "Dano vs Peak",
    //         desc: "This research is for qualitative analysis of both brand..."
    //     }
    // ];
    const Doughnutdata = {
        labels: ["Dano", "Peak", "Others"],
        data: [5, 12, 19],
        label: "Stats"
    }
    const Bardata = {
        labels: ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"],
        data: [18,22,16,24,20,12,17],
        label: "Activities"
    }

    useEffect(() => {
        const token = localStorage.getItem(yaarnBoxMaxToken);

        if (!token) return;
        
        getAllProjects(token).then(res => {
            setProjects(res.data);
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className={full ? "dash_home" : "dash_home_full"}>
            <div className="dash_home_wrapper">
                <div className="dash_home_content">
                    <h1>Hi, {user.user?user.user.name:""} 👋🏼</h1>
                    <span className="big">
                        Good {greeting}, see how your research is doing
                    </span>
                    <div className="dash_home_nocontent">
                        <div className="dash_main_contents">
                            {projects.length === 0 && 
                                <div className="home_nocontent">
                                    <img src={manSearching} />
                                    {/* <span>No Projects ?</span> */}
                                </div>
                            }
                            {projects.length > 0 && 
                                <div className="dash_home_withcontents">
                                    <div className="withcontents_top">
                                        <span className="big">My Research</span>
                                        <Link to={'/dashboard/projects'} className="light_thin">See all</Link>
                                    </div>
                                    <ul className="withcontents_main">
                                        {projects.map((val, idx) => (
                                            <li key={idx}>
                                                <ProjectsComponent data={val} />
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="withcontents_base"></div>
                                </div>
                            }
                        </div>
                        <div className="dash_main_contents">
                            {projects.length > 0 && 
                                <div className="dash_home_charts">
                                    <div className="dash_home_charts_top">
                                        <span className="big">Data Insights</span>
                                        <span className="light_thin">See all</span>
                                    </div>
                                    <div className="dash_home_charts_main">
                                        <div className="charts_card">
                                        {/* style={{width: "300px", height: "300px", margin: "0px auto"}}> */}
                                            <BarChart data={Bardata} />
                                        </div>
                                        <div className="charts_card">
                                        {/* style={{width: "300px", height: "300px", margin: "0px auto"}}> */}
                                            <DoughnutChart data={Doughnutdata} />
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="dash_main_contents"></div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default DashboardHome;