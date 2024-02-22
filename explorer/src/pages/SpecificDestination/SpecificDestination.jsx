import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import ContactUsForm from "../../containers/ContactUsForm/ContactUsForm";
import DestinationBanner from "../../containers/DestinationBanner/DestinationBanner";
import DestinationDescription from "../../containers/DestinationDescription/DestinationDescription";
import SimilarDestinations from "../../containers/SimilarDestinations/SimilarDestinations";
import { useEffect, useState } from "react";
import { getSpecificDestinationData } from "../../services/DestinationsData";
import { AppConstants } from "../../constants/app-constants";

function SpecificDestination() {
    const { destination } = useParams();
    const [destinationDetails, setDestinationDetails] = useState({});
    const [imgUrl, setImgUrl] = useState('');
    const placesArray = AppConstants.PLACES_IMG;

    useEffect(() => {
        getSpecificDestinationData(destination).then((data) => {
            setDestinationDetails(data);
            for (const key in placesArray) {
                if (key === destination) {
                  setImgUrl(placesArray[key]);
                  break; 
                }
              }
        });

    }, [destination, placesArray, destinationDetails]);

    return (
       <>
            <Header />
            <DestinationBanner placeData={destinationDetails} imgUrl={imgUrl}/>
            <DestinationDescription description={ destinationDetails.fullDescription }/>
            <SimilarDestinations selectedDestination={destination} relatedPlaces={destinationDetails}/>
            <ContactUsForm />
       </>
    );
}

export default SpecificDestination;