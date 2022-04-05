import React from 'react';
import useReviewes from '../../Hooks/useReviews';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviewes();
    return (
        <div>

            <div>
                <div className='flex py-3 bg-cyan-50'>
                    <div className='p-3 w-1/2'>
                        <h1 className='text-3xl font-bold'>
                            Can't You Bet Eatless <br></br>
                            New Taste, New Flever!!
                        </h1>
                        <p className='my-5 py-4'>Khanna,s is a renowned restaurent. Here all the items are very delicious and so much tasty. I love the food so much. Basically Burger of this restaurant is so much  famous. I go weekly and take the taste of the burger. Along with my friends several time I passed my time here with the burger. No body dislike the food. Because the food quality and the servicing system is so good.Along with my friends several time I passed my time here with the burger. No body dislike the food. Because the food quality and the servicing system is so good.</p>
                        <button className='border-2 p-2 rounded-lg text-white font-bold my-5 bg-amber-600'><a href="https://kfcbd.com/" target="_blank" >Visit Restaurent</a></button>
                    </div>
                    <div className='w-1/2 flex justify-center '>
                        <img width="500px" height="600px" src="images/Burger.jpg" alt="burger" />
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl font-bold my-6'>
                        Client,s Review
                    </h1>
                    <div className='grid grid-cols-3 grid-rows-2 gap-5 px-5'>

                        {
                            reviews.slice(0, 3).map(review => <Review
                                key={review._id}
                                review={review}
                            ></Review>)
                        }
                    </div>
                    <div className='rubel'>
                        <button className='border-2 p-2 rounded-lg text-white font-bold my-5 bg-amber-600'><a href="/reviews">See All Reviews</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;