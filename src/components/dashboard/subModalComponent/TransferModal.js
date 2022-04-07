import React, {useState } from 'react'
import styles from '../../../styles/dashboard/DepositModal.module.css'
import cancel from '../../../assets/dashboard/cancel.svg'
import { useDispatch, useSelector } from 'react-redux'
import { transferReq } from '../../../store/asyncActions/userAsyncActions'
import Loader from '../../Loader'

const TransferModal = ({setShowModal}) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.user.loading)
    const [state, setState] = useState({
        email: '',
        amount: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(state.amount){
            const formDetails = new FormData()
            formDetails.append('amount', state.amount)
            formDetails.append('email', state.email)
            dispatch(transferReq(formDetails))
        }
    }
    return (
        <div className={styles.container}>
            {isLoading && <Loader />}
            <button onClick={() => setShowModal(false)} className={styles.cancel}>
                <img src={cancel} alt="" />
            </button>
            <form onSubmit={handleSubmit}>
                <h2>Transfer Wallet Balance</h2>
                <div className={styles.inputContainer}>
                    <label htmlFor="wallet"> Wallet</label>
                    <input type='text' id="wallet"/>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="username">Email Of User Transfered To</label>
                    <div className={styles.customInput}>
                        <input type="text" id="email" required
                        value={state.email} 
                        onChange={(e) => setState((prevState) => ({...prevState, email: e.target.value}))}/>
                    </div>
                </div>
                {/* <div className={styles.inputContainer}>
                    <label htmlFor="amount">Amount ( Charge: 2 USD + 3% )</label>
                    <div className={styles.customInput}>
                        <input type="number" name="amount" id="amount" placeholder='USD' />
                    </div>
                </div> */}
                <div className={styles.inputContainer}>
                    <label htmlFor="amount">Amount to be removed from wallet</label>
                    <div className={styles.customInput}>
                        <input type="number" name="amount" id="amount" placeholder='Minimum of 1000'
                        value={state.amount} 
                        onChange={(e) => setState((prevState) => ({...prevState, amount: e.target.value}))} required/>
                    </div>
                </div>
                <div className={styles.buttonCont}>
                    <button type="submit">Transfer</button>
                </div>
            </form>
            </div>
    )
}


export default TransferModal
