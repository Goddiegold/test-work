import React, { useState } from "react";
import "./account_setup.css";
import image2 from "../../assets/Ellipse 5.png";
import Select from "react-select";
import Data from "./setupData";

const AccountSetup = () => {

    const [state, setState] = useState({});

    const handleSelect = (name, val) => {
        setState({
            ...state,
            name: val
        })
    }
    const handleMultiSelect = (name, val) => {
        setState({
            ...state,
            name: state.name ? [...state.name, val] : [val]
        })
    }
    const customStyles = {
        control: (styles) => ({
            ...styles,
            paddingTop: 8,
            paddingRight: 0,
            paddingLeft: 10,
            paddingBottom: 8,
            borderRadius: 10,
            
        }),
        option: (provided, state) => ({
            ...provided,
            padding: 10
        })
    }

    return (
        <div className="account_setup">
            <div className="account_setup_top">
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
            <div className="account_setup_fields">
                <div className="account_setup_fields_contents">
                    <h1>Complete your setup</h1>
                    <form>
                        <div className="input_field">
                            <label>Your Company name</label>
                            <div className="input">
                                <input placeholder="Enter full name" 
                                type="text"
                                required />
                            </div>
                        </div>
                        <div className="input_field">
                            <label>Your industry</label>
                            <div className="input">
                                <input placeholder="Enter full name" 
                                type="text"
                                required />
                            </div>
                        </div>
                        <div className="input_field">
                            <label>Location</label>
                            <div className="input">
                                <input placeholder="Nigeria" 
                                type="text"
                                required />
                            </div>
                        </div>
                        <div className="input_field">
                            <label>Your State</label>
                            <div className="input" style={{background: "none", padding:"0px"}}>
                                <Select 
                                className="select"
                                width="100%"
                                styles={customStyles}
                                options={Data.states}
                                isClearable={true}
                                isSearchable={true}
                                onChange={(val) => handleSelect("state", val)}
                                closeMenuOnSelect={true}
                                />
                            </div>
                        </div>
                        <div className="input_field">
                            <label>Your Job/role</label>
                            <div className="input" style={{background: "none", padding:"0px"}}>
                                <Select 
                                isMulti
                                className="select"
                                styles={customStyles}
                                options={Data.jobs}
                                isClearable={true}
                                isSearchable={true}
                                onChange={(val) => handleMultiSelect("jobs", val)}
                                />
                            </div>
                        </div>
                        <div className="account_setup_button">
                            <input type="submit" title="Finish" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AccountSetup;