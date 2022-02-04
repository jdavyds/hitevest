import React, { useState} from 'react'
import photo from '../../assets/dashboard/photo.png'
import styles from '../../styles/dashboard/Profile.module.css'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUser , faAddressCard} from '@fortawesome/free-solid-svg-icons'
const Profile = () => {
    // const { userDetails } = useSelector(state => state.user);
    const { name } = useSelector(state => state.user.userDetails)


    // const names = userDetails.name.split(' ')
    const [ edit1, setEdit1 ] = useState(false)
    const [ edit2, setEdit2 ] = useState(false)
    const [ editInput1, setEditInput1 ] = useState(false)
    const [ editInput2, setEditInput2 ] = useState(false)
    function handleEdit1() {
        const inputs = document.querySelectorAll('.edit1')
        if(edit1 === true) {
            inputs.disabled = true;
        } else{
            inputs.disabled = false;
        }
        setEditInput1(!editInput1)
        setEdit1(!edit1)
    }
    function handleEdit2() {
        const inputs = document.querySelectorAll('.edit2')
        if(edit2 === true) {
            inputs.disabled = true;
        } else{
            inputs.disabled = false;
        }
        setEditInput2(!editInput2)
        setEdit2(!edit2)
    }
    return (
        <div className={styles.profilePage}>
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
                    <form>
                        <label htmlFor="first name">
                            First Name
                            <input className={editInput1 ? styles.edit1 : ''} type="text" name="first name" disabled/>
                        </label>
                        <label htmlFor="last name">
                            Last Name
                            <input className={editInput1 ? styles.edit1 : ''} type="text" name="last name" disabled/>
                        </label>
                        <label htmlFor="username">
                            Username
                            <input className={editInput1 ? styles.edit1 : ''} type="text" name="username" disabled/>
                        </label>
                        <label htmlFor="mail">
                            Email address
                            <input className={editInput1 ? styles.edit1 : ''} type="email" name="mail" disabled/>
                        </label>
                        <label htmlFor="mobile">
                            Mobile number
                            <input className={editInput1 ? styles.edit1 : ''} type="tel" name="mobile" disabled/>
                        </label>
                    </form>
                    <div className={styles.leftBtn}>
                        <button className={edit1 ? styles.active : ''} onClick={handleEdit1}>Cancel</button>
                        <button className={edit1 ? styles.active : ''}>Save</button>
                    </div>
                </div>
                <div className={styles.rightCard}>
                    <p>
                    <FontAwesomeIcon icon={ faAddressCard } className={styles.bottomIcon}/>Address Details <button onClick={handleEdit2}>Edit</button></p>
                    <form>
                        <label htmlFor="adress">
                            Address
                            <input type="text" name="address" className={editInput2 ? styles.edit2 : ''} disabled/>
                        </label>
                        <label htmlFor="country">
                            Country
                            <input type="text" name="country" className={editInput2 ? styles.edit2 : ''} disabled/>
                        </label>
                        <label htmlFor="state">
                            State
                            <input type="text" name="state" className={editInput2 ? styles.edit2 : ''} disabled/>
                        </label>
                        <label htmlFor="city">
                            City
                            <input type="email" name="city" className={editInput2 ? styles.edit2 : ''} disabled/>
                        </label>
                        <label htmlFor="zip">
                            Zip
                            <input type="number" name="zip" className={editInput2 ? styles.edit2 : ''} disabled/>
                        </label>
                    </form>
                    <div className={styles.rightBtn}>
                        <button className={edit2 ? styles.active : ''} onClick={handleEdit2}>Cancel</button>
                        <button className={edit2 ? styles.active : ''}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
