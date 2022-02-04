import React from 'react'
import styles from '../../../styles/dashboard/TwoFactorModal.module.css'
import cancel from '../../../assets/dashboard/cancel.svg'
import qrCode from '../../../assets/dashboard/qr-code 1.png'
const TwoFactorSecurity = ({setShowModal}) => {
    return (
        <div className={styles.container}>
            <button onClick={() => setShowModal(false)} className={styles.cancel}>
                <img src={cancel} alt="" />
            </button>
                <h2>2 Factor Security</h2>
            <main>
                <form className={styles.factorAuth}>
                    <h4>Two Factor Authenticator</h4>
                    <div className={styles.content}>
                        <div className={styles.copyUrl}>
                            <input type="text" id="" />
                            <button>Copy</button>
                        </div>
                        <div className={styles.qrCode}>
                            <img src={qrCode} alt="" />
                        </div>
                        <div className={styles.otp}>
                            <label htmlFor="otp">Verify Your OTP</label>
                            <input type="text" name="otp" id="otp" />
                        </div>
                        <div className={styles.factorBtn}>
                            <button>Enable two factor authentication</button>
                        </div>
                    </div>
                </form>
                <div className={styles.googleAuth}>
                    <h4>Google Authenticator</h4>
                    <div className={styles.content}>
                        <strong>USE GOOGLE AUTHENTICATOR TO SCAN THE QR CODE OR USE THE CODE</strong>
                        <p>Google Authenticator is a multifactor app for mobile devices. It generates timed codes used during the 2-step verification process. To use Google Authenticator, install the Google Authenticator application on your mobile device.</p>
                        <div>
                            <button>Download the App</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default TwoFactorSecurity
