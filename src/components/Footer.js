import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo3.svg'
import C1 from '../assets/C1.svg'
import C2 from '../assets/C2.svg'
import C3 from '../assets/C3.svg'
import C4 from '../assets/C4.svg'
import C5 from '../assets/C5.svg'
import C6 from '../assets/C6.svg'
import styles from '../styles/Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footerCont}>
            <div className={styles.topFooter}>
                <div>
                    <img src={logo} alt="" />
                    <ul>
                        <li><img src={C1} alt="" /> 4th Floor, Technopolis Gårda , Johan Willins gata, Sweden</li>
                        <li><img src={C2} alt="" />+46 310897357</li>
                        <li><img src={C3} alt="" />Info@hitevest.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Useful Link</h3>
                    <ul>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/plans">Plan</Link></li>
                    <li><Link to="/blogs">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/privacy_and_policy">Privacy &amp; Policy</Link></li>
                    <li><Link to="/terms_and_condition">Terms &amp; Conditions</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Follow Us On</h3>
                    <div className={styles.socialIcons}>
                        <span><img src={C4} alt="" /></span>
                        <span><img src={C5} alt="" /></span>
                        <span><img src={C6} alt="" /></span>
                    </div>
                </div>
            </div>
            <div className={styles.bottomFooter}>
                <p>COPYRIGHT © 2021. Hitevest Finance. ALL RIGHTS RESERVED</p>
            </div>
        </footer>
    )
}

export default Footer
