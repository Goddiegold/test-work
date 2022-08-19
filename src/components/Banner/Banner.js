import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import man from "../../assets/willowy-man.png";

const Banner = () => {
    const location = useLocation()

    return (
        <div className="banner">
            <div className="banner_content">
                <div className="banner_top">
                    <div className="banner_top_texts">
                        <span className="med_light">
                        {location.pathname==="/signup"? "Already have an account?":"Don't have an account?"}
                       </span>
                        <Link to={location.pathname==="/signup"?"/login":"/signup"} className="med_light" 
                        style={{color: "#0076F7", marginLeft: "5px", textDecoration: "none"}}>
                             {location.pathname==="/signup"?"Sign in":"Sign up"}
                        </Link>
                    </div>
                </div>
                <div className="big_text">
                    <h1>1-single platform to ease consumer data research</h1>
                </div>
                <div className="banner_img">
                    <img src={man} />
                </div>
            </div>
        </div>
    )
}

export default Banner;