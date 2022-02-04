import React, { useState } from 'react'
import styles from '../../styles/Login.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { verifyToken } from '../../store/asyncActions/userAsyncActions';
import Loader from '../../components/Loader'

function VerifyToken() {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.user.loading)
    const [state, setState] = useState({
        email: '',
        token: ''
    });
    function handleSubmit(e) {
        e.preventDefault();
        if(state.email){
            const formDetails = new FormData()
            formDetails.append('email', state.email)
            formDetails.append('otp_token', state.token)
            dispatch(verifyToken(formDetails))
        }
    }
    return(
        <div className={styles.leftCont}>
            {isLoading && <Loader />}
            <form onSubmit={handleSubmit} className={styles.resetForm}>
                <div className={styles.otpInputCont}>
                        <label htmlFor="pass1">Enter Email</label>
                        <div className={styles.customInput}>
                        <input type='email' id="email" name="email" 
                        value={state.email} 
                        onChange={(e) => setState((prevState) => ({...prevState, email: e.target.value}))} required/>
                        </div>
                </div>
                <div className={styles.otpInputCont}>
                        <label htmlFor="pass1">Enter Token</label>
                        <div className={styles.customInput}>
                        <input type="number" id="token" name="token" 
                        value={state.token} 
                        onChange={(e) => setState((prevState) => ({...prevState, token: e.target.value}))} required/>
                    </div>
                </div>
                <div className={styles.buttonCont} >
                    <button className={styles.submitButton}>
                    Verify Reset Token
                    </button>
                </div>
            </form>
        </div>
    )
}
export default VerifyToken;