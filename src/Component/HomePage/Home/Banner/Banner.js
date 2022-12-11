import React from 'react';
import MajImg from '../../../../Image/my.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col  lg:flex-row-reverse md:flex-row-reverse">
                <img src={MajImg} className=" rounded-lg w-1/2 shadow-2xl" />
                <div className='w-1/2'>
                    <h1 className=" text-3xl font-bold">Hi<br /> I'm <span className='text-6xl italic text-amber-500 tracking-wide'>Majharul Islam</span>.</h1>
                    <p className='text-5xl font-bold my-3'> I'm junior web Developer..</p>
                    <a href="https://drive.google.com/file/d/1WwxmfgUqAdqUgxQfFxeqi8xv1cRWwXvJ/view?usp=sharing" className='btn btn-primary my-3'>resume</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;