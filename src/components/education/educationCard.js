import React from 'react';
import NsutLogo from '../../assets/mypic/nsut_logo.png';
import './educationCard.scss';
import Abhishek from '../../abhishek/abhishek';
const EducationCard = (props) => {
    return (
        <div className="college">
            <div className="college-wrapper">
               <a href={props.link} target="_blank"> <img src={NsutLogo} alt="College-name" className="college-pic" /></a>
                <div className="content">
                    <p className="college_name">{Abhishek.college.myBtechCollegeFullName}</p>
                    <p className="degree_name">{Abhishek.college.myBtechCollegeDegreemajorsfull}</p>
                    <p className="specialisation">{Abhishek.college.myBtechCollegeDegreeSpecialisation}</p>
                    <p className="college_timeline">{Abhishek.college.myBtechTimeLine.start} - {Abhishek.college.myBtechTimeLine.end}</p>
                    <div className="discription">
                        <ul>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default EducationCard;
