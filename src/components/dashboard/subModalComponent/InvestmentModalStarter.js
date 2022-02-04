import React, {useState} from 'react'
import styles from '../../../styles/dashboard/InvestmentModal.module.css'
import cancel from '../../../assets/dashboard/cancel.svg'
import Modal from '../../Modal'
import Success from './Success'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown} from '@fortawesome/free-solid-svg-icons'

const InvestmentModalStarter = ({setShowModal}) => {
    return (
        <div className={styles.container}>
            <button onClick={() => setShowModal(false)} className={styles.cancel}>
                <img src={cancel} alt="" />
            </button>
            <form >
                <h2>Confirm Starter Plan Investment</h2>
                <p>20% Investment Returns</p>
                <div className={styles.inputContainer}>
                <label htmlFor="payment option">Choose Payment Option</label>
                    <div className={styles.customInput}>
                        <FontAwesomeIcon icon={faCaretDown} className={styles.icon}/>
                        <input type="text" name="paymentoption" id="paymentoption" list="options" />
                        <datalist id="options">
                        <option>Pay from Desposit Wallet - $ 150,000</option>
                        <option>Pay from Interest Wallet - $ 150,000</option>
                        <option>Online Payment</option>
                        </datalist>
                    </div>
                </div>
                <div className={styles.buttonCont}>
                    <button type="submit">Confirm</button>
                </div>
            </form>
        </div>
    )
}

export default InvestmentModalStarter
