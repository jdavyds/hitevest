import React, {useState} from 'react'
import styles from '../../../styles/dashboard/DepositModal.module.css'
import cancel from '../../../assets/dashboard/cancel.svg'
// import Success from './Success'
const ChangePassword = ({setShowModal}) => {
    return (
        <div className={styles.container}>
            <button onClick={() => setShowModal(false)} className={styles.cancel}>
                <img src={cancel} alt="" />
            </button>
            <form>
                <h2>Change Password</h2>
                <div className={styles.inputContainer}>
                    <label htmlFor="oldpassword"> Enter Old Password</label>
                    <input type='password' id="oldpassword"/>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="newpassword">Enter New Password</label>
                    <div className={styles.customInput}>
                        <input type="password" id="newpassword"/>
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="newpassword">Enter New Password again</label>
                    <div className={styles.customInput}>
                        <input type="password" id="newpasswordagain"/>
                    </div>
                </div>
                <div className={styles.buttonCont}>
                    <button type="submit">Update</button>
                </div>
            </form>
        </div>
    )
}

export default ChangePassword
