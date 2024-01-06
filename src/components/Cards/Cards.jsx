import React from 'react'

import style from './Cards.module.css'

// Images

import bike from './bike.png'

import swim from './swim.png'

import wedding from './wedding.png'

const Cards = () => {
    return (
        <div className={style.container}>

            <div className={style.card}>
                <img src={swim} alt="Women in a swimsuit" />
                <p>⭐ 5.0 <small className={style.opacity}>(6)-USA</small></p>
                <p>Life lessons with Katie Zaferes</p>
                <p className={style.bold}>From $136 <small>/ person</small></p>
            </div>

            <div className={style.card}>
                <img src={wedding} alt="Women in a swimsuit" />
                <p>⭐ 5.0 <small className={style.opacity}>(6)-USA</small></p>
                <p>Learn wedding photography</p>
                <p className={style.bold}>From $125<small>/ person</small></p>
            </div>

            <div className={style.card}>
                <img src={bike} alt="Women in a swimsuit" />
                <p>⭐ 5.0 <small className={style.opacity}>(6)-USA</small></p>
                <p>Group Mountain Bikin</p>
                <p className={style.bold}>From $50<small>/ person</small></p>
            </div>
        </div>
    )
}

export default Cards