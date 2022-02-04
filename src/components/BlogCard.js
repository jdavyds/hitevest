import React from 'react'

const BlogCard = ({img, heading, content}) => {
    return (
        <div>
            <img src={img} alt='' />
            <h3>{heading}</h3>
            <p>{content}</p>
            <button>Read more</button>
        </div>
    )
}

export default BlogCard
