import React from "react";
import create_success from "../../../../../assets/Success.png";
import "../create_project.css";

const CreateSuccess = () => {

    return (
        <div className="report_content">
            <div className="create_success">
                <div className="create_success_message">
                    <span className="report_big_txt">Big Congrats 🎉</span>
                    <span className="report_small_txt">Your research work is on it’s way!</span>
                    <img src={create_success} />
                </div>
            </div>
        </div>
    )
}

export default CreateSuccess;