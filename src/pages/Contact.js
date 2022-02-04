import React from 'react';
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import style from '../styles/Contact.module.scss';

// Import Assets
import EL1 from '../assets/EL1.png';
import ContactImage from '../assets/femal_hand_with_phone.png';
import Shadow from '../assets/shadow.png';
import C1 from '../assets/C1.svg'
import C2 from '../assets/C2.svg'
import C3 from '../assets/C3.svg'

const Contact = () => {
    const user = useSelector(state => state.user.userDetails);

    if (user) {
        return <Navigate to='/dashboard'/>;
    }

    return (
        <div>
            <Helmet>
                <meta charSet='utf-8' />
                <meta name='description' content='Elite Wealth Management With hitevest finance.' />
                <title>Hitevest Finance | Contact</title>
                <link rel="canonical" href="https://www.hitevest.com/contact" />
            </Helmet>

            <Nav />
            
            {/* ==== Contact Section ==== */}
            <section className={ style.contactSection }>
                <img src={Shadow} alt="" className={ style.shadowImage } />
                <div className={ style.contactWrapper }>
                    <h1 className={ style.contactText }>CONTACT US</h1>
                    <div className={ style.imageWrapper }>
                        <img src={EL1} alt="" />
                        <img src={ContactImage} alt="" />
                    </div>
                </div>
            </section>
            
            {/* ==== Contact Form Section ==== */}
            <section className={ style.contactFormWrapper }>
                <div className={ style.leftAsideWrapper }>
                    <p>
                        If you have any questions or queries that are not answered on our website, 
                        please feel free to contact us. We will try to respond to you as soon as 
                        possible. Thank you so much.
                    </p>

                    <ul>
                        <li><img src={C1} alt="" /> 4th Floor, Technopolis Gårda , Johan Willins gata, Sweden</li>
                        <li><img src={C2} alt="" />+46 310897357</li>
                        <li><img src={C3} alt="" />Info@hitevest.com</li>
                    </ul>
                </div>


                <div className={ style.rightAsideWrapper }>
                    <form>
                        <h4>Send A Message</h4>

                        <div className={ style.formData }>
                            <label>Full Name</label>
                            <input type="text" />
                        </div>
                        <div className={ style.formData }>
                            <label>Email</label>
                            <input type="email" />
                        </div>
                        <div className={ style.formData }>
                            <label>Phone Number</label>
                            <input type="phone" />
                        </div>
                        <div className={ style.formData }>
                            <label>Phone Number</label>
                            <textarea />
                        </div>

                        <button className={ style.submitButton }>SUBMIT</button>
                    </form>
                </div>
            </section>

            <Footer />
            
        </div>
    )
}

export default Contact
