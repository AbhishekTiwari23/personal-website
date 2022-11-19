import React from 'react';
import './projectCard.scss';
import Github from '../../assets/socials/github.svg';
import {BrowserRouter as Router, Link } from 'react-router-dom';
const ProjectCard = (props)=>{
    return(
        <div className="projectCard-wrapper">
            {/* <div className="projectCard-left">
                <p className="description">{props.description}</p>
            </div> */}
            <Router>
            <div className="projectCard-middle">
                <img src={props.pic} alt="" className='project-pic' />
            </div>
            <div className="projectCard-right">
                <a href={props.link} className="name">{props.name}</a>
                <div className="card-socials">
                    <Link to={props.github}>
                        <img src={Github} alt="Github Link" className="github" />
                    </Link>
                </div>
            </div>
            </Router>
        </div>
    )
}
export default ProjectCard;