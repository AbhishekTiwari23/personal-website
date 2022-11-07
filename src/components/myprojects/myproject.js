import React from 'react'
import ProjectCard from './projectCard';
import Portfolio from '../../assets/mypic/portfolio.png'
import './myproject.scss';
const Projects=()=>{
    return(
        <div className="project-wrapper">
            <div className="content">
             <div className="title"><span className='grade'> Yeah,I really work hard </span><small>💼</small></div>
             <p className="project-content">Each of my project is Unique ✨</p>
             </div>
             <div className="allprojectCard-wrapper">
                <ProjectCard description = "React.JS SCSS HTML" name="Portfolio" pic={Portfolio} siteLink="" github="" error="" />
                {/* <ProjectCard description = "React.JS SCSS HTML" name="Portfolio" front={Front} back={Back} siteLink="" github="" error="" /> */}
             </div>
        </div>

    )
}
export default Projects;
