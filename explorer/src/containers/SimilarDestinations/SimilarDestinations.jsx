import TouristCard from '../../components/TouristCard/TouristCard';
import styles from '../SimilarDestinations/SimilarDestinations.module.scss';
import { AppConstants } from '../../constants/app-constants';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getSpecificDestinationData } from '../../services/DestinationsData';

function SimilarDestinations({ selectedDestination, relatedPlaces }) {
    const [relatedPlacesData, setRelatedPlaceData] = useState([{ imgUrl: '', data: {}}]);
    const placesArray = AppConstants.PLACES_IMG;
    console.log("relatedPlaces", relatedPlaces);

   useEffect(() => {
        let relatedPlacesDetails = [];
        // console.log("relatedPlaces", relatedPlaces);

        relatedPlacesDetails = relatedPlaces.map((place) => {
            let imgUrl, relatedPlaceData;
            for (const key in placesArray) {
                if (key === place) {
                  imgUrl = placesArray[key];
                  break; 
                }
            }

            getSpecificDestinationData(place).then((data) => {
                console.log("relaredplacedata", data);
                relatedPlaceData = data;
            });

            const placeDetail = {"imgUrl": imgUrl, "data": relatedPlaceData }
            relatedPlacesDetails.push(placeDetail);
            return relatedPlacesDetails;
        })
        setRelatedPlaceData(relatedPlacesDetails);
    }, [placesArray, relatedPlaces]); 
  
    const similarPlaces = relatedPlacesData.map((place) => <TouristCard imageUrl={place.imgUrl} placeData={place.data} /> )
    return (
        <div className={styles['similar-destinations-container']}>
            <div className={styles['heading']}>{ AppConstants.SIMILAR_DESTINATIONS.SIMILAR_DESTINATIONS_TXT }</div>
            <div className={styles['heading-desc']}>{ AppConstants.SIMILAR_DESTINATIONS.SIMILAR_DESTINATIONS_DESC } <span> { selectedDestination } </span></div>
            <div className={styles['cards-container']}>
               { similarPlaces }
            </div>
        </div>
    );
}

SimilarDestinations.propTypes = {
    selectedDestination: PropTypes.string.isRequired,
    relatedPlaces: PropTypes.array.isRequired
}

export default SimilarDestinations;