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
    const data = [
        {dnext: '12/1/22',return: '20%', plan: 'Starter', received: '$ 3,348', dreceived: '12/12/21'},
        {dnext: '12/1/22',return: '20%', plan: 'Starter', received: '$ 2,458', dreceived: '12/12/21'},
    ]
    return (
        <div>
            <div className={styles.topContainer}>
                <Card
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
                />
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
                        <div>Date</div>
                    </div>
                    {
                        data.map((row, index) => {
                            return (
                            <div className={stylesT.tableRow} key={index}>
                                <div>{index + 1}</div>
                                <div>{row.plan}</div>
                                <div>{row.return}</div>
                                <div>{row.received}</div>
                                <div>{row.dreceived}</div>
                                <div>{row.dnext}</div>
                                <div>{row.dreceived}</div>
                            </div>
                            )
                        })
                    }
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

const Card = ({header, type, percentage, onClick}) => {
    return(
        <div className={styles.card}>
            <h4>{header}</h4>
            <div className={styles.subCardCont}>
                <p>{percentage}%  returns on Investment</p>
                <p>Monthly payment on Investement</p>
                <p>Payments made for 12 months</p>
                <p>{
                   type ==='left'?  <span className={styles.leftTag}>Total 240%</span> : <span className={styles.rightTag}>Total 480%</span> 
                } + Capitals</p>
                <h2 className={type ==='left'? styles.left : styles.right}>$ 1000 - $ 199999 </h2>
                <form>
                    <input type='number' placeholder='Enter investment amount'/>
                    <button onClick={onClick}>Invest Now</button>
                </form>
            </div>
        </div>
    )
}



export default Investment
