import React, { useState, useEffect } from 'react'
import styles from '../../styles/Login.module.css'
import OtpInput from 'react-otp-input'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from '../../store/asyncActions/userAsyncActions'
import eye from '../../assets/eye.svg'
import Loader from '../Loader'

const ResetPass = ({setStatus}) => {
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.user.loading)
    const [showP1, setShowP1] = useState(false)
    const [showP2, setShowP2] = useState(false)
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [email, setEmail] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const formObj = new FormData()
        if(email && (password === rePassword)) {
            formObj.append('email', email)
            formObj.append('password', password)
            dispatch(resetPassword(formObj))
        }
    }
    return (
        <div className={styles.leftCont}>
            {isLoading && <Loader />}
            <form onSubmit={handleSubmit} className={styles.resetForm}>
            <h2>Reset your password</h2>
                <div className={styles.otpInputCont}>
                    <label htmlFor="pass1">Enter Email</label>
                    <div className={styles.customInput}>
                        <input type='email' id="email" name="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <label htmlFor="pass1">Enter new password</label>
                    <div className={styles.customInput}>
                        <input 
                        type={showP1 ? "text": "password"} id="pass1" name="pass1" onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="button" 
                        onClick={(e) => {
                            e.preventDefault()
                            setShowP1(!showP1)
                            }}
                            >
                         <img src={eye} alt="toggle" />
                        </button>
                    </div>
                </div>
                <div className={styles.otpInputCont}>
                    <label htmlFor="pass2">Enter new password again</label>
                    <div className={styles.customInput}>
                        <input  
                        type={showP2 ? "text": "password"} id="pass2" name="pass2" onChange={(e) => setRePassword(e.target.value)}
                        />
                        <button
                         type="button" onClick={(e) => {
                            e.preventDefault()
                            setShowP2(!showP2)
                            }}
                            >
                         <img src={eye} alt="toggle" />
                        </button>
                    </div>
                </div>
                <div className={styles.buttonCont}>
                    <button className={styles.submitButton}>
                    Reset password
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ResetPass
