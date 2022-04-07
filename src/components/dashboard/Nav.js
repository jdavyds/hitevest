import React, { useState, useEffect } from 'react'
import styles from '../../styles/dashboard/Nav.module.css'
import searchIcon from '../../assets/dashboard/search.svg'
import notification from '../../assets/dashboard/notification.svg'
import setting from '../../assets/dashboard/setting.svg'
import security from '../../assets/dashboard/security.svg'
import wallet from '../../assets/dashboard/wallet.svg'
import lock from '../../assets/dashboard/lock.svg'
import people from '../../assets/dashboard/people.svg'
import shop from '../../assets/dashboard/shop.svg'
import Modal from '../../components/Modal'
import ChangePassword from './subModalComponent/ChangePasswordModal'
import TransferModal from './subModalComponent/TransferModal'
import SupportTicket from './subModalComponent/SupportTicketModal'
import TwoFactorSecurity from './subModalComponent/TwoFactorModal'
import successImage from '../../assets/dashboard/success.svg'
import photo from '../../assets/dashboard/user.png'
import styleS from '../../styles/dashboard/Success.module.css'
import logo from '../../assets/dashboard/logo.svg'
import { useLocation, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { logoutReq } from '../../store/asyncActions/userAsyncActions'
import logout from '../../assets/dashboard/logout.svg'
import style from '../../styles/dashboard/ResDropdown.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const {name, referral_link } = useSelector(state => state.user.userDetails)
    const copyReferral = () => {
        window.navigator.clipboard.writeText(referral_link)
        window.alert('link copied')
    }
    const logoutUser = () => {
        window.localStorage.clear()
        dispatch(logoutReq())
        navigate('/')
    }
    function handleOpen() {
        setShowRes(true)
    }
    function handleClose() {
        setShowRes(false)
    }
    function handleCloseNav() {
        navigate('/dashboard/profile')
        setShowRes(false)
    }
    const [search, setSearch] = useState('')
    const [showDropdown, setShowDropdown] = useState(false)
    const [showModalTrans, setShowModalTrans] = useState(false)
    const [showModalPassword, setShowModalPassword] = useState(false)
    const [showModalSupport, setShowModalSupport] = useState(false)
    const [showModalSecurity, setShowModalSecurity] = useState(false)
    const [modalType, setModalType] = useState('')
    const [transferType, setTransferType] = useState('')
    const { userDetails } = useSelector(state => state.user);
    const [showModal, setShowModal] = useState(false)
    const [showRes, setShowRes] = useState(false)
    useEffect(() => {
        if(userDetails.message === 'Transfer_sent_successfully.'){
            setTransferType('success')
            setShowModal(true)
        }
     }, [userDetails])
     useEffect(() => {
        if(userDetails.message === 'Request failed with status code 404'){
            setTransferType('notfound')
            setShowModal(true)
        }
     }, [userDetails])
     useEffect(() => {
        if(userDetails.message === 'Request failed with status code 413'){
            setTransferType('insufficient')
            setShowModal(true)
        }
     }, [userDetails])
     useEffect(() => {
        if(userDetails.message === 'The given data was invalid.'){
            setTransferType('changefailed')
            setShowModal(true)
        }
     }, [userDetails])
     useEffect(() => {
        if(userDetails.message === 'Password change successfully'){
            setTransferType('changesuccess')
            setShowModal(true)
        }
     }, [userDetails])

    return (
        <div>
        <div className={styles.navContainer}>
            <div className={styles.profileImage} onClick={handleOpen}>
                    <div className={styles.subPic}>
                        <img src={photo} alt="" />
                    </div>
            </div>
            <div className={styles.searchContainer}>
                <form>
                    <img src={searchIcon} alt="" />
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for something"/>
                    <button>Search</button>
                </form>
            </div>
            <div className={styles.controlsContainer}>
                <button><img src={notification} alt=""/><span>3</span></button>
                <button onClick={() => setShowDropdown(!showDropdown)}><img src={setting} alt="" /></button>
            </div>
            {
                showDropdown && (
                    <div className={styles.dropdown}>
                        <DropdownBtn text={'Transfer Balance'} image={wallet}
                        onClick={(e)=>{
                            e.preventDefault()
                            setModalType('transferbalance')
                            setShowModalTrans(true)
                        }}
                             />
                        <DropdownBtn text={'Change Password'} image={lock} 
                        onClick={(e)=>{
                            e.preventDefault()
                            setModalType('changepassword')
                            setShowModalPassword(true)
                        }}/>
                        <DropdownBtn text={'Support Ticket'} image={people} 
                        onClick={(e)=>{
                            e.preventDefault()
                            setModalType('supportticket')
                            setShowModalSupport(true)
                        }}/>
                        <DropdownBtn text={'2FA Security'} image={security}
                        onClick={(e)=>{
                            e.preventDefault()
                            setModalType('2fasecurity')
                            setShowModalSecurity(true)
                        }} />
                        <DropdownBtn text={'Promotional Tools'} image={shop} 
                        onClick={(e)=>{
                            e.preventDefault()
                            setModalType('promotionaltools')
                            setShowModalPassword(true)
                        }}/>
                    </div>
                )
            }
            {
             showModalTrans && (
                    <Modal setShowModal={setShowModalTrans} Component={modalType === 'transferbalance' ? TransferModal: TransferModal }/>
                )
            }
            {
             showModalPassword && (
                    <Modal setShowModal={setShowModalPassword} Component={modalType === 'changepassword' ? ChangePassword: ChangePassword }/>
                )
            }
            {
             showModalSupport && (
                    <Modal setShowModal={setShowModalSupport} Component={modalType === 'changepassword' ? SupportTicket: SupportTicket }/>
                )
            }
            {
             showModalSecurity && (
                    <Modal setShowModal={setShowModalSecurity} Component={modalType === '2fasecurity' ? TwoFactorSecurity: TwoFactorSecurity }/>
                )
            }
            {
             showModal && (
                    <Modal setShowModal={setShowModal} Component={
                        transferType === 'notfound' ? NotFound : transferType === 'changefailed' ? ChangeFailed : transferType === 'changesuccess' ? ChangeSuccess : transferType === 'success' ? Success : transferType === 'insufficient' ? Insufficient : '' 
                    }/>
                )  
                
            }
        </div>
        {
                showRes && (
                    <div className={style.container}>
                    <div className={style.logo}>
                    <img src={logo} alt="" />
                    </div>
                    <div className={style.profileImage}>
                    <div className={style.subPic}>
                        <img src={photo} alt="" />
                    </div>
                    </div>
                    <p className={style.profileName}>{name}</p>
                    <div className={style.buttonCont}>
                    {
                        location.pathname === '/dashboard/profile' ?
                        <button className={style.activeProfileButton}>View Profile</button>:
                        <button className={style.inActiveProfileButton} onClick={handleCloseNav}>View Profile</button>
                    }
                    <button className={style.referalButton} onClick={copyReferral}>Copy referal link</button>
                    <button className={style.logout} onClick={logoutUser}>
                        <img src={logout} alt="" />
                        <span>Log out</span>
                    </button>
                    <button className={style.close} onClick={handleClose}><FontAwesomeIcon icon={ faTimes } id={styles.icons}/></button>
                </div>
                </div>
                )
            }
        </div>
    )
}

const DropdownBtn = ({text, image, onClick}) => {
    return (
        <button className={styles.dropBtn} onClick={onClick}>
            <img src={image} alt="" />
            <span>{text}</span>
        </button>
    )
}
const Success = ({setShowModal}) => {
    return (
        <div className={styleS.container}>
           <img src={successImage} alt="" />
           <h3>Withdrawal Successful</h3> 
           <p>Payment was deducted from your deposit wallet</p>
           <button onClick={() => setShowModal(false)}>Continue</button>
        </div>
    )
}
const NotFound = ({setShowModal}) => {
    return (
        <div className={styleS.container}>
           {/* <img src={successImage} alt="" /> */}
           <h3>Transfer Failed</h3> 
           <p>Receiver not found on this Platform</p>
           <button onClick={() => setShowModal(false)}>Return</button>
        </div>
    )
}
const Insufficient = ({setShowModal}) => {
    return (
        <div className={styleS.container}>
           {/* <img src={successImage} alt="" /> */}
           <h3>Transfer Failed</h3> 
           <p>Insufficient Wallet Balance</p>
           <button onClick={() => setShowModal(false)}>Return</button>
        </div>
    )
}
const ChangeFailed = ({setShowModal}) => {
    return (
        <div className={styleS.container}>
           {/* <img src={successImage} alt="" /> */}
           <h3>Password Change Failed</h3> 
           <p>Invalid Credentials</p>
           <button onClick={() => setShowModal(false)}>Return</button>
        </div>
    )
}
const ChangeSuccess = ({setShowModal}) => {
    return (
        <div className={styleS.container}>
           {/* <img src={successImage} alt="" /> */}
           <h3>Successful</h3> 
           <p>Password Changed Successfully</p>
           <button onClick={() => setShowModal(false)}>Return</button>
        </div>
    )
}
export default Nav
