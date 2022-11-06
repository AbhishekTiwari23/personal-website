import React from 'react';
import './header.scss';
import Abhishek from '../../abhishek/abhishek';
import AbhishekLogo from '../../assets/mypic/Abhishek.jpg';
import Hamburger from '../../assets/socials/hamburger.svg';
import Close from '../../assets/socials/close.svg';
const Header = () =>{
    return(
        <div className="header">
          <div className="name-logo">
            <a href="" className="logo">
              <img src={AbhishekLogo} alt="logo" className='abhiLogo'/>
            {/* <p className="name">{Abhishek.myname.firstName} <span>{Abhishek.myname.lastName}</span></p> */}
            </a>
          </div>
          <div className="menu">
            {/* <p className='menu-text'>menu</p> */}
            <img src={Hamburger} alt="hamburger-open" />
            {/* <img src={Close} alt="hamburger-close" /> */}
          </div>
        </div>
    )
}

export default Header;