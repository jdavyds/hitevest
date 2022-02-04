import React from 'react'
import { Navigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import style from '../styles/Blogs.module.scss';

// Import Assets
import EL1 from '../assets/EL1.png';
import BlogImage from '../assets/blog_image.png';
import Shadow from '../assets/shadow.png';
import SingleBlogImage from '../assets/single_blog_image.png';
import TwitterIcon from '../assets/twitter_icon.png';
import PinterestIcon from '../assets/pinterest_icon.png';
import LinkedInIcon from '../assets/linkedIn_icon.png';
import FacebookIcon from '../assets/facebook_icon.png';
import Dots from '../assets/dots.png';


const BlogDetail = () => {
    const user = useSelector(state => state.user.userDetails);
    const location = useLocation();
    const { blog } = location.state;

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
            
            {/* ==== Blogs Section ==== */}
            <section className={ style.blogsSection }>
                <img src={Shadow} alt="" className={ style.shadowImage } />
                <div className={ style.blogsWrapper }>
                    <h1 className={ style.blogText }>BLOG</h1>
                    <div className={ style.imageWrapper }>
                        <img src={EL1} alt="" />
                        <img src={BlogImage} alt="" />
                    </div>
                </div>
            </section>
            
            {/* ==== Blog Detail Section ==== */}
            <section className={ style.blogDetailSection }>
                <div className={ style.leftAsideWrapper }>
                    <strong>{ blog.title }</strong>
                    {/* <img src={ blog.image } alt="" /> */}
                    {/* <p>{ blog.subTitle }</p> */}
                    <img src={ SingleBlogImage } alt="" />
                    <p>
                        Several major websites briefly went down Thursday in a widespread outage 
                        linked to content distribution network Akamai. By about 12:50 p.m. ET, 
                        Akamai said it fixed the issue and the service seemed to be back to normal. 
                        The company later said on Twitter that the issue was caused by a software 
                        update that triggered a bug. It confirmed the incident was not a result of 
                        a cyber attack on its platform. Akamai said the disruption lasted for “up 
                        to an hour” and apologized for the inconvenience.Akamai, whose operation 
                        helps data move around the internet, said on its website earlier Thursday 
                        that it was investigating “an emerging issue with the Edge DNS service.”Oracle 
                        had also pointed to Akamai as the source of the issue, which impacted some 
                        Oracle cloud properties, but it said resources within its own cloud service 
                        were not affected.The Domain Name System is like a phone book for websites. 
                        The technology figures out the right IP addresses to use when people try to 
                        go to individual websites. The Edge DNS service from Akamai takes care of 
                        this work for apps and websites and protects against distributed denial-of 
                        service, or DDoS, attacks.Delta Air Lines, British Airways, Capital One, 
                        Go Daddy, Vanguard, UPS, LastPass, AT&amp;T and Costco were among the 
                        websites loading slowly or showing “DNS failure” Thursday afternoon.The 
                        outage caused some real-world disruptions. For example, Delta customers 
                        could not use the airline’s website or app to check into flights until 
                        Akamai fixed the problem. 
                    </p>

                    <div className={ style.sharePostWrapper }>
                        <p>share post</p>
                        <div className={ style.iconsWrapper }>
                            <img src={ TwitterIcon } alt="" />
                            <img src={ PinterestIcon } alt="" />
                            <img src={ LinkedInIcon } alt="" />
                            <img src={ FacebookIcon } alt="" />
                        </div>
                    </div>
                </div>

                <div className={ style.rightAsideWrapper }>
                    <strong>Latest Posts</strong>
                    <div className={ style.latestPostList }>
                        <p>
                            American Airlines cancels flight attendants’ voluntary leaves, 
                            plans to hire 800 to meet travel demand.
                        </p>
                        <p>
                            It’s been 12 years since the last federal minimum wage increase. 
                            Where efforts to raise the pay rate stand.
                        </p>
                        <p>
                            Another 2.2 million stimulus checks have gone out. Here’s who received the payments.
                        </p>
                        <p>
                        PERSONAL FINANCE States cutting unemployment benefits didn’t get people back to work, study finds.
                        </p>
                    </div>
                </div>

                <img src={ Dots } className={ style.dots } alt='' />
            </section>

            <Footer />
            
        </div>
    )
}

export default BlogDetail
