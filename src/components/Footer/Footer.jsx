import React from 'react'
import style from './footer.module.css'

import FooterImg from '../../assets/logo2.png'

const Footer = () => {
    return (
        <section className={style.footer} id="footer">
            <div className="container-fluid">
                <div className={style.content}>
                    <div className={style.left_side}>
                        <img src={FooterImg} alt="logo2.png" />
                        <p>
                            Our vision is to make all people<br />
                            the best place to live for them.
                        </p>
                    </div>
                    <div className={style.right_side}>
                        <div className={style.info}>
                            <span>Information</span>
                            <p>145 New York, FL 5467, USA</p>
                        </div>
                        <div className={style.links}>
                            <li><a href="">Property</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Products</a></li>
                            <li><a href="">About Us</a></li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer