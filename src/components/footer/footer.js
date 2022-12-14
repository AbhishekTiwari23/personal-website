import React from "react";
import "./footer.scss";
import Abhishek from "../../abhishek/abhishek";
import AbhishekLogo from "../../assets/mypic/abhishek.png";
import Github from "../../assets/socials/githubwhite.svg";
import LinkedIn from "../../assets/socials/linkedin.svg";
import Twitter from "../../assets/socials/twitter.svg";
//import Hamburger from '../../assets/socials/hamburger.svg';
//import Socials from '../../assets/socials/socials';
const Footer = () => {
  return (
    // <div className="footer">
    //     <hr />
    //     <div className="footerContent">

    //         <div className="socials">
    //         <p> {Abhishek.firstName} <span className="lastname">{Abhishek.lastName}</span></p>
    //             {Socials.Github.link}
    //             {Socials.LinkedIn.link}
    //             {/* {Socials.Dev.link} */}
    //             {Socials.Twitter.link}
    //             {Socials.Linkee.link}
    //         </div>
    //     </div>
    // </div>j

    <div className="footer">
      <div className="content">
        <div className="title">
          <span className="grade">Dont be a stranger! </span>
          <span className="wave">ð</span>
        </div>
        <div className="links">
          <div className="link-content">Connet with me on socials ð¥</div>
          <div className="content-socials">
            <a href={Abhishek.socials.myGithub} target= "_blank">
              {/* <img src={Github} alt="Github" /> */}
              ðGH
            </a>
            <a href={Abhishek.socials.myLinkedin} target= "_blank">
              {/* <img src={LinkedIn} alt="LinkedIn" /> */}
              ð¦ TW
            </a>
            <a href={Abhishek.socials.myTwitter} target= "_blank">
              ð¸ IN
              {/* <img src={Twitter} alt="Twitter" /> */}
            </a>
          </div>
        </div>
      </div>
      <div className="footer-links">
        <hr />
        <a href="/">
          <img src={AbhishekLogo} alt="name" className="abhiLogo" />
          {/* <div className = "footername">{Abhishek.myname.firstName} <span>{Abhishek.myname.lastName}</span></div> */}
        </a>
        <p className="tagline">Made with <big>â¤ï¸</big> by {Abhishek.myname.firstName } {Abhishek.myname.lastName}</p>
        <div className="socials">
          <a href={Abhishek.socials.myGithub} target= "_blank">
            <img src={Github} alt="Github" />
          </a>
          <a href={Abhishek.socials.myLinkedin} target= "_blank">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href={Abhishek.socials.myTwitter} target= "_blank">
            <img src={Twitter} alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
