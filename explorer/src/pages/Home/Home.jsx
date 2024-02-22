import React from 'react';
import Header from '../../components/Header/Header';
import Destinations from '../../containers/Destinations/Destinations';
import ContactUsForm from '../../containers/ContactUsForm/ContactUsForm';
import HomeBanner from '../../containers/HomeBanner/HomeBanner';
import { useState, useEffect } from 'react';
import  { getDestinationData } from '../../services/DestinationsData';

function Home() {
    const [placesData, setPlacesData] = useState([]);

    useEffect(() => {
        getDestinationData().then((data) => {
            setPlacesData(data);
        });
    }, []);

    return (
       <div>
            <Header />
            <HomeBanner />
            <Destinations placesData={placesData} />
            <ContactUsForm />
       </div>
    );
}

export default Home;