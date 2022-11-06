import React from 'react'
import ProjectCard from './projectCard';
import Front from '../../assets/mypic/memoji_full.jpeg';
import Back from  '../../assets/mypic/photo.jpeg';
import './myproject.scss';
const Projects=()=>{
    return(
        <div className="project-wrapper">
             <div className="title">Projects</div>
             <div className="allprojectCard-wrapper">
                <ProjectCard description = "React.JS SCSS HTML" name="Portfolio" front={Front} back={Back} siteLink="" github="" error="" />
                {/* <ProjectCard description = "React.JS SCSS HTML" name="Portfolio" front={Front} back={Back} siteLink="" github="" error="" /> */}
             </div>
        </div>

    )
}
export default Projects;
