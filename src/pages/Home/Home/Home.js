import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import ExtraSection from '../ExtraSection/ExtraSection';
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <ExtraSection></ExtraSection>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;