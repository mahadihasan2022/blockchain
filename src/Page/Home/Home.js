import React from 'react';
import Banner from '../../Share/Banner/Banner';
import Features from '../../Share/Features/Features';
import NeedHelp from '../../Share/NeedHelp/NeedHelp';
import Review from '../../Share/Review/Review';
import AboutUs from '../AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <AboutUs></AboutUs>
            <NeedHelp></NeedHelp>
            <Review></Review>
        </div>
    );
};

export default Home;