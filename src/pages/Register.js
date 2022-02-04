import React, { useEffect, useState } from 'react'
import styles from '../styles/Register.module.css'
import { Link , useNavigate} from 'react-router-dom'
import { registerUser } from '../store/asyncActions/userAsyncActions'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'

const Register = () => {
    const [requestMade, setRequestMade] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.user.userDetails)
    const isLoading = useSelector(state => state.user.loading)
    const [formObj, setFormObj] = useState({
        fullname: '',
        email: '',
        phone: '',
        country: '',
        password: '',
        secondPass: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        setRequestMade(true)
        const newData = new FormData()
        if(
            formObj.fullname && 
            formObj.email && 
            formObj.phone &&
            formObj.country &&
            formObj.password === formObj.secondPass
            )
        {
            newData.append('name', formObj.fullname)
            newData.append('email', formObj.email)
            newData.append('phone', formObj.phone)
            newData.append('password', formObj.password)
            dispatch(registerUser(newData))
        }
        
    }
    useEffect(() => {
        if(user && requestMade){
         navigate('/otp-verification')
        }
     }, [user, navigate, requestMade])
    return (
        <div className={styles.mainContainer}>
            {isLoading && <Loader />}
            <div className={styles.subContainer}>
                <form onSubmit={handleSubmit}>
                    <h2>Register to get started</h2>
                    <div className={styles.inputSection}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="fullname">Fullname</label>
                            <input type="text" value={formObj.fullname} 
                            onChange={(e) => setFormObj(
                                (state) => { 
                                    return {...state, fullname: e.target.value}
                                })
                            } 
                            id="fullname" name="fullname"
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="email">Email Address</label>
                            <input type="email"
                            value={formObj.email}
                            onChange={(e) => setFormObj(
                                (state) => { 
                                    return {...state, email: e.target.value}
                                })
                            }
                            id="email" name="email"/>
                        </div>
                    </div>
                    <div className={styles.inputSection}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="phoneno">Phone number</label>
                            <input type="tel" 
                            value={formObj.phone}
                            onChange={(e) => setFormObj(
                                (state) => { 
                                    return {...state, phone: e.target.value}
                                })
                            }
                            id="phone" name="phone"
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="country">Country</label>
                            <input type="text" 
                            value={formObj.country}
                            onChange={(e) => setFormObj(
                                (state) => { 
                                    return {...state, country: e.target.value}
                                })
                            }
                            id="country" name="country"
                            />
                        </div>
                    </div>
                    <div className={styles.inputSection}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="password">Password</label>
                            <input type="password" 
                            value={formObj.password}
                             onChange={(e) => setFormObj(
                                (state) => { 
                                    return {...state, password: e.target.value}
                                })
                            }
                            id="password" name="password"/>
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="secondpassword">Enter password again</label>
                            <input type="password" 
                            value={formObj.secondPass}
                            onChange={(e) => setFormObj(
                                (state) => { 
                                    return {...state, secondPass: e.target.value}
                                })
                            }
                            id="secondpassword" name="secondpassword"/>
                        </div>
                    </div>
                    <div className={styles.buttonCont}>
                        <button className={styles.submitButton}>Register</button>
                    </div>
                    <p>Already have an account <Link to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register
