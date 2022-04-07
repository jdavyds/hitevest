import React from 'react'
import styles from '../styles/Login.module.css'
import landingImg from '../assets/landing.png'
import AdminLogin from '../components/Login/AdminLogin'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { Navigate } from 'react-router'

const AdminLoginPage = () => {
    const isLoading = useSelector(state => state.user.loading)
    const user = useSelector(state => state.user.userDetails)
    
        if(user) {
        return <Navigate to='/admin-dashboard' />
        }
    return (
        <div className={styles.mainContainer}>
            {isLoading && <Loader />}
            <div className={styles.subContainer}>
                <img src={landingImg} alt="" />
                <AdminLogin /> 
            </div>

        </div>
    )
}

export default AdminLoginPage;
