import React, { useEffect } from 'react'
import styles from '../styles/Login.module.css'
import landingImg from '../assets/landing.png'
import ResetMail from '../components/Login/ResetMail'
// import { Navigate } from 'react-router'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

import Loader from '../components/Loader'

const ResetMailPage = () => {
    const navigate = useNavigate()
    const isLoading = useSelector(state => state.user.loading)
    useEffect(() => {
        const fetchStatus = async () => {
            const stat = await sessionStorage.getItem('user');
            const status = await JSON.parse(stat)
            if(status){
                sessionStorage.removeItem('user')
                return navigate('/verify-token')
            }
        }
        fetchStatus();
    }, [isLoading, navigate])
    return (
        <div className={styles.mainContainer}>
            {isLoading && <Loader />}
            <div className={styles.subContainer}>
                <img src={landingImg} className={styles.contImage} alt="" />
                <ResetMail />
            </div>
        </div>
    )
}

export default ResetMailPage
