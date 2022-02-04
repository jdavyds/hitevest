import React from 'react'
import styles from '../../../styles/dashboard/SupportTicketModal.module.css'
import cancel from '../../../assets/dashboard/cancel.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

const SupportTicket = ({setShowModal}) => {
    return (
        <div className={styles.container}>
            <button onClick={() => setShowModal(false)} className={styles.cancel}>
                <img src={cancel} alt="" />
            </button>
            <form>
                <h2>Support Ticket</h2>
                <div className={styles.doubleInputContainer}>
                    <div className={styles.inputContainer}>
                        <label htmlFor="fullname"> Full name</label>
                        <input type='text' id="fullname"/>
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="subject">Subject</label>
                    <div className={styles.customInput}>
                        <input type="text" id="subject"/>
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="complaints">Write Your Complaints Here</label>
                    <textarea name="complaints" id="complaints"></textarea>
                </div>
                <div className={styles.attachment}>
                    <button> <FontAwesomeIcon icon={faFileAlt } id={styles.icons}/>Attach Document</button>
                    <span>Allowed File Extensions: .jpg, .jpeg, .png, .pdf, .doc, .docx</span>
                </div>
                <div className={styles.buttonCont}>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SupportTicket
