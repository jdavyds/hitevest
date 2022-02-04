import React from 'react'
import styles from '../../styles/dashboard/Deposit.module.css'
import calendar from '../../assets/dashboard/calendar.svg'
const Deposit = () => {
    // const [showModal, setShowModal] = useState(false)
    // const [depositType, setDepositType] = useState('')
    // const { userDetails, isVerified } = useSelector(state => state.user);
    // const history = localStorage.getItem('depHistory');
    // const histories = JSON.parse(history)
    // const data = histories.depositHistory.data
    // const empty = histories.depositHistory.message
    // useEffect(() => {
    //     if(userDetails.message === 'Payment_Request_Submitted_successful'){
    //         setDepositType('success')
    //     }
    //  }, [userDetails, isVerified])
    return (
        <div>
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
                    {/* {!empty && !data && ( '' )}
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
                    } */}
                </div>
            </div>
        </div>
    )
}

export default Deposit
