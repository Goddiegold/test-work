import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "./Projects.css";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import ProjectsComponent from "../../../../components/projects_component/ProjectsComponent";
import CustomPagination from "../../../../components/Pagination/Pagination";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from "./data.js";
import Toggle from "../../../../components/Toggle/Toggle";

const ProjectsView = ({ openModal }) => {

    const [projectsdropdown, setProjectsdropdown] = useState(false);
    const sliderRef = useRef(null);
    const breakDown = () => {
        let arr = [];
        for(var i=0;i<data.length;i+=6) arr.push(data.slice(i, i+6))
        // console.log(arr);
        return arr;
    }
    const Arr = breakDown();
    // const [display, setDisplay] = useState(current);
    const [gridForm, setGridForm] = useState(true);

    const handleScroll = (startIdx) => {
        if(sliderRef.current) {
            sliderRef.current.slickGoTo(startIdx);
        }
    }
    const handleToggleFunction = () => {
        setGridForm(!gridForm);
    }
    const val = ["morning","afternoon","evening","night"]
    const getGreeting = () => {
        const hr = new Date().getHours();
        if(hr < 12) return 0;
        else if(hr >= 12 && hr < 17) return 1;
        else if(hr >= 17 && hr < 21) return 2;
        else return 3;
    }
    const greeting = val[getGreeting()];
    const projectsdropdowns = ["Grid", "Flex"];
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    }
    

    return (
        <div className="projects_view">
            <div className="projects_view_wrapper">
                <div className="projects_view_content">
                    <div className="projects_breadcrumb">
                        <Breadcrumb clicked={"projects"} />
                    </div>
                    <h1>Projects</h1>
                    <span className="big">
                        Good {greeting}, see how your research is doing
                    </span>
                    <div className="projects_views">
                        <div className="projects_views_content">
                            <div className="PV_top">
                                <div className="PV_top_left" 
                                onClick={() => setProjectsdropdown(!projectsdropdown)}>
                                    <span>
                                        {"All Projects"}
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" 
                                        style={{transform: !projectsdropdown?"rotate(0deg)":"rotate(180deg)"}}
                                        xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0" fill="none" width="24" height="24"/>
                                            <g><path d="M7 10l5 5 5-5"/></g>
                                        </svg>
                                    </span>
                                    {projectsdropdown && 
                                        <div className="projects_dropdown">
                                            {projectsdropdowns.map((val, idx) => (
                                                <span key={idx} 
                                                onClick={() => setGridForm(val)}>
                                                    {val}
                                                </span>
                                            ))}
                                        </div>
                                    }
                                </div>
                                <div className="PV_top_right">
                                    <svg width="20" height="20" viewBox="0 0 22 22" onClick={openModal}
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 2.48148C1 2.48148 3.85714 1 11 1C18.1429 1 21 2.48148 21 2.48148L13.1429 12.1111V18.7778L8.85714 21V12.1111L1 2.48148Z" 
                                        stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <div className="toggle_div">
                                        <Toggle handleToggleFunction={handleToggleFunction} />
                                    </div>
                                </div>
                            </div>
                            <div className="projects_ul">
                                <Slider ref={sliderRef} {...settings}>
                                    {Arr.map((Val, Idx) => (
                                        <ul key={Idx}
                                        className={gridForm?"Projects_lists":"Projects_lists_full"}>
                                            {Val.map((val, idx) => (
                                                <li className="Projects_list" key={idx}>
                                                    <ProjectsComponent data={val} />
                                                </li>
                                            ))}
                                        </ul>
                                    ))}
                                </Slider> 
                            </div>
                        </div>
                    </div>
                    <div className="pagination">
                        <CustomPagination len={Arr.length} handleScroll={handleScroll} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsView;