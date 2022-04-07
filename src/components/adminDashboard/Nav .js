import React, { useState } from 'react'
import styles from '../../styles/dashboard/Nav.module.css'
import searchIcon from '../../assets/dashboard/search.svg'
import notification from '../../assets/dashboard/notification.svg'
import setting from '../../assets/dashboard/setting.svg'
const AdminNav = () => {
    const [search, setSearch] = useState('')
    
    return (
        <div className={styles.navContainer}>
            <div className={styles.searchContainer}>
                <form>
                    <img src={searchIcon} alt="" />
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for something"/>
                    <button>Search</button>
                </form>
            </div>
            <div className={styles.controlsContainer}>
                <button><img src={notification} alt=""/><span>3</span></button>
                <button ><img src={setting} alt="" /></button>
            </div>
            
        </div>
    )
}
export default AdminNav
