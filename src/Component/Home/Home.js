import React from 'react';

const Home = () => {
    return (
        <div className='flex py-3 bg-cyan-50'>
            <div className='p-3 w-1/2'>
                <h1 className='text-3xl font-bold'>
                    Can't You Bet Eatless <br></br>
                    New Taste, New Flever!!
                </h1>
                <p className='my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos alias accusamus non animi enim quaerat voluptatibus assumenda possimus labore ipsam autem doloremque, perferendis, sed facere excepturi quia reiciendis necessitatibus nisi!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos alias accusamus non animi enim quaerat voluptatibus assumenda possimus labore ipsam autem doloremque, perferendis, sed facere excepturi quia reiciendis necessitatibus nisi!</p>
                <button className='border-2 p-2 rounded-lg text-white font-bold my-5 bg-amber-600'>Visit Restaurent</button>
            </div>
            <div className='w-1/2 flex justify-center '>
                <img width="500px" height="600px" src="images/Burger.jpg" alt="burger" />
            </div>
        </div>
    );
};

export default Home;