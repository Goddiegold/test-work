import React, { useContext, useEffect ,useState} from "react";
import SVGs from "../../../../assets/SVGs";
import { useNavigate } from "react-router-dom";
import "./VCLive.css";
import * as webRTCHandler from "../../../../utils/webRTCHandler";
import Video from "./Video";
import { MeetingContext } from "../../../../context/MeetContext";
const constraints = {
    audio: false,
    video: true,
  };
const VCLive = ({ participants, showSide, showSideView }) => {
    const {meet} = useContext(MeetingContext)
    const navigate = useNavigate();
    let data=[1,2,3]
    const [screenSharingStream, setScreenSharingStream] = useState(null);
    const [isScreenSharingActive, setIsScreenSharingActive] = useState(false);
    const handleScreenShareToggle = async () => {
        if (!isScreenSharingActive) {
          let stream = null;
          try {
            stream = await navigator.mediaDevices.getDisplayMedia(constraints);
          } catch (err) {
            console.log(
              "error occurred when trying to get an access to screen share stream"
            );
          }
          if (stream) {
            setScreenSharingStream(stream);
    
            webRTCHandler.toggleScreenShare(isScreenSharingActive, stream);
            setIsScreenSharingActive(true);
            // execute here function to switch the video track which we are sending to other users
          }
        } else {
          webRTCHandler.toggleScreenShare(isScreenSharingActive);
          setIsScreenSharingActive(false);
    
          // stop screen share stream
          screenSharingStream.getTracks().forEach((t) => t.stop());
          setScreenSharingStream(null);
        }
      };

    useEffect(()=>{
webRTCHandler.getLocalPreviewAndInitRoomConnection(null,null,null,null,meet)
    },[])

    return (
        <div 
        className={`VC_live_container${showSide?"_hide":""}`}>
            <div className="VC_live_content">
                <div className="VC_Live_video" id={!isScreenSharingActive&&"VC_Live_video"}>
             {isScreenSharingActive&& <Video stream={screenSharingStream}/>}
                </div>
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