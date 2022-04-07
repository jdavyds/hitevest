import React, { useState, useEffect } from 'react'
import styles from '../../styles/dashboard/Plans.module.css'
import Modal from '../../components/Modal'
import Loader from '../../components/Loader.js'
import { useDispatch, useSelector } from 'react-redux'
import cancel from '../../assets/dashboard/cancel.svg'
import { createPlan, deletePlan, updatePlan } from '../../store/asyncActions/userAsyncActions'
import style from '../../styles/dashboard/Success.module.css'
import successImage from '../../assets/dashboard/success.svg'

export default function Plans() {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch();
    const [modalType, setModalType] = useState('')
    const { userDetails, isVerified } = useSelector(state => state.user);
    const getPlans = localStorage.getItem('plans');
    const plans = JSON.parse(getPlans)
    const plan = plans.plan.data
    const empty = plans.message
    
    function handleCreate(e) {
        e.preventDefault()
        setShowModal(true);
        setModalType('create')
    }
    function handleUpdate(e) {
        e.preventDefault()
        setShowModal(true);
        setModalType('update')
        console.log(e.target.value);
        localStorage.setItem('id', JSON.stringify(e.target.value))
    }
    function handleDelete(e) {
        e.preventDefault()
        if(e.target.value) {
            dispatch(deletePlan(e.target.value))
        }
    }
    useEffect(() => {
        if(userDetails.message === 'plan Deleted successfully') {
            setModalType('deleted')
            setShowModal(true)
        }
     }, [userDetails, isVerified])
     useEffect(() => {
        if(userDetails.message === 'plan Updated successfully') {
            setModalType('updated')
            setShowModal(true)
        }
     }, [userDetails, isVerified])
     useEffect(() => {
        if(userDetails.message === 'plan created successfully') {
            setModalType('success')
            setShowModal(true)
        }
     }, [userDetails, isVerified])
  return (
    <div>
        <div className={styles.topContainer}>
        <div className={styles.container}>
            <h1>Create Plan</h1>
            <button onClick={handleCreate}>Create</button>
        </div>
        </div>
        <div className={styles.bottomContainer}>
                <div className={styles.tableTop}>
                    <h2>Plans</h2>
                </div>
                <div className={styles.tableCont}>
                    <div className={styles.tableHeader}>
                        <div>S/N</div>
                        <div>Plan Name</div>
                        <div>ROI</div>
                        <div>Duration</div>
                        <div>Min Amount</div>
                        <div>Max Amount</div>
                        <div>Update</div>
                        <div>Delete</div>
                    </div>
                    { empty === 'No Plans' && (<div>You have no Deposit Request</div>) }
                    { plan && (
                        plan.map((row, index) => {
                            return (
                            <div className={styles.tableRow} key={index}>
                                <div>{index + 1}</div>
                                <div>{row.plan_name}</div>
                                <div>{row.roi}</div>
                                <div>{row.duration}</div>
                                <div>{row.min_amount}</div>
                                <div>{row.max_amount}</div>
                                <div className={styles.update} onClick={handleUpdate}><button value={row.id}>Update</button> </div>
                                <div className={styles.delete}><button onClick={handleDelete} value={row.id}>Delete</button> </div>
                            </div>
                            )
                        }))
                    }
                </div>
            </div>
        {
             showModal && (
                    <Modal setShowModal={setShowModal} Component={
                        modalType === 'create' ? CreatePlan : modalType === 'update' ? UpdatePlan : modalType === 'success' ? Created : modalType === 'updated' ? Updated : modalType === 'deleted' ? Deleted : null
                    }/>
                )  
                
            }    
    </div>
  )
}
const CreatePlan = ({setShowModal}) => {
    const isLoading = useSelector(state => state.user.loading)
    const dispatch = useDispatch();
    const [state, setState] = useState({
        name: '',
        roi: '',
        duration: '',
        minimum: '',
        maximum: ''
    });
    function handleCreate(e) {
        e.preventDefault();
        if(state.name && state.roi && state.duration && state.minimum && state.maximum) {
            const formDetails = new FormData()
            formDetails.append('plan_name', state.name)
            formDetails.append('roi', state.roi)
            formDetails.append('duration', state.duration)
            formDetails.append('min_amount', state.minimum)
            formDetails.append('max_amount', state.maximum)
            dispatch(createPlan(formDetails))
        }
    }
    return (
        <div className={styles.container}>
            {isLoading && <Loader />}
            <button onClick={() => setShowModal(false)} className={styles.cancel}>
                <img src={cancel} alt="" />
            </button>
            <form onSubmit={handleCreate}>
                <h2>Create Plan</h2>
                <div className={styles.inputContainer}>
                    <label htmlFor=""> Plan Name</label>
                    <input type='text' id="name"
                    value={state.name} required
                    onChange={(e) => setState((prevState) => ({...prevState, name: e.target.value}))}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="">Return On Investment</label>
                    <div className={styles.customInput}>
                        <input type="number" id="roi"
                        value={state.roi} 
                        onChange={(e) => setState((prevState) => ({...prevState, roi: e.target.value}))} required 
                        />
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="">Plan Duration</label>
                    <div className={styles.customInput}>
                        <input type="number" id="duration"
                        value={state.duration} 
                        onChange={(e) => setState((prevState) => ({...prevState, duration: e.target.value}))} required 
                        />
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="">Plan Minimum Amount</label>
                    <div className={styles.customInput}>
                        <input type="number" id="minimum"
                        value={state.minimum} 
                        onChange={(e) => setState((prevState) => ({...prevState, minimum: e.target.value}))} required 
                        />
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="">Plan Maximum Amount</label>
                    <div className={styles.customInput}>
                        <input type="number" id="maximum"
                        value={state.maximum} 
                        onChange={(e) => setState((prevState) => ({...prevState, maximum: e.target.value}))} required 
                        />
                    </div>
                </div>
                <div className={styles.buttonCont}>
                    <button type="submit">Create</button>
                </div>
            </form>
        </div>
        
    )
}
const UpdatePlan = ({setShowModal}) => {
    const isLoading = useSelector(state => state.user.loading)
    const dispatch = useDispatch();
    const [state, setState] = useState({
        plan_name: '',
        roi: '',
        duration: '',
        min_amount: '',
        max_amount: ''
    });
    function handleSubmit(e) {
        e.preventDefault();
        if(state.plan_name && state.roi && state.duration && state.min_amount && state.max_amount) {
            // const formDetails = new FormData()
            // formDetails.append('plan_name', state.name)
            // formDetails.append('roi', state.roi)
            // formDetails.append('duration', state.duration)
            // formDetails.append('min_amount', state.minimum)
            // formDetails.append('max_amount', state.maximum)
            dispatch(updatePlan(state))
        }
    }
    return (
        <div className={styles.container}>
            {isLoading && <Loader />}
            <button onClick={() => setShowModal(false)} className={styles.cancel}>
                <img src={cancel} alt="" />
            </button>
            <form onSubmit={handleSubmit}>
                <h2>Update Plan</h2>
                <div className={styles.inputContainer}>
                    <label htmlFor=""> Plan Name</label>
                    <input type='text' id="name"
                    value={state.name} required
                    onChange={(e) => setState((prevState) => ({...prevState, plan_name: e.target.value}))}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="">Return On Investment</label>
                    <div className={styles.customInput}>
                        <input type="number" id="roi"
                        value={state.roi} 
                        onChange={(e) => setState((prevState) => ({...prevState, roi: e.target.value}))} required 
                        />
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="">Plan Duration</label>
                    <div className={styles.customInput}>
                        <input type="number" id="duration"
                        value={state.duration} 
                        onChange={(e) => setState((prevState) => ({...prevState, duration: e.target.value}))} required 
                        />
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="">Plan Minimum Amount</label>
                    <div className={styles.customInput}>
                        <input type="number" id="minimum"
                        value={state.minimum} 
                        onChange={(e) => setState((prevState) => ({...prevState, min_amount: e.target.value}))} required 
                        />
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="">Plan Maximum Amount</label>
                    <div className={styles.customInput}>
                        <input type="number" id="maximum"
                        value={state.maximum} 
                        onChange={(e) => setState((prevState) => ({...prevState, max_amount: e.target.value}))} required 
                        />
                    </div>
                </div>
                <div className={styles.buttonCont}>
                    <button type="submit" >Update</button>
                </div>
            </form>
        </div>
        
    )
}

const Created = ({setShowModal}) => {
    function handleClear() {
        setShowModal(false)
    }
    return (
        <div className={style.container}>
           <img src={successImage} alt="" />
           <h3>Successful</h3> 
           <p>Plan Created</p>
           <button onClick={handleClear}>Continue</button>
        </div>
    )
}
const Updated = ({setShowModal}) => {
    function handleClear() {
        setShowModal(false)
    }
    return (
        <div className={style.container}>
           <img src={successImage} alt="" />
           <h3>Successful</h3> 
           <p>Plan Updated</p>
           <button onClick={handleClear}>Continue</button>
        </div>
    )
}
const Deleted = ({setShowModal}) => {
    function handleClear() {
        setShowModal(false)
    }
    return (
        <div className={style.container}>
           <img src={successImage} alt="" />
           <h3>Successful</h3> 
           <p>Plan Deleted</p>
           <button onClick={handleClear}>Continue</button>
        </div>
    )
}