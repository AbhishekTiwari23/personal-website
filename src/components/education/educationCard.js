import React from 'react';
import NsutLogo from '../../assets/mypic/nsut_logo.png';
import './educationCard.scss';
import Abhishek from '../../abhishek/abhishek';
const EducationCard = (props) => {
    return (
        <div className="college">
            <div className="college-wrapper">
               <a href={props.link}> <img src={NsutLogo} alt="College-name" className="college-pic" /></a>
                <div className="content">
                    <p className="college_name">{Abhishek.college.myBtechCollegeFullName}</p>
                    <p className="degree_name">{Abhishek.college.myBtechCollegeDegreemajorsfull}</p>
                    <p className="specialisation">{Abhishek.college.myBtechCollegeDegreeSpecialisation}</p>
                    <p className="college_timeline">{Abhishek.college.myBtechTimeLine.start} - {Abhishek.college.myBtechTimeLine.end}</p>
                    <div className="discription">
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequuntur veritatis provident vitae. Quaerat ullam beatae saepe, quos iusto et non voluptatem, voluptatum quis expedita dicta quasi facere dolor natus eaque vel doloribus explicabo doloremque, earum nemo. Libero vel molestiae consequatur, exercitationem dolorum assumenda magni ratione omnis aut quidem, iusto minima ut enim unde. Odit et ipsum voluptatem quis necessitatibus!</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cupiditate voluptas, sint qui veritatis illum optio velit repellendus commodi adipisci odio officia vel nam perferendis corporis magnam molestias neque! Veritatis tempora, quas ad aut incidunt, dolor magnam similique id accusamus eum quaerat placeat. Doloribus possimus unde nobis, sunt magnam facilis qui quos perferendis repellendus ducimus id commodi saepe debitis sed.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default EducationCard;
