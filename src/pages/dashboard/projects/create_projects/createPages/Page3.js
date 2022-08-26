import React, { useEffect, useState } from "react";
import "../create_project.css";
import items from "./formtemplateData";

const CreatePage3 = ({ updateCreateData, updateNextRoute }) => {

    const [listSelect, setListSelect] = useState(null);
    const routeIdx = [
        "customer-survey-form","yaarnbox-max-poll-form",
        "yaarnbox-max-questionaire-form","yaarnbox-max-trivia-form"
    ]
    useEffect(() => {
        updateNextRoute(`/dashboard/projects/create/${routeIdx[0]}`);
    }, []);

    const handleTemplateSelect = (val) => {
        setListSelect(val);
        updateCreateData("template", items);
        updateNextRoute(`/dashboard/projects/create/${routeIdx[val]}`);
    }

    const Res = [
        "Customer Survey", "Yaarnbox Max poll",
        "Yaarnbox Max Questionaire", "Yaarnbox Max Trivia"
    ]

    const handleClick = (itemIndex, item) => {
        setListSelect(itemIndex);
        console.log(item)
    }

    return (
        <div className="report_content">
            <span className="report_big_txt">Select template</span>
            <span className="report_small_txt">
                Create an amazing form to collect data easily for surveys, quizes, polls and trivia
            </span>
            <ul className="report_content_lists">
                {Res.map((val, idx) => (
                    <li className="report_content_list" key={idx}
                    onClick={() => handleClick(idx, val)}
                    style={{border: `1px solid ${listSelect==idx?"blue":"#AAAAAA"}`}}>
                        <div>
                            <svg width="63" height="63" viewBox="0 0 63 63" 
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.5 61V31.5M31.5 31.5V2M31.5 31.5H61M31.5 31.5H2" 
                                stroke="#0076F7" strokeWidth="4" strokeLinecap="round" 
                                strokeLinejoin="round"/>
                            </svg>
                            <span>{val}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CreatePage3;