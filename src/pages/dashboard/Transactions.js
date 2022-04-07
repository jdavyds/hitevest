import React from 'react'
import styles from '../../styles/dashboard/Transaction.module.css'
import calendar from '../../assets/dashboard/calendar.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight} from '@fortawesome/free-solid-svg-icons'

// const data = [
//     {date: '12/12/21', id: '#565542554', amount: '$ 60,000', balance: '$ 60,000'},
//     {date: '12/12/21', id: '#565542554', amount: '$ 32,000', balance: '$ 4,739'},
//     {date: '12/12/21', id: '#565542554', amount: '$ 5,000', balance: '$ 5,960'},
//     {date: '12/12/21', id: '#565542554', amount: '$ 54,600', balance: '$ 96,000'},
//     {date: '12/12/21', id: '#565542554', amount: '$ 940', balance: '$ 3,738'},
//     {date: '12/12/21', id: '#565542554', amount: '$ 1,200', balance: '$ 48,300'},
//     {date: '12/12/21', id: '#565542554', amount: '$ 600', balance: '$ 34,400'},
//     {date: '12/12/21', id: '#565542554', amount: '$ 389', balance: '$ 300'},
// ]
const Transactions = () => {
    const history = localStorage.getItem('depHistory');
    const histories = JSON.parse(history)
    const data = histories.depositHistory.data
    return (
            <div className={styles.container}>
                <div className={styles.tableTop}>
                    <div className={styles.tableTab}>
                        <h2>Transactions</h2>
                        <div>
                        <button className={styles.active}>Deposit</button>
                        <button className={styles.inActive}>Interest</button>
                        </div>
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
                        <div>Wallet Balance</div>
                    </div>
                    { histories.depositHistory.message === 'You have not made any deposit' && (<div>You have not made any Deposits</div>)
                }
                    {data && (
                        data.map((row, index) => {
                            return (
                            <div className={styles.tableRow} key={index}>
                                <div>{index + 1}</div>
                                <div>{(row.created_at).slice(0, 10)}</div>
                                <div>{(row.id).slice(0, 5)}</div>
                                <div>{row.amount}</div>
                                <div>{row.balance}</div>
                            </div>
                            )
                        }))
                    }
                </div>
                <div className={styles.navigator}>
                    <button className={styles.navigate}>
                        <FontAwesomeIcon icon={faCaretLeft } id={styles.icons}/>Previous
                    </button>
                    <nav className={styles.pageNumbers}>
                        <button className={styles.activeNav}>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                    </nav>
                    <button className={styles.navigate}>
                        Next<FontAwesomeIcon icon={faCaretRight } id={styles.icons}/>
                    </button>
                </div>
            </div>
    )
}

export default Transactions
