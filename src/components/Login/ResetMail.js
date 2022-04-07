import React, { useState } from 'react'
import styles from '../../styles/Login.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPassword } from '../../store/asyncActions/userAsyncActions';
import Loader from '../../components/Loader'
import logo from '../../assets/dashboard/logo.svg'

function ResetMail() {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.user.loading)
    const [state, setState] = useState({
        email: '',
    });
    function handleSubmit(e) {
        e.preventDefault();
        if(state.email){
            const formDetails = new FormData()
            formDetails.append('email', state.email)
            dispatch(forgotPassword(formDetails))
        }
    }
    return(
        <div className={styles.leftCont}>
            {isLoading && <Loader />}
            <form onSubmit={handleSubmit} className={styles.resetForm}>
            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>
                <div className={styles.otpInputCont}>
                        <label htmlFor="pass1">Enter Email</label>
                        <div className={styles.customInput}>
                        <input type='email' id="email" name="email" 
                        value={state.email} 
                        onChange={(e) => setState((prevState) => ({...prevState, email: e.target.value}))} required/>
                    </div>
                </div>
                <div className={styles.buttonCont} >
                    <button className={styles.submitButton}>
                    Send Reset Token
                    </button>
                </div>
            </form>
        </div>
    )
}
export default ResetMail;