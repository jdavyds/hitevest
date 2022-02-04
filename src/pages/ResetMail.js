import React, { useEffect } from 'react'
import styles from '../styles/Login.module.css'
import landingImg from '../assets/landing.png'
import ResetMail from '../components/Login/ResetMail'
import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'

import Loader from '../components/Loader'

const ResetMailPage = () => {
    const user = useSelector(state => state.user.userDetails)
    const isLoading = useSelector(state => state.user.loading)
    
    if(user){
        return <Navigate to='/verify-token' />
    }
    return (
        <div className={styles.mainContainer}>
            {isLoading && <Loader />}
            <div className={styles.subContainer}>
                <img src={landingImg} alt="" />
                <ResetMail />
            </div>
        </div>
    )
}

export default ResetMailPage
