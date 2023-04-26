import React from 'react'
import style from './Residencies.module.css'

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { ResidenciesItems } from '../../utils/slider.js'

const Residencies = () => {
    return (
        <section className={style.residencies} id='residencies'>
            <div className="container-fluid">
                <div className="content">
                    <div className={style.best_choices}>Best Choices</div>
                    <div className={style.popular_residencies}>Popular Residencies</div>
                    <Swiper
                        modules={[Pagination, Navigation]}
                        className={style.swiper}
                        slidesPerView={4}
                        spaceBetween={40}
                        slidesPerGroup={1}
                        breakpoints={{
                            1500: { slidesPerView: 5 },
                            1200: { slidesPerView: 4 },
                            992: { slidesPerView: 3 },
                            600: { slidesPerView: 2 },
                            0: { slidesPerView: 1 }
                        }}
                    >
                        <SliderButtons />
                        {
                            ResidenciesItems.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className={style.item}>
                                        <img src={item.image} alt="" />
                                        <div className={style.item_price}>
                                            <span>$</span>
                                            <span>{item.price}</span>
                                        </div>
                                        <span className={style.item_name}>
                                            {item.name}
                                        </span>
                                        <p className={style.item_detail}>
                                            {item.detail}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Residencies

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className={style.buttons}>
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}