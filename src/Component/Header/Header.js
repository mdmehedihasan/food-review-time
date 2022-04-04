import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-amber-600  font-bold text-white py-5'>
            <div className='mb-5'>
                <h2 className='text-3xl'>Food Review Time</h2>
            </div>
            <div>
                <Link className='mr-5 px-2 border-2 rounded-lg' to="/home">HOME</Link>
                <Link className='mr-5 px-2 border-2 rounded-lg ' to="/reviews">REVIEWS</Link>
                <Link className='mr-5 px-2 border-2 rounded-lg' to="/dashboard">DASHBOARD</Link>
                <Link className='mr-5 px-2 border-2 rounded-lg' to="/blogs">BLOGS</Link>
                <Link className='mr-5 px-2 border-2 rounded-lg' to="/about">ABOUT</Link>
            </div>
        </nav>
    );
};

export default Header;