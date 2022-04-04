import React from 'react';

const Notfound = () => {
    return (
        <div className='flex'>
            <div className=' flex flex-1 flex-col justify-center items-center p-6'>
                <h2 className='text-3xl font-bold all uppercase p-6'>The page you search is not found. Please check the url and try again.</h2>
                <h3 className='text-xl font-bold'>What You Do Now?</h3>
                <div className='mt-5'>
                    <button className='border-2 mr-3 px-3 py-1 bg-orange-400 rounded-lg text-white'><a href="/home">Go Home</a></button>

                    <button className='border-2  px-3 py-1 bg-orange-400 rounded-lg text-white'><a href="/about">Contact Us</a></button>


                </div>
            </div>
            <div className='flex-1'>
                <img src="images/404page.jpg" alt="" />
            </div>

        </div>
    );
};

export default Notfound;