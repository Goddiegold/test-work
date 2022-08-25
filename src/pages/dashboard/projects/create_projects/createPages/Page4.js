import React, { useCallback, useEffect, useState } from "react";
import { ReactFormBuilder } from "react-form-builder2";
import "react-form-builder2/dist/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../create_project.css";

const CreateForm = ({ createData, updateCreateData, updateNextRoute }) => {

    const [valueData, setValueData] = useState([]);
    useEffect(() => {
        updateCreateData("formData", null);
        updateNextRoute("/dashboard/projects/create/invite");
    }, []);

    useEffect(() => {
        if (!createData.projectType) return;
        console.log(createData)

    }, [createData])

    const [ triviaItems, setTriviaItems ] = useState([
        {
            key: "Header",
            name: "Header Text",
            icon: "fas fa-heading",
            content: "Choose Header"
        },
        {
            key: "Paragraph",
            name: "Paragraph",
            icon: "fas fa-paragraph",
            content: "Name Paragraph"
        },
        {
            key: "RadioButtons",
            name: "Multiple Choice",
            icon: "far fa-dot-circle",
            options : [
                {value: "Choice 1",key:"MC1",text:"MC1"},
                {value: "Choice 2",key:"MC2",text:"MC2"},
                {value: "Choice 3",key:"MC3",text:"MC3"}
            ],
            contents: ["MC1","MC2","MC3"]    
        }
    ]);

    const toolbarItems = [{
        key: "Header",
        name: "Header Text",
        icon: "fas fa-heading",
        content: "Choose Header"
    },
    {
        key: "Paragraph",
        name: "Paragraph",
        icon: "fas fa-paragraph",
        content: "Name Paragraph"
    },
    {
        key: "TextInput",
        name: "TextInput",
        icon: "fas fa-font",
        content: "Enter Text"
    },
    {
        key: "TextArea",
        name: "Multi-line Input",
        icon: "fas fa-text-height",
        content: "Enter Text",
        text: "Enter Text"
    },
    {
        key: "NumberInput",
        name: "Number Input",
        icon: "fas fa-plus",
        content: "Enter Number"
    },
    // {
    //     key: "Dropdown",
    //     name: "Dropdown",
    //     static: true,
    //     icon: "far fa-caret-square-down",
    //     content: "Edit Dropdown Fields"
    // },
    {
        key: "RadioButtons",
        name: "Multiple Choice",
        icon: "far fa-dot-circle",
        options : [
            {value: "Choice 1",key:"MC1",text:"MC1"},
            {value: "Choice 2",key:"MC2",text:"MC2"},
            {value: "Choice 3",key:"MC3",text:"MC3"}
        ],
        contents: ["MC1","MC2","MC3"]    
    },
    {
        key: "Rating",
        name: "Rating",
        icon: "fas fa-star",
        content: "Rating"
    },
    {
        key: "Checkboxes",
        name: "Checkboxes",
        icon: "far fa-check-square",
        options: [
            {value: "Check 1",key:"CB1",text:"CB1"},
            {value: "Check 2",key:"CB2",text:"CB2"},
            {value: "Check 3",key:"CB3",text:"CB3"}
        ],
        contents: ["CB1","CB2","CB3"]
    },
    {
        key: "DatePicker",
        name: "Date",
        icon: "fas fa-calendar-alt",
        content: "Enter Date"
    },
    {
        key: "EmailInput",
        name: "Email",
        icon: "fas fa-envelope",
        content: "Enter Email"
    },
    {
        key: "PhoneNumber",
        name: "Phone Number",
        icon: "fas fa-phone",
        content: "Enter Phone Number"
    }]

    //handlePost fires everytime user selects a toolbar content
    //data.task_data is the contents of the form and we can send to database
    const handleUpdate = (data) => {
        const saver = data.task_data;
        // setValueData(saver);
        updateCreateData("formData", saver);
        updateNextRoute("/dashboard/projects/create/invite")
    }

    return (
        <div className="report_content">
            <span className="report_big_txt">Create your own custom form</span>
            <span className="report_small_txt">
                {
                    createData && createData.sourceSelected === "scratch" ? 
                    createData && createData.projectType === "polls" ?
                    `Create an amazing form to collect data easily for your poll` : 
                    createData && createData.projectType === "trivia" ?
                    `Create an amazing form to collect data easily for your trivia` :
                    `Create an amazing form to collect data easily for surveys, quizes, polls and trivia` : 
                    "Create an amazing form to collect data easily for surveys, quizes, polls and trivia"
                }
                
            </span>
            <div className="form_builder">
                <ReactFormBuilder
                    // data={valueData}
                    toolbarItems={triviaItems}
                    onPost={handleUpdate}
                    // submitButton={<button className="form_build_button">Submit</button>}
                /> 
            </div>
        </div>
    )
}

export default CreateForm;