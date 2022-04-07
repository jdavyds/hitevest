import React from 'react'
import styles from '../../styles/dashboard/Referrals.module.css'
import calendar from '../../assets/dashboard/calendar.svg'

const Referals = () => {
    const ref= localStorage.getItem('referrals');
    const getTotal = localStorage.getItem('totals');
    const totals = JSON.parse(getTotal)
    const total = totals.referrals.data.data.ReferralCount

    return (
        <div>
            {/* <div className={styles.topContainer}>
                            <div className={styles.tableTop}>
                                <h2>Referred Users</h2>
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
                                    <div>Fullname</div>
                                    <div>Joined At</div>
                                </div>
                                {
                                    users.map((row, index) => {
                                        return (
                                        <div className={styles.tableRow} key={index}>
                                            <div>{index + 1}</div>
                                            <div>{row.fullname}</div>
                                            <div>{row.joined}</div>
                                        </div>
                                        )
                                    })
                                }
                            </div>
            </div> */}
            <div className={styles.bottomContainer}>
                <div className={styles.tableTop}>
                    <div className={styles.tableTab}>
                        <h2>Referrals ({total})</h2>
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
                        <div>Date</div>
                        <div>From</div>
                        <div>Level</div>
                        <div>Percent</div>
                        <div>Amount</div>
                        <div>Type</div>
                    </div>
                    {
                        ref
                        // .map((row, index) => {
                        //     return (
                        //     <div className={styles.tableRow} key={index}>
                        //         <div>{index + 1}</div>
                        //         <div>{row.date}</div>
                        //         <div>{row.id}</div>
                        //         <div>{null}</div>
                        //         <div>{row.percent}</div>
                        //         <div>{row.amount}</div>
                        //         <div>{row.type}</div>
                        //     </div>
                        //     )
                        // })
                    }
                    {/* <button onClick={dispatch(walletBalance)} >click</button> */}
                </div>
            </div>
        </div>
    )
}

export default Referals
