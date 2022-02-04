import React from 'react'
import styles from '../styles/Landing.module.scss'
const OfferComp = ({image, heading, content}) => {
    return (
        <div className={styles.OfferComp}>
           <img src={image} alt="" /> 
           <h3>{heading}</h3>
           <p style={{fontSize: '14px'}}>{content}</p>
        </div>
    )
}

export default OfferComp
