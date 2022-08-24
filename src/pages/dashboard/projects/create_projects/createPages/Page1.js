import React, { useState, useRef, useEffect } from "react";
import "../create_project.css";
import "antd/dist/antd.css";
import { DatePicker } from "antd";
import moment from "moment";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { Editor } from "@tinymce/tinymce-react";
import { Link } from "react-router-dom";
import image1 from "../../../../../assets/Groupchat.png";
import image2 from "../../../../../assets/Quiz.png";
import { useNewProjectContext } from "../../../../../context/NewProjectContext";
const { RangePicker } = DatePicker;

const CreatePage1 = () => {

    const [selected, setSelected] = useState(null);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    // const editorRef = useRef(null);
    const [dates, setDates] = useState({});
    const refQual = useRef(null);
    const refQuan = useRef(null);
    const { newProject, setNewProject  } = useNewProjectContext();

    const onEditorStateChange = (val) => {
        const rawContent = convertToRaw(editorState.getCurrentContent());
        console.log(rawContent);
        const stringContent = rawContent.blocks.map(content => content.text).join("\n");
        console.log(stringContent);
        handleStateChange("goal", stringContent);
        setEditorState(val)
    }

    const handleClick = (e) => {
        if(refQual.current && refQuan.current) {
            // if(!refQual.current.contains(e.target) && !refQuan.current.contains(e.target)) {
            //     setSelected(null);
            // } 
        }
    }

    const handleStateChange = (stateName, newValue) => {
        if (!stateName) return;

        setNewProject(prevValue => { return { ...prevValue, [stateName]: newValue } });
    }

    useEffect(() => {

        if (Object.keys(dates || {}).length === 0) return;

        handleStateChange("startDate", dates.start_date);
        handleStateChange("endDate", dates.end_date);
        
    }, [dates])

    return (
        <div className="report_content" onClick={handleClick}>
            <div className="research">
                <span className="big">Research Title</span>
                <input placeholder="Title" name="title" value={newProject.title} onChange={(e) => handleStateChange("title", e.target.value)} />
            </div>
            <div className="research_type_select">
                <span className="big">Select research type</span>
                <div className="research_types">
                    <div className="research_type" 
                    onClick={() => { setSelected("qualitative"); handleStateChange("researchType", "qualitative")}} ref={refQual}
                    style={{border: selected==="qualitative"?"1px solid blue":"1px solid #D9D9D9"}}>
                        <img src={image1} />
                        <div className="RT_texts">
                            <span className="med_thick">
                                Qualitative Research
                            </span>
                            <span className="light_thin">
                                Create focused groups and interview sessions
                            </span>
                        </div>
                        {selected==="qualitative" && 
                            <div className="check">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" 
                                xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12.5" cy="12.5" r="12.5" fill="#3EC70B"/>
                                    <path d="M10.6071 13.7977L10.625 13.8169L10.6429 13.7977L17.6769 6.25228C17.9601 5.94846 18.4186 5.94846 18.7018 6.25228L19.7625 7.39007C20.0466 7.69487 20.0466 8.18973 19.7625 8.49456L11.1375 17.7467C10.8542 18.0506 10.3958 18.0506 10.1125 17.7467L5.23752 12.5172C4.95338 12.2124 4.95338 11.7176 5.23752 11.4127L6.29815 10.275L6.2803 10.2583L6.29816 10.275C6.58138 9.9711 7.03988 9.9711 7.3231 10.275L7.34096 10.2583L7.3231 10.275L10.6071 13.7977Z" 
                                    fill="white" stroke="#0076F7" strokeWidth="0.0488281"/>
                                </svg>
                            </div>
                        }
                    </div>
                    <div className="research_type"
                    onClick={() => { setSelected("quantitative"); handleStateChange("researchType", "quantitative") }} ref={refQuan}
                    style={{border: selected==="quantitative"?"1px solid blue":"1px solid #D9D9D9"}}>
                        <img src={image2} />
                        <div className="RT_texts">
                            <span className="med_thick">
                                Quantitative Research
                            </span>
                            <span className="light_thin">
                                Create surveys, quizes, polls and trivia
                            </span>
                        </div>
                        {selected==="quantitative" && 
                            <div className="check">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" 
                                xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12.5" cy="12.5" r="12.5" fill="#3EC70B"/>
                                    <path d="M10.6071 13.7977L10.625 13.8169L10.6429 13.7977L17.6769 6.25228C17.9601 5.94846 18.4186 5.94846 18.7018 6.25228L19.7625 7.39007C20.0466 7.69487 20.0466 8.18973 19.7625 8.49456L11.1375 17.7467C10.8542 18.0506 10.3958 18.0506 10.1125 17.7467L5.23752 12.5172C4.95338 12.2124 4.95338 11.7176 5.23752 11.4127L6.29815 10.275L6.2803 10.2583L6.29816 10.275C6.58138 9.9711 7.03988 9.9711 7.3231 10.275L7.34096 10.2583L7.3231 10.275L10.6071 13.7977Z" 
                                    fill="white" stroke="#0076F7" strokeWidth="0.0488281"/>
                                </svg>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="research_goals">
                <span className="big">Research Goals</span>
                <div className="rich_text_editor_div"> 
                    <Editor
                    editorState={editorState}
                    toolBarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={onEditorStateChange}
                    />
                </div>
                    {/* <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue="<p>This is the initial content of the editor.</p>"
                        init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                </div> */}
                {/* <textarea placeholder="Goals Description" /> */}
            </div>
            <div className="date">
                <span className="big">Date</span>
                <div className="date_picker">
                    <RangePicker className="range_picker"
                    onChange={(values) => {
                        const value1 = moment(values[0]).format("DD-MM-YYYY")
                        const value2 = moment(values[1]).format("DD-MM-YYYY")
                        setDates({
                            start_date: value1,
                            end_date: value2
                        })
                    }}
                    />
                </div>
            </div>
        </div>
    )
}

export default CreatePage1;