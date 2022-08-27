import React from "react";
import SVGs from "../../../../assets/SVGs";
import { useNavigate } from "react-router-dom";
import "./VCLive.css";

const VCLive = ({ participants, showSide, showSideView }) => {

    const navigate = useNavigate();

    return (
        <div 
        className={`VC_live_container${showSide?"_hide":""}`}>
            <div className="VC_live_content">
                <div className="VC_Live_video"></div>
            </div>
            <div className="VC_live_bottom">
                <div className="VC_live_bottom_div">
                    <div className="VC_live_bottom_icons">
                        <div className="VC_live_icon_blue">{SVGs.microphoneWhite}</div>
                        <div className="VC_live_icon_blue">{SVGs.videoWhite}</div>
                        <div className="VC_live_icon_lightblue">{SVGs.sendSquare}</div>
                        <div className="VC_live_record">{SVGs.recordCircleRed}</div>
                        <div className="VC_live_icon_lightblue"
                        onClick={() => showSideView()}>{SVGs.messageBlue}</div>
                        <div className="VC_live_icon_lightblue">{SVGs.ellipses}</div>
                    </div>
                </div>
                <div className="end_call" onClick={() => navigate("/dashboard/projects")}>End Call</div>
            </div>
        </div>
    )
}

export default VCLive;