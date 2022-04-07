import React, { useEffect, useState} from 'react'
import styles from '../styles/Login.module.css'
import landingImg from '../assets/landing.png'
import LoginComp from '../components/Login/Login'
import { Navigate } from 'react-router'
import cancel from '../assets/dashboard/cancel.svg'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Modal from '../components/Modal'
import { clearNotUser } from '../store/asyncActions/userAsyncActions'
import style from '../styles/dashboard/Success.module.css'
import { useNavigate } from 'react-router'
const Login = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const info = useSelector(state => state.user.userInfo)
    const user = useSelector(state => state.user.userDetails)
    const isLoading = useSelector(state => state.user.loading)
    useEffect(() => {
         if(info) {
                setShowModal(true);
                dispatch(clearNotUser())
            }
    }, [isLoading, info, dispatch])
    if(user){
        return <Navigate to='/dashboard' />
    }
    return (
        <div className={styles.mainContainer}>
            {isLoading && <Loader />}
            <div className={styles.subContainer}>
                <img src={landingImg} className={styles.contImage} alt="" />
                <LoginComp /> 
            </div>
            {
             showModal && (
                    <Modal setShowModal={setShowModal} Component={Failed}/>
                )  
                
            }
        </div>
        
    )
}

const Failed = ({setShowModal}) => {
    const navigate = useNavigate()
    function handleNavigation() {
        setShowModal(false)
        return navigate('/register')
    }
    return (
        <div className={style.container}>
            <button onClick={() => setShowModal(false)} className={style.cancel}>
                <img src={cancel} alt="" />
            </button>
            <h3>Login Failed! User Not Found</h3> 
           <p>Register Now?</p>
           <button onClick={handleNavigation}>Register</button>
        </div>
    )
}
export default Login
