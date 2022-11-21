import React from 'react'
import Abhishek from '../../abhishek/abhishek';
import ParticlesComponent from '../../Point';
import './hero.scss';

const Hero = () =>{
    return(
        <div className="hero">
            {/* <ParticlesComponent id ="tsparticles"/> */}
            <p className = "greeting-text"> <span className="tex-left"> Hi <span className='grade'>{" < Geek / > "}</span><span className='wave'> 👋</span></span><br/> <div className='text-right'> I am <h2>{Abhishek.myname.firstName} <span className="grade">{Abhishek.myname.lastName}</span></h2></div></p>
           {/* <img src={MyImage} alt="my-pic" className="my-photo" /> */}
            <p className='greeting-text-para'>turning <span className='grade'>Ideas</span><br/> into <span className='grade'>Reality</span> <br/>is my <span className='grade'>Passion</span></p>
        </div>
    )
}
export default Hero;