import React from 'react';
import Header from '../../components/Header/Header';
import Destinations from '../../containers/Destinations/Destinations';
import ContactUsForm from '../../containers/ContactUsForm/ContactUsForm';
import HomeBanner from '../../containers/HomeBanner/HomeBanner';


function Home() {
    return (
       <div>
            <Header />
            <HomeBanner />
            <Destinations />
            <ContactUsForm />
       </div>
    );
}

export default Home;