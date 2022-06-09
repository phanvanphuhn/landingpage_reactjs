import React, { useState } from 'react'
import { MenuItems } from './components/MenuItems'
import logo from '../../assets/logo/logo.svg'
import './Navbar.css'

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false)

    return (
        <div className='container'>
            <div className='wrapLogoContainer'>
                <h1 className='logoTitle'>
                    LandingPage
                </h1>

                <img src={logo} className="App-logo" alt="logo" />
            </div>

            <div className='wrapItemContainer'>
                <ul>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.className} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>

                <button className='wrapButtonContainer'>
                    Sign In
                </button>
            </div>
        </div>
    )
}

export default Navbar