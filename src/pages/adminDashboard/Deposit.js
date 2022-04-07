import React, {useState, useEffect } from 'react'
import styles from '../../styles/dashboard/AdminDeposit.module.css'
import calendar from '../../assets/dashboard/calendar.svg'
import Loader from '../../components/Loader'
import Modal from '../../components/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { confirmDeposit } from '../../store/asyncActions/userAsyncActions'
import style from '../../styles/dashboard/Success.module.css'
import successImage from '../../assets/dashboard/success.svg'
const Deposit = () => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false)
    const isLoading = useSelector(state => state.user.loading)
    const history = localStorage.getItem('depHistoryAdmin');
    const histories = JSON.parse(history)
    const data = histories.depositHistory.data
    const empty = histories.depositHistory.message
    const error = histories.name
    

    useEffect(() => {
        const fetchStatus = async () => {
            const stat = await localStorage.getItem('confirmDeposit');
            const status = await JSON.parse(stat)
            if(status){
                setShowModal(true)
            }
        }
        fetchStatus();
    })
    function handleBtn(e) {
        e.preventDefault()
        const name = '#' + e.target.name
        const actionBtn = document.querySelector(`${name}`) 
        if(e.target.innerHTML === 'Confirm') {
           e.target.innerHTML = 'Cancel'
           actionBtn.style.display = 'flex'
         } else if(e.target.innerHTML === 'Cancel') {
            e.target.innerHTML = 'Confirm'
            actionBtn.style.display = 'none'
         }
    }
    function handleConfirm(e) {
        e.preventDefault();
        const depositId = e.target.dataset.depositid
        const userId = e.target.dataset.userid
        if(depositId && userId){
            const formDetails =  []
            formDetails.push({'depositId': depositId})
            formDetails.push({'userId': userId})
            dispatch(confirmDeposit(formDetails))
        }
    }
    return (
        <div>
            {isLoading && <Loader />}
            <div className={styles.bottomContainer}>
                <div className={styles.tableTop}>
                    <h2>Deposit</h2>
                    <div className={styles.tableDate}>
                        <button className={styles.active}><img src={calendar} alt="" /></button> 
                        <button className={styles.active}>D</button>
                        <button className={styles.normalDate}>W</button>
                        <button className={styles.normalDate}>M</button>
                        <button className={styles.normalDate}>Y</button>
                    </div> 
                </div>
                <div className={styles.tableCont}>
                    <div className={styles.tableHeader}>
                        <div>S/N</div>
                        <div>Transaction ID</div>
                        <div>User ID</div>
                        <div>Payment type</div>
                        <div>Amount</div>
                        <div>Status</div>
                        <div>Date</div>
                        <div>Action</div>
                    </div>
                    {error && ( <div>Request Failed</div> )}
                    { empty === 'Deposits not found' && (<div>You have no Deposit Request</div>) }
                    { data && (
                        data.map((row, index) => {
                            return (
                            <div className={styles.tableRow} key={index}>
                                <div>{index + 1}</div>
                                <div>{(row.id).slice(0, 7)}</div>
                                <div>{(row.user_id).slice(0, 7)}</div>
                                <div>{row.type}</div>
                                <div>{row.amount}</div>
                                <div>{row.status}</div>
                                <div>{(row.created_at).slice(0, 10)}</div>
                                <div> 
                                    {
                                        row.status === 'Approved' && (
                                            <button 
                                    className={[styles.btn, styles.approved].join(' ')}
                                    disabled>Approved</button>
                                        )
                                    }
                                    { row.status === 'Pending' && (
                                        <div>
                                        <button 
                                        name={'btn' + (index + 1)}
                                        onClick={handleBtn} 
                                        className={styles.btn}
                                        >Confirm</button>
                                        <button 
                                        id={'btn' + (index + 1)} 
                                        data-depositid={row.id}
                                        data-userid={row.user_id}
                                        style={{display: 'none'}} 
                                        onClick={handleConfirm} 
                                        className={styles.btn}
                                        >Proceed</button> </div>)
                                    }
                                </div>
                            </div>
                            )
                        }))
                    }
                </div>
            </div>
            {
             showModal && (
                    <Modal setShowModal={setShowModal} Component={ Success }/>
                )  
            }
        </div>
    )
}
const Success = ({setShowModal}) => {
    function handleClear() {
        setShowModal(false)
        localStorage.removeItem('confirmDeposit');
    }
    return (
        <div className={style.container}>
           <img src={successImage} alt="" />
           <h3>Confirmation Successful</h3> 
           <p>User wallet has been credited</p>
           <button onClick={handleClear}>Continue</button>
        </div>
    )
}
export default Deposit
