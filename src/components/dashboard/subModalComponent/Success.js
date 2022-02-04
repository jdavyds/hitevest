import React from 'react'
import successImage from '../../../assets/dashboard/success.svg'
import styles from '../../../styles/dashboard/Success.module.css'
const Success = ({message}) => {
    return (
        <div className={styles.container}>
           <img src={successImage} alt="" />
           <h3>Payment Successful</h3> 
           <p>{message}</p>
           <button>Continue</button>
        </div>
    )
}

export default Success
