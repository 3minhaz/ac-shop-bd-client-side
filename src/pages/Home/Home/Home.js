import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Products></Products>
            <Review></Review>

        </div>
    );
};

export default Home;