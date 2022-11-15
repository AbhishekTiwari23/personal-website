import './App.css';
import './App.scss';
import Header from './components/header/header';
// import { ChangeEventHandler } from 'react';
// import { useState, useEffect } from 'react';
import Hero from './components/hero/hero';
import Skills from './components/skills/skills';
import Education from './components/education/education';
import OpenSource from './components/opensource/opensource';
import Footer from './components/footer/footer';
import Projects from './components/myprojects/myproject';
import Achievements from './components/achievements/achievements';
import ParticlesComponent from './Point';
import GotoTop from '../src/components/gototop/gototop.js'
import Lamp from './components/lamp/lamp';
// import Abhishek from './assets/mypic/Abhishek.png'

function App() {
  return (
    <div className={"App ${theme} "}>
      {/* <button onClick={toggleTheme}></button> */}
     <Header/>
     {/* <div className="wave"> <Lamp/></div> */}
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
  );
}

export default App;
