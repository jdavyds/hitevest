import React, { useState } from 'react'
import styles from '../../styles/Login.module.css'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../store/asyncActions/userAsyncActions'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/dashboard/logo.svg'

const Login = ({setStatus}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
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
                <div className={styles.logo}>
                    <img src={logo} alt="" />
                </div>
                <h2>Login to your account</h2>
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
                <p className={styles.loginText1}>Forget password? <button onClick={() => navigate('/reset-mail')}>Reset now</button></p>
                <div className={styles.buttonCont}>
                    <button className={styles.submitButton}>Login</button>
                </div>
                <p className={styles.loginText2}>Don’t have an account? <Link to="/register">Register</Link></p>
            </form>
        </div>
    )
}

export default Login
