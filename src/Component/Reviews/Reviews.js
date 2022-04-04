import React from 'react';
import useReviewes from '../../Hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviewes();
    return (
        <div>
            <h1 className='text-3xl font-bold my-6'>
                Client,s Review
            </h1>
            <div className='grid grid-cols-3 grid-rows-2 gap-5 px-5'>

                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;