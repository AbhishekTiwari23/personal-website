import React from 'react'
import EducationCard from './educationCard.js';
import './education.scss';
const Education = () =>{
    return(
        <div className="education">
            <p className='title'><span className='grade'>I am a Learner </span>📚</p>
            <EducationCard link= "www.google.com"/>
        </div>
    )
}
export default Education;