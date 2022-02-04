import React from 'react'
import styles from '../styles/Login.module.css'
import landingImg from '../assets/landing.png'
import LoginComp from '../components/Login/Login'
import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'

const Login = () => {
    const user = useSelector(state => state.user.userDetails)
    const isLoading = useSelector(state => state.user.loading)
    if(user){
        return <Navigate to='/dashboard' />
    }
    return (
        <div className={styles.mainContainer}>
            {isLoading && <Loader />}
            <div className={styles.subContainer}>
                <img src={landingImg} alt="" />
                <LoginComp /> 
            </div>

        </div>
    )
}

export default Login
