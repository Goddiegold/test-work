import React, { useState } from "react";
import "./Privatechartmain.css";
import Privatechat from "./Privatechat";

const PrivateChartMain = ({ participants }) => {

    const [personalChat, setPersonalChat] = useState(participants[0]);
    const [hide, setHide] = useState(true);

    const changeState = (val) => {
        setPersonalChat(val);
        setHide(false);
    }

    const handleHide = () => {
        setHide(true);
    }

    return (
        <div className="PC_container">
            <div className="PC_wrapper">
            <div className="PC_list_container">
                <ul className="PC_lists">
                    {participants.map((val, idx) => (
                        <li className="PC_list" key={idx}
                        onClick={() => changeState(val)}>
                            <img src={val.img} />
                            <div className="PC_list_txt">
                                <span className="PC_list_name">{val.Name}</span>
                                <span className="PC_list_label">Start Messaging</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <Privatechat personalMessage={personalChat} handleHide={handleHide} hide={hide} />
            </div>
        </div>
    )
}

export default PrivateChartMain;