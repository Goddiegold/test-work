import React, { useEffect, useState } from "react";
import { ReactFormBuilder } from "react-form-builder2";
import "react-form-builder2/dist/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../create_project.css";

const ScratchTriviaForm = ({ updateCreateData, updateNextRoute }) => {

    const [valueData, setValueData] = useState([]);
    useEffect(() => {
        updateCreateData("formData", null);
        updateNextRoute("/dashboard/projects/create/invite");
    }, []);

    const triviaItems = [
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
    ];

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
            <span className="report_small_txt">Create an amazing form to collect data easily for your trivia</span>
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

export default ScratchTriviaForm;