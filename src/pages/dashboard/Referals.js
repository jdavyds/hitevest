import React from 'react'
import styles from '../../styles/dashboard/Referrals.module.css'
import calendar from '../../assets/dashboard/calendar.svg'

const Referals = () => {
    const getRef= localStorage.getItem('referrals');
    const refs = JSON.parse(getRef)
    const ref = refs.referrals
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
                        <div>Name</div>
                        <div>Email</div>
                        <div>Phone Number</div>
                        <div>Date</div>
                    </div>
                    { ref.length === 0 && (<div>You have not made any Referrals</div>) }
                    { ref && (
                        ref.map((row, index) => {
                            return (
                            <div className={styles.tableRow} key={index}>
                                <div>{index + 1}</div>
                                <div>{row.name}</div>
                                <div>{row.email}</div>
                                <div>{row.phone}</div>
                                <div>{(row.created_at).slice(0, 10)}</div>
                            </div>
                            )
                        }))
                    }
                </div>
            </div>
        </div>
    )
}

export default Referals
