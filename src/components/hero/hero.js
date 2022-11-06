import React from 'react'
import Abhishek from '../../abhishek/abhishek';
import MyImage from '../../assets/mypic/photo.jpeg';
import './hero.scss';
const Hero = () =>{
    return(
        <div className="hero">
            <p className = "text greeting-text"> Hi, I am <h2>{Abhishek.myname.firstName} <span className="grade">{Abhishek.myname.lastName}</span></h2></p>
           {/* <img src={MyImage} alt="my-pic" className="my-photo" /> */}
            <p className='text greeting-text-para'>Turning <span className='grade'>Ideas</span><br/> into <span className='grade'>reality</span> <br/>is my <span className='grade'>passion</span></p>
        </div>
    )
}
export default Hero;