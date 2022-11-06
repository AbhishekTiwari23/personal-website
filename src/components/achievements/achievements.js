import React from 'react'
import Abhishek from '../../abhishek/abhishek';
import './achievements.scss'
import Card from './achievementCard';
const Achievements = () =>{
    return (
        <div className="achievements">
            <div className="content">
            <div className='title'><span className='grade'>Success is not a piece of cake </span> 🍰</div>
            <p className='para'>Have a look at some of my achievements 🥇</p>
            </div>
            <div className="cards">
            <Card name = "Jee Mains" logoUrl = "" para = "Cracked the Exam with 98.2%ile"   />
            <Card name = "Jee Mains" logoUrl = "" para = "Cracked the Exam with 98.2%ile"   />
            <Card name = "Jee Mains" logoUrl = "" para = "Cracked the Exam with 98.2%ile"   />
            </div>
        </div>
    )
}
export default Achievements;