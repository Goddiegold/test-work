import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../../components/Button/Button";
import "../create_project.css";

const CreateInvite = ({ createData }) => {

    const navigate = useNavigate();
    const participants = [
        {
            email: "ayoola12@gmail.com",
            firstName: "Ayo",
            lastName: "Ola"
        },
        {
            email: "adeola12@gmail.com",
            firstName: "Ade",
            lastName: "Ola"
        },
        {
            email: "afoola12@gmail.com",
            firstName: "Afo",
            lastName: "Ola"
        },
    ]
    const [listText, setListText] = useState([]);
    const [focused, setFocused] = useState(false);
    const [inviteDropdown, setInviteDropdown] = useState([]);
    const inputRef = useRef();
    const dropdownRef = useRef();
    const urlProviders = [".com",".net",".ng"]
    const handleButtonClick = () => {
        const fullData = {
            ...createData,
            ["invites"]: listText
        }
        console.log(fullData);
        //send fullData to backend and navigate to success page
        navigate("/dashboard/projects/create/success");
    }
    const participantsSearch = (val) => {
        if(val == "") return null;
        const searchArr = participants.filter(participant => participant.email.includes(val));
        // console.log(val, searchArr)
        return searchArr.length > 0 ? searchArr : null; 
    }
    const handleInputChange = (e) => {
        const checkParticipants = participantsSearch(e.target.value);
        if (checkParticipants) {
            setInviteDropdown(checkParticipants);
        }
        else if (e.target.value.includes("@") && (urlProviders.find(x => e.target.value.includes(x)))) {
            // console.log(e.target.value)
            const updateLists = [...listText, e.target.value];
            setListText(updateLists);
            inputRef.current.value = "";
        }
        //get rid of whatever is in dropdown
        else {
            setInviteDropdown([]);
        }
    }
    const filterList = (val) => {
        const updateLists = listText.filter(x => x !== val);
        setListText(updateLists);
    }
    const handleBlur = (e) => {
        // if(dropdownRef.current) {
        //     if(!dropdownRef.current.contains(e.target)) setFocused(false);
        // } else {
        //     setFocused(false);
        // }
        setFocused(false);
    }
    const selectInviteDropdowns = (val) => {
        if(listText.includes(val)) return;
        const updateLists = [...listText, val];
        setListText(updateLists);
        // inputRef.current.value = "";
    }

    return (
        <div className="report_content">
            <span className="report_big_txt">Create a data source</span>
            <span className="report_small_txt">
                Create an amazing form to collect data easily for surveys, quizes, polls and trivia
            </span>
            <div className="report_invite">
                <div className="report_invite_input"
                style={{border: `1px solid ${!focused?"#8E8E8E":"blue"}`}}>
                    {listText.map((val, idx) => (
                        <div className="picked" key={idx}>
                            <div className="picked_div">
                                <span>{val}</span>
                                <div className="picked_x" 
                                onClick={() => filterList(val)}>
                                    x
                                </div>
                            </div>
                        </div>
                    ))}
                    <input 
                    ref={inputRef}
                    placeholder={listText.length==0?"Enter email address of participants":"Enter more email addresses"}
                    onChange={handleInputChange} 
                    onFocus={() => setFocused(true)}
                    onBlur={(e) => handleBlur(e)}
                    />
                </div>
                <div className="report_invite_button">
                    <Button text={"Invite Now"} handleButtonClick={handleButtonClick} />
                </div>
            </div>
            {(inviteDropdown.length > 0) &&
                <div className="report_invite_dropdown" ref={dropdownRef}>
                    <div className="invite_dropdowns">
                        {inviteDropdown.map((val, idx) => (
                            <div className="invite_dropdown" key={idx}>
                                <div className="invite_dropdown_img">
                                    {val.firstName[0]+val.lastName[0]}
                                </div>
                                <div className="invite_dropdown_txt">
                                    <span>{val.email}</span>
                                    <span onClick={() => selectInviteDropdowns(val.email)}>+</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default CreateInvite;