import React, { useState, useEffect } from 'react'
import styles from '../styles/Login.module.css'
import landingImg from '../assets/landing.png'
import ResetPass from '../components/Login/ResetPass'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import Loader from '../components/Loader'
// import Modal from '../components/Modal'
// import style from '../styles/dashboard/Success.module.css'
// import { clearNotUser } from '../store/asyncActions/userAsyncActions'

const ResetPasswordPage = () => {
    const navigate = useNavigate()
    // const dispatch = useDispatch()
    const isLoading = useSelector(state => state.user.loading)
    // const [showModal, setShowModal] = useState(false)
    // const info = useSelector(state => state.user.userInfo)
    
//     useEffect(() => {
//         if(info) {
//                setShowModal(true);
//                dispatch(clearNotUser())
//            }
//    }, [isLoading, info, dispatch])
    const stat = sessionStorage.getItem('reset');
    const status = JSON.parse(stat)
        if(status){
            sessionStorage.removeItem('reset')
            return navigate('/login')
        }
    return (
        <div className={styles.mainContainer}>
            {isLoading && <Loader />}
            <div className={styles.subContainer}>
                <img src={landingImg} className={styles.contImage} alt="" />
                <ResetPass />
            </div>
            {/* {
             showModal && (
                    <Modal setShowModal={setShowModal} Component={Failed}/>
                )  
                
            } */}
        </div>
    )
}
// const Failed = ({setShowModal}) => {
//     const navigate = useNavigate()
//     function handleNavigation() {
//         setShowModal(false)
//         return navigate('/register')
//     }
//     return (
//         <div className={style.container}>
//            <h3>Reset Failed! User Not Found</h3> 
//            <p>Register Now?</p>
//            <button onClick={handleNavigation}>Register</button>
//         </div>
//     )
// }
export default ResetPasswordPage
