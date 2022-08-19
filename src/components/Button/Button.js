import React from "react";
import "./Button.css";

const Button = ({ text, ...otherProps }) => {

    return (
        <div className="button_link" {...otherProps}>{text}</div>
    )
}

export default Button;