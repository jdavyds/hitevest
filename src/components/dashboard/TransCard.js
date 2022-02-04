import React from 'react'
import styles from '../../styles/dashboard/TransCard.module.css'
const TransCard = ({image, heading, limit, charges, onClick, btnValue}) => {
    return (
        <div className={styles.container}>
            <img src={image} alt="" />
            <h3>{heading}</h3>
            <p>{limit}</p>
            <p>{charges}</p>
            <button onClick={onClick}>{btnValue}</button>
        </div>
    )
}

export default TransCard
