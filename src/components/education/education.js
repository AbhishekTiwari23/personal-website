import React from 'react'
import EducationCard from './educationCard.js';
import './education.scss';
const Education = () =>{
    return(
        <div className="education">
            <p className='title'>Education</p>
            <EducationCard link= "www.google.com"/>
        </div>
    )
}
export default Education;