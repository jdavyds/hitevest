import React, { useState } from 'react'
import styles from '../../../styles/dashboard/DepositModal.module.css'
import cancel from '../../../assets/dashboard/cancel.svg'
import { useDispatch, useSelector } from 'react-redux'
import { withdrawReq } from '../../../store/asyncActions/userAsyncActions'
import Loader from '../../Loader'
const WithdrawEth = ({setShowModal}) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.user.loading)
    const [state, setState] = useState({
        address: '',
        amount: '',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if(state.amount){
            const formDetails = new FormData()
            formDetails.append('address', state.address)
            formDetails.append('amount', state.amount)
            dispatch(withdrawReq(formDetails))
        }
    }
    return (
        <div className={styles.container}>
            {isLoading && <Loader />}
            <span onClick={() => setShowModal(false)} className={styles.cancel}>
                <img src={cancel} alt="" />
            </span>
            {<form onSubmit={handleSubmit}>
                <h2>Make withdrawal in ETH</h2>
                <div className={styles.inputContainer}>
                    <label htmlFor="btcaddress"> Enter Etherium wallet address</label>
                    <input type='text' id="usdtaddress"
                    value={state.address} 
                    onChange={(e) => setState((prevState) => ({...prevState, address: e.target.value}))} required 
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="amount">Enter the amount you will like to withdraw</label>
                    <div className={styles.customInput}>
                        <p>$</p>
                        <input type="number" id="amount"
                        value={state.amount} 
                        onChange={(e) => setState((prevState) => ({...prevState, amount: e.target.value}))} required placeholder='Minimum of 1000'/>
                    </div>
                </div>
                <div className={styles.buttonCont}>
                    <button type="submit">Withdraw</button>
                </div>
            </form>
            }
        </div>
    )
}

export default WithdrawEth;
