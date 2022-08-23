import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";

const Button = ({ text, link }) => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        if(link) navigate(link);
    }

    return (
        <div className="button_link" onClick={handleButtonClick}>{text}</div>
    )
}

export default Button;