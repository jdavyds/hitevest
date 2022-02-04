import React, { useEffect } from 'react'
import styles from '../styles/Login.module.css'
import landingImg from '../assets/landing.png'
import AdminLogin from '../components/Login/AdminLogin'
// import { Navigate } from 'react-router'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'

const AdminLoginPage = () => {
    const navigate = useNavigate()
    const isLoading = useSelector(state => state.user.loading)
    
    useEffect(() => {
        const fetchId = async () => {
            const user = await localStorage.getItem('user');
            const userDetails = await JSON.parse(user)
            return userDetails
        }
        fetchId().then(res => {
                if(res.accountId === 2){
                return navigate('/admin-dashboard')
            } else if(res.accountId !== 2) {
                return navigate('/login')
            }
        }
        )
        fetchId();
    }, [isLoading, navigate])
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
