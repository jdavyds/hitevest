import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from '../components/Nav';
import { Navigate } from 'react-router';
import { Helmet } from 'react-helmet';

import styles from '../styles/Landing.module.scss';
import OfferComp from '../components/OfferComp';
import Qna from '../components/Qna';
import Footer from '../components/Footer';

//  Import assets.
import LD1 from '../assets/LD1.png'
import AR1 from '../assets/AR1.svg'
import EL1 from '../assets/EL1.png'
import BI2 from '../assets/BI2.svg'
import DC2 from '../assets/DC2.svg'
import DD2 from '../assets/DD2.svg'
import DP2 from '../assets/DP2.svg'
import DP3 from '../assets/DP3.svg'
import IM2 from '../assets/IM2.png'
import S2 from '../assets/S2.png'
import L1 from '../assets/l1.png';
import L2 from '../assets/l2.png';
import L3 from '../assets/l3.png';
import L4 from '../assets/l4.png';
import L5 from '../assets/l5.png';
import L6 from '../assets/l6.png';
import L7 from '../assets/l7.png';
import L8 from '../assets/l8.png';
import L9 from '../assets/l9.png';
import Remark from '../components/Remark';
import ArrowLeft from '../assets/arrow_left.png';
import ArrowRight from '../assets/arrow_right.png';
import WhiteCircleRing from '../assets/white_circle_ring.png';
import Blog1 from '../assets/blog1_image.png';
import Blog2 from '../assets/blog2_image.png';
import Blog3 from '../assets/blog3_image.png';
import reactDom from 'react-dom';


const Landing = () => {
    const user = useSelector(state => state.user.userDetails);

    const [state, setState] = useState({
        blogs: [
            {
                id: 1,
                image: Blog1,
                title: "American Airlines cancels flight attendants’ voluntary leaves, plans to hire 800 to meet travel demand",
                subTitle: "American Airlines has told the remaining 3,300 flight attendants on voluntary leave to come back by November or December and that it will start recruiting new cabin crew members, a...",
            },
            {
                id: 2,
                image: Blog2,
                title: "The internet outage that took down several major websites seems to be fixed",
                subTitle: "Several major websites briefly went down Thursday in a widespread outage linked to content distribution network Akamai.By about 12:50 p.m. ET, Akamai said it fixed the issue and th...",
            },
            {
                id: 3,
                image: Blog3,
                title: "It’s been 12 years since the last federal minimum wage increase. Where efforts to raise the pay rate stand",
                subTitle: "The coronavirus crisis has cast new attention on wages and income.It’s been 12 years since the last federal minimum wage increase, and whether a hike in minimum pay will get passed...",
            },
        ],
    });

    useEffect(() => {
        //  For Testimonial Sliding.
        const remarkItemsWrapper = document.querySelector(`.${ styles.remarkItemsWrapper }`);
        const remarkItems = document.querySelectorAll(`.${ styles.remarkItem }`);
        const prevButton = document.querySelector(`.${ styles.prevButton }`);
        const nextButton = document.querySelector(`.${ styles.nextButton }`);

        let counter = 0;

        //  Prev and Next Button Actions.
        prevButton.addEventListener('click', () => {
            if (counter <= 0) return;
            remarkItemsWrapper.style.transition = "transform 0.4s ease-in-out";
            counter = (counter - 1) % (remarkItems.length - 1);
            remarkItemsWrapper.style.transform = 'translateX(' + (-480 * counter) + 'px)';
        });
        nextButton.addEventListener('click', () => {
            if (counter >= 1) return;
            remarkItemsWrapper.style.transition = "transform 0.4s ease-in-out";
            counter = (counter + 1) % (remarkItems.length - 1);
            remarkItemsWrapper.style.transform = 'translateX(' + (-480 * counter) + 'px)';
        });
    });
    

    if(user) return <Navigate to='/dashboard'/>

    return (
        <div className='container-fluid'>
            <Helmet>
                <meta charSet='utf-8' />
                <meta name='description' content='Elite Wealth Management With hitevest finance.' />
                <title>Hitevest Finance | Home</title>
                <link rel="canonical" href="https://www.hitevest.com/" />
            </Helmet>
            
            <Nav />
            
            <section className='container'>
                <div className={styles.firstSection}> 
                    <article>
                        <h1>Elite Wealth <br />Management With <br />hitevest finance</h1>
                        <p>You might be the cautious inheritor that’s happy for your investments to 
                            keep pace with inflation, or someone who’s ambitiously seeking faster 
                            portfolio growth, whatever the case may be we've got you covered
                        </p>
                        <button>Read more</button>
                    </article>
                    <div className={styles.firstRight}>
                        {/* <div className={styles.noteCard}>
                            <span>Ongoing Investment</span>
                            <span>$30,000</span>
                        </div> */}
                        <div className={styles.firstImageCont}>
                            <img src={EL1} alt="" />
                            <img src={AR1} alt="" />
                            <img src={LD1} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            

            {/*==== About Us ====*/}
            <section className={styles.secondSection}>
                <div className={`container ${styles.secondSectionInnerWrapper}`}>
                    <div className={styles.secondImageCont}>
                        <img src={DD2} alt="" />
                        <img src={DC2} alt="" />
                        <img src={BI2} alt="" />
                        <img src={IM2} alt="" />
                    </div>
                    <article>
                        <h1>About Us</h1>
                        <p>Perhaps you’ve been considering hiring a financial planner for some time, but you’re not sure what to expect from the process or how it all works
                            You can use this high-level overview to get a feel for the steps we'll take together in our financial planning program.
                            The financial planning process at its core is all about enabling you to make smarter decisions that will grow and protect your wealth over time.
                            The process is also designed to reduce the amount of time you spend second-guessing your decisions or stressing about money so you can use this time with friends and family or pursuing your passions.
                        </p>
                        <button>Read more</button>
                    </article>
                </div>
                <img src={DP2} alt="" className={styles.absoluteP}/>
            </section>
            

            {/*==== Join Us ====*/}
            <section className={styles.thirdSection}>
                <div className={`container ${styles.thirdSectionInnerWrapper}`}>
                    <div className={styles.thirdSectionACont}>
                        <article>
                            <h1>Join Us</h1>
                            <p>Complex risks will always be part of life, and managing them well requires specialized expertise. Expertise that understands what you need to protect what you’ve built. Let Hitevest Financial take the worry out of protecting it all and help you build for the future.
                            </p>
                            <button>Get Started</button>
                        </article>
                    </div>
                    <div className={ styles.imageWrapper }>
                        <img src={S2} alt="" />
                    </div>
                </div>
                <img src={DP3} alt="" className={styles.thirdPoly} />
            </section>
            

            {/*==== What we offer ====*/}
            <section className={styles.fourthSection}>
                <div className='container p-0'>
                    <h1>What we offer</h1>
                    <div className={styles.fourthSecGrid}>
                        <OfferComp 
                            image={L1} 
                            heading='Legal Company' 
                            content='Our company conducts absolutely legal activities in the legal field. 
                            We are certified to operate investment business, we are legal and safe.'
                        />
                        <OfferComp 
                            image={L2} 
                            heading='High Reliability' 
                            content='We are trusted by a huge number of people. We are working hard 
                            constantly to improve the level of our security system and minimize possible risks.'
                        />
                        <OfferComp 
                            image={L3} 
                            heading='Quick Withdrawal' 
                            content='Our all retreats are treated spontaneously once requested. 
                            There are high maximum limits. The minimum withdrawal amount is only $10 .'
                        />
                        <OfferComp 
                            image={L4} 
                            heading='24/7 Support' 
                            content='We provide 24/7 customer support through e-mail and telegram. 
                            Our support representatives are periodically available to elucidate any difficulty.'
                        />
                        <OfferComp 
                            image={L5} 
                            heading='Referral Program' 
                            content='We are offering a certain level of referral income through our referral program. 
                            You can increase your income by simply refer a few people.'
                        />
                        <OfferComp 
                            image={L6} 
                            heading='Anonymity' 
                            content='Anonymity and using cryptocurrency as a payment instrument. 
                            In the era of electronic money – this is one of the most convenient ways of cooperation.'
                        />
                        <OfferComp 
                            image={L7} 
                            heading='Dedicated Server' 
                            content='We are using a dedicated server for the website which allows us exclusive 
                            use of the resources of the entire server.'
                        />
                        <OfferComp 
                            image={L8} 
                            heading='SSL Secured' 
                            content='Comodo Essential-SSL Security encryption confirms that the presented content 
                            is genuine and legitimate.'
                        />
                        <OfferComp 
                            image={L9} 
                            heading='DDOS Protection' 
                            content='We are using one of the most experienced, professional, and 
                            trusted DDoS Protection and mitigation provider.'
                        />
                    </div>
                </div>
            </section>


            {/*==== Frequently Asked Question ====*/}
            <section className={`container px-1 px-sm-2 ${ styles.fifthSection }`}>
                <h1>Frequently Asked Question</h1>
                <span className={styles.shortDash}></span>
                <p className={styles.lHeading}>
                    We answer some of your Frequently Asked Questions regarding <br />
                    our platform. If you have a query that is not answered here, <br />
                    Please contact us.
                </p>
                <Qna 
                    question="When can I deposit/withdraw from my Investment account?" 
                    answer="We answer some of your Frequently Asked Questions regarding our platform. If you have a query that is not answered here, Please contact us." 
                />
                <Qna 
                    question="how can I check my balance?" 
                    answer="We answer some of your Frequently Asked Questions regarding our platform. If you have a query that is not answered here, Please contact us." 
                />
                <Qna 
                    question="I forgot my password, what should I do?" 
                    answer="We answer some of your Frequently Asked Questions regarding our platform. If you have a query that is not answered here, Please contact us." 
                />
                <Qna 
                    question="How will I know that the withdrawal has been successful?" 
                    answer="We answer some of your Frequently Asked Questions regarding our platform. If you have a query that is not answered here, Please contact us." 
                />
                <Qna 
                    question="how much can i withdraw?" 
                    answer="We answer some of your Frequently Asked Questions regarding our platform. If you have a query that is not answered here, Please contact us." 
                />
            </section>


            {/*==== What Our Client Say ====*/}
            <section className={`container ${ styles.sixthSection }`}>
                <h1>What Our Client Say</h1>
                <div className={ styles.remarkItemsWrapper }>
                    <div className={ styles.remarkItem }>
                        <Remark
                            name="Nicoletta Piccio" 
                            starCount={5}
                            content="I have been investing with Hitevest Financial since late 2019, 
                            and my experience has been very positive. I am very pleased with the return 
                            and will continue to do so as part of my retirement income package."
                        />
                    </div>
                    <div className={ styles.remarkItem }>
                        <Remark
                            name="Rhoda White" 
                            starCount={4}
                            content="Hitevest Financial made me feel important and gave me the 
                            information i needed about investing at a level i could understand. The 
                            representatives always gave me sound advice, especially about the PAMM investment."
                        />
                    </div>
                    <div className={ styles.remarkItem }>
                        <Remark
                            name="Donald I" 
                            starCount={5}
                            content="Hitevest financial was great to work with. This was my first time doing 
                            this kind of investment, but they answered every question and walked me through the 
                            process as you would expect for a new investor."
                        />
                    </div>
                </div>

                <div className={ styles.arrowWrapper }>
                    <span className={ styles.prevButton }>
                        <img src={ ArrowLeft } alt="" />
                    </span>
                    <span className={ styles.nextButton }>
                        <img src={ ArrowRight } alt="" />
                    </span>
                </div>
                
            </section>


            {/*==== Subscribe to our Newsletter ====*/}
            <section className={`container p-0 ${ styles.seventhSection }`}>
                <div className={ styles.seventhSectionInnerWrapper }>
                    <h1>Subscribe to our Newsletter</h1>
                    <form>
                        <div className={ styles.inputAndButtonWrapper }>
                            <input type="text" />
                            <button>Subscribe</button>
                        </div>
                    </form>
                    <img src={ WhiteCircleRing } className={ styles.whiteCircleRing } alt="" />
                </div>
            </section>


            {/*==== Our Blog Post ====*/}
            <section className={`container ${ styles.eightSection }`}>
                <h1>Our Blog Post</h1>
                <div className={ styles.blogItemsWrapper }>
                    { state.blogs.map((eachBlog) => (
                        <div key={ eachBlog.id } className={ styles.blogItem }>
                            <img src={ eachBlog.image } alt='' />
                            <div className={ styles.titleAndSubTitleWrapper }>
                                <strong>{ eachBlog.title }</strong>
                                <p>{ eachBlog.subTitle }</p>
                            </div>

                            <Link to={`/blog/${eachBlog.id}`} state= {{ blog: eachBlog }}>
                                <button className={ styles.readMoreButton }>READ MORE</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>


            <Footer />
        </div>
    )
}

export default Landing
