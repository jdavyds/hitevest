import React from 'react'
import styles from '../styles/dashboard/Modal.module.css'
const Modal = ({Component, setShowModal}) => {
    return (
        <div className={styles.container}>
            <Component setShowModal={setShowModal}/>
        </div>
    )
}

export default Modal
