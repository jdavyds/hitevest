import React, { useEffect } from 'react'
import styles from '../styles/Login.module.css'
import landingImg from '../assets/landing.png'
import VerifyToken from '../components/Login/VerifyToken'
import { useSelector } from 'react-redux'
// import { Navigate } from 'react-router'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'

const VerifyTokenPage = () => {
    const navigate = useNavigate()
    const isLoading = useSelector(state => state.user.loading)
    useEffect(() => {
        const fetchStatus = async () => {
            const stat = await sessionStorage.getItem('verifyToken');
            const status = await JSON.parse(stat)
            if(status){
                sessionStorage.removeItem('verifyToken')
                return navigate('/reset-password')
            }
        }
        fetchStatus();
    }, [isLoading, navigate])

    return (
        <div className={styles.mainContainer}>
            {isLoading && <Loader />}
            <div className={styles.subContainer}>
                <img src={landingImg} className={styles.contImage} alt="" />
                <VerifyToken />
            </div>
        </div>
    )
}

export default VerifyTokenPage
