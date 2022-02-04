import React from 'react'
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import style from '../styles/Plans.module.scss';

// Import Assets
import EL1 from '../assets/EL1.png';
import PlansImage from '../assets/plans_image.png';
import Shadow from '../assets/shadow.png';
import LightBulb from '../assets/light_bulb.png';
import Diamond from '../assets/diamond.png';
import ThickedRadioButton from '../assets/thcked_radio_button.png';




const Plans = () => {
    const user = useSelector(state => state.user.userDetails);

    if (user) {
        return <Navigate to='/dashboard'/>;
    }

    return (
        <div>
            <Helmet>
                <meta charSet='utf-8' />
                <meta name='description' content='Elite Wealth Management With hitevest finance.' />
                <title>Hitevest Finance | Plans</title>
                <link rel="canonical" href="https://www.hitevest.com/plans" />
            </Helmet>
        
            <Nav />
            
            {/* ==== Plans Section ==== */}
            <section className={ style.plansSection }>
                <img src={Shadow} alt="" className={ style.shadowImage } />
                <div className={ style.plansWrapper }>
                    <h1 className={ style.plansText }>OUR PLANS</h1>
                    <div className={ style.imageWrapper }>
                        <img src={EL1} alt="" />
                        <img src={PlansImage} alt="" />
                    </div>
                </div>
            </section>
            
            {/* ==== Plans Section ==== */}
            <section className={ style.investmentPlans }>
                <h1>Investment Plans</h1>
                <p>
                    To make a solid investment, you have to know where you<br />
                    are investing. Find a plan which is best for you.
                </p>

                <div className={style.planTypeWrapper}>
                    <div className={ style.singlePlanTypeWrapper }>
                        <img src={ LightBulb } alt="" />
                        <h1>Starter</h1>
                        <ul>
                            <li>
                                <img src={ ThickedRadioButton } alt='' />
                                <span>Return 20%</span>
                            </li>
                            <li>
                                <img src={ ThickedRadioButton } alt='' />
                                <span>Every Month</span>
                            </li>
                            <li>
                                <img src={ ThickedRadioButton } alt='' />
                                <span>For 12 Month</span>
                            </li>
                            <li>
                                <img src={ ThickedRadioButton } alt='' />
                                <span>Total 240% +</span>
                            </li>
                            <li>
                                <img src={ ThickedRadioButton } alt='' />
                                <span>$1000 - $19999</span>
                            </li>
                        </ul>

                        <button className={ style.bookNowButton }>BOOK NOW</button>
                    </div>
                    <div className={ style.singlePlanTypeWrapper }>
                        <img src={ Diamond } alt="" />
                        <h1>Enterprise</h1>
                        <ul>
                            <li>
                                <img src={ ThickedRadioButton } alt='' />
                                <span>Return 40%</span>
                            </li>
                            <li>
                                <img src={ ThickedRadioButton } alt='' />
                                <span>Every Month</span>
                            </li>
                            <li>
                                <img src={ ThickedRadioButton } alt='' />
                                <span>For 12 Month</span>
                            </li>
                            <li>
                                <img src={ ThickedRadioButton } alt='' />
                                <span>Total 480% + </span>
                            </li>
                            <li>
                                <img src={ ThickedRadioButton } alt='' />
                                <span>$20000 - $1000000</span>
                            </li>
                        </ul>

                        <button className={ style.bookNowButton }>BOOK NOW</button>
                    </div>
                </div>
            </section>

            <Footer />
            
        </div>
    )
}

export default Plans
