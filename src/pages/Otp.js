import React from 'react'
import styles from '../styles/Login.module.css'
import landingImg from '../assets/landing.png'
import Otp from '../components/Login/Otp'
import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'

const Login = () => {
    const{userDetails, isVerified} = useSelector(state => state.user)
    if(userDetails && isVerified ){
        return <Navigate to='/dashboard' />
    } 
    if(!userDetails){
        return <Navigate to='/login' />
    }
    return (
        <div className={styles.mainContainer}>
            <div className={styles.subContainer}>
                <img src={landingImg} alt="" />
                <Otp />
            </div>

        </div>
    )
}

export default Login
