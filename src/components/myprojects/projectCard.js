import React from 'react';
import './projectCard.scss';
import Github from '../../assets/socials/github.svg';
const ProjectCard = (props)=>{
    return(
        <div className="projectCard-wrapper">
            {/* <div className="projectCard-left">
                <p className="description">{props.description}</p>
            </div> */}
            <div className="projectCard-middle">
                <img src={props.front} alt="front" className="front" />
                <img src={props.back} alt="back" className="back" />
            </div>
            <div className="projectCard-right">
                <p className="name">{props.name}</p>
                <a href={props.siteLink} className="site-link">Site Link</a>
                <div className="card-socials">
                    <a href={props.github}>
                        <img src={Github} alt="Github Link" className="github" />
                    </a>
                    <a href={props.error}>
                        <img src="https://img.icons8.com/fluency/48/000000/error-cloud.png" alt="Error Link" className="error" />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default ProjectCard;