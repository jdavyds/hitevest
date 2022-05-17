import React, { useState, useEffect } from 'react'
import photo from '../../assets/dashboard/user.png'
import styles from '../../styles/dashboard/Profile.module.css'
import Modal from '../../components/Modal'
import successImage from '../../assets/dashboard/success.svg'
import style from '../../styles/dashboard/Success.module.css'
import Loader from './../../components/Loader'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
// import { updateProfile } from '../../store/asyncActions/userAsyncActions'
const Profile = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const [modal, setModal] = useState('')
    const { userDetails, isVerified } = useSelector(state => state.user);
    const isLoading = useSelector(state => state.user.loading)
    const [ editInput1, setEditInput1 ] = useState(false)
    const [form, setForm] = useState({
        fullName: userDetails.name,
        email: userDetails.email,
        phone: userDetails.phone,
        username: '',
        address: ''
    })
    function handleEdit1() {
        setEditInput1(!editInput1)
    }
    function handleSave(e) {
        e.preventDefault();
        if(form.fullName && form.address && form.phone){
            const formDetails = new FormData()
            formDetails.append('name', form.name)
            formDetails.append('address', form.address)
            formDetails.append('phone', form.phone)
            // dispatch(updateProfile(formDetails))
        } 
    }
    useEffect(() => {
        if(userDetails.message.includes('Updated')){
            setModal('success')
        }
     }, [userDetails, isVerified])
     useEffect(() => {
        if(userDetails.message === 'Request failed with status code 404'){
            setModal('failed')
        }
     }, [userDetails, isVerified])
    return (
        <div className={styles.profilePage}>
            {isLoading && <Loader />}
            <div className={styles.topCorner}>
                <div className={styles.profilePic}>
                <img src={photo} alt="" />
                <FontAwesomeIcon icon={faPlus } className={styles.icon}/>
                </div>
            </div>
            <div className={styles.bottomCorner}>
                <div className={styles.leftCard}>
                    <p><FontAwesomeIcon icon={ faUser } className={styles.bottomIcon}/>
                        Personal Details <button onClick={handleEdit1}>Edit</button></p>
                    <form id='profile1' onSubmit={handleSave}>
                        <label htmlFor="full name">
                            Full Name
                            <input className={editInput1 ? styles.edit1 : ''} type="text" name="full name"
                            value={form.fullName}
                            onChange={(e) => setForm((prevState) => ({...prevState, fullName: e.target.value}))} />
                        </label>
                        <label htmlFor="username">
                            Username
                            <input className={editInput1 ? styles.edit1 : ''} type="text" name="username" 
                            onChange={(e) => setForm((prevState) => ({...prevState, username: e.target.value}))}/>
                        </label>
                        <label htmlFor="mail">
                            Email address
                            <input className={editInput1 ? styles.edit1 : ''} type="email" name="mail"
                            value={form.email} disabled/>
                        </label>
                        <label htmlFor="mobile">
                            Mobile number
                            <input className={editInput1 ? styles.edit1 : ''} type="tel" name="mobile"
                            value={form.phone} 
                            onChange={(e) => setForm((prevState) => ({...prevState, phone: e.target.value}))}/>
                        </label>
                        <label htmlFor="adress">
                            Address
                            <input type="text" name="address" className={editInput1 ? styles.edit1 : ''} 
                            onChange={(e) => setForm((prevState) => ({...prevState, address: e.target.value}))}/>
                        </label>
                    </form>
                    <div className={styles.rightBtn}>
                        <button className={editInput1 ? styles.active : ''} onClick={handleEdit1}>Cancel</button>
                        <button className={editInput1 ? styles.active : ''} type='submit' onClick={handleSave}>Save</button>
                    </div>
                </div>
            </div>
            {
             showModal && (
                    <Modal setShowModal={setShowModal} Component={
                        modal === 'Success' ? Success : modal === 'failed' ? Failed : '' 
                    }/>
                )  
                
            }
        </div>
    )
}
const Success = ({setShowModal}) => {
    return (
        <div className={style.container}>
           <img src={successImage} alt="" />
           <h3>Profile Updated Successfully</h3> 
           <button onClick={() => setShowModal(false)}>Continue</button>
        </div>
    )
}
const Failed = ({setShowModal}) => {
    return (
        <div className={style.container}>
           <h3>Request Failed</h3> 
           <button onClick={() => setShowModal(false)}>Return</button>
        </div>
    )
}
export default Profile
