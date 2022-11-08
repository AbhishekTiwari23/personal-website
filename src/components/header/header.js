import React from "react";
import "./header.scss";
import AbhishekLogo from "../../assets/mypic/abhishek.png";
import Hamburger from "../../assets/socials/hamburger.svg";
// import Close from "../../assets/socials/close.svg";
const Toggle = () => {
  return (
    alert("hello")
  )
};

const Header = () => {
  return (
    <div className="header">
      <div className="name-logo">
        <a href="/" className="logo">
          <img src={AbhishekLogo} alt="logo" className="abhiLogo" />
          {/* <p className="name">{Abhishek.myname.firstName} <span>{Abhishek.myname.lastName}</span></p> */}
        </a>
      </div>
      <div className="menu">
        {/* <p className='menu-text'>menu</p> */}
        <div className="hamburger-open">
          <img src={Hamburger} alt="hamburger-open"id="hamburger" onClick={Toggle} />
        </div>
        {/* <div className="hambeurger-close">
          <img src={Close} alt="hamburger-close" />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
