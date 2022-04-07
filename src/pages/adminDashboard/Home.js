import React from 'react'
import styles from '../../styles/dashboard/Home.module.css'
import HomeCard from '../../components/dashboard/HomeCard'
import chart1 from '../../assets/dashboard/1cha.svg'
import chart2 from '../../assets/dashboard/2cha.svg'
import chart3 from '../../assets/dashboard/3cha.svg'
import chart4 from '../../assets/dashboard/4cha.svg'
import chart5 from '../../assets/dashboard/5cha.svg'
import chart6 from '../../assets/dashboard/6cha.svg'
// import longArr from '../../assets/dashboard/long-arrow.svg'
// import { useNavigate } from 'react-router'
import calendar from '../../assets/dashboard/calendar.svg'

const data = [
    {
        date: '1/3/2022',
        transactionId: 'sdf123fsdfr234',
        amount: '$5,094',
        balance: '$234,535',
        details: 'This was deposited into your wallet'
    },
    {
        date: '1/3/2022',
        transactionId: 'sdf123fsdfr234',
        amount: '$5,094',
        balance: '$234,535',
        details: 'This was deposited into your wallet'
    },
    {
        date: '1/3/2022',
        transactionId: 'sdf123fsdfr234',
        amount: '$5,094',
        balance: '$234,535',
        details: 'This was deposited into your wallet'
    },
    {
        date: '1/3/2022',
        transactionId: 'sdf123fsdfr234',
        amount: '$5,094',
        balance: '$234,535',
        details: 'This was deposited into your wallet'
    },
    {
        date: '1/3/2022',
        transactionId: 'sdf123fsdfr234',
        amount: '$5,094',
        balance: '$234,535',
        details: 'This was deposited into your wallet'
    }
]
const Home = () => {
    // const navigate = useNavigate()
    return (
        <div>
            <div className={styles.cardContainer}>
                <HomeCard 
                    name='Deposit Wallet' 
                    total='600'
                    percent={2.5} 
                    color='#F2A218'
                    image={chart1}
                    type='rise'
                 />
                 <HomeCard 
                    name='Interest Wallet' 
                    total='600'
                    percent={2.5} 
                    color='#5893F3'
                    image={chart2}
                    type='drop'
                 />
                 <HomeCard 
                    name='Total Investment' 
                    total='600'
                    percent={2.5} 
                    color='#EB5757'
                    image={chart3}
                    type='drop'
                 />
                 <HomeCard 
                    name='Total Deposit' 
                    total='600'
                    percent={2.5} 
                    color='#56CCF2'
                    image={chart4}
                    type='rise'
                 />
                 <HomeCard 
                    name='Total Withdrawal' 
                    total='600'
                    percent={2.5} 
                    color='#9B51E0'
                    image={chart5}
                    type='drop'
                 />
                 <HomeCard 
                    name='Total Referal' 
                    total='600'
                    percent={2.5} 
                    color='#0862A0'
                    image={chart6}
                    type='rise'
                 />

            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.tableTop}>
                    <div className={styles.tableTab}>
                        <button className={styles.active}>Deposit</button>
                        <button className={styles.inActive}>Withdrawal</button>
                        <button className={styles.inActive}>Interest</button>
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
                        <div>Transaction ID</div>
                        <div>Amount</div>
                        <div>Wallet balance</div>
                        <div>Details</div>
                    </div>
                    {
                        data.map((row, index) => {
                            return (
                            <div className={styles.tableRow}>
                                <div>{index + 1}</div>
                                <div>{row.date}</div>
                                <div>{row.transactionId}</div>
                                <div>{row.amount}</div>
                                <div>{row.balance}</div>
                                <div>{row.details}</div>
                            </div>
                            )
                        })
                    }
                </div>
                {/* <div className={styles.viewAll}>
                    <button onClick={()=> navigate('/dashboard/transactions')}>View All <img src={longArr} alt="" /></button>
                </div> */}
            </div>
        </div>
    )
}

export default Home
