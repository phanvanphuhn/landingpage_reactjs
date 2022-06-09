import React, { useState } from 'react'
import { MenuItems } from './components/MenuItems'
import logo from '../../assets/logo/logo.svg'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false)

    const onClickShowMenu = () => {
        setIsClicked(!isClicked)
    }

    return (
        <nav className='NavbarItems'>
            <div className='wrapLogoContainer'>
                <h1 className='logoTitle'>
                    LandingPage
                </h1>

                <img src={logo} className="App-logo" alt="logo" />
            </div>

            <div className='wrapItemContainer'>
                <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
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

                <div onClick={onClickShowMenu} className='menu-icon'>
                    <FontAwesomeIcon icon={isClicked ? faBars : faXmark} color='white' size='lg' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar