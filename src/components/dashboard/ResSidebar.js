import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import styles from '../../styles/dashboard/Sidebar.module.css'
import navLinks from '../../dashboard/utils/navLinks'
// import logout from '../../assets/dashboard/logout.svg'
// import photo from '../../assets/dashboard/photo.png'
// import { useDispatch, useSelector } from 'react-redux'
// import { logoutReq } from '../../store/asyncActions/userAsyncActions'


const ResSidebar = () => {
    // const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    // const {name, referral_link } = useSelector(state => state.user.userDetails)
    // const copyReferral = () => {
    //     window.navigator.clipboard.writeText(referral_link)
    //     window.alert('link copied')
    // }
    // const logoutUser = () => {
    //     window.localStorage.clear()
    //     dispatch(logoutReq())
    //     navigate('/')
    // }
    return (
        <div className={styles.mainContainer}>
            <div className={styles.links}>
                {
                    navLinks.map(links => {
                        if(location.pathname === links.to) {
                            return (
                                <button className={styles.active}>
                                    <img src={links.activeIcon} alt="" />
                                    <span>{links.name}</span>
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
                                    <span>{links.name}</span>
                                </button>)
                        } 
                    })
                }
            </div>
        </div>
    )
}

export default ResSidebar
