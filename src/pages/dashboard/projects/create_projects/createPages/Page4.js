import React, { useState } from "react";
import { ReactFormBuilder } from "react-form-builder2";
import "react-form-builder2/dist/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../create_project.css";

const CreateForm = () => {

    const items = [
        {
            key: "Header",
            name: "Header Text",
            icon: "fa fa-header",
            static: true,
            content: "Placeholder Text"
        },
        {
            key: "Paragraph",
            name: "Paragraph",
            static: true,
            icon: "fa fa-paragraph",
            content: "Placeholder Paragraph"
        },
        {
            key: "Text Input",
            name: "Text Input",
            static: true,
            icon: "fa fa-textinput",
            content: "Placeholder Text Input"
        },
        {
            key: "Dropdown",
            name: "Dropdown",
            static: true,
            icon: "fa fa-dropdown",
            content: "Placeholder Dropdown"
        },
        {
            key: "Multiple Choice",
            name: "Multiple Choice",
            static: true,
            icon: "fa fa-multiplechoice",
            content: "Placeholder Multichoice "     
        },
        {
            key: "Rating",
            name: "Star Rating",
            static: true,
            icon: "fa fa-star",
            content: "Choose Rating",
        },
        {
            key: "Checkboxes",
            name: "Checkboxes",
            static: true,
            icon: "fa fa-box",
            content: "Choose"
        } 
    ];

    const form = [
        "Who is better Dano or Peak",
        "Who has better taste",
        "Who has better pricing",
        "Who has better quality"
    ]
    
    const handleSubmit = (data) => {
        // send data to an end point for storage
        // data is the object form data generated
    }
    return (
        <div className="report_content">
            <span className="report_big_txt">Select template</span>
            <span className="report_small_txt">
                Create an amazing form to collect data easily for surveys, quizes, polls and trivia
            </span>
            <div className="form_builder">
                <ReactFormBuilder
                    // url="path/to/GET/initial.json"
                    // toolbarItems={items}
                    // saveUrl="path/to/POST/built/form.json"
                    // onSubmit={handleSubmit}
                />
            </div>
        </div>
    )
}

export default CreateForm;