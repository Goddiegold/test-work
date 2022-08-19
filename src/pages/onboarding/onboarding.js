import { useState, useRef, useContext, useEffect } from "react";
import './onboarding.css';
import Button from "../../components/Button/Button";
import image from "../../assets/Ellipse 4.png";
import image2 from "../../assets/Ellipse 5.png";
import {UserContext} from "../../context/UserContext";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";

const Onboarding = () => {
    const [selected, setSelected] = useState(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const navigate = useNavigate()

    const handleClick = (e) => {
        if(ref1.current && ref2.current) {
            console.log(ref1.current, ref2.current)
            if(!ref1.current.contains(e.target) && !ref2.current.contains(e.target)) {
                setSelected(null);
            } 
        }
    }


        const {user:userDetails,userTokenDetails} = useContext(UserContext)

        useEffect(()=>{
    if(userTokenDetails?.accountConfigured) return navigate("/dashboard")
    if(!userTokenDetails?.accountType) return navigate("/login")
        },[]) 

    function handleOnClick(){
        if(selected && selected==="worker"){
            return toast.success("Worker's experience still in development")
        }else if(selected && selected==="business"){
            navigate("/account_setup")
        }
    }
    return (
        <div className="onboarding" onClick={handleClick}>
            <div className="onboarding_top">
                <div className="message">
                    <svg width="33" height="33" viewBox="0 0 43 38" fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.7074 36.4105C33.2954 36.4105 37.0904 36.4105 39.4466 33.838C41.8049 31.2677 41.8049 27.1281 41.8049 18.8509C41.8049 10.5738 41.8049 6.43413 39.4466 3.86386C37.0904 1.29138 33.2954 1.29138 25.7074 1.29138H17.6586C10.0706 1.29138 6.27561 1.29138 3.91933 3.86386C1.56103 6.43413 1.56104 10.5738 1.56104 18.8509C1.56104 27.1281 1.56103 31.2677 3.91933 33.838C5.23329 35.2735 6.99396 35.9078 9.60982 36.1866" 
                        fill="#F2F2F2"/>
                        <path d="M25.7074 36.4105C33.2954 36.4105 37.0904 36.4105 39.4466 33.838C41.8049 31.2677 41.8049 27.1281 41.8049 18.8509C41.8049 10.5738 41.8049 6.43413 39.4466 3.86386C37.0904 1.29138 33.2954 1.29138 25.7074 1.29138H17.6586C10.0706 1.29138 6.27561 1.29138 3.91933 3.86386C1.56103 6.43413 1.56104 10.5738 1.56104 18.8509C1.56104 27.1281 1.56103 31.2677 3.91933 33.838C5.23329 35.2735 6.99396 35.9078 9.60982 36.1866" 
                        stroke="#0076F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="avatar">
                    <img src={image2} />
                </div>
            </div>
            <div className="onboarding_contents">
                <div className="onboarding_main">
                    <h1>Hi {userDetails.user?userDetails.user.name:""},</h1>
                    <h1>How would you love to use yaarnbox?</h1>
                    <div className="onboarding_main_contents">
                        <div className="sections" onClick={() => setSelected("worker")} ref={ref1}
                        style={{border: selected==="worker"?"1px solid blue":"1px solid #8E8E8E"}}>
                            <div className="imgs">
                                <div className="relative_img1"><img src={image} /></div>
                                <div className="absolute_img"><img src={image} /></div>
                                <div className="relative_img2"><img src={image} /></div>
                            </div>
                            <div className="descriptions">
                                <span className="med_thick">
                                    I am a research worker
                                </span>
                                <span className="small_light">
                                    I'm looking for a remote research gig
                                </span>
                            </div>
                            {selected==="worker" && 
                                <div className="check">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" 
                                    xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="12.5" fill="#3EC70B"/>
                                        <path d="M10.6071 13.7977L10.625 13.8169L10.6429 13.7977L17.6769 6.25228C17.9601 5.94846 18.4186 5.94846 18.7018 6.25228L19.7625 7.39007C20.0466 7.69487 20.0466 8.18973 19.7625 8.49456L11.1375 17.7467C10.8542 18.0506 10.3958 18.0506 10.1125 17.7467L5.23752 12.5172C4.95338 12.2124 4.95338 11.7176 5.23752 11.4127L6.29815 10.275L6.2803 10.2583L6.29816 10.275C6.58138 9.9711 7.03988 9.9711 7.3231 10.275L7.34096 10.2583L7.3231 10.275L10.6071 13.7977Z" 
                                        fill="white" stroke="#0076F7" strokeWidth="0.0488281"/>
                                    </svg>
                                </div>
                            }
                        </div>
                        <div className="sections" onClick={() => setSelected("business")} ref={ref2}
                        style={{border: selected==="business"?"1px solid blue":"1px solid #8E8E8E"}}>
                            <div className="imgs">
                                <div className="relative_img1"><img src={image2} /></div>
                                <div className="absolute_img"><img src={image2} /></div>
                                <div className="relative_img2"><img src={image2} /></div>
                            </div>
                            <div className="descriptions">
                                <span className="med_thick">
                                    I am a business/co
                                </span>
                                <span className="small_light">
                                    I am looking to do data research for a brand  
                                </span>
                            </div>
                            {selected==="business" && 
                                <div className="check">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" 
                                    xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.5" cy="12.5" r="12.5" fill="#3EC70B"/>
                                        <path d="M10.6071 13.7977L10.625 13.8169L10.6429 13.7977L17.6769 6.25228C17.9601 5.94846 18.4186 5.94846 18.7018 6.25228L19.7625 7.39007C20.0466 7.69487 20.0466 8.18973 19.7625 8.49456L11.1375 17.7467C10.8542 18.0506 10.3958 18.0506 10.1125 17.7467L5.23752 12.5172C4.95338 12.2124 4.95338 11.7176 5.23752 11.4127L6.29815 10.275L6.2803 10.2583L6.29816 10.275C6.58138 9.9711 7.03988 9.9711 7.3231 10.275L7.34096 10.2583L7.3231 10.275L10.6071 13.7977Z" 
                                        fill="white" stroke="#0076F7" strokeWidth="0.0488281"/>
                                    </svg>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="onboarding_button">
                        <Button text="Continue" onClick={handleOnClick}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Onboarding;