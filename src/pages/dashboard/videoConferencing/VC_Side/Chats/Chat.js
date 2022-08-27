import React, { useState } from "react";
import SVGs from "../../../../../assets/SVGs";
import "./Chat.css";
import Groupchat from "./Groupchat/Groupchat";
import PrivateChartMain from "./Privatechat/Privatechatmain";

const Chat = ({ Groupmessages, participants }) => {

    const [chatSelect, setChatSelect] = useState("Personal");
    const [showChat, setShowChat] = useState(true);

    return (
        <div className="Chat">
            <div className="chat_select">
                <span>Chat</span>
                <div className="chat_select_right">
                    <div className="chat_selector">
                        <div className="chat_select_value"
                        onClick={() => setChatSelect("Group")}
                        style={{color: chatSelect==="Group"?"white":"blue"}}>
                            Group
                        </div>
                        <div className="chat_select_value"
                        onClick={() => setChatSelect("Personal")}
                        style={{color: chatSelect!=="Group"?"white":"blue"}}>
                            Personal
                        </div>
                        <div className="chat_select_toggler"
                        style={{
                            color: "white", backgroundColor: "blue",
                            marginLeft: chatSelect==="Group"?"-98%":"-49%"
                        }}
                        ></div>
                    </div>
                    <div className="chat_toggler"
                    style={{transform: `rotate(${showChat?"0deg":"180deg"})`}}
                    onClick={() => setShowChat(!showChat)}>
                        {SVGs.arrowDownBlue}
                    </div>
                </div>
            </div>
            <div className="Chats_type"
            style={{height: showChat?"calc(100% - 70px)":"0px"}}>
                {chatSelect=="Group" ?
                    <Groupchat Groupmessages={Groupmessages}/> :
                    <PrivateChartMain participants={participants} />
                }
            </div>
        </div>
    )
}

export default Chat;