import React, { useState } from "react";
import VCTop from "./VC_Top/VC_Top";
import "./VC.css";
import Data from "./VC_data";
import VCSide from "./VC_Side/VC_Side";
import VCLive from "./VC_Main/VCLive";

const VC = () => {

    const [participants, setParticipants] = useState(Data.participants);
    const [gcMessages, setGcMessages] = useState(Data.GC);
    const [showSide, setShowSide] = useState(false);

    const updateParticipants = () => {
        // const updatedArray = 
    }
    const showSideView = () => {
        setShowSide(true);
    }
    const hideSideView = () => {
        setShowSide(false);
    }

    return (
        <div className="VC">
            <VCTop participants={participants} />
            <div className="VC_mid">
                <VCLive 
                showSide={showSide}
                participants={participants} 
                showSideView={showSideView} 
                />
                <VCSide 
                hideSideView={hideSideView}
                showSide={showSide}
                participants={participants} 
                participantsMessages={gcMessages} 
                />
            </div>
        </div>
    )
}

export default VC;