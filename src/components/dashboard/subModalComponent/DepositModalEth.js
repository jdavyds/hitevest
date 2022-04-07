import React, { useState } from 'react'
import styles from '../../../styles/dashboard/DepositModal.module.css'
import cancel from '../../../assets/dashboard/cancel.svg'
import { useDispatch, useSelector } from 'react-redux'
import { depositReq } from '../../../store/asyncActions/userAsyncActions'
import Loader from '../../Loader'
const DepositModalEth = ({setShowModal}) => {
    const dispatch = useDispatch();
    const user = localStorage.getItem('user');
    const userId = JSON.parse(user)
    const isLoading = useSelector(state => state.user.loading)
    const [state, setState] = useState({
        address: '0x0ac6C310a940A69a4531F7360db865D9Efdd0b13',
        amount: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(state.amount){
            const formDetails = new FormData()
            formDetails.append('user_id', userId.id)
            formDetails.append('address', state.address)
            formDetails.append('type', 'eth')
            formDetails.append('amount', state.amount)
            dispatch(depositReq(formDetails))
        }
    }
    return (
        <div className={styles.container}>
            {isLoading && <Loader />}
            <span onClick={() => setShowModal(false)} className={styles.cancel}>
                <img src={cancel} alt="" />
            </span>
            {<form onSubmit={handleSubmit}>
                <h2>Make payment in ETH</h2>
                <div className={styles.inputContainer}>
                    <label htmlFor="btcaddress"> Enter Etherium wallet address</label>
                    <input type='text' id="btcaddress" disabled
                    value={state.address} 
                    onChange={(e) => setState((prevState) => ({...prevState, address: e.target.value}))}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="amount">Enter the amount you will like to deposit</label>
                    <div className={styles.customInput}>
                        <p>$</p>
                        <input type="number" id="amount"
                        value={state.amount} 
                        onChange={(e) => setState((prevState) => ({...prevState, amount: e.target.value}))} required placeholder='Minimum of 1000'/>
                    </div>
                </div>
                <div className={styles.buttonCont}>
                    <button type="submit">Deposit</button>
                </div>
            </form>
            }
            
        </div>
    )
}

export default DepositModalEth;
