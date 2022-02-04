import React, { useState } from 'react'
import styles from '../styles/Landing.module.scss'
import cDown from '../assets/cDown.svg'

const Qna = ({question, answer}) => {
    const [showAns, setShowAns] = useState(false)
    return (
        <div className={styles.questContainer}>
            <button onClick={() => setShowAns(!showAns)}><span>{question}</span> <img src={cDown} alt=""  /></button>
            { showAns && 
                (<div>
                    <p>{answer}</p>
                </div>)
            }
        </div>
    )
}

export default Qna
