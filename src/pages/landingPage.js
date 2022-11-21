import React from 'react'
import ParticlesComponent from '../Point.js';
import './landingpage.scss'

let i =0;
const mytext = "I am Abhishek Tiwari";
let speed = 60;
const  textStyle=()=>{
    return{
        __html : "hello Abhi"
    };
}
const LnadingPage = () =>{
    return(
        <div className="wrapper">
            <ParticlesComponent/>
            <div className="content">
                <div className="text">Hello</div>
                {/* <div dangerouslySetInnerHTML={textStyle}></div> */}
                <div className="mytext"></div>
            </div>
        </div>
    )
}
export default LnadingPage;