import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import styles from '../../styles/dashboard/Sidebar.module.css'
import navLinks from '../../dashboard/utils/navLinks'
import logo from '../../assets/dashboard/logo.svg'
import logout from '../../assets/dashboard/logout.svg'
// import photo from '../../assets/dashboard/photo.png'
import { useDispatch, useSelector } from 'react-redux'
import { logoutReq } from '../../store/asyncActions/userAsyncActions'

const Sidebar = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const {name, referralLink } = useSelector(state => state.user.userDetails)
    const copyReferral = () => {
        window.navigator.clipboard.writeText(referralLink)
        window.alert(referralLink)
    }
    const logoutUser = () => {
        window.localStorage.clear()
        dispatch(logoutReq())
        navigate('/')
    }
    const bal = useSelector(state => state.user.userBal)
    const ref = useSelector(state => state.user.userRef)
    return (
        <div className={styles.mainContainer}>
            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>
            <div className={styles.littleHeading}>
                <p>Menu</p>
            </div>
            <div className={styles.links}>
                {
                    navLinks.map(links => {
                        if(location.pathname === links.to) {
                            return (
                                <button className={styles.active}>
                                    <img src={links.activeIcon} alt="" />
                                    <span>{links.name} 
                                    {
                                        (links.name === 'Referals') && <i>({ref})</i>
                                    }
                                    </span>
                                </button>
                            )
                        } else {
                             return (
                                <button className={styles.normal} onClick={
                                        ()=> {
                                            navigate(links.to)
                                        } 
                                    }>
                                    <img src={links.normalIcon} alt="" />
                                    <span>{links.name}
                                    {
                                        (links.name === 'Referals') && <i>({ref})</i>
                                    }
                                    </span>
                                </button>)
                        } 
                    })
                }
            </div>
            <div className={styles.userCard}>
                {/* <div className={styles.profileImage}>
                    <div className={styles.subPic}>
                        <img src={photo} alt="" />
                    </div>
                </div> */}
                <p className={styles.profileName}>{name}</p>
                <div className={styles.buttonCont}>
                    {
                        location.pathname === '/dashboard/profile' ?
                        <button className={styles.activeProfileButton}>View Profile</button>:
                        <button className={styles.inActiveProfileButton} onClick={() => {
                            navigate('/dashboard/profile')
                        }}>View Profile</button>
                    }
                    <button className={styles.referalButton} onClick={copyReferral}>Copy referal link</button>
                    <div className={styles.bal}>
                        <span>Wallet Balance</span>
                        <h3>{bal}</h3>
                    </div>
                    <button className={styles.logout} onClick={logoutUser}>
                        <img src={logout} alt="" />
                        <span>Log out</span>
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar
