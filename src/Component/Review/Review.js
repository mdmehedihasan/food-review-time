import React from 'react';

const Review = (props) => {
    const { name, rating, picture, description, designation } = props.review;
    return (
        <div className='flex flex-col items-center bg-orange-400'>
            <img className='h-26 w-1/5 rounded-full ' src={picture} alt="" />
            <h4>{description}</h4>
            <p>Rating:{rating}</p>
            <h3>{name}</h3>
            <small>{designation}</small>
        </div>
    );
};

export default Review;