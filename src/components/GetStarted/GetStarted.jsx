import React from 'react'
import style from './GetStarted.module.css'

const GetStarted = () => {
    return (
        <section className={style.get_started} id="get_started">
            <div className="container-fluid">
                <div className={style.content}>
                    <span>Get started with Homyz</span>
                    <p>Subscribe and find super attractive price quotes from us.<br />
                        Find your residence soon</p>
                    <button className={style.btn}>Get Started</button>
                </div>
            </div>
        </section>
    )
}

export default GetStarted