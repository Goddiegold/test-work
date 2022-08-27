import React from "react";
import SVGs from "../../../../../../assets/SVGs";
import "./Groupchat.css";
import "../Chat.css";

const Groupchat = ({ Groupmessages }) => {

    const Colors = [
        "#A8A8A8", "#0060FF","#EB5757"
    ]

    return (
        <div className="groupchat">
            <div className="GC_messages_wrapper">
                <div className="GC_messages_content">
                    <ul className="GC_messages_lists">
                        {Groupmessages.map((val, idx) => (
                            <li className="GC_message_list" key={idx}
                            style={{
                                display: "flex",
                                justifyContent: val.sender=="You"?"flex-end":"flex-start"
                            }}>
                                <div className="message_content">
                                    {((idx==0)||(idx>0 && Groupmessages[Math.max(0,idx-1)].sender!==val.sender)) &&
                                        <span className="message_sender"
                                        style={{color: Colors[Math.floor(Math.random()*2)]}}>
                                            {val.sender}
                                        </span>
                                    }
                                    <span className="message_value">{val.message}</span>
                                    <div className="message_time"><span>{val.time}</span></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="isTyping">{"Paul is typing..."}</div>
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

export default Groupchat;