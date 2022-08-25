import React, { useRef, useState } from "react";
import "../create_project.css";
import letter from "../../../../../assets/letter.png";
import { useNavigate } from "react-router-dom";
import useClickOutside from "../../../../../hooks/useClickOutside";

const CreatePage2 = ({ updateCreateData, updateNextRoute }) => {

    const [listSelect, setListSelect] = useState(null);
    const [scratchListSelect, setScratchListSelect] = useState(null);
    const [showScratchOptions, setShowScratchOptions] = useState(null);
    const navigate = useNavigate();
    const scratchOptionsRef = useRef(null);

    useClickOutside(scratchOptionsRef, () => setShowScratchOptions(false));

    const handleListSelect = (val, item) => {
        setListSelect(val);
        updateCreateData("sourceSelected", item)
        if (val === 1) return setShowScratchOptions(true);
        if(val===1) updateNextRoute("/dashboard/projects/create/form");
        else updateNextRoute("/dashboard/projects/create/3");
    }

    const addBorderOverlay = (elem) => elem.target.classList.add("unactive", "active");
    const removeBorderOverlay = (elem) => elem.target.classList.remove("unactive", "active");
    
    const handleScratchOptionsSelect = (elem, val, item) => {
        let maxCount = 5;
        setScratchListSelect(val);
        updateCreateData("projectType", item);

        function animateBorderChange() {
            if (maxCount < 1) {
                if (item === "polls") {
                    updateNextRoute("/dashboard/projects/create/scratchPollForm");
                    navigate("/dashboard/projects/create/scratchPollForm");
                    return
                }
                updateNextRoute("/dashboard/projects/create/form");
                navigate("/dashboard/projects/create/form");
                return;
            }

            maxCount -= 1;
            setTimeout(() => removeBorderOverlay(elem), 500);
            setTimeout(() => addBorderOverlay(elem), 700);

            setTimeout(() => animateBorderChange(), 400);
            
        }
        animateBorderChange()
        
    }

    return (
        <div className="report_content">
            <span className="report_big_txt">Create a data source</span>
            <span className="report_small_txt">
                Create an amazing form to collect data easily for surveys, quizes, polls and trivia
            </span>
            <ul className="report_content_lists">
                <li className="report_content_list"
                onClick={() => handleListSelect(1, "scratch")}
                style={{border: `1px solid ${listSelect==1?"blue":"#AAAAAA"}`}}>
                    <div>
                        <svg width="63" height="63" viewBox="0 0 63 63" 
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.5 61V31.5M31.5 31.5V2M31.5 31.5H61M31.5 31.5H2" 
                            stroke="#0076F7" strokeWidth="4" strokeLinecap="round" 
                            strokeLinejoin="round"/>
                        </svg>
                        <span>Create from scratch</span>
                    </div>
                </li>
                <li className="report_content_list"
                onClick={() => handleListSelect(2, "template")}
                style={{border: `1px solid ${listSelect==2?"blue":"#AAAAAA"}`}}>
                    <div>
                        <img src={letter} />
                        <span>Create from template</span>
                    </div>
                </li>
            </ul>
            
            {
                showScratchOptions && 
                <div className="scratch__Options__Container" ref={scratchOptionsRef}>
                    <span className="report_big_txt">Select Project Type</span>
                    <span className="report_small_txt">What type of research project will you be working on?</span>
                
                    <ul>
                        <li className="disabled">Customer Surveys</li>
                        <li onClick={(elem) => handleScratchOptionsSelect(elem, 2, "polls")} style={{ borderColor: scratchListSelect === 2 ? "blue" : "#D9D9D9"}}>Yaarn Box Max Polls</li>
                        <li className="disabled">Yaarn Box Max Questionnaire</li>
                        <li onClick={(elem) => handleScratchOptionsSelect(elem, 4, "trivia")} style={{ borderColor: scratchListSelect === 4 ? "blue" : "#D9D9D9"}}>Yaarn Box Max Trivia</li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default CreatePage2;