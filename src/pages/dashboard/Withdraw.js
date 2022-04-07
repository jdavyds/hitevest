import React, {useState, useEffect} from 'react'
import TransCard from '../../components/dashboard/TransCard'
import styles from '../../styles/dashboard/Withdraw.module.css'
import btcIcon from '../../assets/dashboard/bitcoin.png'
import ethIcon from '../../assets/dashboard/eth.jpg'
import btcCash from '../../assets/dashboard/Bitcoin_Cash.png'
import Modal from '../../components/Modal'
import { useSelector} from 'react-redux'
import WithdrawBtc from '../../components/dashboard/subModalComponent/WithdrawBtc'
import WithdrawEth from '../../components/dashboard/subModalComponent/WithdrawEth'
import WithdrawBtcCash from '../../components/dashboard/subModalComponent/WithdrawBtcCash'
import calendar from '../../assets/dashboard/calendar.svg'
import successImage from '../../assets/dashboard/success.svg'
import style from '../../styles/dashboard/Success.module.css'
const Withdraw = () => {
    const [showModal, setShowModal] = useState(false)
    const [withdrawType, setWithdrawType] = useState('')
    const { userDetails, isVerified } = useSelector(state => state.user);
    const history = localStorage.getItem('withdrawHistory');
    const histories = JSON.parse(history)
    const data = histories.depositHistory.data
    const empty = histories.depositHistory.message
    const getTotal = localStorage.getItem('totals');
    const totals = JSON.parse(getTotal)
    const total = totals.referrals.data.data.WithdrawalCount
    useEffect(() => {
        if(userDetails.message.includes('Submitted')){
            setWithdrawType('success')
        }
     }, [userDetails, isVerified])
     useEffect(() => {
        if(userDetails.message.includes('419' || 'Low')){
            setWithdrawType('failed')
        }
     }, [userDetails, isVerified])
     useEffect(() => {
        if(userDetails.message.includes('422' || 'Not proccessed')){
            setWithdrawType('notprocessed')
        }
     }, [userDetails, isVerified])
    return (
        <div>
            <div className={styles.totalWith}>
                <h2>Total Withdrawal</h2>
                <p>{total}</p>
            </div>
            <div className={styles.topContainer}>
                <TransCard
                 image={btcIcon}
                 heading="Make a withdrawal in Bitcoin"
                 limit="Limit: 1000 to 100000 USD"
                 charges="Charge: 0 USD + 0%"
                 onClick={()=>{
                     setWithdrawType('btc')
                     setShowModal(true)
                 }}
                 btnValue="Withdraw"
                />
                <TransCard
                 image={ethIcon}
                 heading="Make a withdrawal in Etherium"
                 limit="Limit: 1000 to 100000 USD"
                 charges="Charge: 0 USD + 0%"
                 onClick={()=>{
                     setWithdrawType('eth')
                     setShowModal(true)
                 }}
                 btnValue="Withdraw"
                />
                <TransCard
                 image={btcCash}
                 heading="Make a withdrawal Bitcoin Cash"
                 limit="Limit: 1000 to 100000 USD"
                 charges="Charge: 0 USD + 0%"
                 onClick={()=>{
                     setWithdrawType('btcc')
                     setShowModal(true)
                 }}
                 btnValue="Withdraw"
                />
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.tableTop}>
                    <div className={styles.tableTab}>
                        <h2>Withdraw</h2>
                    </div> 
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
                        <div>Transaction Id</div>
                        <div>Amount Withdrawn</div>
                        <div>Withdraw type</div>
                        {/* <div>Amount Received</div> */}
                        <div>Status</div>
                        <div>Date</div>
                    </div>
                {!empty && !data && ( '' )}
                { empty === 'You have not made any Withdrawal' && (<div>You have not made any Withdrawal</div>)
                        
                } {data && (

                    data.map((row, index) => {
                        return (
                            <div className={styles.tableRow} key={index}>
                                <div>{index + 1}</div>
                                <div>{(row.id).slice(0, 5)}</div>
                                <div>{row.amount}</div>
                                <div>{row.type}</div>
                                {/* <div>{row.received}</div> */}
                                <div>{row.status}</div>
                                <div>{(row.created_at).slice(0, 10)}</div>
                            </div>
                            )
                        })
                )
                    }
                </div>
            </div>
            {
             showModal && (
                    <Modal setShowModal={setShowModal} Component={
                        withdrawType === 'btc'? WithdrawBtc : withdrawType === 'btcc' ? WithdrawBtcCash : withdrawType === 'success' ? Success : withdrawType === 'notprocessed' ? NotProc : withdrawType === 'failed' ? Failed : WithdrawEth 
                    }/>
                )  
                
            }
        </div>
    )
}

const Success = ({setShowModal}) => {
    function handleReturn() {
        setShowModal(false)
    }
    return (
        <div className={style.container}>
           <img src={successImage} alt="" />
           <h3>Withdrawal Request Submitted Successful</h3> 
           <p>Payment will be deducted from your deposit wallet</p>
           <button onClick={handleReturn}>Continue</button>
        </div>
    )
}
const Failed = ({setShowModal}) => {
    function handleReturn() {
        setShowModal(false)
    }
    return (
        <div className={style.container}>
           {/* <img src={successImage} alt="" /> */}
           <h3>Withdrawal Failed</h3> 
           <p>Withdrawer Request Failed! Wallet Balance Low</p>
           <button onClick={handleReturn}>Return</button>
        </div>
    )
}
const NotProc = ({setShowModal}) => {
    function handleReturn() {
        setShowModal(false)
    }
    return (
        <div className={style.container}>
           {/* <img src={successImage} alt="" /> */}
           <h3>Withdrawal Failed! Error</h3> 
           <p>Not proccessed</p>
           <button onClick={handleReturn}>Return</button>
        </div>
    )
}
export default Withdraw
