/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import ContactUsForm from "../../containers/ContactUsForm/ContactUsForm";
import DestinationBanner from "../../containers/DestinationBanner/DestinationBanner";
import DestinationDescription from "../../containers/DestinationDescription/DestinationDescription";
import SimilarDestinations from "../../containers/SimilarDestinations/SimilarDestinations";
import { useEffect, useState } from "react";
import { getSpecificDestinationData, getDestinationData, getWeatherApiData } from "../../services/DestinationsData";
import { AppConstants } from "../../constants/app-constants";

/**
 * @description Reusable component for any specific destination
 * @returns 
 */
function SpecificDestination() {
    const { destination } = useParams();
    const [destinationDetails, setDestinationDetails] = useState({});
    const [imgUrl, setImgUrl] = useState('');
    const placesArray = AppConstants.PLACES_IMG;
    const [allPlacesData, setAllPlacesData] = useState([]);
    const [relatedPlacesData, setRelatedPlaceData] = useState([]);
    const [temperature, setTemp] = useState(0);
    const relatedPlaces = destinationDetails.relatedPlaces;
    
    useEffect(() => {
        window.scrollTo(0, 0);
        getSpecificDestinationData(destination).then((data) => {
            setDestinationDetails(data);

            for (const key in placesArray) {
                if (key === destination) {
                  setImgUrl(placesArray[key]);
                  break; 
                }
              }
        });

        getDestinationData().then((data) => {
          setAllPlacesData(data);
        });

        getWeatherApiData(destination).then((data) => {
          setTemp(data?.data?.main?.temp);
        });
    }, [destination]);

    useEffect(() => {
      let relatedPlacesDetails = [];
      const placesArray = AppConstants.PLACES_IMG;

    if(relatedPlaces && allPlacesData) {
        for(const place of relatedPlaces) {
            let imgUrl, relatedPlaceData;

            for (const key in placesArray) {
                if (key === place.toLowerCase()) {
                    imgUrl = placesArray[key];
                    break; 
                }
            }

            for (const singlePlace of allPlacesData) {
                if (singlePlace.city === place) {
                    relatedPlaceData = singlePlace;
                    break; 
                }
            }

            const placeDetail = {"imgUrl": imgUrl, "data": relatedPlaceData }
            relatedPlacesDetails.push(placeDetail);
            setRelatedPlaceData(relatedPlacesDetails);
          }
    }
    }, [allPlacesData]);

    return (
       <>
            <Header />
            <DestinationBanner placeData={destinationDetails} imgUrl={imgUrl} temperature={ temperature }/>
            <DestinationDescription description={ destinationDetails?.fullDescription }/>
            <SimilarDestinations selectedDestination={destination} relatedPlacesData={relatedPlacesData} />
            <ContactUsForm />
       </>
    );
}

export default SpecificDestination;