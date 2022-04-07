import React, { useState }  from 'react'
import styles from '../../../styles/dashboard/DepositModal.module.css'
import cancel from '../../../assets/dashboard/cancel.svg'
import btcIcon from '../../../assets/dashboard/btcIcon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { depositReq } from '../../../store/asyncActions/userAsyncActions'
import Loader from '../../Loader'
const DepositModalBtc = ({setShowModal}) => {
    const dispatch = useDispatch();
    const user = localStorage.getItem('user');
    const userId = JSON.parse(user)
    const isLoading = useSelector(state => state.user.loading)
    const [state, setState] = useState({
        address: 'bc1qxkxq2pcygepapsgvwap555wthk5a8v3z67dgz6',
        amount: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(state.amount){
            const formDetails = new FormData()
            formDetails.append('user_id', userId.id)
            formDetails.append('type', 'btc')
            formDetails.append('address', state.address)
            formDetails.append('amount', state.amount)
            dispatch(depositReq(formDetails))
        }
    }
    return (
        <div className={styles.container}>
            {isLoading && <Loader />}
            <button onClick={() => setShowModal(false)} className={styles.cancel}>
                <img src={cancel} alt="" />
            </button>
            <form onSubmit={handleSubmit}>
                <h2>Make payment in Bitcoin</h2>
                <div className={styles.inputContainer}>
                    <label htmlFor="btcaddress"> Enter bitcoin wallet address</label>
                    <input type='text' id="btcaddress"  disabled
                    value={state.address} 
                    onChange={(e) => setState((prevState) => ({...prevState, address: e.target.value}))}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="amount">Enter the amount you will like to deposit</label>
                    <div className={styles.customInput}>
                        <img src={btcIcon} alt="" />
                        <input type="number" id="amount"
                        value={state.amount} 
                        onChange={(e) => setState((prevState) => ({...prevState, amount: e.target.value}))} required placeholder='Minimum of 1000'
                        />
                    </div>
                </div>
                <div className={styles.buttonCont}>
                    <button type="submit">Deposit</button>
                </div>
            </form>
        </div>
    )
}

export default DepositModalBtc
