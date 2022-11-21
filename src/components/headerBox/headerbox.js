import React from 'react'
import './headerbox.scss';
import AboutMe from '../../pages/abouMe/aboutme';
//import HeaderStyle from './headerBox.style';
import Close from '../../assets/socials/close.svg'
const HeaderBox = ()=>{
    return(
        <div className="headerBox">
            <div className="close-box">
            <div className="close"><img src={Close} alt="" /> </div>
           </div>
            <div className="wrapper">
               <div className="about_me" onClick={()=>{alert("hello")}}>About Me</div>
                <div className="mode">Dark/Light</div>
                <div className="counter">Unique visitors counter : 100</div>
            </div>
        </div>
    )
}
export default HeaderBox;