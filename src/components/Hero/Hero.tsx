import React from 'react'

//style
import style from './Hero.module.css'

//image
import hero from './image.png'

const Hero = () => {
    return (
        <div className={style.container}>
            <img src={hero} alt="" />
            <div className={style.text} >
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts-- all without leaving home.</p>
            </div>

        </div>
    )
}

export default Hero