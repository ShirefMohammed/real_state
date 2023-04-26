import React from 'react'
import style from './Value.module.css'

import { motion } from 'framer-motion'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import ValueImg from '../../assets/value.png'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import data from '../../utils/accordion'

const Value = () => {
    return (
        <section className={style.value} id="value">
            <div className="container-fluid">
                <div className={style.content}>

                    <motion.div
                        className={style.left_side}
                        initial={{ transform: 'translateX(-2rem)', opacity: 0 }}
                        whileInView={{ transform: 'translateY(0)', opacity: 1 }}
                        transition={{ type: 'tween', duration: 1 }}
                    >
                        <div className={style.img_frame}>
                            <img src={ValueImg} alt="" />
                        </div>
                    </motion.div>

                    <div className={style.right_side}>

                        <div className={style.title}>
                            <span>Our Value</span>
                            <span>Value We Give to You</span>
                            <p>
                                We always ready to help by providijng the best services for you.
                                We beleive a good blace to live can make your life better
                            </p>
                        </div>

                        <Accordion
                            className={style.accordion}
                            allowMultipleExpanded={false}
                            preExpanded={[0]}
                        >
                            {
                                data.map((item, index) => {
                                    return (
                                        <AccordionItem
                                            className={`${style.accordion_item}`}
                                            key={index}
                                            uuid={index}
                                        >
                                            <AccordionItemHeading className={style.accordion_heading}>
                                                <AccordionItemButton className={style.accordion_button}>
                                                    <div className={style.icon}>
                                                        {item.icon}
                                                    </div>
                                                    <div className={style.heading}>
                                                        {item.heading}
                                                    </div>
                                                    <div className={style.arrow}>
                                                        <MdOutlineArrowDropDown />
                                                    </div>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel className={style.accordion_panel}>
                                                <p className={style.detail}>
                                                    {item.detail}
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    )
                                })
                            }
                        </Accordion>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Value