import React from 'react';
import { Link } from 'react-router-dom';
import MajImg from '../../../../Image/my.png'

const Banner = () => {
    return (
        <div className="hero  bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse md:flex-row-reverse">
                <img src={MajImg} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='w-1/2 text-center'>
                    <h1 className="lg:text-5xl md:text-3xl font-bold ">Hi, I'm Majharul Islam a junior web Developer.</h1>
                    <p className="py-6">I have finished my web development course in programming. I have designed, developed,
                        and launched customized, highly responsive websites and e-commerce solutions using
                        advanced technologies HTML, CSS, bootstrap, tailwinds CSS, daisyUI, firebase, JWT, and
                        MongoDB database. To obtain a position with the opportunity to utilize my skill, talent,
                        creativity, and sincerity for the better Achievement of the organization. I consider myself a
                        quick learner, and a self-motivated, disciplined person..</p>
                    <a href="https://drive.google.com/file/d/1WwxmfgUqAdqUgxQfFxeqi8xv1cRWwXvJ/view?usp=sharing" className='btn btn-primary'> resume</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;