import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import style from '../styles/Blogs.module.scss';

// Import Assets
import EL1 from '../assets/EL1.png';
import BlogImage from '../assets/blog_image.png';
import Shadow from '../assets/shadow.png';
import Blog1 from '../assets/blog1_image.png';
import Blog2 from '../assets/blog2_image.png';
import Blog3 from '../assets/blog3_image.png';
import Blog4 from '../assets/blog4_image.png';
import Blog5 from '../assets/blog5_image.png';
import Blog6 from '../assets/blog6_image.png';
import Blog7 from '../assets/blog7_image.png';

const Blogs = () => {
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
            {
                id: 4,
                image: Blog4,
                title: "Another 2.2 million stimulus checks have gone out. Here’s who received the payments",
                subTitle: "About 2.2 million more stimulus checks have gone out over the last six weeks, the government said Wednesday.The latest batch brings the total number of payments disbursed to more t...",
            },
            {
                id: 5,
                image: Blog5,
                title: "PERSONAL FINANCE States cutting unemployment benefits didn’t get people back to work, study finds",
                subTitle: "About 2.2 million more stimulus checks have gone out over the last six weeks, the government said Wednesday.The latest batch brings the total number of payments disbursed to more t...",
            },
            {
                id: 6,
                image: Blog6,
                title: "Why tether, the world’s third-biggest cryptocurrency, has got economists worried",
                subTitle: "About 2.2 million more stimulus checks have gone out over the last six weeks, the government said Wednesday.The latest batch brings the total number of payments disbursed to more t...",
            },
            {
                id: 7,
                image: Blog7,
                title: "Binance CEO says ‘compliance is a journey’ as world’s largest crypto exchange faces growing crackdown",
                subTitle: "About 2.2 million more stimulus checks have gone out over the last six weeks, the government said Wednesday.The latest batch brings the total number of payments disbursed to more t...",
            },
        ],
    });

    if (user) {
        return <Navigate to='/dashboard'/>;
    }

    return (
        <div>
            <Helmet>
                <meta charSet='utf-8' />
                <meta name='description' content='Elite Wealth Management With hitevest finance.' />
                <title>Hitevest Finance | Blogs</title>
                <link rel="canonical" href="https://www.hitevest.com/blogs" />
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
            
            {/* ==== Blog List Section ==== */}
            <section className={ style.blogListSection }>
                <h1>Our Blog Post</h1>
                <div className={ style.blogItemsWrapper }>
                    { state.blogs.map((eachBlog) => (
                        <div key={ eachBlog.id } className={ style.blogItem }>
                            <img src={ eachBlog.image } alt='' />
                            <div className={ style.titleAndSubTitleWrapper }>
                                <strong>{ eachBlog.title }</strong>
                                <p>{ eachBlog.subTitle }</p>
                            </div>

                            <Link to={`/blog/${eachBlog.id}`} state= {{ blog: eachBlog }}>
                                <button className={ style.readMoreButton }>READ MORE</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
            
        </div>
    )
}

export default Blogs;
