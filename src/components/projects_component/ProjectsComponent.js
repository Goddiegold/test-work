import React from "react";
import "./ProjectsComponent.css";
import { useNavigate } from "react-router-dom";
import image from "../../assets/Ellipse 4.png";
import image2 from "../../assets/Ellipse 5.png";

const ProjectsComponent = ({ data, link }) => {
 
    const navigate = useNavigate();
    const handleNav = () => {
        navigate(link);
    }
    return (
        <div className="PCs_container">
            <div className="PCs_content">
                <span className="PCs_big">{data.title}</span>
                {
                    data.goal.includes("<") ? 
                    <span className="PCs_small" dangerouslySetInnerHTML={{__html: data.goal}}></span> :
                    <span className="PCs_small">{data.goal}</span>
                }
                
                <div className="PCs_button">View</div>
                <span className="PCs_small">{data.desc}</span>
                <div className="PCs_button" onClick={() => handleNav()}>View</div>
                <div className="PCs_imgs">
                    <div className="PCs_relative_img1"><img src={image} /></div>
                    <div className="PCs_absolute_img"><img src={image2} /></div>
                    <div className="PCs_relative_img2"><img src={image} /></div>
                </div>
                <span className="PCs_small">80+ participants</span>
            </div>
        </div>
    )
}

export default ProjectsComponent;