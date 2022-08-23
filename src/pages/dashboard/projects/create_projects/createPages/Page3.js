import React, { useState } from "react";
import "../create_project.css";

const CreatePage3 = () => {

    const [listSelect, setListSelect] = useState(null);

    const Res = [
        "Customer Survey", "Yaarnbox Max poll",
        "Yaarnbox Max Questionaire", "Yaarnbox Max Trivia"
    ]
    return (
        <div className="report_content">
            <span className="report_big_txt">Select template</span>
            <span className="report_small_txt">
                Create an amazing form to collect data easily for surveys, quizes, polls and trivia
            </span>
            <ul className="report_content_lists">
                {Res.map((val, idx) => (
                    <li className="report_content_list" key={idx}
                    onClick={() => setListSelect(idx)}
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