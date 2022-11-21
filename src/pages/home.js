import React from 'react'
import Header from '../components/header/header';
// import { ChangeEventHandler } from 'react';
// import { useState, useEffect } from 'react';
import Hero from '../components/hero/hero.js';
import Skills from '../components/skills/skills';
import Education from '../components/education/education';
import OpenSource from '../components/opensource/opensource';
import Footer from '../components/footer/footer';
import Projects from '../components/myprojects/myproject';
import Achievements from '../components/achievements/achievements';
import AboutMe from './abouMe/aboutme';
import ParticlesComponent from '../Point';
import GotoTop from '../components/gototop/gototop.js'
import Lamp from '../components/lamp/lamp';
import HeaderBox from '../components/headerBox/headerbox';

const Home =()=>{
    return(
        <div className="home">
              {/* <button onClick={toggleTheme}></button> */}
     <ParticlesComponent/>
     <Header/>
     
     {/* <LnadingPage/> */}
     {/* <HeaderBox/> */}
     {/* <AboutMe/> */}
     <Hero/>
     <Skills/>
     <Projects/>
     <Education/>
     <OpenSource/>
     
     <Achievements/>
     
     <GotoTop/>
     <Footer/>
     {/* <p>Made with love by Abhishek Tiwari</p> */}
     {/* <Abhishek/> */}
        </div>
    )
}
export default Home;