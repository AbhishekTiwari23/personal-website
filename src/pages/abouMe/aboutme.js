import React from 'react'
import Abhishek from '../../abhishek/abhishek'
import MyPhoto from '../../assets/mypic/myphoto.jpeg'
import ParticlesComponent from '../../Point'

import './aboutme.scss'
const AboutMe =() =>{
    return(
        <div className="wrapper">
            
            <div className="back">
            <img src="data:image/png;base64,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" />
            </div>
            <div ><img className="myimage" src={MyPhoto} alt="my photo" /></div>
            <div className="content">
            {/* Hello,  I am Abhishek Tiwari, a sophomore at the Netaji Subhas University of Technology, currently pursuing my bachelor's degree in Electronics and Communication Engineering with a specialisation in IoT. I am a neophile, have a keen interest in the future of tech, and am always eager to learn new and exciting things. My current focus is web development. Recently I participated in the Google Cloud Ready Facilitator program, through which I got hand on experience with the Cloud platform and Kubernetes. I am also keen on learning about open source and other development skills. Besides all this, I also love to solve questions on platforms like Leetcode.
I spent most of my time making a better version of myself and learning from my past mistakes. */}
{"??? I am Abhishek Tiwari "}
??? A sophomore at the Netaji Subhas University of Technology ??????? Delhi <br/>
{"??? Pursuing my bachelor's degree in Electronics and Communication Engineering with a specialisation in IoT."} <br/>
??? I am a neophile, have a keen interest in the future of tech, and am always eager to learn new and exciting things.<br/>
??? I am also keen on learning about open source and other development skills.


            </div>
            <ParticlesComponent/>
        </div>
    )
}
export default AboutMe;