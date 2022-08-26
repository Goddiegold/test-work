import React, { useState } from "react";
import "./Toggle.css";

const Toggle = ( { handleToggleFunction }) => {

    const [left, setLeft] = useState(true);

    const handleToggleBar = () => {
        setLeft(!left);
        handleToggleFunction()
    }

    return (
        <div className="toggle" onClick={handleToggleBar}>
            <div style={{marginLeft: left?"0px":"15px"}}></div>
        </div>
    )
}
export default Toggle;