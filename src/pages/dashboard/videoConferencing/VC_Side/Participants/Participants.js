import React, { useState } from "react";
import SVGs from "../../../../../assets/SVGs";
import "./Participants.css";


const Participants = ({ participants }) => {

    const [showParticipants, setShowParticipants] = useState(true);

    return (
        <div className="Participants">
            <div className="participants">
                <div className="participants_content">
                    <span>Participants</span>
                    <div className="participants_dropdown_toggler"
                    onClick={() => setShowParticipants(!showParticipants)}
                    style={{transform: `rotate(${showParticipants?"0deg":"180deg"})`}}>
                        {SVGs.arrowDownBlue}
                    </div>
                </div>
            </div>
            <div className="participants_dropdown_content"
            style={{height: showParticipants?"200px":"0px"}}>
                <div className="participants_dropdown">
                    <ul className="participants_dropdown_lists">
                        {participants.map((val, idx) => (
                            <li className="a_participant" key={idx}>
                                <div className="participant_div">
                                    <div className="participant_dets">
                                        <img src={val.img} />
                                        <span>{val.Name}</span>
                                    </div>
                                    <div className="participant_mode">
                                        <div className="participant_microphone">
                                            {val.isMute ? 
                                                SVGs.microphoneRedSlash :
                                                SVGs.microphoneBlue
                                            }
                                        </div>
                                        <div className="participant_video">
                                            {val.videoOn ?
                                                SVGs.videoBlue :
                                                SVGs.videoRedSlash
                                            }
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Participants;