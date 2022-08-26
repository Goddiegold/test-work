import React, { useEffect } from "react";
import { ReactFormGenerator } from "react-form-builder2";
import "react-form-builder2/dist/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../create_project.css";
import items from "./formtemplateData";

const FormTemplate = ({ type, updateCreateData, updateNextRoute }) => {

    const handleSubmit = (data) => {
        console.log(data);
    }
    useEffect(() => {
        //updateCreateDate with form data specific to the form template we want to use here
        //updateCreateData("formData", items[type])
        updateNextRoute("/dashboard/projects/create/invite")
    }, []);

    return (
        <div className="report_content">
            <span className="report_big_txt" style={{textTransform: "capitalize"}}>{type} template</span>
            <span className="report_small_txt">
                Use this template for your project
            </span>
            <div className="form_builder">
                <ReactFormGenerator 
                    data={items}
                    onSubmit={handleSubmit}
                    submitButton={<button className="form_build_button">Submit</button>}
                />
            </div>
        </div>
    )
}

export default FormTemplate;