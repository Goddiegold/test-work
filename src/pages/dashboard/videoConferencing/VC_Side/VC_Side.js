import React from "react";
import Chat from "./Chats/Chat";
import Participants from "./Participants/Participants";
import "./VC_Side.css";

const VCSide = ({ participants, participantsMessages, showSide, hideSideView }) => {

    return (
        <div className={showSide ? "VC_side": "VC_side_hide"}>
            <div className="VC_side_content">
                <div className="close_vc_side"
                onClick={() => hideSideView()}>
                <svg width="20" height="20" viewBox="0 0 512 512" fill="rgb(0, 96, 255)" 
                xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" 
                xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
                xmlSpace="preserve" style={{color: "rgb(0, 96, 255)"}}>
                    <g><g>
                        <path d="M286.17,256L505.752,36.418c8.331-8.331,8.331-21.839,0-30.17c-8.331-8.331-21.839-8.331-30.17,0L256,225.83L36.418,6.248
                        c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17L225.83,256L6.248,475.582
                        c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0L256,286.17l219.582,219.582
                        c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17L286.17,256z">
                        </path>
                    </g></g>
                </svg>
                </div>
                <Participants participants={participants} />
                <Chat participants={participants} Groupmessages={participantsMessages} />
            </div>
        </div>
    )
}

export default VCSide;