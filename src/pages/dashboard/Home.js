import React, { useEffect, useState } from 'react'
import styles from '../../styles/dashboard/Home.module.css'
import HomeCard from '../../components/dashboard/HomeCard'
import chart1 from '../../assets/dashboard/1cha.svg'
import chart2 from '../../assets/dashboard/2cha.svg'
import chart3 from '../../assets/dashboard/3cha.svg'
import chart4 from '../../assets/dashboard/4cha.svg'
import chart5 from '../../assets/dashboard/5cha.svg'
import chart6 from '../../assets/dashboard/6cha.svg'
import longArr from '../../assets/dashboard/long-arrow.svg'
import { useNavigate } from 'react-router'
import calendar from '../../assets/dashboard/calendar.svg'


const Home = () => {
    const navigate = useNavigate()
    
    // const history = localStorage.getItem('depHistory');
    // const histories = JSON.parse(history)
    // const data = histories.depositHistory.data
    // const empty = histories.depositHistory.message
    // useEffect(() => {
    //     const fetchStatus = async () => {
    //         const stat = await localStorage.getItem('confirmDeposit');
    //         const status = await JSON.parse(stat)
    //         if(status){
    //         }
    //     }
    //     fetchStatus();
    // })
    // const balanceFetch = localStorage.getItem('depHistory');
    // const walletBalance = JSON.parse(history)
    // const balance = walletBalance
    return (
        <div>
            <div className={styles.cardContainer}>
                <HomeCard 
                    name='Deposit Wallet' 
                    total='0.00'
                    percent={2.5} 
                    color='#F2A218'
                    image={chart1}
                    type='rise'
                 />
                 <HomeCard 
                    name='Interest Wallet' 
                    total='0.00'
                    percent={2.5} 
                    color='#5893F3'
                    image={chart2}
                    type='drop'
                 />
                 <HomeCard 
                    name='Total Investment' 
                    total='0.00'
                    percent={2.5} 
                    color='#EB5757'
                    image={chart3}
                    type='drop'
                 />
                 <HomeCard 
                    name='Total Deposit' 
                    total='0.00'
                    percent={2.5} 
                    color='#56CCF2'
                    image={chart4}
                    type='rise'
                 />
                 <HomeCard 
                    name='Total Withdrawal' 
                    total='0.00'
                    percent={2.5} 
                    color='#9B51E0'
                    image={chart5}
                    type='drop'
                 />
                 <HomeCard 
                    name='Total Referal' 
                    total='0.00'
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
                        <div>Transaction ID</div>
                        <div>Type</div>
                        <div>Amount</div>
                        <div>Status</div>
                        <div>Date</div>
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
                <div className={styles.viewAll}>
                    <button onClick={()=> navigate('/dashboard/transactions')}>View All <img src={longArr} alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default Home
