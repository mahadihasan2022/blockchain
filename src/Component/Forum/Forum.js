import React from 'react';
import Prestigious from '../Prestigious/Prestigious';
import './Forum.css';

const Forum = () => {
    return (
        <div className='m-2'>
            <div className='pt-16 pb-12 bg-cyan-500'>
                <h1 className='text-4xl text-center text-white font-bold italic pt-8 pb-12'>Forum Box</h1>
                <form className='text-center forum-border pb-16 pt-8'>
                    <div className='pt-8'>
                    <input type="text" className='w-96 h-10 forum-border pl-2' placeholder='Company name' required/>
                    </div>
                    <div className='pt-8'>
                        <input type="email" name=""  className='w-96 h-10 forum-border pl-2' id=""placeholder='Business email'required />
                    </div>
                    <div className='pt-8'>
                    <input type="email" name=""  className='w-96 h-10 forum-border pl-2' id=""placeholder='Comment'required />
                    </div>
                    <div className='pt-8'>
                    <input type="submit" className='w-96 h-10 forum-border font-bold italic bg-rose-600' value="submit" />
                    </div>
                </form>
            </div>
            <div>
                <Prestigious></Prestigious>
            </div>
            
        </div>
    );
};

export default Forum;