import React, { useState } from 'react'
import styles from '../../styles/Login.module.css'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../store/asyncActions/userAsyncActions'

const AdminLogin = ({setStatus}) => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        email: '',
        password: '',
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(state.email && state.password){
            const formDetails = new FormData()
            formDetails.append('email', state.email)
            formDetails.append('password', state.password)
            dispatch(loginUser(formDetails))
        }    
    }
    
    return (
        <div className={styles.leftCont} >
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <h2>Login to your admin account</h2>
                <div className={styles.loginInputCont}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" 
                        value={state.email} 
                        onChange={(e) => setState((prevState) => ({...prevState, email: e.target.value}))} 
                        id="email" name="email"
                    />
                </div>
                <div className={styles.loginInputCont}>
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                        value={state.password} 
                        onChange={(e) => setState((prevState) => ({...prevState, password: e.target.value}))} 
                        id="password" name="password"
                    />
                </div>
                <div className={styles.buttonCont}>
                    <button className={styles.submitButton}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default AdminLogin;
