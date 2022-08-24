import React from "react";
import "./Button.css";

const Button = ({ text, handleButtonClick, disabled }) => {

    return (
        <div className={`button_link ${disabled ? 'disabled' : ''}`} onClick={handleButtonClick}>{text}</div>
    )
}

export default Button;