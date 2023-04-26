import React from 'react'
import style from './Contacts.module.css'

import { motion } from 'framer-motion'
import { FaPhoneAlt } from 'react-icons/fa'
import { BsChatDotsFill } from 'react-icons/bs'
import { MdVideoCall } from 'react-icons/md'
import { TbMessageCircle2Filled } from 'react-icons/tb'
import ContactsImg from '../../assets/contact.jpg'

const Contacts = () => {
    return (
        <section className={style.contacts} id="contacts">
            <div className="container-fluid">
                <div className={style.content}>
                    <div className={style.left_side}>
                        <div className={style.title}>
                            <span>Our Contact Us</span>
                            <span>Easy to contact us</span>
                            <p>
                                We always ready to help by providijng the best services for you.
                                We beleive a good blace to live can make your life better
                            </p>
                        </div>
                        <div className={style.cards}>
                            <div className={style.card}>
                                <div className={style.chat}>
                                    <div><FaPhoneAlt /></div>
                                    <div>
                                        <p>Call</p>
                                        <span>021 123 145 14</span>
                                    </div>
                                </div>
                                <button className={style.btn}>Call Now</button>
                            </div>
                            <div className={style.card}>
                                <div className={style.chat}>
                                    <div><BsChatDotsFill /></div>
                                    <div>
                                        <p>Chat</p>
                                        <span>021 123 145 14</span>
                                    </div>
                                </div>
                                <button className={style.btn}>Chat Now</button>
                            </div>
                            <div className={style.card}>
                                <div className={style.chat}>
                                    <div><MdVideoCall /></div>
                                    <div>
                                        <p>Video Call</p>
                                        <span>021 123 145 14</span>
                                    </div>
                                </div>
                                <button className={style.btn}>Video Call Now</button>
                            </div>
                            <div className={style.card}>
                                <div className={style.chat}>
                                    <div><TbMessageCircle2Filled /></div>
                                    <div>
                                        <p>Message</p>
                                        <span>021 123 145 14</span>
                                    </div>
                                </div>
                                <button className={style.btn}>Message Now</button>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        className={style.right_side}
                        initial={{ transform: 'translateX(2rem)', opacity: 0 }}
                        whileInView={{ transform: 'translateY(0)', opacity: 1 }}
                        transition={{ type: 'tween', duration: 1 }}
                    >
                        <div className={style.img_frame}>
                            <img src={ContactsImg} alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contacts
