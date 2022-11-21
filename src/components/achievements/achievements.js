import React from 'react'
import './achievements.scss'
import JeeMains from '../../assets/mypic/jee2021.jpeg'
import JeeAdvance from '../../assets/mypic/jeeadvance2021.webp'
import Hacktoberfest from '../../assets/mypic/hacktoberfest.jpeg';
import HackSquad from '../../assets/mypic/hacks.webp'
import Card from './achievementCard';
const Achievements = () =>{
    return (
        <div className="achievements">
            <div className="content">
            <div className='title'><span className='grade'>Success is not a piece of cake </span> 🍰</div>
            <p className='para'>Have a look at some of my achievements 🥇</p>
            </div>
            <div className="cards">
            <Card name = "Hack Squad" logoUrl = {HackSquad} para = "Win the competetion with my team submited 100PR and got a rank of 12"  siteLink = "https://dev.to/novu/hacksquad-2022-contribute-meet-participate-and-win-swag-3b18" />
            <Card name = "Hacktoberfest" logoUrl = {Hacktoberfest} para = "contributed in the fest conducted by Digital Ocean"  className="hacktoberfest" siteLink ="https://hacktoberfest.com/"/>
            <Card name = "Jee Advance" logoUrl = {JeeAdvance} para = "Cracked the Exam"  siteLink="https://jeeadv.ac.in/" />
            <Card name = "Jee Mains" logoUrl = {JeeMains} para = "Cracked the Exam with 98.2%ile" siteLink="https://jeemain.nta.nic.in/"  />
            </div>
        </div>
    )
}
export default Achievements;