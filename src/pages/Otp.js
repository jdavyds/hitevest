import React, { useEffect } from 'react'
import styles from '../styles/Login.module.css'
import landingImg from '../assets/landing.png'
import Otp from '../components/Login/Otp'
// import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    const{ isVerified } = useSelector(state => state.user)
    const isLoading = useSelector(state => state.user.loading)
    // if(userDetails && isVerified ){
    //     return <Navigate to='/login' />
    // } 
    useEffect(() => {
        const fetchStatus = async () => {
            const stat = await sessionStorage.getItem('verifyOtp');
            const status = await JSON.parse(stat)
            if(status){
                sessionStorage.removeItem('verifyOtp')
                return navigate('/login')
            }
        }
        fetchStatus();
    }, [isLoading, isVerified, navigate])
    // if(!userDetails){
    //     return <Navigate to='/login' />
    // }
    return (
        <div className={styles.mainContainer}>
            <div className={styles.subContainer}>
                <img src={landingImg} className={styles.contImage} alt="" />
                <Otp />
            </div>

        </div>
    )
}

export default Login
