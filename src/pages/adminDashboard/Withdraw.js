import React from 'react'
import styles from '../../styles/dashboard/Withdraw.module.css'
import calendar from '../../assets/dashboard/calendar.svg'
const Withdraw = () => {
    // const [showModal, setShowModal] = useState(false)
    // const [withdrawType, setWithdrawType] = useState('')
    // const { userDetails, isVerified } = useSelector(state => state.user);
    // const history = localStorage.getItem('withdrawHistory');
    // const histories = JSON.parse(history)
    // const data = histories.depositHistory.data
    // const empty = histories.depositHistory.message
    // useEffect(() => {
    //     if(userDetails.message === 'Withdrawal_Request_Submitted_Successful'){
    //         setWithdrawType('success')
    //     }
    //  }, [userDetails, isVerified])
    //  useEffect(() => {
    //     if(userDetails.message === 'Request failed with status code 419'){
    //         setWithdrawType('failed')
    //     }
    //  }, [userDetails, isVerified])

    return (
        <div>
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
                        <div>Status</div>
                        <div>Date</div>
                    </div>
                {/* {!empty && !data && ( '' )}
                { empty === 'You have not made any Withdrawal' && (<div>You have not made any Withdrawal</div>)
                        
                } {data && (

                    data.map((row, index) => {
                        return (
                            <div className={styles.tableRow} key={index}>
                                <div>{index + 1}</div>
                                <div>{(row.id).slice(0, 5)}</div>
                                <div>{row.amount}</div>
                                <div>{row.type}</div>
                                <div>{row.status}</div>
                                <div>{(row.created_at).slice(0, 10)}</div>
                            </div>
                            )
                        })
                )} */}
                </div>
            </div>
        </div>
    )
}

export default Withdraw
