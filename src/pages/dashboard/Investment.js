import React, { useState } from 'react'
import stylesT from '../../styles/dashboard/Withdraw.module.css'
import styles from '../../styles/dashboard/Investment.module.css'
import calendar from '../../assets/dashboard/calendar.svg'
import Modal from '../../components/Modal'
import InvestmentModalEnterprise from '../../components/dashboard/subModalComponent/InvestmentModalEnterprise'
import InvestmentStarter from '../../components/dashboard/subModalComponent/InvestmentModalStarter'

const Investment = () => {
    const [showModal, setShowModal] = useState(false)
    const [investType, setInvestType] = useState('')
    
    const getPlans = localStorage.getItem('plans');
    const planss = JSON.parse(getPlans)
    const plans = planss.plan.data
    const empty = plans.message
    return (
        <div>
            <div className={styles.topContainer}>
                {
                    plans.map(plan => {
                        return(
                            <Card
                                name={plan.plan_name}
                                roi={plan.roi}
                                duration={plan.duration}
                                min={plan.min_amount}
                                max={plan.max_amount}
                                onClick={()=>{
                                    setShowModal(true);
                                    setInvestType(plan.type)
                                }}
                            />
                        )
                    })
                }
                {/* <Card
                 type='left'
                 header='Starter Plan'
                 percentage={20}
                 onClick={(e)=>{
                     e.preventDefault()
                    setInvestType('starter')
                    setShowModal(true)
                 }}
                />
                <Card
                 type='right'
                 header='Enterprise Plan'
                 percentage={40}
                 onClick={(e)=>{
                    e.preventDefault()
                    setInvestType('enterprise')
                    setShowModal(true)
                 }}
                /> */}
            </div>
            <div className={stylesT.bottomContainer}>
                <div className={stylesT.tableTop}>
                    <div className={stylesT.tableTab}>
                        <h2>Investments</h2>
                    </div> 
                    <div className={stylesT.tableDate}>
                        <button className={stylesT.active}><img src={calendar} alt="" /></button> 
                        <button className={stylesT.active}>D</button>
                        <button className={stylesT.normalDate}>W</button>
                        <button className={stylesT.normalDate}>M</button>
                        <button className={stylesT.normalDate}>Y</button>
                    </div> 
                </div>
                <div className={stylesT.tableCont}>
                    <div className={stylesT.tableHeader}>
                        <div>S/N</div>
                        <div>Plan</div>
                        <div>Return</div>
                        <div>Received</div>
                        <div>Date Received</div>
                        <div>Next Payment</div>
                    </div>
                    {/* {
                        data.map((row, index) => {
                            return (
                            <div className={stylesT.tableRow} key={index}>
                                <div>{index + 1}</div>
                                <div>{row.plan}</div>
                                <div>{row.return}</div>
                                <div>{row.received}</div>
                                <div>{row.dreceived}</div>
                                <div>{row.dnext}</div>
                            </div>
                            )
                        })
                    } */}
                </div>
            </div>
            {
             showModal && (
                    <Modal setShowModal={setShowModal} Component={investType === 'starter' ? InvestmentStarter: InvestmentModalEnterprise}/>
                )
            }
        </div>
    )
}

const Card = ({name, roi, duration, min, max, onClick}) => {
    return(
        <div className={styles.card}>
            <h4>{name}</h4>
            <div className={styles.subCardCont}>
                <p>{roi}%  returns on Investment</p>
                <p>{duration} Months</p>
                <p>{min} min - {max} max</p>
                <button onClick={onClick}>Invest Now</button>
            </div>
        </div>
    )
}



export default Investment
