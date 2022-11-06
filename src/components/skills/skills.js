import React from "react";
import "./skills.scss";
import Html from "../../assets/skills/html.svg";
import Css from "../../assets/skills/css.svg";
import Github from "../../assets/skills/github.svg";
import JavaScript from "../../assets/skills/javascript.svg";
import Android from "../../assets/skills/android.svg";
import Kotlin from "../../assets/skills/kotlin.svg";
import Reac from "../../assets/skills/reactjs.svg";
import Flutter from "../../assets/skills/flutter.svg";
import Python from "../../assets/skills/python.svg";
import PhotoShop from "../../assets/skills/adobePhotoshop.svg";
import Cpp from "../../assets/skills/html.svg";
import SkillCard from "./skillsCard";
const Skills = () => {
  return (
    //         <div classNameName="skills">
    //     <p classNameName="skills_Heading">What I do</p>
    //     <p classNameName="skills_sub_title">Lorem, ipsum dolor sit amet consectetur adipisicing eli classNameName='skills-list't. Autem nisi quis dolore placeat porro, accusamus perferendis simili classNameName='skills-list'que in vitae dolorem.\</p>\
    //     <div classNameName="skills_collection">
    //         <p classNameName="skills-sub">Lorem ipsum dolor sit, amet consectetur adipisicing eli classNameName='skills-list't. Porro, corporis? Eli classNameName='skills-list'gendi ipsam praesentium quaerat atque optio simili classNameName='skills-list'que nemo rem quae odit commodi assumenda ali classNameName='skills-list'as, eos reprehenderit molli classNameName='skills-list'tia doloribus quod est illo, rerum earum hic sunt recusandae voluptas vel? Molestiae, illum!</p>
    //         <ul classNameName='dev_icons honeycomb'>
    //             <li classNameName='skills-list honeycomb-cell'>
    //                 <SkillCard classNameName="skills-card"name = "HTML-5" pic = {Html}/>
    //             </li >
    //             {/* <li classNameName='skills-list honeycomb-cell'>
    //                 <SkillCard name = "CSS" pic = {Css}/>
    //             </li >
    //             <li classNameName='skills-list honeycomb-cell'>
    //                 <SkillCard name = "Javascript" pic = {JavaScript}/>
    //             </li >
    //             <li classNameName='skills-list honeycomb-cell'>
    //                 <SkillCard name = "React.JS" pic = {Reac}/>
    //             </li >
    //             <li classNameName='skills-list honeycomb-cell'>
    //                 <SkillCard name = "Android Studio" pic = {Android}/>
    //             </li >
    //             <li classNameName='skills-list honeycomb-cell'>
    //                 <SkillCard name = "Kotli classNameName='skills-list'n" pic = {Kotlin}/>
    //             </li >
    //             </ul>
    //             <ul classNameName='dev_icons honeycomb'>
    //             <li classNameName='skills-list honeycomb-cell'>
    //                 <SkillCard name = "Flutter" pic = {Flutter}/>
    //             </li >
    //             <li classNameName='skills-list honeycomb-cell'>
    //                 <SkillCard name = "C++" pic = {Cpp}/>
    //             </li >
    //             <li classNameName='skills-list honeycomb-cell'>
    //                 <SkillCard name = "Python" pic = {Python}/>
    //             </li >
    //             <li classNameName='skills-list honeycomb-cell'>
    //                 <SkillCard name = "Adobe PhotoShop" pic = {PhotoShop}/>
    //             </li >
    //             <li classNameName='skills-list honeycomb-cell'>
    //                 <SkillCard name = "GitHub" pic = {Github}/>
    //             </li > */}
    //         </ul>
    //     </div>

    // </div>
    // <div classNameName="skills-wrapper">
    //     <p classNameName="skills_heading">Things I know</p>
    //     <div classNameName="programming">
    //         <ul classNameName='container'>
    //             <li classNameName='box'>C++</li>
    //             <li classNameName='box'>C</li>
    //             <li classNameName='box'>Python</li>
    //             <li classNameName='box'>Java</li>
    //             <li classNameName='box'>JavaScript</li>
    //         </ul>
    //     </div>
    //     <div classNameName="tools">
    //         <ul>
    //             <li>Vs Code</li>
    //             <li>Github</li>
    //             <li>Vercel</li>
    //             <li>Wordpress</li>
    //             <li>Google Cloud Paltform</li>
    //             <li>Android Studio</li>
    //             <li>XCode</li>
    //             <li>WIX</li>
    //             <li>Adobe PhotoShop</li>

    //         </ul>
    //     </div>
    //     <div classNameName="web">
    //         <ul>
    //             <li>HTML</li>
    //             <li>CSS</li>
    //             <li>BootStrap</li>
    //             <li>React.Js</li>
    //             <li>Javascript</li>
    //             <li>Node.Js</li>
    //             <li>Next.Js</li>
    //             <li>Medusa.Js</li>
    //             <li>GatsBy.Js</li>
    //         </ul>
    //     </div>
    //     <div classNameName="app">
    //         <ul>
    //             <li>Kotlin</li>
    //             <li>Flutter</li>
    //             <li>Dart</li>
    //             <li>Android WebPack</li>
    //         </ul>
    //     </div>

    // </div>
    //     <div >
    //     <div id="container6" className="container">
    // 	<div className="inner_container">
    //         <article className="article clearfix">
    //             <h2 className="title">Skills</h2><hr/>

    // 			<div className="boxes_text">
    // 				<p>Programming Languages</p>
    //             </div>

    //             <div className="boxes">
    //                 <div className="boxes_text_light">
    //                 	<p><span>JavaScript</span></p>
    //                 </div>
    //             </div>

    //             <div className="boxes">
    //                 <div className="boxes_text_light">
    //                 	<p><span>TypeScript</span></p>
    //                 </div>
    //             </div>

    //             <div className="boxes">
    //                 <div className="boxes_text_light">
    //                 	<p><span>Python</span></p>
    //                 </div>
    //             </div>

    //             <div className="boxes">
    //                 <div className="boxes_text_light">
    //                 	<p><span>Java</span></p>
    //                 </div>
    //             </div>

    // 			<div className="boxes_text">
    // 				<p>Web Development</p>
    //             </div>

    //             <div className="boxes">
    //                 <div className="boxes_text_light">
    //                 	<p><span>React</span></p>
    //                 </div>
    //             </div>
    //             <div className="boxes">
    //                 <div className="boxes_text_light">
    //                 	<p><span>Sass</span></p>
    //                 </div>
    //             </div>

    //             <div className="boxes">
    //                 <div className="boxes_text_light">
    //                 	<p><span>CSS</span></p>
    //                 </div>
    //             </div>

    // 			<div className="boxes">
    //                 <div className="boxes_text_light">
    //                 	<p><span>Bootstrap</span></p>
    //                 </div>
    //             </div>

    // 			<div className="boxes">
    //                 <div className="boxes_text_light">
    //                 	<p><span>HTML</span></p>
    //                 </div>
    //             </div>

    //             <div className="boxes">
    //                 <div className="boxes_text_light">
    //                 	<p><span>Git</span></p>
    //                 </div>
    //             </div>

    //             <div className="boxes">
    //                 <div className="boxes_text_light">
    //                 	<p><span>GitHub</span></p>
    //                 </div>
    //             </div>

    //         </article>
    //         {/* paralax image */}
    //         <div className="floating-icons" id="floatLayer7">
    //             <img src="img/icons/skill.svg" style="width: 850px;" />
    //         </div>
    //     </div>
    // </div>
    // </div>
    <div className="skills">
        <hr/>
        <div className="heading">
      <div className="title"><span className='grade'>Tech Skills</span> 🛠️ </div>
      <p className="sub-title">Skills that I developed over the years</p>
      </div>
      <div className="content">
        <div className="content-title">Programming Languages </div>
        <div className="box-out">
        <div className="boxes">C++</div>
        <div className="boxes">Python</div>
        <div className="boxes">C</div>
        <div className="boxes">Java</div>
        </div>
        <div className="content-title">Web Development</div>
        <div className="box-out">
        <div className="boxes">HTML</div>
        <div className="boxes">CSS</div>
        <div className="boxes">JavaScript</div>
        <div className="boxes">React.Js</div>
        <div className="boxes">BootStrap</div>
        <br />
        <div className="boxes">SCSS</div>
        <div className="boxes">TypeScript</div>
        <div className="boxes">GatsBy.Js</div>
        </div>

        <div className="content-title">Tools </div>
        <div className="boxes">GitHub</div>
        <div className="boxes">Vercel</div>
        <div className="boxes">VsCode</div>
        <div className="boxes">XCode</div>
        <br />
        <div className="boxes">GoogleCloud</div>
        <div className="boxes">Git</div>
        <div className="boxes">AndroidStudio</div>
        <div className="boxes">Wordpress</div>


        <div className="content-title">App Development </div>
        <div className="boxes">Kotlin</div>
        <div className="boxes">Flutter</div>
        <div className="boxes">Dart</div>
        <div className="boxes">Android Web Pack</div>

      </div>
    </div>
  );
};
export default Skills;
