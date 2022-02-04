import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import styles from '../styles/Nav.module.scss'

const Nav = () => {
    return (
        <div className={ styles.appHeader }>
            <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-light bg-white">

                    <router-link to="/" className="nav-link">
                        <img src={logo} className={ styles.brandLogo } alt="" />
                    </router-link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mt-2">
                                <Link to='/'>Home</Link>
                            </li>
                            <li className="nav-item mt-2">
                                <Link to='/about'>About</Link>
                            </li>
                            <li className="nav-item mt-2">
                                <Link to='/plans'>Plans</Link>
                            </li>
                            <li className="nav-item mt-2">
                                <Link to='/blogs'>Blogs</Link>
                            </li>
                            <li className="nav-item mt-2">
                                <Link to='/contact'>Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link p-0">
                                    <button className={ styles.registerButton }>Register / Login</button>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin-login" className="nav-link p-0">
                                    <button className={ styles.adminButton }>Admin Login</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav
