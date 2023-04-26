import React from 'react'
import style from './Header.module.css'

import { VscThreeBars } from 'react-icons/vsc'
import LogoImg from '../../assets/logo.png'

const Header = () => {
    const show_links = () => {
        document.querySelector("#stay_right").classList.toggle("stay_right");
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            document.querySelector("#header").style.background = '#302e2e';
        } else {
            document.querySelector("#header").style.background = 'transparent';
        }
    })

    return (
        <section className={`${style.header}`} id='header'>
            <div className="container-fluid">
                <div className={style.content}>

                    <div className={style.logo}>
                        <img src={LogoImg} alt="logo" />
                    </div>

                    <ul className={`${style.links} stay_right`} id='stay_right'>
                        <li><a href="#residencies">Residencies</a></li>
                        <li><a href="#value">Our Value</a></li>
                        <li><a href="#contacts">Contact Us</a></li>
                        <li><a href="#get_started">Get Started</a></li>
                        <li><a href="#contacts" className={style.btn}>Contact</a></li>
                    </ul>

                    <div className={style.bars} onClick={show_links}>
                        <VscThreeBars />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Header 