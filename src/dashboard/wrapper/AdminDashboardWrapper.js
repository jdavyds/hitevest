import React from 'react'
import { Route, Routes } from 'react-router';
import Nav from '../../components/adminDashboard/Nav';
import Sidebar from '../../components/adminDashboard/Sidebar';
import dashboardPages from '../adminUtils/dashboardPages';
import styles from '../../styles/dashboard/Dashboard.module.css'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

const DashboardWrapper = () => {
    const user = useSelector(state => state.user.userDetails)
    return (
        <>
         <Routes>
           {
            dashboardPages.map((value)=> {
             return (
                <Route
                    path={value.path}
                    element={
                        <section className={styles.mainContainer}>
                           {!user && <Navigate to='/' />}
                            <div className={styles.leftContainer}>
                               <Sidebar /> 
                            </div>
                            <div className={styles.rightContainer}>
                                <Nav />
                                <value.component />
                            </div>
                        </section>
                    }
                />
             )  
            })
            }
        </Routes>
        </>
    )
}

export default DashboardWrapper
