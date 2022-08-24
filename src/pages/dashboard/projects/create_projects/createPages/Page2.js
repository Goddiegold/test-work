import React, { useState } from "react";
import "../create_project.css";
import letter from "../../../../../assets/letter.png";

const CreatePage2 = () => {

    const [listSelect, setListSelect] = useState(null);

    return (
        <div className="report_content">
            <span className="report_big_txt">Create a data source</span>
            <span className="report_small_txt">
                Create an amazing form to collect data easily for surveys, quizes, polls and trivia
            </span>
            <ul className="report_content_lists">
                <li className="report_content_list" 
                onClick={() => setListSelect(1)}
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
                onClick={() => setListSelect(2)}
                style={{border: `1px solid ${listSelect==2?"blue":"#AAAAAA"}`}}>
                    <div>
                        <img src={letter} />
                        <span>Create from template</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default CreatePage2;