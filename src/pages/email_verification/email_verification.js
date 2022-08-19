import React, { useEffect, useState } from "react";
import "./email_verification.css";
import Button from "../../components/Button/Button";
import image from "../../assets/Ellipse 4.png";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import image2 from "../../assets/Ellipse 5.png";
import { verifyAccount } from "../../services/userService";
import { toast } from "react-toastify";

const EmailVerify = () => {
const [code,setCode] = useState("")
const {state} = useLocation()
const navigate = useNavigate()
    
useEffect(()=>{
    if(!state?.usrEmail) return navigate("/login")
},[])

function handleAccountVerification(){
    if(!code) return toast.info("Enter the code send to you mail")
    if(code){
        verifyAccount(code).then(res=>{
            console.log(res)
            toast.success(res.data)
        }).catch(err=>{
            console.log(err)
            toast.error(err.response.data)
        })
    }
}

    return (
        <div className="email">
            <div className="email_top">
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
            <div className="email_contents">
                <div className="email_main">
                    <h1>Verify your email</h1>
                    <span>
                        We’ve sent a special verification code to {state?.usrEmail}.  {" "}
                        Please check for the code and enter below.
                    </span>
                    <div className="email_main_contents">
                        <input placeholder="Enter verification code" type="text" value={code} onChange={(e)=>setCode(e.target.value)}/>
                    </div>
                    <div className="email_button">
                        <Button text="Verify" onClick={handleAccountVerification}/>
                    </div>
                </div>
                <div className="email_base">
                    <span>Can't find it?</span>
                    <Link to="#" className="email_route">Resend</Link>
                </div>
            </div>
        </div>
    )
}

export default EmailVerify;