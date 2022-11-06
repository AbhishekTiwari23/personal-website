import React from 'react';
import './footer.scss';
import Abhishek from '../../abhishek/abhishek';
import AbhishekLogo from '../../assets/mypic/Abhishek.jpg';
import Github from '../../assets/socials/github.svg';
import LinkedIn from '../../assets/socials/linkedin.svg';
import Twitter from '../../assets/socials/twitter.svg';
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
            <a href="/">
            <img src={AbhishekLogo} alt="name" className='abhiLogo'/>
            {/* <div className = "footername">{Abhishek.myname.firstName} <span>{Abhishek.myname.lastName}</span></div> */}
            </a>
            <div className="socials">
                <a href={Abhishek.socials.myGithub}>
                    <img src={Github} alt="Github" />
                </a>
                <a href={Abhishek.socials.myLinkedin}>
                    <img src={LinkedIn} alt="LinkedIn" />
                </a>
                <a href={Abhishek.socials.myTwitter}>
                    <img src={Twitter} alt="Twitter" />
                </a>
            </div>
        </div>
    )
}
export default Footer;