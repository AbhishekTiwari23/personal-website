import React from 'react'
import Abhishek from '../../abhishek/abhishek';
import './achievements.scss'
import Card from './achievementCard';
const Achievements = () =>{
    return (
        <div className="achievements">
            <h2 className='title'>Achievements</h2>
            <Card name = "Jee Mains" logoUrl = "" para = "Cracked the Exam with 98.2%ile"   />
            <Card name = "Jee Mains" logoUrl = "" para = "Cracked the Exam with 98.2%ile"   />
            <Card name = "Jee Mains" logoUrl = "" para = "Cracked the Exam with 98.2%ile"   />
        </div>
    )
}
export default Achievements;