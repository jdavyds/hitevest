import React from 'react'
import down from '../../assets/dashboard/down.svg'
import up from '../../assets/dashboard/up.svg'
import styles from '../../styles/dashboard/Home.module.css'
const HomeCard = ({name,total, color, image, percent, type}) => {
    return (
        <div className={styles.homeCardCont}>
            <h3 className={styles.homeCardHeader}>{name}</h3>
            <div className={styles.homeCardStats}>
                <h3 className={styles.homeCardTotal} style={{color}}>$ {total}K</h3>
                {
                    type === 'rise' ?
                    <span className={styles.homeCardRise}>
                        <img src={up} alt="" />
                        {percent}%
                    </span> :
                    <span className={styles.homeCardDrop}>
                        <img src={down} alt="" />
                        {percent}%
                    </span>
                }
            </div>
            <div className={styles.homeCardChart}>
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default HomeCard
