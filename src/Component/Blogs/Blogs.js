import React from 'react';

const Blogs = () => {
    return (
        <div className='flex px-16'>
            <div className='flex-1'>
                <h1 className='text-xl font-bold my-6 bg-orange-500 text-white mx-3 py-3'>
                    What is the purpose of Context Api?
                </h1>
                <p className='text-left mx-3'>
                    <li className='bg-slate-200 p-2'>The React Context Api is a way for effectively produce global variables that can be passed around</li>
                    <li className='bg-slate-200 p-2'>This is alternative to "props drilling" or moving props from grandparent to child to parent</li>
                    <li className='bg-slate-200 p-2'>
                        Context is also touted as an easier, lighter approach to state management using Redux
                    </li>
                </p>
            </div>
            <div className='flex-1'>
                <h1 className='text-xl font-bold my-6 bg-orange-500 text-white mx-3 py-3 '>
                    What is the purpose of Context Api?
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam est rerum, et obcaecati impedit at! Voluptatibus nulla blanditiis eligendi eveniet voluptate, repudiandae fugit praesentium unde et sit iusto magni velit ut totam quo! Ab accusantium ea expedita, distinctio rerum quidem?</p>
            </div>

        </div>
    );
};

export default Blogs;