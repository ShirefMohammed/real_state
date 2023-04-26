import React from 'react'
import style from './Companies.module.css'

import CompaniesTmg1 from '../../assets/prologis.png'
import CompaniesTmg2 from '../../assets/tower.png'
import CompaniesTmg3 from '../../assets/equinix.png'
import CompaniesTmg4 from '../../assets/realty.png'

const Companies = () => {
    return (
        <section className={style.companies} id='companies'>
            <div className="container">
                <div className={style.content}>
                    <img src={CompaniesTmg1} alt="prologis" />
                    <img src={CompaniesTmg2} alt="tower" />
                    <img src={CompaniesTmg3} alt="equinix" />
                    <img src={CompaniesTmg4} alt="realty" />
                </div>
            </div>
        </section>
    )
}

export default Companies
