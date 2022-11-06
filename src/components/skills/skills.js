import React from 'react'
import './skills.scss'
import Html from '../../assets/skills/html.svg';
import Css from '../../assets/skills/css.svg';
import Github from '../../assets/skills/github.svg';
import JavaScript from '../../assets/skills/javascript.svg';
import Android from '../../assets/skills/android.svg';
import Kotlin from '../../assets/skills/kotlin.svg';
import Reac from '../../assets/skills/reactjs.svg';
import Flutter from '../../assets/skills/flutter.svg';
import Python from '../../assets/skills/python.svg';
import PhotoShop from '../../assets/skills/adobePhotoshop.svg';
import Cpp from '../../assets/skills/html.svg';
import SkillCard from './skillsCard';
const Skills = () =>{
    return(
        //         <div className="skills">
        //     <p className="skills_Heading">What I do</p>
        //     <p className="skills_sub_title">Lorem, ipsum dolor sit amet consectetur adipisicing eli className='skills-list't. Autem nisi quis dolore placeat porro, accusamus perferendis simili className='skills-list'que in vitae dolorem.\</p>\
        //     <div className="skills_collection">
        //         <p className="skills-sub">Lorem ipsum dolor sit, amet consectetur adipisicing eli className='skills-list't. Porro, corporis? Eli className='skills-list'gendi ipsam praesentium quaerat atque optio simili className='skills-list'que nemo rem quae odit commodi assumenda ali className='skills-list'as, eos reprehenderit molli className='skills-list'tia doloribus quod est illo, rerum earum hic sunt recusandae voluptas vel? Molestiae, illum!</p>
        //         <ul className='dev_icons honeycomb'>
        //             <li className='skills-list honeycomb-cell'>
        //                 <SkillCard className="skills-card"name = "HTML-5" pic = {Html}/>
        //             </li >
        //             {/* <li className='skills-list honeycomb-cell'>
        //                 <SkillCard name = "CSS" pic = {Css}/>
        //             </li >
        //             <li className='skills-list honeycomb-cell'>
        //                 <SkillCard name = "Javascript" pic = {JavaScript}/>
        //             </li >
        //             <li className='skills-list honeycomb-cell'>
        //                 <SkillCard name = "React.JS" pic = {Reac}/>
        //             </li >
        //             <li className='skills-list honeycomb-cell'>
        //                 <SkillCard name = "Android Studio" pic = {Android}/>
        //             </li >
        //             <li className='skills-list honeycomb-cell'>
        //                 <SkillCard name = "Kotli className='skills-list'n" pic = {Kotlin}/>
        //             </li >
        //             </ul>
        //             <ul className='dev_icons honeycomb'>
        //             <li className='skills-list honeycomb-cell'>
        //                 <SkillCard name = "Flutter" pic = {Flutter}/>
        //             </li >
        //             <li className='skills-list honeycomb-cell'>
        //                 <SkillCard name = "C++" pic = {Cpp}/>
        //             </li >
        //             <li className='skills-list honeycomb-cell'>
        //                 <SkillCard name = "Python" pic = {Python}/>
        //             </li >
        //             <li className='skills-list honeycomb-cell'>
        //                 <SkillCard name = "Adobe PhotoShop" pic = {PhotoShop}/>
        //             </li >
        //             <li className='skills-list honeycomb-cell'>
        //                 <SkillCard name = "GitHub" pic = {Github}/>
        //             </li > */}
        //         </ul>
        //     </div>

        // </div>
        <div className="skills-wrapper">
            <p className="skills_heading">SKILLS</p>
            <div className="programming">
                <ul>
                    <li>C++</li>
                    <li>C</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>JavaScript</li>
                </ul>
            </div>
            <div className="tools">
                <ul>
                    <li>Vs Code</li>
                    <li>Github</li>
                    <li>Vercel</li>
                    <li>Wordpress</li>
                    <li>Google Cloud Paltform</li>
                    <li>Android Studio</li>
                    <li>XCode</li>
                    <li>WIX</li>
                    <li>Adobe PhotoShop</li>

                </ul>
            </div>
            <div className="web">
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>BootStrap</li>
                    <li>React.Js</li>
                    <li>Javascript</li>
                    <li>Node.Js</li>
                    <li>Next.Js</li>
                    <li>Medusa.Js</li>
                    <li>GatsBy.Js</li>
                </ul>
            </div>
            <div className="app">
                <ul>
                    <li>Kotlin</li>
                    <li>Flutter</li>
                    <li>Dart</li>
                    <li>Android WebPack</li>
                </ul>
            </div>
            
        </div>
    )
}
export default Skills;