import React from 'react'

//styles
import style from './Navbar.module.css'

//image
import logo from './logo.png'

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <img src={logo} alt="airbnb-logo" />
        </nav>
    )
}

export default Navbar