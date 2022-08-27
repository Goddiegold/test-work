import React,{useEffect,useRef} from 'react';

const Video = ({stream}) => {
    const localVideoRef = useRef();
    useEffect(() => {
        const video = localVideoRef.current;
    
        video.srcObject = stream;
    
        video.onloadedmetadata = () => {
          video.play();
        };
      }, [stream]);
return(
    <video muted autoPlay ref={localVideoRef}/>
     )
}

export default Video;