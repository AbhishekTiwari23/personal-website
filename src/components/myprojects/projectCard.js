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
                <img src={props.pic} alt="" className='project-pic' />
            </div>
            <div className="projectCard-right">
                <a href={props.link} className="name">{props.name}</a>
                <div className="card-socials">
                    <a href={props.github}>
                        <img src={Github} alt="Github Link" className="github" />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default ProjectCard;