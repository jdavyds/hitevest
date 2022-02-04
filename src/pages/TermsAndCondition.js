import React from 'react';
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import style from '../styles/TermsAndCondition.module.scss';

// Import Assets
import EL1 from '../assets/EL1.png';
import ContactImage from '../assets/femal_hand_with_phone.png';
import Shadow from '../assets/shadow.png';

const TermsAndCondition = () => {
    const user = useSelector(state => state.user.userDetails);

    if (user) {
        return <Navigate to='/dashboard'/>;
    }

    return (
        <div>
            <Helmet>
                <meta charSet='utf-8' />
                <meta name='description' content='Elite Wealth Management With hitevest finance.' />
                <title>Hitevest Finance | Terms & Condition</title>
                <link rel="canonical" href="https://www.hitevest.com/terms_and_condition" />
            </Helmet>

            <Nav />
            
            {/* ==== Contact Section ==== */}
            <section className={ style.tAndcSection }>
                <img src={Shadow} alt="" className={ style.shadowImage } />
                <div className={ style.tAndcWrapper }>
                    <h1 className={ style.tAndcText }>TERMS & <br /> CONDITION</h1>
                    <div className={ style.imageWrapper }>
                        <img src={EL1} alt="" />
                        <img src={ContactImage} alt="" />
                    </div>
                </div>
            </section>

            {/* ==== Privacy And Policy Contect Section ==== */}
            <section className={ style.tAndcContentSection }>
                <h4>Terms and Conditions</h4>
                <p>
                    Please read these terms and conditions carefully. By accessing this web site and any pages 
                    hereof, you are indicating that you have read, acknowledge and agree to be bound by these 
                    Terms of Use. If you do not agree to these Terms of Use, do not access this web site. 
                    Hitevest Financial reserves the right to change these Terms of Use which you are 
                    responsible for regularly reviewing and your continued use of this web site constitutes 
                    agreement to all such changes.
                </p>
                <br />

                <h4>General Information</h4>
                <p>
                    Certain sections of or pages on this web site may contain separate terms and conditions, 
                    which are in addition to these Terms of Use. You should read those additional terms and 
                    conditions carefully. By accessing such sections or pages, you agree to be bound by those 
                    additional terms and conditions. In the event of a conflict, those additional terms and 
                    conditions will govern your use of those sections or pages.
                </p>
                <br />
                <p>
                    Hitevest Financial reserves the right, in its sole discretion, without any obligation and 
                    without any notice requirement, to change, improve or correct the information, materials and 
                    descriptions on this web site and to suspend and/or deny access to this web site for scheduled 
                    or unscheduled maintenance, upgrades, improvements or corrections. The information and 
                    materials on this web site may contain typographical errors or inaccuracies. Any dated 
                    information is published as of its date only, and Hitevest Financial does not undertake 
                    any obligation or responsibility to update or amend any such information. Hitevest 
                    Financial may discontinue or change any product or service described in or offered on this 
                    web site at any time.
                </p>
                <br />

                <h4>Choice Of Law</h4>
                <p>
                    These Terms of Use shall be governed by and construed in accordance with the laws of the state 
                    of New York, without regard to conflicts of laws provisions. Sole and exclusive jurisdiction 
                    for any action or proceeding arising out of or related to these Terms of Use shall be in an 
                    appropriate state or federal court located in the County of New York, State of New York and 
                    the parties unconditionally waive their respective rights to a jury trial. Any cause of action 
                    you may have with respect to your use of this web site must be commenced within one (1) year 
                    after the claim or cause of action arises. If for any reason a court of competent jurisdiction 
                    finds any provision of these Terms of Use, or a portion thereof, to be unenforceable, that 
                    provision shall be enforced to the maximum extent permissible so as to affect the intent of 
                    these Terms of Use, and the remainder of these Terms of Use shall continue in full force and 
                    effect. These Terms of Use constitutes the entire agreement between Hitevest Financial and 
                    you with respect to this site and it supersedes all prior or contemporaneous communications, 
                    agreements and understandings between Hitevest Financial and you with respect to the 
                    subject matter hereof. Hitevest Financial  and you acknowledge and agree that unless 
                    expressly included in any other agreement between Hitevest Financial and you the 
                    requirements of the E-Commerce Directive (00/31/EC) as implemented are excluded to the fullest 
                    extent permissible by law. A printed version of these Terms of Use shall be admissible in 
                    judicial or administrative proceedings.
                </p>
                <br />

                <h4>SPIC disclosure</h4>
                <p>
                    Securities and cash held by individuals in Hitevest Financial & Co. accounts are protected 
                    up to their full net equity value by a combination of coverage provided by the Securities 
                    Investor Protection Corporation (SIPC), a non-profit organization created by an Act of Congress 
                    and additional protection purchased from a group captive insurance company by Hitevest 
                    Financial ("excess coverage"). SIPC protects up to $500,000 of your securities, of which up to 
                    $250,000 may be un-invested cash. Excess Coverage provides additional protection up to the full 
                    net equity value of each account including unlimited coverage for un-invested cash. SIPC and 
                    excess coverage apply only to securities and cash in the exclusive possession and control of 
                    Hitevest Financial and do not protect against losses due to fluctuations in the market. 
                    Additional information about SIPC and asset protection may also be found at www.sipc.org.  
                    name, e-mail address) will be used to facilitate communication. Your contact information and 
                    message may be included in the communication.
                </p>
                
            </section>

            <Footer />
            
        </div>
    )
}

export default TermsAndCondition
