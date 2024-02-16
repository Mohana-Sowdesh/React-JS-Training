import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/HomeBanner/HomeBanner';
import Destinations from '../../containers/Destinations/Destinations';


function Home() {
    return (
       <div>
            <Header />
            <Banner />
            <Destinations />
       </div>
    );
}

export default Home;