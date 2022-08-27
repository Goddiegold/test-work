import React, { useState, useEffect } from "react";
import "./Privatechat.css";
import "../Chat.css";
import SVGs from "../../../../../../assets/SVGs";

const Privatechat = ({ personalMessage, handleHide, hide }) => {

    return (
        //!hide ? "PC_div_in":"PC_div_out"}>
        <div className={"PC_div"}
        style={{left: !hide?"0%":"100%"}}>
        {/* style={{transform: `translateX(${!hide?"-400px":"0px"})`}}> */}
            <div className="PC_top_div">
                <div className="arrow_back"
                onClick={() => handleHide()}>
                    {SVGs.arrowDownBlue}
                </div>
                <span>{personalMessage.Name}</span>
            </div>
            <div className="PC_message_lists">
                <ul>
                    {personalMessage.chats.map((val, idx) => (
                        <li className="PC_message_list" key={idx}
                        style={{
                            display: "flex",
                            justifyContent: val.sender=="You"?"flex-end":"flex-start"
                        }}>
                            <div className="message_content">
                                {/* {((idx==0)||(idx>0 && personalMessages[Math.max(0,idx-1)].sender!==val.sender)) &&
                                    <span className="message_sender"
                                    style={{color: Colors[Math.floor(Math.random()*2)]}}>
                                        {val.sender}
                                    </span>
                                } */}
                                <span className="message_value">{val.message}</span>
                                <div className="message_time"><span>{val.time}</span></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="sendmessage">
                <div className="sendmessage_wrapper">
                    <div className="sendmessage_content">
                        {SVGs.paperClip}
                        <input placeholder="Type Something..." />
                        <div className="sendmessage_button">
                            {SVGs.sendMessage} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Privatechat;