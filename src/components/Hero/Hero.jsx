import React from 'react'
import style from './Hero.module.css'

import { HiLocationMarker } from 'react-icons/hi'
import HeroImg from '../../assets/hero-image.png'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const Hero = () => {
    return (
        <section className={style.hero} id='hero'>
            <div className="container">
                <div className={style.content}>

                    <div className={style.left_side}>
                        <motion.div
                            className={style.title}
                            initial={{ transform: 'translateY(2rem)', opacity: 0 }}
                            whileInView={{ transform: 'translateY(0)', opacity: 1 }}
                            transition={{ type: 'tween', duration: 2 }}
                        >
                            <span>Discover</span>
                            <span>Most Suitable</span>
                            <span>Property</span>
                            <span className={style.circle}></span>
                        </motion.div>

                        <p className={style.description}>
                            Find a variety of properties that suit you very easilty
                            Forget all difficulties in finding a residence for you
                        </p>

                        <form className={style.search_form} action="">
                            <HiLocationMarker />
                            <input type="search" name="search" id="search" />
                            <button className={style.btn}>Search</button>
                        </form>

                        <div className={style.figures}>
                            <div className={style.item}>
                                <span>
                                    <CountUp start={8000} end={9000} duration='6' /> <span className={style.postFix}>+</span>
                                </span>
                                <span>Premium Product</span>
                            </div>
                            <div className={style.item}>
                                <span>
                                    <CountUp start={1700} end={2000} duration='6' /> <span className={style.postFix}>+</span>
                                </span>
                                <span>Happy Customer</span>
                            </div>
                            <div className={style.item}>
                                <span>
                                    <CountUp start={0} end={28} duration='6' />  <span className={style.postFix}>+</span>
                                </span>
                                <span>Awards Winning</span>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        className={style.right_side}
                        initial={{ transform: 'translateX(4rem)', opacity: 0 }}
                        whileInView={{ transform: 'translateY(0)', opacity: 1 }}
                        transition={{ type: 'tween', duration: 2 }}
                    >
                        <div className={style.img_frame}>
                            <img src={HeroImg} alt="" />
                        </div>
                    </motion.div>

                    <div className={style.light_white}></div>
                </div>
            </div>
        </section>
    )
}

export default Hero
