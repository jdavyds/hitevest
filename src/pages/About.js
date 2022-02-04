import React from 'react';
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import style from '../styles/About.module.scss';

// Import Assets
import EL1 from '../assets/EL1.png';
import PC_Man from '../assets/pc_man.png';
import Shadow from '../assets/shadow.png';
import DP2 from '../assets/DP2.svg';
import CircleRing from '../assets/circle_ring.png';
import Goal from '../assets/goal.png';
import Organized from '../assets/organized.png';
import Strategy from '../assets/strategy.png';
import ComferenceRoom from '../assets/comference_room.png';
import ReceptionistRoom from '../assets/receptionist_room.png';
import RobertHenry from '../assets/robet_henry.png';
import JefferyFelix from '../assets/jeffery_felix.png';





const About = () => {
    const user = useSelector(state => state.user.userDetails);

    if (user) {
        return <Navigate to='/dashboard'/>;
    }

    return (
        <div>
            <Helmet>
                <meta charSet='utf-8' />
                <meta name='description' content='Elite Wealth Management With hitevest finance.' />
                <title>Hitevest Finance | About</title>
                <link rel="canonical" href="https://www.hitevest.com/about" />
            </Helmet>
            
            <Nav />
            
            {/* ==== About Top Section ==== */}
            <section className={ style.aboutTopSection }>
                <img src={Shadow} alt="" className={ style.shadowImage } />
                <div className={ style.topAboutWrapper }>
                    <h1 className={ style.aboutUsText }>ABOUT US</h1>
                    <div className={ style.imageWrapper }>
                        <img src={EL1} alt="" />
                        <img src={PC_Man} alt="" />
                    </div>
                </div>
            </section>

            {/* ==== About Bottom Section ==== */}
            <section className={ style.aboutBottomSection }>
                <div>
                    <img src={DP2} alt="" className={ style.triangleImage } />
                </div>
                <div className={ style.bottomAboutWrapper }>
                    <img src={CircleRing} alt="" className={ style.circleRingImage } />

                    <div className={ style.articleWrapper }>
                        <h1>About Us</h1>
                        <p>
                            Perhaps you’ve been considering hiring a financial planner for some time, but you’re not sure what to expect from the process or how it all works
                        </p>
                        <p>
                            You can use this high-level overview to get a feel for the steps we'll take together in our financial planning program.<br />
                            The financial planning process at its core is all about enabling you to make smarter decisions that will grow and protect your wealth over time.<br />
                            The process is also designed to reduce the amount of time you spend second-guessing your decisions or stressing about money so you can use this 
                            time with friends and family or pursuing your passions.<br />
                        </p>
                        <p>
                            Whatever your motivation for investing your money, you’ll want to know it’s being managed by people who will always put your needs first. 
                            From young entrepreneurs to active retirees enjoying the rewards of a lifetime's work, we’re helping people invest their money at every 
                            stage of life and for every conceivable goal or need.
                        </p>
                        <br />
                        <p>
                        Hitevest Financial Limited is the Swedish and pan-European brokerage division of Hitevest Financial Limited. Hitevest Financial provides 
                            investment services to institutions, corporations and ultra-high net worth individuals globally across equities, fixed income, commodities, futures, 
                            options, derivatives, foreign currency and corporate finance.
                        </p>
                        <br />
                        <p>
                            We are a highly experienced multi-asset agency execution provider for the world’s most dynamic and innovative investors. Our equities business is 
                            focused on the generation and protection of Alpha, whilst delivering outstanding customer service, technology and best execution solutions. We 
                            reach the most established and emerging markets world-wide. Our team of experienced sales and trading professionals provide global coverage 
                            offering sales and execution services without the “one size fits all” approach.
                        </p>
                        <br />
                        <p>
                            Our established European Fixed Income business provides sales and trading capabilities for institutional investors located in EMEA and beyond- across 
                            Emerging Markets, Government Bonds, Corporate Bonds, High Yield Debt, Distressed Debt and Convertible Bonds. Our focus on providing round-the-clock 
                            access to global markets enables our clients to source liquidity all over the world, efficiently and anonymously.
                        </p>
                        <br />
                        <p>
                        Hitevest Financial provides access to the full array of the global foreign currency markets on its platform. Our experienced support team help our 
                            customers minimise market impact while also maximising the speed and efficiency of transactions. Our Forex Desk provides a full suite of services for 
                            institutional clients, including execution, clearing and custody arrangements.
                        </p>
                        <br />
                        <p>
                            Our Futures Team offers competitively-priced brokerage and immediate allocation for both institutional and individual clients. Our trading desk is staffed by professional traders with the experience to trade efficiently, even when the markets are at their most volatile Britannia helps individual and institutional clients to trade and hedge efficiently even in the most challenging conditions to balance and offset their exposure.
                        </p>
                    </div>
                </div>
            </section>

            {/* ==== First Group Financial ==== */}
            <section className={ style.firstGroupFinancial }>
                <div className={ style.firstGroupLeftAside }>
                    <h1>How Hitesvest  <br />Finance Works</h1>
                    <p>
                    Hitevest Finance is a leading broker and consultant providing specialized investment services, 
                        corporate benefits, retirement and individual solutions. We enable client success through the 
                        expertise of our professionals across the globe, investments in innovative technologies, and 
                        enduring relationships with highly rated insurers, vendors and financial institutions. Learn more 
                        about who we are and key elements of our organization.
                    </p>

                    <div className={ style.imageSpanWrapper }>
                        <img src={Goal} alt='' />
                        <span>Plan your goals</span>
                    </div>
                    <div className={ style.imageSpanWrapper }>
                        <img src={Organized} alt='' />
                        <span>Get organized</span>
                    </div>
                    <div className={ style.imageSpanWrapper }>
                        <img src={Strategy} alt='' />
                        <span>Execute your personalized strategy</span>
                    </div>
                </div>
                <div className={ style.firstGroupRighttAside }>
                    <img src={ComferenceRoom} alt='' />
                    <img src={ReceptionistRoom} alt='' />
                </div>
            </section>

            {/* ==== Our Experts Team Members ==== */}
            <section className={ style.expertTeamMembers }>
                <h1>Our Experts Team Members</h1>
                <p>
                    Meet Our expert specialists who bring their experience and insights to help<br />
                    make your life easier.
                </p>

                <div className={style.expertImageWrapper}>
                    <div className={ style.imageTitleWrapper }>
                        <img src={ RobertHenry } alt="" />
                        <div className={ style.titleWrapper }>
                            <strong>Robert Henry John</strong>
                            <small>Investment Advisor</small>
                        </div>
                    </div>
                    <div className={ style.imageTitleWrapper }>
                        <img src={ JefferyFelix } alt="" />
                        <div className={ style.titleWrapper }>
                            <strong>Jeffery J Felix</strong>
                            <small>Chief Investment Officer</small>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default About
