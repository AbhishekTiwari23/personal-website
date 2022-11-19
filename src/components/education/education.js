import React from 'react'
import EducationCard from './educationCard.js';
import './education.scss';
const Education = () =>{
    return(
        <div className="education">
            <p className='title'><span className='grade'>I am a Learner </span>📚</p>
            <EducationCard link= "http://www.nsit.ac.in/"/>
        </div>
    )
}
export default Education;