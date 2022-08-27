import React from "react";
import zoom from "../../../../assets/zoom.png";
// import MrUyi from "../../../../assets/mr_uyi.png";
import Oluseyi from "../../../../assets/Oluseyi.png";
// import Ibukun from "../../../../assets/Ibukun.png";
// import Paul from "../../../../assets/Paul.png";
// import Lady from "../../../../assets/Lady.png";
import SVGs from "../../../../assets/SVGs";
import "./VC_Top.css";

const VCTop = ({ participants }) => {

    // const ParticipantsPics = [Lady,MrUyi,Paul,Ibukun,Oluseyi]

    return (
        <div className="VC_top_container">
            <div className="VC_top_wrapper">
                <div className="VC_top_content">
                    <div className="VC_top_left">
                        <div className="zoom_pic">
                            <img src={zoom} />
                        </div>
                        <div className="VC_top_title">
                            <h1>Dano Milk Vs Peak</h1>
                            <span className="date">August 25th, 2022 | 11:00 AM </span>
                        </div>
                    </div>
                    <div className="VC_top_right">
                        <div className="VC_top_pics">
                            <div className="participants_pics">
                                {participants.slice(0, 4).map((val, idx) => (
                                    <div className="participant_pic" key={idx}>
                                        <img src={val.img} />
                                    </div>
                                ))}
                                {participants.length > 4 &&
                                    <div className="participant_pic others">
                                        {`+${participants.length-4}`}
                                    </div>
                                }
                            </div>
                            <div className="moderator">
                                <div className="moderator_pic"><img src={Oluseyi} /></div>
                                <div className="moderator_txts">
                                    <span className="moderator_name">Oluseyi</span>
                                    <span className="moderator_desc">Moderator</span>
                                </div>
                            </div>
                        </div>
                        <div className="add_participants">
                            <span>Add Participants</span>
                            {SVGs.addParticipant}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VCTop;