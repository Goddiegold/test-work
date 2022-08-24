import React from "react";
import "./Button.css";

const Button = ({ text, handleButtonClick }) => {

    return (
        <div className="button_link" onClick={handleButtonClick}>{text}</div>
    )
}

export default Button;