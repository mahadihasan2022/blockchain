import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import './Review.css';

const Review = () => {
    return (
        <div className='m-2 rounded-sm pb-32'>
            <div className='container'>
                <h1 className='text-5xl text-center font-bold italic pb-8 pt-24'>Website Reviews</h1>
                <div className='grid grid-cols-3 gap-8 pt-12 pb-20'>
                    <div className='text-center'>
                        <h1 className='text-6xl font-bold italic pt-12 '>367k+</h1>
                        <h2 className='text-4xl font-bold italic '>Subscribes</h2>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-6xl font-bold italic pt-12 '>763M+</h1>
                        <p>  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-red-600 w-32 h-20 text-center "
                  /></p>

                    </div>
                    <div className='text-center'>
                        <h1 className='text-6xl font-bold italic pt-12 '>176M+</h1>
                        <h2 className='text-4xl font-bold italic'>Followers</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;