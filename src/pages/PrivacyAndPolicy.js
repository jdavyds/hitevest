import React from 'react';
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import style from '../styles/PrivacyAndPolicy.module.scss';

// Import Assets
import EL1 from '../assets/EL1.png';
import PrivacyImage from '../assets/privacy_image.png';
import Shadow from '../assets/shadow.png';

const PrivacyAndPolicy = () => {
    const user = useSelector(state => state.user.userDetails);

    if (user) {
        return <Navigate to='/dashboard'/>;
    }

    return (
        <div>
            <Helmet>
                <meta charSet='utf-8' />
                <meta name='description' content='Elite Wealth Management With hitevest finance.' />
                <title>Hitevest Finance | privacy & Policy</title>
                <link rel="canonical" href="https://www.hitevest.com/privacy_and_policy" />
            </Helmet>

            <Nav />
            
            {/* ==== Privacy And Policy Section ==== */}
            <section className={ style.pAndpSection }>
                <img src={Shadow} alt="" className={ style.shadowImage } />
                <div className={ style.pAndpWrapper }>
                    <h1 className={ style.pAndpText }>PRIVACY & <br /> POLICY</h1>
                    <div className={ style.imageWrapper }>
                        <img src={EL1} alt="" />
                        <img src={PrivacyImage} alt="" />
                    </div>
                </div>
            </section>
            
            {/* ==== Privacy And Policy Contect Section ==== */}
            <section className={ style.pAndpContentSection }>
                <h4>Privacy Policy</h4>
                <p>
                    Read the details as to how Hitevest Financial collect and process data, including your personal information.
                </p>
                <br />

                <h4>Overview</h4>
                <p>
                    Hitevest Financial is committed to keeping your information private. 
                    By ‘your information’, we mean any information about you, provided either 
                    by you or a third party.
                </p>
                <br />
                <p>
                    It sets out the categories of personal information we may collect from you as 
                    you use the website, as well as how we process that personal information.
                </p>
                <br />
                <p>
                    If you have any questions about this policy, or do not agree with it, 
                    please contact us before using the website.
                </p>
                <br />
                <p>
                    By using any part of the website, or providing personal information to Hitevest Financial, 
                    you consent to us processing your personal information as set out in this policy.
                </p>
                <br />

                <h4>General principles</h4>
                <p>
                    If you are an individual or corporate client of Hitevest Financial, 
                    the way in which information about you is held and used is described 
                    in section 4 of our terms and conditions, and our privacy notices, which 
                    can be accessed via our terms and conditions page.
                </p>
                <br />
                <p>
                    In general, you can use this website without giving us any information. 
                    Any domain name information that we collect is not used to personally identify 
                    you, but instead is aggregated to measure the number of visits, average time 
                    spent on the website and pages viewed. We use this information to measure the 
                    use of our website and to improve its contents.
                </p>
                <br />
                <p>
                    If you register to use our online wealth services and/investment services, we will 
                    ask you to provide some information about yourself for security, identification 
                    and verification purposes.
                </p>
                <br />
                <p>
                    When completing any online forms, your information will be used in relation to the product 
                    or service you’re applying for, within the form and in any associated terms and conditions.
                </p>
                <br />
                <p>
                    Where you provide information about others (for example, for events, joint accounts or if 
                    you are recommending someone to become a client), you must ensure that you have their consent, 
                    or are otherwise entitled, to provide their information to us.
                </p>
                <br />
                <p>
                    We will retain the information collected online about you for as long as is permitted for 
                    legitimate business and regulatory purposes, or to better serve you as a client.
                </p>
                <br />
                
                <h4>Information we collect automatically</h4>
                <p>
                    Whenever you use the website, we automatically receive and record information from your browser 
                    or mobile device, including your location, IP address, cookie information, and the page(s) you requested.
                </p>
                <br />
                <p>
                    We treat this data as non-personal information, except where we are compelled to do otherwise by 
                    law or a legal authority.
                </p>
                <br />
                <p>
                    We only use this data in aggregate and anonymously, and we may provide this aggregate information 
                    to our marketing service providers as to how our clients, collectively, use the website to enable 
                    better and more efficient functionality.
                </p>
                <br />
                
                <h4>Forms, email requests and surveys</h4>
                <p>
                    In completing any of the forms on the website, we will only process the information so as to respond to 
                    your request, and we will only send you educational or marketing messages where you have given consent.
                </p>
                <br />
                <p>
                    You can ask us to send you updates by post, telephone or email, or any combination of these at any time, and 
                    you can change your mind at any time to stop receiving any updates. You can do this by:
                </p>
                <br />
                <span>Replying directly to the message;</span> <br />
                <span>Clicking on the appropriate link in any email you receive; or</span> <br />
                <span>Contacting us on info@firstgropfinancial.com</span> <br />
                <span>
                    If you choose to unsubscribe, we will stop sending you those communications within a reasonable time scale. 
                    We may still, however, need to contact you for legitimate business or regulatory purposes.
                </span> <br />
                <p>
                    It is also important to be aware that we also collect information using surveys. These are typically 
                    used to understand how Hitevest Financial can improve its products and services, and we will always 
                    undertake to provide an overview of aggregated and anonymised responses to participants within a reasonable 
                    period of time. We may also use the information for promotional purposes. Please note that we would never 
                    publish any feedback or information in such a way that it could be linked to an individual or entity without 
                    express permission.
                </p>
                <br />
                
                <h4>Information You Disclose Publicly or To Others</h4>
                <p>
                    This Site may permit you to post or submit User-Generated Content (“UGC”) including, without limitation, written 
                    content, files, user profiles, or other content, including personal information. If you choose to submit UGC to 
                    any public area on the Site, your UGC will be considered “public” and will be accessible by anyone. Notwithstanding 
                    anything to the contrary, unless otherwise explicitly agreed by us, personal information included in the UCG is not 
                    subject to usage and sharing limitations, or other obligations, under this Website Privacy Policy or otherwise, and 
                    may be used and shared with third parties to the fullest extent permitted by applicable law. We encourage you to 
                    exercise caution when making decisions about what you disclose in such public areas.
                </p>
                <br />
                <p>
                    Additionally, the Site may offer you the option to send a communication to a contact. If so, we rely on you to only send 
                    such communication to people that have given you permission to do so. The recipient’s personal information you provide 
                    (e.g., name, e-mail address) will be used to facilitate communication. Your contact information and message may be included 
                    in the communication.
                </p>
                <br />
                
                <h4>Changes</h4>
                <p>
                    We may modify or supplement this Website Privacy Policy from time to time because we may change our offering and/or data handling 
                    practices, or because new laws have been enacted. If we make any material changes to this Website Privacy Policy, we will post 
                    the updated Website Privacy Policy here, along with its effective date, and notify users as required by applicable law. You should 
                    review this page regularly to look for changes in this Website Privacy Policy.
                </p>
                <br />
                <p>
                    Your continued use of this Site after we have posted changes to this Website Privacy Policy on this page with a new effective date will 
                    indicate that you agree to be bound by such changes. If any change to this Website Privacy Policy is unacceptable to you, please 
                    discontinue your use of the Site.
                </p>
                <br />
                
            </section>

            <Footer />
        </div>
    )
}

export default PrivacyAndPolicy
