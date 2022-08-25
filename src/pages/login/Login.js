import React, { useContext, useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import {login} from "../../services/userService";
import {UserContext, USER_TOKEN, yaarnBoxMaxToken} from "../../context/UserContext"
import { toast } from "react-toastify";

const Login = () => {

const [user,setUser] = useState({
    email:"",
    password:""
})

const {name,email,password} = user;
    const [show, setShow] = useState(false);
    // const [focused, setFocused] = useState(null);
const navigate = useNavigate()

const {userTokenDetails,userTokenDetailsDispatch} = useContext(UserContext)

useEffect(()=>{
if(userTokenDetails?.accountType&&userTokenDetails?.accountType==="client") return navigate("/dashboard")
},[])
    function handleFormInputChange({target:{name,value}}){
        const details = {...user}
        details[name] = value;
        setUser(details)
    }

    function handleFormSubmit(e){
        e.preventDefault()
        login(user).then(res=>{
            console.log(res)

            userTokenDetailsDispatch({
                type:USER_TOKEN,
                payload:res.headers["auth-token"]
            })

            if(!res.data.accountVerified) return toast.info("Check your mail to verify your account!",{position:"top-center"})

            if(!res.data.accountConfigured && res.data.accountType==="new" && res.data.accountVerified){
                toast.success("Logged in successfuly!")
                return navigate("/onboarding")
            }
            
            if(res.data.accountType==="participant") return toast.success("Participant experience in still in development!",{position:"top-center"})

            if(res.data.accountType==="client"){
                toast.success("Logged in successfuly!")
                return navigate("/dashboard")
            }
        }).catch(err=>{
            console.log(err)
        })
       
    }

    return (
        <div className="signup">
            <Banner />
            <div className="signup_fields">
                <div className="signup_fields_contents">
                    <div className="logo_brand">
                        <span>Yaarnbox</span>
                    </div>
                    <h2>Login to your account</h2>
                    <span className="small_light"
                    style={{marginTop: "20px"}}>
                        
                    </span>
                    <form onSubmit={handleFormSubmit}>
                        <div className="input_field">
                            <label>Email</label>
                            <div className="input">
                                <input placeholder="Enter email address" 
                                type="email" 
                                name="email"
                                min={3}
                                onChange={handleFormInputChange}
                                value={email}
                                required />
                            </div>
                        </div>
                        <div className="input_field">
                            <label>Password</label>
                            <div className="input_password">
                                <input placeholder="Enter password" 
                                type={!show?"password":"text"}
                                value={password}
                                name="password"
                                onChange={handleFormInputChange}
                                minLength={5}
                                required />
                                {
                                    !show ?
                                        <svg width="35px" height="35px" viewBox="0 0 43 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        onClick={() => setShow(!show)}>
                                            <path d="M40.3121 13.4208C41.2996 14.7125 41.2996 16.4562 40.3121 17.7458C37.2017 21.8062 29.7392 30.1667 21.0267 30.1667C12.3142 30.1667 4.85167 21.8062 1.74126 17.7458C1.26081 17.1274 1 16.3665 1 15.5833C1 14.8002 1.26081 14.0393 1.74126 13.4208C4.85167 9.36042 12.3142 1 21.0267 1C29.7392 1 37.2017 9.36042 40.3121 13.4208V13.4208Z" 
                                            stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M21.0267 21.8333C24.4785 21.8333 27.2767 19.0351 27.2767 15.5833C27.2767 12.1316 24.4785 9.33334 21.0267 9.33334C17.5749 9.33334 14.7767 12.1316 14.7767 15.5833C14.7767 19.0351 17.5749 21.8333 21.0267 21.8333Z" 
                                            stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg> :
                                        <svg width="36px" height="36px" viewBox="0 0 36 36" 
                                        version="1.1"  preserveAspectRatio="xMidYMid meet" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        onClick={() => setShow(!show)}>
                                            <title>eye-hide-line</title>
                                            <path d="M25.19,20.4A6.78,6.78,0,0,0,25.62,18a6.86,6.86,0,0,0-6.86-6.86,6.79,6.79,0,0,0-2.37.43L18,13.23a4.78,4.78,0,0,1,.74-.06A4.87,4.87,0,0,1,23.62,18a4.79,4.79,0,0,1-.06.74Z" 
                                            className="clr-i-outline clr-i-outline-path-1"></path>
                                            <path d="M34.29,17.53c-3.37-6.23-9.28-10-15.82-10a16.82,16.82,0,0,0-5.24.85L14.84,10a14.78,14.78,0,0,1,3.63-.47c5.63,0,10.75,3.14,13.8,8.43a17.75,17.75,0,0,1-4.37,5.1l1.42,1.42a19.93,19.93,0,0,0,5-6l.26-.48Z" 
                                            className="clr-i-outline clr-i-outline-path-2"></path>
                                            <path d="M4.87,5.78l4.46,4.46a19.52,19.52,0,0,0-6.69,7.29L2.38,18l.26.48c3.37,6.23,9.28,10,15.82,10a16.93,16.93,0,0,0,7.37-1.69l5,5,1.75-1.5-26-26Zm9.75,9.75,6.65,6.65a4.81,4.81,0,0,1-2.5.72A4.87,4.87,0,0,1,13.9,18,4.81,4.81,0,0,1,14.62,15.53Zm-1.45-1.45a6.85,6.85,0,0,0,9.55,9.55l1.6,1.6a14.91,14.91,0,0,1-5.86,1.2c-5.63,0-10.75-3.14-13.8-8.43a17.29,17.29,0,0,1,6.12-6.3Z" 
                                            className="clr-i-outline clr-i-outline-path-3"></path>
                                            <rect x="0" y="0" width="36" height="36" fillOpacity="0"/>
                                        </svg>
                                }
                            </div>
                        </div>
                        <div className="signup_button">
                            <input type="submit" title="Sign up" />
                        </div>
                    </form>
                    {/* <div className="signup_bottom">
                        <span className="small_light">By registering you agree with</span>
                        <Link to="#" className="small_light"
                        style={{color: "#0076F7", textDecoration: "none", marginLeft: "5px"}}>
                            Terms and condition
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Login;