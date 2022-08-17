import React from "react";
import "./header.css";
import image from "../../assets/Ellipse 5.png";

const Header = ({ toggleSidebar }) => {

    return (
        <header>
            <div className="header">
                <div className="header_left">
                    <div className="message">
                        <svg width="33" height="33" viewBox="0 0 43 38" fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.7074 36.4105C33.2954 36.4105 37.0904 36.4105 39.4466 33.838C41.8049 31.2677 41.8049 27.1281 41.8049 18.8509C41.8049 10.5738 41.8049 6.43413 39.4466 3.86386C37.0904 1.29138 33.2954 1.29138 25.7074 1.29138H17.6586C10.0706 1.29138 6.27561 1.29138 3.91933 3.86386C1.56103 6.43413 1.56104 10.5738 1.56104 18.8509C1.56104 27.1281 1.56103 31.2677 3.91933 33.838C5.23329 35.2735 6.99396 35.9078 9.60982 36.1866" 
                            fill="#F2F2F2"/>
                            <path d="M25.7074 36.4105C33.2954 36.4105 37.0904 36.4105 39.4466 33.838C41.8049 31.2677 41.8049 27.1281 41.8049 18.8509C41.8049 10.5738 41.8049 6.43413 39.4466 3.86386C37.0904 1.29138 33.2954 1.29138 25.7074 1.29138H17.6586C10.0706 1.29138 6.27561 1.29138 3.91933 3.86386C1.56103 6.43413 1.56104 10.5738 1.56104 18.8509C1.56104 27.1281 1.56103 31.2677 3.91933 33.838C5.23329 35.2735 6.99396 35.9078 9.60982 36.1866" 
                            stroke="#0076F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="hamburger">
                        <svg width="28" height="20" viewBox="0 0 28 20" fill="none" 
                        xmlns="http://www.w3.org/2000/svg" onClick={toggleSidebar}>
                            <rect width="28" height="2" fill="#8E8E8E"/>
                            <rect y="9" width="28" height="2" fill="#8E8E8E"/>
                            <rect y="18" width="28" height="2" fill="#8E8E8E"/>
                        </svg>
                    </div>
                    <div className="header_input">
                        <input />
                    </div>
                </div>
                <div className="header_right">
                    <div className="notification">
                        <svg width="30" height="34" viewBox="0 0 30 34" 
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.581339 23.8704L3.82247 17.8865V11.6562C3.82247 5.43575 8.88322 0.375 15.1037 0.375C21.3242 0.375 26.385 5.43575 26.385 11.6562V17.8865L29.6262 23.8703C29.7732 24.1416 29.8472 24.4465 29.8409 24.755C29.8347 25.0635 29.7483 25.3651 29.5904 25.6302C29.4325 25.8954 29.2085 26.1149 28.9402 26.2674C28.6719 26.4198 28.3686 26.5 28.06 26.5H21.6078C21.6258 26.6974 21.6349 26.8955 21.635 27.0938C21.635 28.8259 20.9469 30.4872 19.7221 31.712C18.4972 32.9369 16.836 33.625 15.1038 33.625C13.3716 33.625 11.7103 32.9369 10.4855 31.712C9.26066 30.4872 8.57254 28.8259 8.57254 27.0938C8.57254 26.8934 8.58212 26.6956 8.59978 26.5H2.14758C1.83902 26.5 1.53577 26.4198 1.26752 26.2673C0.999279 26.1148 0.775245 25.8953 0.617368 25.6302C0.459492 25.365 0.373187 25.0635 0.36691 24.755C0.360633 24.4465 0.434599 24.1417 0.581561 23.8704H0.581339ZM10.9475 27.0938C10.947 27.6649 11.0643 28.2301 11.2919 28.7539C11.5196 29.2777 11.8528 29.749 12.2708 30.1383C12.6887 30.5276 13.1824 30.8266 13.721 31.0166C14.2597 31.2067 14.8317 31.2836 15.4014 31.2427C15.9711 31.2018 16.5262 31.0439 17.0322 30.7789C17.5382 30.5139 17.9841 30.1474 18.3421 29.7024C18.7001 29.2574 18.9626 28.7433 19.1131 28.1923C19.2636 27.6413 19.2989 27.0652 19.2168 26.5H10.9907C10.9621 26.6966 10.9477 26.8951 10.9475 27.0938V27.0938ZM27.0632 24.125L24.01 18.4885V11.6562C24.01 9.29417 23.0716 7.02883 21.4014 5.35858C19.7311 3.68833 17.4658 2.75 15.1037 2.75C12.7416 2.75 10.4763 3.68833 8.80605 5.35858C7.1358 7.02883 6.19747 9.29417 6.19747 11.6562V18.4885L3.14441 24.125H27.0632Z" fill="black"/>
                        </svg>
                    </div>
                    <div className="avatar">
                        <img src={image} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;