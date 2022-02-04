import React from 'react';

import styles from '../styles/Landing.module.scss';

//  Impor Assets.
import Star from '../assets/star.png';

const Remark = ({name, starCount, content}) => {
    return (
        <>
            <h3>{name}</h3>
            <div>
                {
                    Array.from({ length: starCount }, (_, index) => (
                        <img src={ Star } key={ index } alt='Star_Rating' /> 
                    ))
                    // OR
                    // [...Array(starCount)].map((_, index) => (
                    //     <img src={ Star } key={ index } alt='Star_Rating' />
                    // ))
                }              
            </div>
            <p>{content}</p>
        </>
    )
}

export default Remark
