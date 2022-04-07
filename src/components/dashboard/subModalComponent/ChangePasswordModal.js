import React, {useState} from 'react'
import styles from '../../../styles/dashboard/DepositModal.module.css'
import cancel from '../../../assets/dashboard/cancel.svg'
import { useDispatch, useSelector } from 'react-redux'
import { changePassword } from '../../../store/asyncActions/userAsyncActions'
import Loader from '../../Loader'

const ChangePassword = ({setShowModal}) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.user.loading)
    const [state, setState] = useState({
        oldPassword: '',
        newPassword: '',
        newPasswordConfirm: '',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if(state.oldPassword && (state.newPassword === state.newPasswordConfirm)) {
            const formDetails = new FormData()
            formDetails.append('current_password', state.oldPassword)
            formDetails.append('new_password', state.newPassword)
            formDetails.append('new_confirm_password', state.newPasswordConfirm)
            dispatch(changePassword(formDetails))
        }
    }
    
    return (
        <div className={styles.container}>
            {isLoading && <Loader />}
            <button onClick={() => setShowModal(false)} className={styles.cancel}>
                <img src={cancel} alt="" />
            </button>
            <form onSubmit={handleSubmit}>
                <h2>Change Password</h2>
                <div className={styles.inputContainer}>
                    <label htmlFor="oldpassword"> Enter Old Password</label>
                    <input type='password' id="oldpassword" 
                    value={state.oldPassword} required
                    onChange={(e) => setState((prevState) => ({...prevState, oldPassword: e.target.value}))}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="newpassword">Enter New Password</label>
                    <div className={styles.customInput}>
                        <input type="password" id="newpassword"
                        value={state.newPassword} 
                        onChange={(e) => setState((prevState) => ({...prevState, newPassword: e.target.value}))} required
                        />
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="newpassword">Enter New Password again</label>
                    <div className={styles.customInput}>
                        <input type="password" id="newpasswordagain" required
                        value={state.newPasswordConfirm} 
                        onChange={(e) => setState((prevState) => ({...prevState, newPasswordConfirm: e.target.value}))}
                        />
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
