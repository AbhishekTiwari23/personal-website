import React from 'react'
import './achievementscard.scss'
const Card = (props) =>{
    return(
        <div className="achi-wrapper">
            <a href={props.siteLink} target="_blank"><img src={props.logoUrl} alt="" className='achi-img' /></a>
            <div className="name">{props.name}</div>
            <p className="content">{props.para}</p>

        </div>
    )
}
export default Card;