import React, { useEffect, useState } from 'react'
import styles from '../styles/Register.module.css'
import { Link , useNavigate} from 'react-router-dom'
import { clearUserDet, registerReferredUser, registerUser } from '../store/asyncActions/userAsyncActions'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { clearNotUser } from '../store/asyncActions/userAsyncActions'
import Modal from '../components/Modal'
import style from '../styles/dashboard/Success.module.css'
import cancel from '../assets/dashboard/cancel.svg'
import logo from '../assets/dashboard/logo.svg'


const Register = () => {
    const [showModal, setShowModal] = useState(false)
    const [requestMade, setRequestMade] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const info = useSelector(state => state.user.userInfo)
    const user = useSelector(state => state.user.userDetails)
    const isLoading = useSelector(state => state.user.loading)
    const [formObj, setFormObj] = useState({
        fullname: '',
        email: '',
        phone: '',
        country: '',
        password: '',
        secondPass: '',
        code: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        setRequestMade(true)
        const newData = new FormData()
        if(
            formObj.code !== '' &&
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
            dispatch(registerReferredUser(newData, formObj.code))
        } else if(
            formObj.code === '' &&
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
        if(info) {
               setShowModal(true);
               dispatch(clearNotUser())
           }
   }, [isLoading, info, dispatch])
    // useEffect(() => {
    //     if(user && requestMade){
    //      navigate('/otp-verification')
    //      dispatch(clearUserDet())
    //     }
    //  }, [user, navigate, requestMade, dispatch])
    useEffect(() => {
        const fetchStatus = async () => {
            const stat = await sessionStorage.getItem('register');
            const status = await JSON.parse(stat)
            if(status){
                sessionStorage.removeItem('register')
                return navigate('/otp-verification')
            }
        }
        fetchStatus();
    }, [isLoading, navigate])
    return (
        <div className={styles.mainContainer}>
            {isLoading && <Loader />}
            <div className={styles.subContainer}>
                <form onSubmit={handleSubmit}>
                <div className={styles.logo}>
                <img src={logo} alt="" />
                </div>
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
                    <div className={styles.inputSection}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="phoneno">Referral Code (Optional)</label>
                            <input type="text" 
                            value={formObj.code}
                            onChange={(e) => setFormObj(
                                (state) => { 
                                    return {...state, code: e.target.value}
                                })
                            }
                            id="code" name="code"
                            />
                        </div>
                    </div>
                    <div className={styles.buttonCont}>
                        <button className={styles.submitButton}>Register</button>
                    </div>
                    <p>Already have an account <Link to="/login">Login</Link></p>
                </form>
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
    function handleNavigation() {
        setShowModal(false)
    }
    return (
        <div className={style.container}>
           <button onClick={() => setShowModal(false)} className={style.cancel}>
             <img src={cancel} alt="" />
           </button>
           <h3>Registration Failed!</h3> 
           <p>Try Again</p>
           <button onClick={handleNavigation}>Register</button>
        </div>
    )
}

export default Register
