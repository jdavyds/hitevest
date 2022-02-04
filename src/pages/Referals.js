import React from 'react'
import styles from '../../styles/dashboard/Referrals.module.css'
import calendar from '../../assets/dashboard/calendar.svg'

const Referals = () => {
    const users = [
        {joined: '12/12/21', fullname: 'Sandy Oluwatobi', },
        {joined: '1/12/21', fullname: 'Sandy Oluwatobi', },
    ]
    const commission = [
        {date: '12/12/21', id: '#565542554', percent: '2%', amount: '$60,000'},
        {date: '1/12/21', id: '#565542554', percent: '2%', amount: '$0.33'},
        {date: '12/12/21', id: '#565542554', percent: '2%', amount: '$20,000'},
        {date: '1/12/21', id: '#565542554', percent: '2%', amount: '$40,000'},
    ]
    return (
        <div>
            <div className={styles.topContainer}>
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
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.tableTop}>
                    <div className={styles.tableTab}>
                        <h2>Referral Commissions</h2>
                        <button className={styles.active}>Deposit</button>
                        <button className={styles.inActive}>Interest</button>
                        <button className={styles.inActive}>Invest</button>
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
                        commission.map((row, index) => {
                            return (
                            <div className={styles.tableRow} key={index}>
                                <div>{index + 1}</div>
                                <div>{row.date}</div>
                                <div>{row.id}</div>
                                <div>{null}</div>
                                <div>{row.percent}</div>
                                <div>{row.amount}</div>
                                <div>{row.type}</div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Referals
