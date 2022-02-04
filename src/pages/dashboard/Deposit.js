import React, { useState, useEffect } from 'react'
import TransCard from '../../components/dashboard/TransCard'
import styles from '../../styles/dashboard/Deposit.module.css'
import btcIcon from '../../assets/dashboard/bitcoin.png'
import ethIcon from '../../assets/dashboard/eth.jpg'
import btcCash from '../../assets/dashboard/Bitcoin_Cash.png'
import Modal from '../../components/Modal'
import { useSelector } from 'react-redux'
import DepositModalBtc from '../../components/dashboard/subModalComponent/DepositModalBtc'
import DepositModalBtcCash from '../../components/dashboard/subModalComponent/DepositModalBtcCash'
import DepositModalEth from '../../components/dashboard/subModalComponent/DepositModalEth'
import calendar from '../../assets/dashboard/calendar.svg'
import successImage from '../../assets/dashboard/success.svg'
import style from '../../styles/dashboard/Success.module.css'
const Deposit = () => {
    const [showModal, setShowModal] = useState(false)
    const [depositType, setDepositType] = useState('')
    const { userDetails, isVerified } = useSelector(state => state.user);
    const history = localStorage.getItem('depHistory');
    const histories = JSON.parse(history)
    const data = histories.depositHistory.data
    const empty = histories.depositHistory.message
    useEffect(() => {
        if(userDetails.message === 'Payment_Request_Submitted_successful'){
            setDepositType('success')
        }
     }, [userDetails, isVerified])
    return (
        <div>
            <div className={styles.topContainer}>
                <TransCard
                 image={btcIcon}
                 heading="Make a deposit in Bitcoin"
                 limit="Limit: 1000 to 100000 USD"
                 charges="Charge: 0 USD + 0%"
                 onClick={()=>{
                    setShowModal(true);
                    setDepositType('btc')
                 }}
                 btnValue="Deposit"
                />
                <TransCard
                 image={ethIcon}
                 heading="Make a deposit in ETH"
                 limit="Limit: 1000 to 100000 USD"
                 charges="Charge: 0 USD + 0%"
                 onClick={()=>{
                    setShowModal(true);
                    setDepositType('eth')
                 }}
                 btnValue="Deposit"
                />
                <TransCard
                 image={btcCash}
                 heading="Make a deposit in BTC Cash"
                 limit="Limit: 1000 to 100000 USD"
                 charges="Charge: 0 USD+ 0%"
                 onClick={()=>{
                    setShowModal(true);
                    setDepositType('btcc')
                 }}
                 btnValue="Deposit"
                />
            </div>
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
                        <div>Payment type</div>
                        <div>Amount</div>
                        <div>Status</div>
                        <div>Time</div>
                    </div>
                    {!empty && !data && ( '' )}
                    { empty === 'You have not made any deposit' && (<div>You have not made any Deposits</div>) }
                    { data && (
                        data.map((row, index) => {
                            return (
                            <div className={styles.tableRow} key={index}>
                                <div>{index + 1}</div>
                                <div>{(row.id).slice(0, 5)}</div>
                                <div>{row.type}</div>
                                <div>{row.amount}</div>
                                <div>{row.status}</div>
                                <div>{(row.created_at).slice(0, 10)}</div>
                            </div>
                            )
                        }))
                    }
                </div>
            </div>
            {
             showModal && (
                    <Modal setShowModal={setShowModal} Component={
                        depositType === 'btc'? DepositModalBtc : depositType === 'btcc' ? DepositModalBtcCash : depositType === 'success' ? Success : DepositModalEth 
                    }/>
                )  
                
            }
        </div>
    )
}

const Success = ({setShowModal}) => {
    return (
        <div className={style.container}>
           <img src={successImage} alt="" />
           <h3>Payment Request Submitted Successful</h3> 
           <p>Payment will be deducted from your deposit wallet</p>
           <button onClick={() => setShowModal(false)}>Continue</button>
        </div>
    )
}
export default Deposit
