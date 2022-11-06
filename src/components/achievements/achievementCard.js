import React from 'react'
import Trophy from '../../assets/mypic/trophy.jpeg'
import './achievementscard.scss'
const Card = (props) =>{
    return(
        <div className="achi-wrapper">
            <img src={Trophy} alt="" className='achi-img' />
            <div className="name">{props.name}</div>
            <p className="content">{props.para}</p>

        </div>
    )
}
export default Card;