import React from 'react'
import './headerbox.scss';
//import HeaderStyle from './headerBox.style';
const HeaderBox = ()=>{
    return(
        <div className="headerBox">
            <div className="wrapper">
               <div className="Aout-me">About Me</div>
                <div className="DarkMode">Dark/Light</div>
            </div>
        </div>
    )
}
export default HeaderBox;