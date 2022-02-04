import React, { useEffect} from 'react'
import styles from '../styles/Login.module.css'
import landingImg from '../assets/landing.png'
import ResetPass from '../components/Login/ResetPass'
import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'

const ResetPasswordPage = () => {
    const user = useSelector(state => state.user.userDetails)
    const isLoading = useSelector(state => state.user.loading)

    useEffect(() => {
        if(user){
            return <Navigate to='/login' />
        }
    }, [user])
    return (
        <div className={styles.mainContainer}>
            {isLoading && <Loader />}
            <div className={styles.subContainer}>
                <img src={landingImg} alt="" />
                <ResetPass />
            </div>

        </div>
    )
}

export default ResetPasswordPage
